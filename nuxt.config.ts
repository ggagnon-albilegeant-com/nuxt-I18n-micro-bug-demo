// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: [
    'nuxt-i18n-micro',
  ],
  devtools: { enabled: false },
  // Localisation module, nuxt-i18n-micro (used by NuxtUI, but not natively)
  i18n: {
    locales: [
      { code: "en", iso: "en-CA", dir: "ltr", displayName: "English" },
      { code: "fr", iso: "fr-CA", dir: "ltr", displayName: "Français" },
    ],
    defaultLocale: "fr",
    translationDir: "locales",
    meta: true,
    localeCookie: "user-local",
    autoDetectLanguage: true,
    strategy: "no_prefix",
    hmr: true,
  },
})
