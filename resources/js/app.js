import './bootstrap';
import {createApp} from 'vue'
import App from './src/components/App.vue'
import { pp } from "./src/utils/utils";

const app = createApp(App)
const mountedApp = app.mount("#app");
