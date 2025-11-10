import { createRouter, createWebHashHistory } from 'vue-router';
import About from '../views/About.vue';
import RandomQuotes from '../views/RandomQuotes.vue';
import Contact from '../views/Contact.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: About },
  { path: '/quotes', component: RandomQuotes },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;