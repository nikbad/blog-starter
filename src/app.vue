<style lang="scss">
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        font-family: 'Titillium Web', sans-serif;
    }
</style>

<template>
    <div>
        <ui-header></ui-header>
        <ui-posts :posts="posts" :searchInput="searchInput"></ui-posts>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {EventBus} from "./event-bus";
    import {Post} from "./types";
    import UiPosts from "./components/UiPosts";
    import UiHeader from "./components/UiHeader";


    @Component({components: {UiPosts, UiHeader}})
    export default class App extends Vue {
        posts: Post[] = [];
        searchInput: string = '';

        fetchPosts(): void {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    if (!response.ok) {
                        throw Error(response.status.toString());
                    }

                    return response.json();
                }).then((posts: any) => {
                    this.posts = posts;
                }).catch(error => {
                    console.log(error);
                });
        }

        created(): void {
            this.fetchPosts();
        }

        mounted(): void {
            EventBus.$on(
                'uiSearch_searchInput',
                (searchInput: string) => this.searchInput = searchInput
            );
        }
    }
</script>
