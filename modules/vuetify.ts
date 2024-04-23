import { defineNuxtModule } from '@nuxt/kit'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtModule({
  setup(_opts, nuxt) {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      if (!config.plugins)
        config.plugins = []
      config.plugins.push(
        vuetify({
          autoImport: false,
          styles: {
            configFile: 'assets/styles/plugins/vuetify.scss',
          },
        }),
      )
    })
  },
})
