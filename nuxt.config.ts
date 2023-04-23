export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
        },      
    },
    modules: [
      '@nuxtjs/tailwindcss',
      'nuxt-api-party'
  ],
  css: [
    '~/assets/global.css'
  ],
    plugins: [
    { src: '~/plugins/mitt.client.ts', mode: 'client' }
  ],
    apiParty: {
    endpoints: {
      jsonPlaceholder: {
        url: process.env.JSON_PLACEHOLDER_API_BASE_URL!,
        headers: {
          Authorization: `Bearer ${process.env.JSON_PLACEHOLDER_API_TOKEN}`
        }
      }
    }
  }
})
