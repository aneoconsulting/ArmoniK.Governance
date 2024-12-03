const baseURL = process.env.NODE_ENV === "production" ? "/ArmoniK.Community/" : "/";

export default defineNuxtConfig({
  app: {
    baseURL: baseURL,
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          href: `${baseURL}favicon.ico`,
        }
      ]
    }
  },

  extends: "@aneoconsultingfr/armonik-docs-theme",

  runtimeConfig: {
    public: {
      siteName: 'ArmoniK.Community',
      siteDescription: 'All our ways of working and our good practices.',
    }
  },

  robots: { 
    robotsTxt: false
  },

  ogImage: {
    enabled: false,
  }
})
