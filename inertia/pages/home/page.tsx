import { Button } from '#shadcn/button'
import { LanguageTextsDictionary } from '#types/global'
import { Head } from '@inertiajs/react'
import { AboutResponsiveDrawer } from './components/about_responsive_drawer'

export default function Home(props: {
  homeTexts: LanguageTextsDictionary
  aboutTexts: LanguageTextsDictionary
}) {
  const homeTexts = props.homeTexts
  return (
    <>
      <Head title="Homepage" />

      <div className="w-screen h-screen bg-white">
        {/* Header */}
        <header className="flex flex-row justify-center items-center w-screen h-12 bg-red-500">
          Header
        </header>
        {/* Body */}
        <div className="mb-12">
          <span>{homeTexts.hero_welcome}</span>
          <Button>Click me</Button>
        </div>
        {/* Footer */}
        <footer className="flex flex-row justify-center items-center fixed bottom-0 w-screen h-10 bg-white">
          <AboutResponsiveDrawer aboutTexts={props.aboutTexts} />
        </footer>
      </div>
    </>
  )
}
