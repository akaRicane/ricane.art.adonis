import { LanguageTextsDictionary } from '#types/global.js'
import { I18n } from '@adonisjs/i18n'

export default class HomeTextsService {
  getContent(ctxI18n: I18n): LanguageTextsDictionary {
    return {
      me_title: ctxI18n.t('home.me_title'),
      me_body: ctxI18n.t('home.me_body'),
      me_link: ctxI18n.t('home.me_link'),
      music_title: ctxI18n.t('home.music_title'),
      music_body: ctxI18n.t('home.music_body'),
      music_link: ctxI18n.t('home.music_link'),
      projects_title: ctxI18n.t('home.projects_title'),
      projects_body: ctxI18n.t('home.projects_body'),
      projects_link: ctxI18n.t('home.projects_link'),
      welcome_title: ctxI18n.t('home.welcome_title'),
      welcome_body: ctxI18n.t('home.welcome_body'),
      welcome_link: ctxI18n.t('home.welcome_link'),
    }
  }
}
