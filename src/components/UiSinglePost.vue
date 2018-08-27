<style lang="scss" scoped>
    @import "styles/UiSinglePost";
</style>
<style lang="scss">
    mark {
        background-color: rgba(255, 255, 0, 1);
        color: #253648;
        padding-left: 0;
        padding-right: 0;
    }
</style>
<template>
    <div class="grid-container">
        <div class="single-post grid-item">
            <div class="single-post--title">
                <h2 v-html="markSearch(post.title)"></h2>
            </div>
            <div class="single-post--body" v-html="markSearch(post.body)"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    // TYPES
    import {Post} from "../types";

    @Component({})
    export default class UiSinglePost extends Vue {
        @Prop() post!: Post;
        @Prop() searchInput!: string;

        markSearch(value: string): string {
            if (this.searchInput.length === 0) {
                return value;
            }
            return value.replace(new RegExp('(' + this.searchInput + ')', 'i'), '<mark>$1</mark>');
        };
    }

</script>