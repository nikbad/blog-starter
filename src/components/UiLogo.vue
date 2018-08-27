<style lang="scss">
    .logo {
        padding: 2rem;

        .logo--text {
            text-align: center;
            padding: 2rem;
            font-size: 3rem;
            border: 1px solid black;
            border-radius: .5rem;
        }
    }
</style>

<template>
    <div>
        <div class="logo">
            <div class="logo--text">LOGO</div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class UiLogo extends Vue {}
</script>