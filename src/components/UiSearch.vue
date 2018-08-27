<style lang="scss" scoped>
    .search {
        padding: 2rem;
    }

    .search-field {
        position: relative;
        font-size: 3rem;
        border: 1px solid black;
        color: rgba(0, 0, 0, .5);
        border-radius: .5rem;
        background-color: white;
    }

    input {
        border: none;
        border-radius: .5rem;
        padding: 1rem 1.5em;
        font-size: 3rem;

        &:focus {
            outline: none;
        }
    }

    .fa-search {
        position: absolute;
        right: 1rem;
        top: 1.2rem;
    }
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