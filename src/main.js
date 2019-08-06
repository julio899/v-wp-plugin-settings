import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false;
/* eslint-disable */
new Vue({
    render: h => h(App),
	props: {
	  code: j899__lic_code
	},
    created: () => {
        /* eslint-disable */
        // console.log('created');
    }
}).$mount('#appVue')