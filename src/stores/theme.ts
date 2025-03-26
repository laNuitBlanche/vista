import { defineStore } from 'pinia'

export type ThemeMode = 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref<ThemeMode>('light')
  const systemTheme = ref<ThemeMode>('light')

  // 监听系统主题变化
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', e => {
    systemTheme.value = e.matches ? 'dark' : 'light'
    if (followingSystem.value) {
      setTheme(systemTheme.value)
    }
  })

  // 初始化系统主题
  systemTheme.value = mediaQuery.matches ? 'dark' : 'light'

  // 是否跟随系统主题
  const followingSystem = ref(true)

  // 切换主题
  function toggleTheme() {
    followingSystem.value = false
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
    applyTheme(currentTheme.value)
  }

  // 设置主题
  function setTheme(theme: ThemeMode) {
    currentTheme.value = theme
    applyTheme(theme)
  }

  // 应用主题到DOM
  function applyTheme(theme: ThemeMode) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
    }
    // 保存到本地存储
    localStorage.setItem('theme', theme)
  }

  // 跟随系统主题
  function followSystemTheme() {
    followingSystem.value = true
    setTheme(systemTheme.value)
  }

  // 从本地存储恢复主题设置
  function restoreTheme() {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null
    if (savedTheme) {
      followingSystem.value = false
      setTheme(savedTheme)
    } else {
      followSystemTheme()
    }
  }

  // 初始化时自动恢复主题
  restoreTheme()

  return {
    currentTheme,
    systemTheme,
    followingSystem,
    toggleTheme,
    setTheme,
    followSystemTheme,
  }
})
