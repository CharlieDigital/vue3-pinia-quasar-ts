<script setup lang="ts">
import { useAppState } from '../stores/appState'

defineProps<{ msg: string }>()

const appState = useAppState();
</script>

<template>
    <h1>{{ msg }}</h1>

    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
        See
        <code>README.md</code> for more information.
    </p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="appState.counter++">count is: {{ appState.counter }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
