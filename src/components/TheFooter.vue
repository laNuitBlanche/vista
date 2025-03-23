<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section about">
          <h3 class="footer-title">Vista</h3>
          <p>一个现代化的个人博客系统，融合三维数字叙事与桌面级交互体验。</p>
        </div>

        <div class="footer-section links">
          <h3 class="footer-title">快速导航</h3>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/articles">文章</router-link></li>
            <li><router-link to="/games">游戏库</router-link></li>
            <li><router-link to="/anime">追番</router-link></li>
            <li><router-link to="/music">音乐</router-link></li>
            <li><router-link to="/gallery">相册</router-link></li>
          </ul>
        </div>

        <div class="footer-section contact">
          <h3 class="footer-title">联系方式</h3>
          <ul>
            <li><i class="icon-email"></i> example@vista.com</li>
            <li><i class="icon-github"></i> github.com/vista</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          &copy; {{ new Date().getFullYear() }} Vista - 维界. All Rights
          Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../styles/variables';

.footer {
  background-color: var(--background-color);
  border-top: 1px solid var(--border-color);
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;

  // 添加背景图案
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(var(--hover-color) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.5;
    pointer-events: none;
  }

  &-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
  }

  &-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 3rem;
  }

  &-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 3px;
      background: linear-gradient(
        90deg,
        var(--primary-color),
        var(--secondary-color)
      );
      border-radius: var(--radius-full);
    }
  }

  .about {
    p {
      color: var(--text-color);
      opacity: 0.8;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      max-width: 300px;
    }
  }

  .links {
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      a {
        color: var(--text-color);
        opacity: 0.8;
        transition: all 0.3s ease;
        position: relative;
        padding-left: 1rem;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          background-color: var(--primary-color);
          border-radius: var(--radius-full);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        &:hover {
          color: var(--primary-color);
          opacity: 1;
          text-decoration: none;
          transform: translateX(4px);

          &::before {
            opacity: 1;
            background-color: var(--secondary-color);
          }
        }
      }
    }
  }

  .contact {
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        display: flex;
        align-items: center;
        color: var(--text-color);
        opacity: 0.8;
        transition: all 0.3s ease;

        i {
          margin-right: 0.75rem;
          width: 1.25rem;
          height: 1.25rem;
        }

        &:hover {
          opacity: 1;
          color: var(--primary-color);
          transform: translateX(4px);
        }
      }
    }
  }

  &-bottom {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    color: var(--text-color);
    opacity: 0.6;
    font-size: 0.9rem;

    p {
      position: relative;
      display: inline-block;
      padding: 0 0.5rem;

      &::before,
      &::after {
        content: '•';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: var(--primary-color);
        opacity: 0.5;
      }

      &::before {
        left: -1rem;
      }

      &::after {
        right: -1rem;
      }
    }
  }
}

.icon {
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  background-color: currentColor;
  opacity: 0.7;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  transition: all 0.3s ease;
}

.icon-email {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/%3E%3C/svg%3E");
}

.icon-github {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
}

@media (max-width: variables.$breakpoint-md) {
  .footer {
    padding: 3rem 0 2rem;

    &-container {
      padding: 0 1.5rem;
    }

    &-content {
      grid-template-columns: 1fr;
      gap: 2.5rem;
      text-align: center;
    }

    &-title {
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .about p {
      margin: 0 auto 1.5rem;
    }

    .links ul {
      align-items: center;

      a {
        padding-left: 0;

        &::before {
          display: none;
        }

        &:hover {
          transform: translateY(-2px);
        }
      }
    }

    .contact ul {
      align-items: center;

      li {
        justify-content: center;

        &:hover {
          transform: translateY(-2px);
        }
      }
    }
  }
}
</style>
