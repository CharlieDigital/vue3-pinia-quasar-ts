# Vue3, Vite, Pinia (Vuex 5), Vue Router 4, Quasar, TypeScript Starter Template

This repo contains a starter template that connects the following pieces:

- [Vue3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://next.router.vuejs.org/guide/)
- [Quasar](https://quasar.dev/)

 Quasar is a powerful set of components which uses the Material UI design system.  While the styles are quite plain on their own (and perhaps even off-putting), it is easy to customize it.  I have used it extensively for my own projects like [Turas.app](https://turas.app), [Turas.app Chrome Extension](https://chromewebstore.google.com/detail/turasapp/lpfijfdbgohlblnadiokliolkkeeblpo), [Zeeq.ai](https://zeeq.ai), and [CodeRev.app](https://coderev.app).  It is easy and fast; great for internal tooling and more than usable for public facing apps.

This project has been configured with Material Design Icons for Quasar.  If you'd like to use a different configuration, [see the Quasar docs](https://quasar.dev/start/vite-plugin#using-quasar).

## Rationale

This is inspired by [Evan You's presentation at VueConf Toronto](https://www.youtube.com/watch?v=2KBHvaAWJOA) on the future state of Vue development.

Having worked in Vue and React, one thing that is clear is that the Vue community reflects the fact there is a bit more of what Fred Brookes terms *"conceptual integrity"* because of the nature of how the ecosystem is being designed and architected as a community with a clear direction and leadership.

In the Vue ecosystem, there are a clear set of "best practices" which are coalescing around key building blocks which simplifies the overall architecture and, in my opinion, enhances productivity.

Whereas in the React world, one might have to choose between Redux or Mobx (or Jotai or Zustand or [Valtio](https://betterprogramming.pub/magical-experiments-in-react-state-with-valtio-2b40cf159120)) and live with the compromises of one or the other, I kind of appreciate the fact that Pinia simply got lifted up to Vuex 5 instead of forking and creating two different, fragmented practices for state management.  These core functions of building front-end applications should "just work".

Many of the improvements in Evan's talk have made working with Vue much, *much* more streamlined in my opinion and this starter template pulls them all together!

## Usage

```
cd web
yarn
yarn run dev
```

See the [Vite template README](web/README.md) for more details and notes.

## Organization

The code has been organized under the `/web` directory (planning on adding example backends).

Highlights are below:

```
/src/App.vue                        # Entry point
/src/layouts/MainLayout.vue         # The outer chrome (left nav, top bar)
/src/views/SampleView.vue           # Example of a view or page displayed in the layout
/src/components/HelloWorld.vue      # Default component example with the Vite template
/src/router/routes.ts               # Defines the routes
/src/stores/appState.ts             # Sample application state store
```

The `HelloWorld.vue` shows an example of how to use the global application state store provided by Pinia.

Of note with Pinia is that we get full intellisense 🎉 compared to Vuex.  If you need to, you can create multiple stores (see the Pinia docs for examples).

Additionally, with [Vue Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) instead of Volar and Veture, we finally get full intellisense in the templates as well!

## Notes:

If you're not familiar with Quasar, it is one of ***the best*** and most complete front-end *frameworks* out there.  Compared to the more popular Vuetify, it is:

- more "complete"
- has better controls
- has fantastic, rich documentation and code examples
- comes with pretty much everything one needs; I've rarely found myself having to pull in additional libraries when working with Quasar

All of this means that you can build apps faster and with less friction.

## More Reading

If you are just getting started with Vue, then check out:

- [A Conceptual Model of State in Vue 3.4](https://chrlschn.dev/blog/2024/01/a-conceptual-model-of-state-in-vue-34-using-definemodel/).  A discussion on how Vue 3.4's release of `defineModel` changes the game for state management.
- [Vue 3x3 - A Mental Model for Building Fast](https://chrlschn.dev/blog/2023/01/vue-3x3/). How to simplify your understanding of Vue to 9 core concepts.
