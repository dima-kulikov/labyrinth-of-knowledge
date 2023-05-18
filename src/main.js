import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from "./MyComponent"
import store from "./store";

const app = createApp(App);
app.use(store)
app.component("my-component", MyComponent)
app.mount('#app');
