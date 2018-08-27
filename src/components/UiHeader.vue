<template>
    <div>
        <ui-logo></ui-logo>
        <ui-search></ui-search>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import UiLogo from "./UiLogo";
    import UiSearch from "./UiSearch";

    @Component({components: {UiLogo, UiSearch}})
    export default class UiHeader extends Vue {}
</script>