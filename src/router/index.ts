import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('@/views/articles/index.vue'),
    meta: {
      title: '文章',
    },
  },
  {
    path: '/article/:id',
    name: 'ArticleDetail',
    component: () => import('@/views/article-detail/index.vue'),
    meta: {
      title: '文章详情',
    },
  },
  /* 以下路由暂未实现
  {
    path: '/games',
    name: 'Games',
    component: () => import('@/views/games/index.vue'),
    meta: {
      title: '游戏库',
    },
  },
  {
    path: '/anime',
    name: 'Anime',
    component: () => import('@/views/anime/index.vue'),
    meta: {
      title: '追番进度',
    },
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('@/views/music/index.vue'),
    meta: {
      title: '音乐',
    },
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/views/gallery/index.vue'),
    meta: {
      title: '相册',
    },
  },
  */
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/not-found/index.vue'),
    meta: {
      title: '页面未找到',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = `${to.meta.title || '维界'} - Vista`
  next()
})

export default router
