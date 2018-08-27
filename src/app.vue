<style lang="scss">
    @import "components/styles/Global";
</style>
<template>
    <div>
        <ui-header></ui-header>
        <ui-posts :posts="posts" :searchInput="searchInput"></ui-posts>
    </div>
</template>
<script lang="ts">

    // DEPS
    import {Vue, Component} from "vue-property-decorator";
    import {EventBus} from "./event-bus";

    // // TYPES
    import {Post} from "./types";

    // COMPONENTS
    import UiPosts from "./components/UiPosts";
    import UiHeader from "./components/UiHeader";


    @Component({
        components: {UiPosts, UiHeader}
    })
    export default class App extends Vue {

        posts: Post[] = [];
        searchInput: string = '';

        fetchPosts(): void {
            let url: string = 'https://jsonplaceholder.typicode.com/posts';
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw Error(response.status.toString());
                    }
                    return response.json();
                })
                .then((posts: any) => {
                    this.posts = posts;
                })
                .catch(error => {
                    console.log(error);
                });
        }

        created() {
            this.fetchPosts();
        }

        mounted() {
            EventBus.$on('uiSearch_searchInput', (searchInput: string) => this.searchInput = searchInput);
        }
    }
</script>
