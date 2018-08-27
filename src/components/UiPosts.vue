<template>
    <div class="groups">
        <div class="single-posts" v-for="post in filterPosts()">
            <ui-single-post :post="post" :searchInput="searchInput"></ui-single-post>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";
    import {Post} from "../types";
    import UiSinglePost from "./UiSinglePost";

    @Component({components: {UiSinglePost}})
    export default class UiPosts extends Vue {
        @Prop() posts!: Post[];
        @Prop() searchInput!: string;

        filterPosts(): Post[] {
            return this.posts.filter(
                post =>
                    this.searchInput === ''
                    || post.title.toLowerCase().indexOf(this.searchInput.toLocaleLowerCase()) >= 0
                    || post.body.toLowerCase().indexOf(this.searchInput.toLocaleLowerCase()) >= 0
            );
        }

    }
</script>