import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

import { createPinia } from 'pinia';

createApp(App)
  .use(vuetify)
  .use(createPinia())
  .mount('#app');

