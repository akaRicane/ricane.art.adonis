/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { HomeTextsI } from '../resources/types/home.js'

router.get('/', async ({ inertia, i18n }) => {
  const homeTexts = {
    hero_welcome: i18n.t('home.hero_welcome'),
    about_drawer: i18n.t('home.about_drawer'),
    about_drawer_title: i18n.t('home.about_drawer_title'),
    about_drawer_body: i18n.t('home.about_drawer_body'),
    about_drawer_back: i18n.t('home.about_drawer_back'),
  } as HomeTextsI
  return await inertia.render('home/page', { homeTexts })
})
