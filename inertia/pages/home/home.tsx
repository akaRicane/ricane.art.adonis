import { Head } from '@inertiajs/react'

export default function Home(props: { version: number; heroText: string }) {
  return (
    <>
      <Head title="Homepage" />

      <div className="w-screen h-screen">
        <div className="title bg-blue-500">AdonisJS {props.version} x Inertia x React</div>

        <span>{props.heroText}</span>
      </div>
    </>
  )
}
