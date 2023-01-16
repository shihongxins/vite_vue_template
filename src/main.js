import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "virtual:svg-icons-register";
import SVGIconNames from "virtual:svg-icons-names";
import SVGIcon from "./components/SVGIcon.vue";

console.log(SVGIconNames);

const app = createApp(App);
app.component("SVGIcon", SVGIcon);
app.mount("#app");
