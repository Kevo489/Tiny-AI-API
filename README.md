# Tiny AI Server Communication API

This class is responsible for managing AI session data, including models, history, and content generation.

The script is designed to interact with the AI API, providing a complete structure for building user interfaces (UI) or AI-powered chatbots.

It implements a session management system to help handle multiple different bots, allowing you to manage various aspects of interactions such as system instructions, file handling, tokens, and more.

> **Note**: This documentation was written by [ChatGPT](https://openai.com/chatgpt), an AI assistant developed by OpenAI, based on the project structure and descriptions provided by the repository author.  
> If you find any inaccuracies or need improvements, feel free to contribute or open an issue!
---

## Limitations

> ⚠️ **Not optimized for high-load scenarios**  
This script is **not optimized** for efficiently handling multiple AI instances simultaneously.  
It may not be suitable for environments that require running several AI instances at once.

> ⚠️ **Token tracking not included**  
This script **does not automatically manage or track token counts** for messages.  
Developers must implement their own logic to monitor and manage token usage if necessary.

---

## 📦 Installation

To install the package, use the following command:

```bash
npm install tiny-ai-api
```

---

## 🔧 Usage Example

You can interact with the AI using two methods, both of which are valid.

```js
import { TinyAiInstance, setTinyGoogleAi } from 'tiny-ai-api';

const ai = new TinyAiInstance();
setTinyGoogleAi(ai, 'GEMINI_API_KEY', 'gemini-2.0-flash');
```

Alternatively, you can use the following shorthand method:

```js
import { TinyGoogleAi } from 'tiny-ai-api';

const ai = TinyGoogleAi('GEMINI_API_KEY', 'gemini-2.0-flash');
```

---

## 📂 File Structure (After Build)

After building the project, the following files will be available:

```
dist/
├── index.mjs       → For ESM users (`import`)
├── index.cjs       → For CommonJS users (`require`)
└── index.d.mts     → TypeScript `.d.ts` declaration files
```

---

## 📚 API Reference

### [Introduction](https://github.com/JasminDreasond/TinyAiApi/blob/main/docs/introduction.md) - Getting Started

Learn the basics of initializing a session, setting up models, and understanding the general structure of the API.

### [Configs](https://github.com/JasminDreasond/TinyAiApi/blob/main/docs/configs.md) - Session Configuration

Learn how to configure session data, including setting up system instructions, models, and file handling.

### [Content](https://github.com/JasminDreasond/TinyAiApi/blob/main/docs/content.md) - Content Management

Understand how to manage content like prompts, dialogues, file data, and how to retrieve and modify this content.

### [Custom](https://github.com/JasminDreasond/TinyAiApi/blob/main/docs/custom.md) - Working with Custom Values

Understand how to implement custom values, including session-specific data and any user-defined parameters.

### [Dev](https://github.com/JasminDreasond/TinyAiApi/blob/main/docs/dev.md) - Development Tools

For developers looking to extend or debug the API, this section provides tools and guidelines for working with the internal workings of the library.

### [Models](https://github.com/JasminDreasond/TinyAiApi/blob/main/docs/models.md) - Model Configuration

Set up models and manage their configurations to interact with the API correctly. This includes handling different types of models and adjusting their parameters.

---

## 💡 Features

- **Session Management**: Keep track of multiple AI instances with full session history.
- **Content Handling**: Easily manage data like user inputs, AI-generated responses, and file handling.
- **Token and Hash Tracking**: Monitor token usage for each session and track hash values for specific items.
- **Customizable**: Fully configurable session data and model setups for different environments.
- **Error Handling**: Built-in error management to ensure robust session handling and prevent crashes.
- **Event-driven**: Supports event-driven architecture to handle real-time updates and triggers.

---

## 🛠 Development Tools

For advanced users, you can access several development tools to help with debugging and extending the API:

- **Token Tracking**: Manually track token usage for specific message categories like prompt, system instruction, or file.
- **Custom Session IDs**: Create and manage custom session IDs to differentiate between different AI sessions.
- **File Data Management**: Set, get, and remove file data associated with specific sessions, ideal for sending or receiving large data files.

---

## 📄 License

This project is licensed under the AGPL-3.0 License - see the [LICENSE](./LICENSE) file for details.
