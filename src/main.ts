import {registerPlugins} from '@/plugins';
import App from './App.vue';
import '@/styles/index.css';
import '@/lib/Rpg-Awesome-master/css/rpg-awesome.min.css';

import {createApp} from 'vue';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
