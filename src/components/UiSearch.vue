<style lang="scss" scoped>
    @import "styles/UiSearch";
</style>
<style lang="scss">
</style>
<template>
    <div class="search">
        <div class="search-field">
            <input type="text" placeholder="Suche" v-model="searchInput"/>
            <i class="fas fa-search"></i>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";
    import {EventBus} from "../event-bus";

    @Component({})
    export default class UiSearch extends Vue {
        searchInput: string = '';

        @Watch('searchInput')
        onPropertyChanged() {
            EventBus.$emit('uiSearch_searchInput', this.searchInput);
        }

    }
</script>