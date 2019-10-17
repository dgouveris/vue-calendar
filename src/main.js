import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDHO2lQnjmyJqU3LKXZjla-xkYqqW3UUIU",
  authDomain: "vue-calendar-f37a3.firebaseapp.com",
  databaseURL: "https://vue-calendar-f37a3.firebaseio.com",
  projectId: "vue-calendar-f37a3",
  storageBucket: "vue-calendar-f37a3.appspot.com",
  messagingSenderId: "830955251594",
  appId: "1:830955251594:web:2b29a04da1b1f8362cca73"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
