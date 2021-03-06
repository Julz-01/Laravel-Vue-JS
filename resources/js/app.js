/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Form from './Form';
import Vue2Editor from "vue2-editor";
window.Form = Form;
Vue.use(Vue2Editor);

import VueChatScroll from 'vue-chat-scroll';
Vue.use(VueChatScroll);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component('student-component', require('./components/Student.vue').default);
Vue.component('domain-component', require('./components/DomainComponent.vue').default);
Vue.component('create-component', require('./components/CreateComponent.vue').default);
Vue.component('display-component', require('./components/DomainDisplayComponent.vue').default);
Vue.component('upload-component', require('./components/UploadComponent.vue').default);
Vue.component('model-component', require('./components/SyntaxComponent.vue').default);
Vue.component('list-component', require('./components/ListComponent.vue').default);
Vue.component('edit-component', require('./components/EditComponent.vue').default);
Vue.component('login', require('./components/Login.vue').default);
Vue.component('chat', require('./components/Chat.vue').default);
Vue.component('chat-component', require('./components/ChatComponent.vue').default);




/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
