// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtoolsKey = devtools
// }

import 'uno.css'
import '@/assets/css/main.css'
import 'prismjs/themes/prism-tomorrow.css'

import { defineApp } from 'iles'
import pinia from '@/plugins/pinia'
import vuetify from '@/plugins/vuetify'

export default defineApp({
  enhanceApp({ app }) {
    app.use(pinia)
    app.use(vuetify)
  },
  enhanceIslands({ app }) {
    app.use(pinia)
    app.use(vuetify)
  },
})
