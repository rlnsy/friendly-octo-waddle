import Vue from 'vue';
import AsyncComputed from 'vue-async-computed'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import './styles/main.css'
import App from "./components/App.vue"

Vue.use(BootstrapVue)
Vue.use(AsyncComputed)

const app = new Vue({
    el: "#app",
    render: h => h(App),
})

