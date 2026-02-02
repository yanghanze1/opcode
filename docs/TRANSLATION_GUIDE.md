# Translation Contribution Guide

Thank you for your interest in contributing translations to opcode! This guide will help you add or improve translations.

## 🌐 Supported Languages

Currently supported languages:
- **English** (en) - Default
- **Simplified Chinese** (zh) - 简体中文

## 📁 Translation File Structure

Translation files are located in `src/locales/`:

```
src/locales/
├── en/                    # English translations
│   ├── common.json        # Common UI elements
│   ├── agents.json        # CC Agents module
│   ├── projects.json      # Project management
│   ├── sessions.json      # Session management
│   ├── settings.json      # Settings page
│   ├── mcp.json          # MCP server management
│   ├── usage.json        # Usage analytics
│   └── errors.json       # Error messages
└── zh/                    # Chinese translations
    └── (same structure)
```

## 🔑 Translation Key Structure

Translation keys follow a hierarchical structure:

```
namespace:category.key
```

Examples:
- `common:buttons.save` - Save button
- `agents:messages.agent_created` - Agent created message
- `settings:tabs.general` - General settings tab

## ✍️ Adding a New Language

### Step 1: Create Translation Files

1. Create a new directory in `src/locales/` with the language code (e.g., `fr` for French)
2. Copy all JSON files from `src/locales/en/` to your new directory
3. Translate the values (keep the keys in English)

### Step 2: Update i18n Configuration

Edit `src/i18n/config.ts`:

```typescript
// Add your language to resources
const resources = {
  en: { /* ... */ },
  zh: { /* ... */ },
  fr: {  // Add your language
    common: commonFR,
    agents: agentsFR,
    // ... other namespaces
  },
};
```

### Step 3: Update Language Selector

Edit `src/i18n/helpers.ts`:

```typescript
export const getSupportedLanguages = () => {
  return [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '简体中文' },
    { code: 'fr', name: 'Français' },  // Add your language
  ];
};
```

## 📝 Translation Guidelines

### 1. Technical Terms

**Keep technical terms in English** for consistency across languages:

✅ **Preserve in English:**
- Agent / Agents
- CC Agents
- MCP Server
- Token / Tokens
- Session / Sessions
- Checkpoint / Checkpoints
- Timeline
- Project / Projects
- Prompt
- API, CLI, GUI
- Tauri, WebView
- Markdown, JSON
- CLAUDE.md

✅ **Mixed expressions are OK:**
- Chinese: "创建 Agent" (Create Agent)
- Chinese: "MCP 服务器管理" (MCP Server Management)
- Chinese: "Token 使用量" (Token Usage)

### 2. Tone and Style

- **Professional**: Use professional, technical language
- **Concise**: Keep translations brief and clear
- **Consistent**: Use the same translation for the same term throughout

### 3. Placeholders and Variables

Preserve placeholders in translations:

```json
{
  "created_count": "Created {{count}} agents"
}
```

Chinese translation:
```json
{
  "created_count": "已创建 {{count}} 个 Agent"
}
```

### 4. Pluralization

i18next handles pluralization automatically. Use `_plural` suffix:

```json
{
  "sessions": "{{count}} session",
  "sessions_plural": "{{count}} sessions"
}
```

## 🧪 Testing Your Translations

### 1. Run the Development Server

```bash
bun run dev
```

### 2. Switch Language

Go to **Settings → General → Language** and select your language.

### 3. Check All Modules

Navigate through all sections of the app:
- CC Agents
- Projects
- Sessions
- Settings
- MCP Servers
- Usage Dashboard

### 4. Verify

- [ ] All text is translated
- [ ] Technical terms are preserved
- [ ] No missing translations (shows key instead of text)
- [ ] Placeholders work correctly
- [ ] UI layout is not broken by longer text

## 🔍 Finding Missing Translations

### Method 1: Visual Inspection

Look for text that appears as keys (e.g., `common:buttons.save` instead of "Save")

### Method 2: Use i18next-parser

Extract all translatable strings:

```bash
bun run i18n:extract
```

This will update translation files with any missing keys.

## 📤 Submitting Your Translation

### 1. Fork the Repository

Fork the opcode repository on GitHub.

### 2. Create a Branch

```bash
git checkout -b add-french-translation
```

### 3. Add Your Translation Files

```bash
git add src/locales/fr/
git add src/i18n/config.ts
git add src/i18n/helpers.ts
```

### 4. Commit Your Changes

```bash
git commit -m "Add French translation"
```

### 5. Push and Create Pull Request

```bash
git push origin add-french-translation
```

Then create a Pull Request on GitHub.

## 📋 Translation Checklist

Before submitting, ensure:

- [ ] All JSON files are valid (no syntax errors)
- [ ] All keys from English version are present
- [ ] Technical terms are preserved in English
- [ ] Placeholders ({{variable}}) are preserved
- [ ] Tested in the application
- [ ] No UI layout issues
- [ ] Consistent terminology throughout
- [ ] Professional tone maintained

## 🤝 Getting Help

If you have questions:

1. Check existing translations in `src/locales/zh/` for examples
2. Open an issue on GitHub
3. Join our Discord community

## 📚 Resources

- [i18next Documentation](https://www.i18next.com/)
- [React i18next Guide](https://react.i18next.com/)
- [Pluralization Rules](https://www.i18next.com/translation-function/plurals)

---

Thank you for contributing to make opcode accessible to more users worldwide! 🌍
