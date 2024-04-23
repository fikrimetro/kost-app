import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: false,
    icons: {
      defaultSet: 'tabler',
      aliases: tablerIconAliases,
      sets: {
        tabler: tablerIconSet,
      },
    },
  })
  nuxt.vueApp.use(vuetify)
})
