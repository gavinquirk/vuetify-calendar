import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

require('dotenv').config();

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'vuetify-calendar-463ce.firebaseapp.com',
  databaseURL: 'https://vuetify-calendar-463ce.firebaseio.com',
  projectId: 'vuetify-calendar-463ce',
  storageBucket: 'vuetify-calendar-463ce.appspot.com',
  messagingSenderId: '265532163454',
  appId: '1:265532163454:web:839813762d77937568df2f',
  measurementId: 'G-VEMK9J2WYJ'
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
