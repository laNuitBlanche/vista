<template>
  <div class="home-page">
    <section class="hero">
      <h1 class="title">维界 Vista</h1>
      <p class="subtitle">一个现代化的个人博客系统</p>
    </section>

    <section class="recent-articles">
      <h2 class="section-title">最新文章</h2>
      <div class="article-cards">
        <!-- 后续添加文章卡片组件 -->
      </div>
    </section>

    <section class="featured-content">
      <div class="content-row">
        <div class="feature-card games">
          <h3>游戏库</h3>
          <p>我玩过的游戏记录</p>
        </div>
        <div class="feature-card anime">
          <h3>追番进度</h3>
          <p>我正在追的番剧</p>
        </div>
      </div>
      <div class="content-row">
        <div class="feature-card music">
          <h3>音乐</h3>
          <p>我喜欢的音乐</p>
        </div>
        <div class="feature-card gallery">
          <h3>相册</h3>
          <p>我拍摄的照片</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  // 后续添加业务逻辑
</script>

<style lang="scss" scoped>
  @use './style.scss';
</style>
