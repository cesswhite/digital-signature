// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [{ name: 'robots', content: 'index, follow, max-image-preview:large' }],
      link: [{ rel: 'canonical', href: 'https://signature.ecostudios.dev/' }],
    },
  },
  modules: ["@nuxt/ui", "nuxt-signature-pad"]
})
