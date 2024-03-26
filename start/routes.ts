/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import i18nManager from '@adonisjs/i18n/services/main'

const i18n = i18nManager.locale('en')
router.on('/').renderInertia('home/home', { version: 6, heroText: i18n.t('home.hero_welcome') })
