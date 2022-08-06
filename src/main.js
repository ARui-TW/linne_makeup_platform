import { createApp } from "vue";
import VueCookies from "vue-cookies";
import "./tailwind.css";
import App from "./App.vue";
import { router } from "./routes.js";
import store from "./store";

const app = createApp(App);

app.use(router).use(store).use(VueCookies, { expire: "2m" });

app.mount("#app");
