import { createApp } from "vue";
import App from "./App.vue";

// If we wanna use global style on every component we can create a CSS files and import it through JS. These styles will be overridden by the Style tag of each component.

import "./assets/global.css";

createApp(App).mount("#app");
