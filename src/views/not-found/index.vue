<template>
  <div class="not-found-page">
    <div class="container">
      <div class="content">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">页面未找到</h2>
        <p class="error-message">抱歉，您请求的页面不存在或已被删除</p>
        <div class="actions">
          <router-link to="/" class="btn-primary">返回首页</router-link>
          <router-link to="/articles" class="btn-secondary"
            >浏览文章</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 404 页面不需要逻辑处理
</script>

<style lang="scss" scoped>
@use './style.scss';
</style>
