import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '#shadcn/accordion.js'
import { Button } from '#shadcn/button.js'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '#shadcn/card.js'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '#shadcn/carousel.js'
import { LanguageTextsDictionary } from '#types/global'
import Autoplay from 'embla-carousel-autoplay'

import React from 'react'

export const InteractiveHomeContent = (props: {
  isDesktop: boolean
  contentTexts: LanguageTextsDictionary
}) => {
  const homeContentRef = React.useRef<HTMLDivElement>(null)

  const contentTexts = props.contentTexts
  const contentTemplate = [
    {
      title: contentTexts.welcome_title,
      link: contentTexts.welcome_link,
      body: contentTexts.welcome_body,
    },
    {
      title: contentTexts.music_title,
      link: contentTexts.music_link,
      body: contentTexts.music_body,
    },
    {
      title: contentTexts.projects_title,
      link: contentTexts.projects_link,
      body: contentTexts.projects_body,
    },
    { title: contentTexts.me_title, link: contentTexts.me_link, body: contentTexts.me_body },
  ] as ContentProvder

  return (
    <div ref={homeContentRef} className="flex flex-col items-center w-full h-full ">
      {props.isDesktop ? (
        <ContentAsCarousel content={contentTemplate} />
      ) : (
        <ContentAsAccordion content={contentTemplate} />
      )}
    </div>
  )
}

type ContentProvder = CarouselCard[]

interface CarouselCard {
  title: string
  body: string
  link: string
}

const ContentAsCarousel = (props: { content: ContentProvder }) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  React.useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full h-full px-12 mx-2 ">
      <Carousel
        className="flex items-center h-full"
        opts={{ align: 'start', loop: true }}
        orientation={'horizontal'}
        setApi={setApi}
        plugins={[plugin.current]}
      >
        <CarouselContent className="">
          {props.content.map((content: CarouselCard, index) => (
            <CarouselItem key={index} className="">
              <Card className="bg-blue-300 h-max">
                <CardHeader className="flex flex-row items-center ">
                  <CardTitle className="w-4/5 ">{content.title}</CardTitle>
                  <span className="flex justify-end w-1/5">
                    {current} / {count}
                  </span>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center h-full">
                  <span className="h-full">{content.body}</span>
                </CardContent>
                <CardFooter className="flex flex-col self-center justify-center ">
                  <Button variant="ghost">{content.link}</Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

const ContentAsAccordion = (props: { content: ContentProvder }) => {
  const [openItem, setOpenItem] = React.useState('item-0')
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-6">
      <Accordion type="single" className="w-full" value={openItem}>
        {props.content.map((content: CarouselCard, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="w-full bg-blue-300">
            <AccordionTrigger className="" onClick={() => setOpenItem(`item-${index}`)}>
              {content.title}
            </AccordionTrigger>
            <AccordionContent className="">
              <div className="flex flex-col items-center">
                <p className="font-extralight">{content.body}</p>
                <Button className="flex justify-center w-1/2 h-fullrounded-md" variant={'ghost'}>
                  {content.link}
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
