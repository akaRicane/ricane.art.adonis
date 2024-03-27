import { LanguageTextsDictionary } from '#types/global'
import { Head } from '@inertiajs/react'
import React from 'react'
import { AboutResponsiveDrawer } from './components/about_responsive_drawer'
import { InteractiveHomeContent } from './components/home_interactive_body_content'

export default function Home(props: {
  homeTexts: LanguageTextsDictionary
  aboutTexts: LanguageTextsDictionary
}) {
  const [isDesktop, setIsDesktop] = React.useState(false)

  React.useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  }
  return (
    <>
      <Head title="Homepage" />

      <div className="flex flex-col self-center justify-center w-screen h-screen bg-white">
        {/* Header */}
        <header className="flex flex-row items-center justify-center w-screen h-12 px-4">
          <p className="w-1/2">ricane.art</p>
          <div className="flex justify-end w-1/2">
            {isDesktop && (
              <AboutResponsiveDrawer isDesktop={isDesktop} aboutTexts={props.aboutTexts} />
            )}
          </div>
        </header>
        {/* Body */}
        <div className="flex-grow w-full px-6 py-2 my-2">
          <InteractiveHomeContent isDesktop={isDesktop} contentTexts={props.homeTexts} />
        </div>
        {/* Footer */}
        {!isDesktop && (
          <footer className="flex flex-col items-center justify-center w-screen h-10 bg-fuchsia-500">
            <AboutResponsiveDrawer isDesktop={isDesktop} aboutTexts={props.aboutTexts} />
          </footer>
        )}
      </div>
    </>
  )
}
