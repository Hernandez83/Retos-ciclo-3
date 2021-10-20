import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

createApp(App).use(router).use(store).mount('#app')

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});