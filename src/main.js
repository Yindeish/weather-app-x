import { createApp } from 'vue';
import App from './App.vue';
import Store from '@/components/Store/index';

const app = createApp(App);
app.use(Store);
app.mount('#app');
