import { Button } from '#shadcn/button'
import { Head } from '@inertiajs/react'
import { HomeTextsI } from '../../../resources/types/home'
import { AboutResponsiveDrawer } from './components/about_responsive_drawer'

export default function Home(props: { homeTexts: HomeTextsI }) {
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
          <span>{props.homeTexts.hero_welcome}</span>
          <Button>Click me</Button>
        </div>
        {/* Footer */}
        <footer className="flex flex-row justify-center items-center fixed bottom-0 w-screen h-10 bg-white">
          <AboutResponsiveDrawer
            drawerText={props.homeTexts.about_drawer}
            titleContent={props.homeTexts.about_drawer_title}
            bodyContent={props.homeTexts.about_drawer_body}
            backText={props.homeTexts.about_drawer_back}
          />
        </footer>
      </div>
    </>
  )
}
