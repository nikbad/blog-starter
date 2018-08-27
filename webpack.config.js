const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')
const VueLoader = require('vue-loader')
const webpack = require('webpack')

module.exports = {
    mode: 'development',

    devtool: '#eval-source-map',

    entry: './src/index.ts',

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ],
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, {
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    }, {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: [".ts", ".js", ".json", ".css", ".scss", ".vue"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `./[name].css`,
        }),

        new VueLoader.VueLoaderPlugin(),
    ],
}
