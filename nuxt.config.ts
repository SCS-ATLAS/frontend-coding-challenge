// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  css: ['~/node_modules/@swisscom/sdx/dist/css/sdx.css', '~/node_modules/@swisscom/sdx/dist/css/webcomponents.css'],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('sdx-'),
    },
  },
})
