<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="navbar-container">
      <router-link to="/" class="navbar-logo">Vista</router-link>

      <div class="navbar-menu" :class="{ active: isMobileMenuOpen }">
        <router-link to="/" class="navbar-item" active-class="active"
          >首页</router-link
        >
        <router-link to="/articles" class="navbar-item" active-class="active"
          >文章</router-link
        >
        <router-link to="/games" class="navbar-item" active-class="active"
          >游戏库</router-link
        >
        <router-link to="/anime" class="navbar-item" active-class="active"
          >追番</router-link
        >
        <router-link to="/music" class="navbar-item" active-class="active"
          >音乐</router-link
        >
        <router-link to="/gallery" class="navbar-item" active-class="active"
          >相册</router-link
        >
      </div>

      <div class="navbar-actions">
        <button class="theme-toggle" @click="toggleTheme">
          {{ themeStore.currentTheme === 'light' ? '🌙' : '☀️' }}
        </button>
        <button class="mobile-toggle" @click="toggleMobileMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const toggleTheme = () => {
  themeStore.toggleTheme()
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // 初始化滚动状态
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@use '../styles/variables';

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-index-sticky);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.75rem 2rem;
    height: 70px;
  }

  &-logo {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--primary-color);
    text-decoration: none;
    transition: all 0.3s ease;
    letter-spacing: -0.5px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30%;
      height: 3px;
      background: linear-gradient(
        90deg,
        var(--primary-color),
        var(--secondary-color)
      );
      border-radius: var(--radius-full);
      transition: width 0.3s ease;
    }

    &:hover {
      color: var(--secondary-color);

      &::after {
        width: 100%;
      }
    }
  }

  &-menu {
    display: flex;
    gap: 2rem;
  }

  &-item {
    position: relative;
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 0.5rem 0;
    opacity: 0.85;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: var(--primary-color);
      transition: width 0.3s ease, left 0.3s ease;
      border-radius: var(--radius-full);
    }

    &:hover,
    &.active {
      color: var(--primary-color);
      opacity: 1;

      &::after {
        width: 100%;
        left: 0;
      }
    }
  }

  &-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .theme-toggle {
    background-color: transparent;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: var(--radius-full);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: rotate(15deg) scale(1.1);
      background-color: var(--hover-color);
    }
  }

  .mobile-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    .bar {
      width: 100%;
      height: 3px;
      background-color: var(--text-color);
      border-radius: 3px;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    &.active {
      .bar:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
      }

      .bar:nth-child(2) {
        opacity: 0;
      }

      .bar:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
      }
    }
  }

  &-scrolled {
    background-color: rgba(var(--background-color), 0.8);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }
}

@media (max-width: variables.$breakpoint-lg) {
  .navbar {
    &-container {
      padding: 0.75rem 1rem;
    }

    &-menu {
      position: fixed;
      top: 70px;
      left: 0;
      width: 100%;
      flex-direction: column;
      background-color: var(--background-color);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      padding: 1.5rem 0;
      gap: 0;
      transform: translateY(-150%);
      opacity: 0;
      transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.3s ease;
      border-bottom-left-radius: var(--radius-lg);
      border-bottom-right-radius: var(--radius-lg);

      &.active {
        transform: translateY(0);
        opacity: 1;
      }
    }

    &-item {
      width: 100%;
      text-align: center;
      padding: 1rem 0;
      font-size: var(--font-size-lg);

      &::after {
        left: 30%;
        bottom: 0.75rem;
      }

      &:hover,
      &.active {
        &::after {
          width: 40%;
          left: 30%;
        }
      }
    }

    .mobile-toggle {
      display: flex;
    }
  }
}
</style>
