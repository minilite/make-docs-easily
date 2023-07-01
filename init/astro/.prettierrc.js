module.exports = {
  singleQuote: true,
  semi: false,
  printWidth: 100,

  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
