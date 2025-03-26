# EchoSphere Vista

<div align="center">
  <img src="src/assets/echo-sphere-logo.png" alt="EchoSphere Vista Logo" width="200" />
  <p>✨ 现代化的博客前端解决方案，基于 Vue 3 构建 ✨</p>
</div>

## 📝 项目介绍

EchoSphere Vista 是一个现代化的博客前端应用，使用 Vue 3、TypeScript 和 Vite 构建。它拥有美观的用户界面、流畅的交互体验，并支持明暗主题切换。项目采用组件化设计，具有高度可定制性和可扩展性。

> 💡 **特别说明**：本项目是完全由 Cursor Agent（基于AI的代码生成和智能助手）开发的，没有任何人工编写的代码。所有组件、样式、功能和文档均由 AI 自动生成，展示了 AI 辅助编程的强大能力和潜力。

### ✨ 特性

- 🎨 精美的现代化界面设计
- 🌓 支持明暗主题切换
- 📱 完全响应式设计，适配各种设备
- ⚡️ 基于 Vite 的快速开发和构建
- 🔍 文章搜索和分类功能
- 🔄 平滑的页面过渡动画
- 📊 文章阅读统计和用户互动功能
- 🧩 模块化架构，易于扩展
- 🤖 100% 由 AI 生成的代码，零人工编写

## 🛠️ 技术栈

- **框架**：Vue 3 (使用 Composition API 和 `<script setup>`)
- **类型系统**：TypeScript
- **构建工具**：Vite
- **状态管理**：Pinia
- **路由管理**：Vue Router 4
- **样式处理**：Sass/SCSS + CSS 变量
- **动效库**：GSAP、Motion One、Lottie
- **3D 渲染**：Three.js
- **工具库**：VueUse
- **开发辅助**：Cursor Agent（基于 Claude 3.7 Sonnet 的 AI 编程助手）

## 🚀 开始使用

### 环境要求

- Node.js = 22.14.0（必需）
  ```bash
  # 使用 nvm 安装指定版本
  nvm install 22.14.0
  nvm use 22.14.0
  
  # 验证版本
  node --version # 应显示 v22.14.0
  ```
- npm >= 7.0.0 或 yarn >= 1.22.0

> ⚠️ **注意**：本项目严格要求 Node.js 版本为 22.14.0，其他版本可能会导致构建失败或运行错误。

### 安装步骤

1. 克隆项目仓库
   ```bash
   git clone https://github.com/yourusername/echosphere-vista.git
   cd echosphere-vista
   ```

2. 安装依赖
   ```bash
   npm install
   # 或者使用 yarn
   yarn install
   ```

3. 启动开发服务器
   ```bash
   npm run dev
   # 或者使用 yarn
   yarn dev
   ```

4. 构建生产版本
   ```bash
   npm run build
   # 或者使用 yarn
   yarn build
   ```

5. 预览生产版本
   ```bash
   npm run preview
   # 或者使用 yarn
   yarn preview
   ```

## 📁 项目结构

```
src/
├── assets/        # 静态资源（图片、字体等）
├── components/    # 可复用组件
├── composables/   # 组合式 API 函数
├── router/        # 路由配置
├── stores/        # Pinia 状态存储
├── styles/        # 全局样式和主题配置
├── types/         # TypeScript 类型定义
├── utils/         # 工具函数
├── views/         # 页面级组件
├── App.vue        # 根组件
└── main.ts        # 入口文件
```

## 🎨 主题设计

EchoSphere Vista 采用了现代化的设计系统，它包括：

- **颜色系统**：基于 CSS 变量实现的主题色和语义色
- **排版系统**：精心设计的字体层级和响应式文本大小
- **间距系统**：一致的间距规则，确保界面的和谐统一
- **阴影系统**：多级阴影效果，提供视觉层次感
- **动画系统**：流畅的过渡效果和交互反馈

## 🧑‍💻 开发规范

项目遵循一套严格的开发规范，包括：

- **编码风格**：使用 ESLint 和 Prettier 保持一致的代码风格
- **组件规范**：使用组合式 API 和 TypeScript 类型注解
- **CSS 规范**：使用 SCSS 的模块化和变量系统
- **Git 提交规范**：使用语义化的提交消息

详细规范请参考项目根目录的 `.cursorrule` 文件。

## 🔄 贡献指南

我们欢迎任何形式的贡献！以下是贡献的步骤：

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

为了保持项目的一致性，我们建议使用 Cursor IDE 和其 AI Agent 功能进行开发。这有助于确保代码风格和质量与现有代码库保持一致，因为整个项目是完全由 AI 辅助生成的。

## 🤖 AI 驱动开发

本项目是 AI 辅助编程的一个示例案例，所有代码均由 Cursor Agent 基于 Claude 3.7 Sonnet 模型生成。这包括：

- 所有组件和功能实现
- 样式设计和主题系统
- 项目结构和架构设计
- 文档和注释

这种开发方式展示了 AI 在软件开发中的潜力，不仅可以加速开发过程，还能确保代码质量和一致性。我们欢迎对 AI 辅助编程感兴趣的开发者参与到项目中来，共同探索这一新兴领域。

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 进行开源。

## 📞 联系我们

如有任何问题或建议，请通过以下方式联系我们：

- 电子邮件：[your-email@example.com](mailto:your-email@example.com)
- GitHub Issues：[https://github.com/yourusername/echosphere-vista/issues](https://github.com/yourusername/echosphere-vista/issues)

---

<div align="center">
  <p>用 ❤️ 打造</p>
  <p>© 2023 EchoSphere Team</p>
</div>
