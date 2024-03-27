import { AboutResponsiveDrawer } from '#components/about_responsive_drawer.js'
import { LanguageTextsDictionary } from '#types/global.js'

export default function MusicHeader(props: {
  isDesktop: boolean
  aboutTexts: LanguageTextsDictionary
}) {
  return (
    <header className="flex flex-row items-center justify-center w-screen h-12 px-4">
      <p className="w-1/2">ricane.art</p>
      <div className="flex justify-end w-1/2">
        <AboutResponsiveDrawer isDesktop={props.isDesktop} aboutTexts={props.aboutTexts} />
      </div>
    </header>
  )
}
