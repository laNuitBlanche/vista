<template>
  <div class="article-detail">
    <div class="container">
      <template v-if="article">
        <div class="article-header">
          <div class="article-category">
            {{ getCategoryName(article.categoryId) }}
          </div>
          <h1 class="article-title">{{ article.title }}</h1>
          <div class="article-meta">
            <div class="meta-item">
              <i class="icon-calendar"></i>
              <span>{{ formatDate(article.publishedAt) }}</span>
            </div>
            <div class="meta-item">
              <i class="icon-tags"></i>
              <span class="tags">
                <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
              </span>
            </div>
          </div>
        </div>

        <div class="article-cover">
          <img :src="article.coverImage" :alt="article.title" />
        </div>

        <div class="article-content">
          <!-- 后续会替换为 Markdown 渲染组件 -->
          <div class="markdown-content">{{ article.content }}</div>
        </div>

        <div class="article-actions">
          <div class="share">
            <span>分享到：</span>
            <button class="share-btn weixin">微信</button>
            <button class="share-btn weibo">微博</button>
            <button class="share-btn twitter">Twitter</button>
          </div>

          <div class="like">
            <button class="like-btn" @click="toggleLike">
              <i class="icon-heart" :class="{ liked: isLiked }"></i>
              <span>{{ likeCount }}</span>
            </button>
          </div>
        </div>

        <div class="article-navigation">
          <div class="prev-next">
            <router-link
              v-if="prevArticle"
              :to="`/article/${prevArticle.id}`"
              class="nav-item prev"
            >
              <span class="nav-label">上一篇</span>
              <span class="nav-title">{{ prevArticle.title }}</span>
            </router-link>

            <router-link
              v-if="nextArticle"
              :to="`/article/${nextArticle.id}`"
              class="nav-item next"
            >
              <span class="nav-label">下一篇</span>
              <span class="nav-title">{{ nextArticle.title }}</span>
            </router-link>
          </div>
        </div>
      </template>

      <div v-else-if="isLoading" class="loading">
        <p>文章加载中...</p>
      </div>

      <div v-else class="not-found">
        <h2>文章未找到</h2>
        <p>抱歉，您查找的文章不存在或已被删除。</p>
        <router-link to="/articles" class="back-btn">返回文章列表</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

  const route = useRoute()
  const router = useRouter()
  const isLoading = ref(true)
  const article = ref<Article | null>(null)
  const isLiked = ref(false)
  const likeCount = ref(0)

  // 模拟文章数据
  const articles = [
    {
      id: '2',
      title: '《塞尔达传说：王国之泪》深度评测',
      excerpt: '任天堂再次突破开放世界游戏的边界，带来令人惊叹的游戏体验。',
      content: `# 《塞尔达传说：王国之泪》深度评测

## 游戏背景

作为《荒野之息》的续作，《王国之泪》承接前作剧情，继续讲述林克和塞尔达公主的冒险故事。

## 游戏世界

游戏世界相比前作有了显著扩展，不仅包含地面世界，还加入了天空岛屿和地下区域，使探索范围大幅增加。每个区域都有独特的视觉风格和设计特点，探索过程充满惊喜。

## 游戏系统

游戏引入了"乌特拉奇"能力系统，玩家可以组合不同的能力创造出独特的解谜和战斗方式。这一系统极大地提高了游戏的自由度和创造性玩法。

## 战斗系统

战斗系统相比前作更加深入和复杂，敌人AI得到显著提升，要求玩家更加灵活地运用各种武器和能力。武器的耐久性问题仍然存在，但游戏提供了更多方法来应对这一挑战。

## 总体评价

《塞尔达传说：王国之泪》成功地在《荒野之息》的基础上进行了全方位的升级和创新，带来了更为广阔和深入的游戏体验。游戏不仅满足了老玩家的期待，也为系列带来了新的高度。`,
      coverImage: 'https://source.unsplash.com/random/1200x600/?game',
      publishedAt: '2023-05-20T10:30:00Z',
      categoryId: 'gaming',
      tags: ['游戏评测', 'Switch', '塞尔达'],
    },
    {
      id: '3',
      title: '摄影入门：构图技巧详解',
      excerpt: '掌握这些基本构图技巧，让你的照片更加专业和吸引人。',
      content: `# 摄影入门：构图技巧详解

## 三分法则

三分法则是最基本也是最常用的构图技巧。想象画面被两条水平线和两条垂直线平均分为九个部分，将主体放在这些线的交叉点上通常能创造出平衡且吸引人的构图。

## 引导线

利用自然界中的线条（如道路、河流、栏杆等）引导观众的视线移向照片的主体。这种技巧可以创造出深度感和动态感。

## 框架构图

使用自然或人造元素（如门框、窗户、树枝等）作为框架围绕主体。这种构图可以增强主体的突出度，同时增加照片的层次感。

## 对称与平衡

对称构图在适当的场景下能创造出和谐感和稳定感。水面反射、建筑物、桥梁等都是创造对称构图的好素材。

## 空间留白

在主体周围保留足够的空白空间，可以使主体更加突出，同时给照片一种简洁和优雅的感觉。在表现孤独、宁静等情绪时特别有效。

## 总结

构图是摄影中最基础也最重要的技巧之一。通过练习和尝试不同的构图方式，你可以找到最适合表达你想法的构图方式。记住，规则是用来打破的，有时最不寻常的构图可能会创造出最令人印象深刻的照片。`,
      coverImage: 'https://source.unsplash.com/random/1200x600/?photography',
      publishedAt: '2023-04-10T14:20:00Z',
      categoryId: 'life',
      tags: ['摄影', '构图', '入门教程'],
    },
    {
      id: '4',
      title: '《进击的巨人》最终季评析',
      excerpt: '长达多年的史诗级动漫终于迎来结局，一起来回顾这部作品带给我们的震撼与思考。',
      content: `# 《进击的巨人》最终季评析

## 剧情发展

最终季将故事带入了全新的高度，从岛内的生存斗争扩展到了整个世界的种族冲突。艾伦的转变成为了整个故事的关键转折点，从自由的追求者变成了看似压迫者的角色转变令人深思。

## 角色塑造

《进击的巨人》的角色塑造一直是其强项，最终季更是将每个角色的内心挣扎和成长展现得淋漓尽致。艾伦、三笠、阿尔敏等主角的选择和命运令人动容，而莱纳等"敌人"的复杂心理描写则打破了传统动漫中善恶二元对立的简单叙事。

## 主题探讨

自由与束缚、战争与和平、仇恨与救赎，《进击的巨人》通过一个架空的世界深刻探讨了现实中的诸多议题。它不回避复杂性和灰色地带，也不给出简单的答案，而是鼓励观众自己思考。

## 画面表现

WIT工作室和MAPPA工作室各自以不同的风格呈现了精彩的画面。从流畅的立体机动装置战斗场景，到震撼人心的巨人变身瞬间，视觉表现始终保持在高水准。

## 音乐配乐

澤野弘之的配乐为作品增色不少，从激昂的战斗BGM到悲壮的情感曲目，音乐与剧情的完美结合提升了整体观感。

## 总体评价

作为一部现象级动漫，《进击的巨人》成功地通过一个架空的奇幻故事探讨了人性和社会的本质问题。尽管最终季和结局存在一些争议，但无法否认的是，这是一部会在动漫史上留下浓墨重彩一笔的作品。`,
      coverImage: 'https://source.unsplash.com/random/1200x600/?anime',
      publishedAt: '2023-03-05T20:00:00Z',
      categoryId: 'anime',
      tags: ['动漫评测', '进击的巨人', '剧情分析'],
    },
  ]

  // 模拟分类数据
  const categories = [
    { id: 'tech', name: '技术' },
    { id: 'gaming', name: '游戏' },
    { id: 'life', name: '生活' },
    { id: 'anime', name: '动漫' },
  ]

  // 获取文章索引
  const articleIndex = computed(() => {
    return articles.findIndex(a => a.id === route.params.id)
  })

  // 获取上一篇文章
  const prevArticle = computed(() => {
    return articleIndex.value > 0 ? articles[articleIndex.value - 1] : null
  })

  // 获取下一篇文章
  const nextArticle = computed(() => {
    return articleIndex.value < articles.length - 1 ? articles[articleIndex.value + 1] : null
  })

  // 点赞功能
  const toggleLike = () => {
    isLiked.value = !isLiked.value
    if (isLiked.value) {
      likeCount.value++
    } else {
      likeCount.value--
    }
  }

  // 获取分类名称
  const getCategoryName = (categoryId: string): string => {
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.name : '未分类'
  }

  // 日期格式化
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  // 加载文章数据
  onMounted(async () => {
    // 模拟 API 请求
    await new Promise(resolve => setTimeout(resolve, 1000))

    const fetchedArticle = articles.find(a => a.id === route.params.id)
    if (fetchedArticle) {
      article.value = fetchedArticle
      // 模拟初始点赞数
      likeCount.value = Math.floor(Math.random() * 100)
    }

    isLoading.value = false
  })
</script>

<style lang="scss" scoped>
  @use './style.scss';
</style>
