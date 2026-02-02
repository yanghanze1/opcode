# opcode

<div align="center">
  <img src="src-tauri/icons/icon.png" alt="opcode Logo" width="120" height="120">

  <h1>opcode</h1>

  <p>
    <strong>强大的 Claude Code GUI 应用和工具包</strong>
  </p>
  <p>
    <strong>创建自定义 Agents、管理交互式 Claude Code Sessions、运行安全的后台 Agents 等</strong>
  </p>

  <p>
    <a href="README.md">English</a> | <strong>简体中文</strong>
  </p>
</div>

## 🌟 概述

**opcode** 是一个强大的桌面应用程序，改变了您与 Claude Code 的交互方式。基于 Tauri 2 构建，它为管理 Claude Code Sessions、创建自定义 Agents、跟踪使用情况等提供了美观的 GUI。

将 opcode 视为您的 Claude Code 指挥中心 - 在命令行工具和可视化体验之间架起桥梁，使 AI 辅助开发更加直观和高效。

## ✨ 特性

### 🗂️ **Project 和 Session 管理**
- **可视化 Project 浏览器**：浏览 `~/.claude/projects/` 中的所有 Claude Code Projects
- **Session 历史**：查看和恢复过去的编码 Sessions，保留完整上下文
- **智能搜索**：使用内置搜索快速查找 Projects 和 Sessions
- **Session 洞察**：一目了然地查看首条消息、时间戳和 Session 元数据

### 🤖 **CC Agents**
- **自定义 AI Agents**：使用自定义 System Prompts 和行为创建专用 Agents
- **Agent 库**：为不同任务构建专用 Agents 集合
- **后台执行**：在独立进程中运行 Agents，实现非阻塞操作
- **执行历史**：跟踪所有 Agent 运行，包含详细日志和性能指标

### 📊 **使用分析仪表板**
- **成本跟踪**：实时监控您的 Claude API 使用情况和成本
- **Token 分析**：按模型、Project 和时间段详细分解
- **可视化图表**：显示使用趋势和模式的精美图表
- **导出数据**：导出使用数据用于会计和分析

### 🔌 **MCP Server 管理**
- **服务器注册表**：从中央 UI 管理 Model Context Protocol 服务器
- **简易配置**：通过 UI 添加服务器或从现有配置导入
- **连接测试**：使用前验证服务器连接
- **Claude Desktop 导入**：从 Claude Desktop 导入服务器配置

### ⏰ **Timeline 和 Checkpoints**
- **Session 版本控制**：在编码 Session 的任何时刻创建 Checkpoints
- **可视化 Timeline**：通过分支 Timeline 浏览 Session 历史
- **即时恢复**：一键跳转到任何 Checkpoint
- **Fork Sessions**：从现有 Checkpoints 创建新分支
- **差异查看器**：查看 Checkpoints 之间的确切变化

### 📝 **CLAUDE.md 管理**
- **内置编辑器**：直接在应用内编辑 CLAUDE.md 文件
- **实时预览**：实时查看 Markdown 渲染效果
- **Project 扫描器**：查找 Projects 中的所有 CLAUDE.md 文件
- **语法高亮**：完整的 Markdown 支持和语法高亮

### 🌐 **国际化**
- **多语言支持**：完整支持英语和简体中文
- **轻松切换语言**：在设置中一键更改语言
- **技术术语保留**：技术术语（Agent、MCP Server、Token 等）保持英文以确保一致性
- **可扩展**：使用 i18next 框架轻松添加更多语言

## 📖 使用方法

### 入门

1. **启动 opcode**：安装后打开应用程序
2. **欢迎屏幕**：在 CC Agents 或 Projects 之间选择
3. **首次设置**：opcode 将自动检测您的 `~/.claude` 目录

### 管理 Projects

```
Projects → 选择 Project → 查看 Sessions → 恢复或开始新 Session
```

- 点击任何 Project 查看其 Sessions
- 每个 Session 显示首条消息和时间戳
- 直接恢复 Sessions 或开始新 Session

### 创建 Agents

```
CC Agents → 创建 Agent → 配置 → 执行
```

1. **设计您的 Agent**：设置名称、图标和 System Prompt
2. **配置模型**：在可用的 Claude 模型之间选择
3. **设置权限**：配置文件读/写和网络访问
4. **执行任务**：在任何 Project 上运行您的 Agent

### 跟踪使用情况

```
菜单 → 使用统计 → 查看分析
```

- 按模型、Project 和日期监控成本
- 导出数据用于报告
- 设置使用警报（即将推出）

### 使用 MCP Servers

```
菜单 → MCP Manager → 添加服务器 → 配置
```

- 手动添加服务器或通过 JSON 添加
- 从 Claude Desktop 配置导入
- 使用前测试连接

### 更改语言

```
菜单 → 设置 → 常规 → Language
```

- 在英语和简体中文之间切换
- 更改立即生效
- 语言偏好自动保存

## 🚀 安装

### 前提条件

- **Claude Code CLI**：从 [Claude 官方网站](https://claude.ai/code) 安装

### 发布版本即将推出

## 🔨 从源码构建

请参阅 [英文 README](README.md#-build-from-source) 了解详细的构建说明。

## 🛠️ 开发

### 技术栈

- **前端**：React 18 + TypeScript + Vite 6
- **后端**：Rust + Tauri 2
- **UI 框架**：Tailwind CSS v4 + shadcn/ui
- **数据库**：SQLite (通过 rusqlite)
- **包管理器**：Bun
- **国际化**：i18next + react-i18next

### 开发命令

```bash
# 启动开发服务器
bun run tauri dev

# 仅运行前端
bun run dev

# 类型检查
bunx tsc --noEmit

# 运行 Rust 测试
cd src-tauri && cargo test

# 格式化代码
cd src-tauri && cargo fmt

# 提取翻译字符串
bun run i18n:extract
```

## 🌐 贡献翻译

我们欢迎翻译贡献！请查看 [翻译贡献指南](docs/TRANSLATION_GUIDE.md) 了解如何添加或改进翻译。

## 🔒 安全

opcode 优先考虑您的隐私和安全：

1. **进程隔离**：Agents 在独立进程中运行
2. **权限控制**：为每个 Agent 配置文件和网络访问
3. **本地存储**：所有数据保留在您的机器上
4. **无遥测**：无数据收集或跟踪
5. **开源**：通过开源代码实现完全透明

## 🤝 贡献

我们欢迎贡献！请查看我们的 [贡献指南](CONTRIBUTING.md) 了解详情。

### 贡献领域

- 🐛 Bug 修复和改进
- ✨ 新功能和增强
- 📚 文档改进
- 🎨 UI/UX 增强
- 🧪 测试覆盖
- 🌐 国际化

## 📄 许可证

本项目采用 AGPL 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- 使用 [Tauri](https://tauri.app/) 构建 - 用于构建桌面应用的安全框架
- [Claude](https://claude.ai) by Anthropic

---

<div align="center">
  <p>
    <strong>由 <a href="https://asterisk.so/">Asterisk</a> 用 ❤️ 制作</strong>
  </p>
  <p>
    <a href="https://github.com/getAsterisk/opcode/issues">报告 Bug</a>
    ·
    <a href="https://github.com/getAsterisk/opcode/issues">请求功能</a>
  </p>
</div>
