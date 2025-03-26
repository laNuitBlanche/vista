<template>
  <div class="articles-page">
    <div class="container">
      <h1 class="page-title">文章列表</h1>

      <div class="search-section">
        <div class="search-bar">
          <input v-model="searchQuery" type="text" placeholder="搜索文章..." class="search-input" />
          <button class="search-button">
            <span class="icon-search"></span>
          </button>
        </div>
      </div>

      <div class="categories-section">
        <div class="category-buttons">
          <button
            class="category-btn"
            :class="{ active: selectedCategory === null }"
            @click="selectedCategory = null"
          >
            全部
          </button>
          <button
            v-for="category in categories"
            :key="category.id"
            class="category-btn"
            :class="{ active: selectedCategory === category.id }"
            @click="selectedCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>
      </div>

      <div class="articles-section">
        <div v-if="filteredArticles.length === 0" class="no-articles">
          <p>没有找到相关文章</p>
        </div>

        <div v-else class="articles-grid">
          <div v-for="article in filteredArticles" :key="article.id" class="article-card">
            <div class="article-cover">
              <img :src="article.coverImage" :alt="article.title" />
              <div class="article-category">
                {{ getCategoryName(article.categoryId) }}
              </div>
            </div>
            <div class="article-content">
              <h2 class="article-title">
                <router-link :to="`/article/${article.id}`">{{ article.title }}</router-link>
              </h2>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              <div class="article-meta">
                <span class="meta-date">
                  <i class="icon-calendar"></i>
                  {{ formatDate(article.publishedAt) }}
                </span>
                <span class="meta-tags">
                  <i class="icon-tags"></i>
                  <span v-for="tag in article.tags.slice(0, 3)" :key="tag" class="tag">{{
                    tag
                  }}</span>
                </span>
              </div>
              <router-link :to="`/article/${article.id}`" class="read-more">
                阅读更多
                <span class="arrow">→</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // 类型定义
  interface Article {
    id: string
    title: string
    excerpt: string
    content: string
    coverImage: string
    publishedAt: string
    categoryId: string
    tags: string[]
  }

  interface Category {
    id: string
    name: string
  }

  // 状态
  const searchQuery = ref('')
  const selectedCategory = ref<string | null>(null)
  const debouncedSearchQuery = ref('')

  // 模拟数据 - 分类
  const categories: Category[] = [
    { id: 'tech', name: '技术' },
    { id: 'gaming', name: '游戏' },
    { id: 'life', name: '生活' },
    { id: 'anime', name: '动漫' },
  ]

  // 模拟数据 - 文章
  const articles: Article[] = [
    {
      id: '1',
      title: 'Vue 3 Composition API 完全指南',
      excerpt: '深入探讨 Vue 3 中的 Composition API，以及它如何改变我们组织组件逻辑的方式。',
      content: '# Vue 3 Composition API 完全指南\n\n这里是详细内容...',
      coverImage: 'https://source.unsplash.com/random/600x400/?coding',
      publishedAt: '2023-06-15T08:00:00Z',
      categoryId: 'tech',
      tags: ['Vue', 'JavaScript', '前端'],
    },
    {
      id: '2',
      title: '《塞尔达传说：王国之泪》深度评测',
      excerpt: '任天堂再次突破开放世界游戏的边界，带来令人惊叹的游戏体验。',
      content: '# 《塞尔达传说：王国之泪》深度评测\n\n这里是详细内容...',
      coverImage: 'https://source.unsplash.com/random/600x400/?game',
      publishedAt: '2023-05-20T10:30:00Z',
      categoryId: 'gaming',
      tags: ['游戏评测', 'Switch', '塞尔达'],
    },
    {
      id: '3',
      title: '数字游民生活方式的利与弊',
      excerpt: '探索数字游民的生活方式，以及它如何影响工作和生活平衡。',
      content: '# 数字游民生活方式的利与弊\n\n这里是详细内容...',
      coverImage: 'https://source.unsplash.com/random/600x400/?travel',
      publishedAt: '2023-04-10T14:15:00Z',
      categoryId: 'life',
      tags: ['数字游民', '远程工作', '生活方式'],
    },
    {
      id: '4',
      title: '2023年值得关注的动漫新番',
      excerpt: '盘点2023年春季和夏季值得关注的动漫新番，从热门续作到原创新作。',
      content: '# 2023年值得关注的动漫新番\n\n这里是详细内容...',
      coverImage: 'https://source.unsplash.com/random/600x400/?anime',
      publishedAt: '2023-03-25T09:45:00Z',
      categoryId: 'anime',
      tags: ['动漫', '新番', '推荐'],
    },
  ]

  // 搜索防抖
  let debounceTimeout: number | null = null

  watch(searchQuery, newValue => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout)
    }

    debounceTimeout = window.setTimeout(() => {
      debouncedSearchQuery.value = newValue
    }, 300) // 300ms 延迟
  })

  // 过滤后的文章列表
  const filteredArticles = computed(() => {
    return articles
      .filter(article => {
        // 分类过滤
        const categoryMatch =
          selectedCategory.value === null || article.categoryId === selectedCategory.value

        // 搜索过滤
        const searchTerms = debouncedSearchQuery.value.toLowerCase().trim()
        const searchMatch =
          searchTerms === '' ||
          article.title.toLowerCase().includes(searchTerms) ||
          article.excerpt.toLowerCase().includes(searchTerms) ||
          article.tags.some(tag => tag.toLowerCase().includes(searchTerms))

        return categoryMatch && searchMatch
      })
      .sort((a, b) => {
        // 按发布日期排序（最新的在前）
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      })
  })

  // 根据 ID 获取分类名称
  const getCategoryName = (categoryId: string): string => {
    const category = categories.find(c => c.id === categoryId)
    return category ? category.name : '未分类'
  }

  // 格式化日期
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
</script>

<style lang="scss" scoped>
  @use './style.scss';
</style>
