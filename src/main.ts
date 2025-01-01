import {registerPlugins} from '@/plugins';
import App from './App.vue';
import './styles/index.css';

import {createApp} from 'vue';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
