import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';
import preserveDirectories from 'rollup-preserve-directives';
import nodePolyfills from 'rollup-plugin-polyfill-node';

// import { builtinModules } from 'module';
// import pkg from './package.json' assert { type: "json" };
const pkg = JSON.parse(fs.readFileSync('./package.json'))

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to get all .js files from src/
function getAllInputFiles(dir = 'src') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return getAllInputFiles(fullPath);
    if (entry.isFile() && entry.name.endsWith('.mjs')) return fullPath;
    return [];
  });
  return files;
}

const inputFiles = getAllInputFiles();

// Prepare Plugins
const plugins = [
  resolve(),
  commonjs(),
  preserveDirectories(),
];

export default [
  // ESM
  /* {
    input: inputFiles,  
    //external: [
    //  ...builtinModules,
    //  ...Object.keys(pkg.dependencies || {}), // <- does not include package.json libs
    //],
    output: {
      dir: 'dist',
      format: 'es',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].mjs'
    },
    plugins,
  }, */

  // CJS
  {
    external: [...Object.keys(pkg.dependencies || {})],
    input: inputFiles,
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].cjs'
    },
    plugins,
  },

  // IIFE (browser)
  {
    input: 'src/index.mjs',
    output: {
      file: 'dist/TinyAiApi.min.js',
      format: 'iife',
      name: 'TinyAiApi',
      sourcemap: true,
      globals: {
        'lodash': '_',
      }
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      resolve(),
      commonjs(),
      nodePolyfills(),
      terser(),
    ]
  }
];
