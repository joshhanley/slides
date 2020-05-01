import Vue from 'vue';
import App from './App.vue';
import Slide from './Slide.vue';

Vue.component('app', App);
Vue.component('slide', Slide);

var vm = new Vue({
    el: 'app',
})