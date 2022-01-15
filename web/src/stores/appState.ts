import { defineStore } from 'pinia';

export const useAppState = defineStore('appState', {
    state: () => {
        return {
            counter: 0
        }
    }
});