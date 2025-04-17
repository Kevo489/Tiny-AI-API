# AI Server Communication API

This class is responsible for managing AI session data, including models, history, and content generation.

The script is designed to interact with the AI API, providing a complete structure for building user interfaces (UI) or AI-powered chatbots.

It implements a session management system to help handle multiple different bots.

## Limitations

> ⚠️ **Not optimized for high-load scenarios**  
This script is **not optimized** for efficiently handling multiple AI instances simultaneously.  
It may not be suitable for environments that require running several AI instances at once.

> ⚠️ **Token tracking not included**  
This script **does not automatically manage or track token counts** for messages.  
Developers must implement their own logic to monitor and manage token usage if necessary.

---

## 📦 Installation

```bash
npm install tiny-ai-api
```

---

## 🔧 Usage Example

The two methods will work identically.

```js
import { TinyAiInstance, setTinyGoogleAi } from 'tiny-ai-api';

const ai = new TinyAiInstance();
setTinyGoogleAi(ai, 'GEMINI_API_KEY', 'gemini-2.0-flash');
```

```js
import { TinyGoogleAi } from 'tiny-ai-api';

const ai = TinyGoogleAi('GEMINI_API_KEY', 'gemini-2.0-flash');
```

---

## 📂 File Structure (After Build)

```
dist/
├── index.mjs       → For ESM users (`import`)
├── index.cjs       → For CommonJS users (`require`)
└── index.d.mts     → TypeScript `.d.ts` declaration files
```

---

## 📚 API Reference

