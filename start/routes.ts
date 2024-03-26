/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async ({ inertia, i18n }) => {
  console.log(i18n.locale)
  return await inertia.render('home/page', { version: 6, heroText: i18n.t('home.hero_welcome') })
})
