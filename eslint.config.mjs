import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    typescript: true,
  }
}).prepend({
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off'
  },
  ignores: [
    'dist',
    'node_modules',
    '.output',
    '.nuxt',
  ],
})