import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: {
      indent: 2,
      quotes: 'single',
    },
  },
  {
    rules: {
      'unused-imports/no-unused-vars': 'warn',
      'style/no-tabs': 'warn',
    },
  },
)
