import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store/index'

import { IonicVue, IonPage, IonContent, IonButton, IonInput, IonText, IonIcon, IonImg, IonHeader, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/vue';


/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store)
  .component('ion-page', IonPage)
  .component('ion-content', IonContent)
  .component('ion-button', IonButton)
  .component('ion-input', IonInput)
  .component('ion-text', IonText)
  .component('ion-icon', IonIcon)
  .component('ion-img', IonImg)
  .component('ion-header', IonHeader)
  .component('ion-card-header', IonCardHeader)
  .component('ion-card', IonCard)
  .component('ion-card-content', IonCardContent)
  .component('ion-card-title', IonCardTitle)
  .component('ion-card-subtitle', IonCardSubtitle)

router.isReady().then(() => {
  app.mount('#app');
});