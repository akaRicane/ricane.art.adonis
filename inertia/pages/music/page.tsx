import useIsDesktop from '#components/hooks/use_is_desktop'
import { LanguageTextsDictionary } from '#types/global.js'
import { Head } from '@inertiajs/react'
import MusicHeader from './components/music_header'

export default function Music(props: { aboutTexts: LanguageTextsDictionary }) {
  const isDesktop = useIsDesktop()

  return (
    <>
      <Head title="Ricane Music" />

      <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
        <MusicHeader isDesktop={isDesktop} aboutTexts={props.aboutTexts} />
      </div>
    </>
  )
}
