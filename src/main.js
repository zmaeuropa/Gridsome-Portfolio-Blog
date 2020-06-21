// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '~/assets/css/style.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin , faSketch } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faMobileAlt, faCodeBranch, faCopyright , faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faGithub,faLinkedin,faSketch,faLaptopCode,faMobileAlt,faCodeBranch,faCopyright,faCloudDownloadAlt)

import DefaultLayout from '~/layouts/Default.vue'
import BlogLayout from '~/layouts/Blog.vue'

import 'prismjs/themes/prism.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
  Vue.component('Blog' , BlogLayout)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
