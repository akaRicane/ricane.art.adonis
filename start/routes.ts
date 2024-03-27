/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AboutTextsService from '#services/about_texts_service'
import HomeTextsService from '#services/home_texts_service'
import router from '@adonisjs/core/services/router'

router.get('/', async ({ inertia, i18n }) => {
  const homeTextsService = new HomeTextsService()
  const homeTexts = homeTextsService.getContent(i18n)

  const aboutTextsService = new AboutTextsService()
  const aboutTexts = aboutTextsService.getContent(i18n)

  return await inertia.render('home/page', { homeTexts, aboutTexts })
})
