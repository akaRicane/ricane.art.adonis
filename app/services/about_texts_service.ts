import { LanguageTextsDictionary } from '#types/global.js'
import { I18n } from '@adonisjs/i18n'

export default class AboutTextsService {
  getContent(ctxI18n: I18n): LanguageTextsDictionary {
    return {
      about_drawer: ctxI18n.t('home.about_drawer'),
      about_drawer_title: ctxI18n.t('home.about_drawer_title'),
      about_drawer_body: ctxI18n.t('home.about_drawer_body'),
      about_drawer_back: ctxI18n.t('home.about_drawer_back'),
    }
  }
}
