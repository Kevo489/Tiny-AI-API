import { TinyGoogleAi, setTinyGoogleAi } from '../src/services/Google.mjs';
import TinyAiInstance from '../src/base.mjs';

global.window.TinyAiApi = { TinyAiInstance, TinyGoogleAi, setTinyGoogleAi };
