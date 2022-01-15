<template>
    <div class="constrained bg-grey-2">
        <QLayout view="hHR lpr lfr">
            <!--// Header //-->
            <QHeader bordered class="bg-white text-primary">
                <QToolbar>
                    <QBtn
                        flat
                        round
                        dense
                        icon="mdi-menu"
                        class="q-mr-sm"
                        @click="leftDrawerOpen = !leftDrawerOpen"
                    />
                    <QToolbarTitle>Vue3 + Vite + Quasar</QToolbarTitle>
                </QToolbar>
            </QHeader>

            <!--// Left drawer //-->
            <QDrawer
                show-if-above
                v-model="leftDrawerOpen"
                @before-hide="leftDrawerOpen = false"
                content-class="bg-white"
                :width="320"
            >
                Left Menu
            </QDrawer>

            <!--// Main content //-->
            <QPageContainer class="bg-grey-2">
                <router-view />
            </QPageContainer>
        </QLayout>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(true);
</script>

<style type="text/css">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");

.constrained {
    width: 100%;
    height: 100%;
}

.constrained .q-layout,
.constrained .q-header,
.constrained .q-footer {
    margin: 0 auto;
    /* max-width: 1245px !important; */
}

.nav-btn {
    min-width: 90px;
}
</style>
