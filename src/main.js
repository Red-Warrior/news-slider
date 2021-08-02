import Vue from "vue";
import App from "./App.vue";
import VueSplide from "@splidejs/vue-splide";
import "./styles/style.scss";

Vue.config.productionTip = false;
Vue.use(VueSplide);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
