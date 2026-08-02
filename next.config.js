/**
 * Next.js configuration
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  i18n: {
    locales: [
      'en', 'pt-BR', 'pt-PT', 'es', 'fr', 'de', 'it', 'tr', 'ru'
    ],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig
