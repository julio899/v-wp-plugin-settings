import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false;
/* eslint-disable */
new Vue({
    render: h => h(App),
    created: () => {
        /* eslint-disable */
        console.log('created');
    }
}).$mount('#appVue')