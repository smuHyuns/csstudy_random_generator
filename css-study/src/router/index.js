import DrawQuestionVue from '@/pages/DrawQuestion.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [{ path: '/', name: 'draw', component: DrawQuestionVue }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
