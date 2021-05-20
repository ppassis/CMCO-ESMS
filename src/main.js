// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/all.min.css'
import '~/assets/scss/main.scss'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import {
  faPaperPlane,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faNewspaper,
  faMobileAlt,
  faBalanceScale,
  faClipboardList,
  faAward,
  faGraduationCap,
  faVials,
  faBars,
  faUserAstronaut,
  faStopwatch,
  faStar,
  faFlag,
  faBuilding,
  faMapMarkerAlt,
  faUniversity,
  faUserFriends,
  faDesktop,
  faUniversalAccess,
  faQuestion,
  faGavel,
  faListUl,
  faRoute,
  faVial,
  faCommentDots,
  faFile,
  faSearch,
  faListOl,
  faWrench,
  faCheck,
  faTasks,
  faUserGraduate,
  faSyncAlt,
  faCalendarCheck,
  faInfoCircle,
  faBullhorn
} from '@fortawesome/free-solid-svg-icons'
import {
  faFilePdf,
  faFileWord,
  faFileAlt,
  faFileImage,
  faEdit,
} from '@fortawesome/free-regular-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(
  faGithub,
  faTwitter,
  faPaperPlane,
  faFilePdf,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faFileWord,
  faFileAlt,
  faFileImage,
  faEdit,
  faNewspaper,
  faMobileAlt,
  faBalanceScale,
  faClipboardList,
  faAward,
  faGraduationCap,
  faVials,
  faBars,
  faUserAstronaut,
  faStopwatch,
  faStar,
  faFlag,
  faBuilding,
  faMapMarkerAlt,
  faUniversity,
  faUserFriends,
  faDesktop,
  faInstagram,
  faYoutube,
  faLinkedin,
  faUniversalAccess,
  faQuestion,
  faGavel,
  faListUl,
  faRoute,
  faVial,
  faCommentDots,
  faFile,
  faSearch,
  faListOl,
  faWrench,
  faCheck,
  faTasks,
  faUserGraduate,
  faSyncAlt,
  faCalendarCheck,
  faInfoCircle,
  faBullhorn
  )
  export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global componentÒ
    //head.script.push({ src: '/assets/js/all.min.js', body: false })
    Vue.component('Layout', DefaultLayout)
    Vue.component('font-awesome', FontAwesomeIcon)
    head.htmlAttrs = { lang: 'fr' }
}
