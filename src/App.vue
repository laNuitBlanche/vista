<script setup lang="ts">
  import { useThemeStore } from './stores/theme'
  import TheNavbar from '@/components/TheNavbar.vue'
  import TheFooter from '@/components/TheFooter.vue'

  const themeStore = useThemeStore()

  // 初始化时设置主题
  themeStore.followSystemTheme()
</script>

<template>
  <div class="app">
    <TheNavbar />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss">
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content {
    flex: 1;
    margin-top: 70px; // 导航栏高度
    padding-bottom: 2rem;
  }

  // 页面过渡动画
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
