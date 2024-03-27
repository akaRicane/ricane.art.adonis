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
    { title: 'Welcome', body: contentTexts.hero_welcome },
    { title: 'Card 2', body: contentTexts.hero_welcome },
  ] as CarouselContentProvder

  return (
    <div ref={homeContentRef} className="flex flex-col items-center w-full h-full bg-fuchsia-200">
      {/* <p>isDesktop: {isDesktop.toString()}</p>
      <p>isLandscape: {isLandscape.toString()}</p> */}
      {props.isDesktop ? (
        <ContentAsCarousel content={contentTemplate} />
      ) : (
        <ContentAsAccordion content={contentTemplate} />
      )}
    </div>
  )
}

type CarouselContentProvder = CarouselCard[]

interface CarouselCard {
  title: string
  body: string
}

const ContentAsCarousel = (props: { content: CarouselContentProvder }) => {
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
    <>
      <div className="h-full px-12 mx-2 bg-red-500">
        <Carousel
          className="flex items-center h-full bg-fuchsia-500"
          opts={{ align: 'start', loop: true }}
          orientation={'horizontal'}
          setApi={setApi}
          plugins={[plugin.current]}
        >
          <CarouselContent className="bg-red-500">
            {props.content.map((content: CarouselCard, index) => (
              <CarouselItem key={index} className="bg-blue-800">
                <Card className="bg-blue-300 h-max">
                  <CardHeader className="bg-blue-500">
                    <CardTitle>{content.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center h-full">
                    <span className="h-full">{content.body}</span>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center justify-center bg-blue-100">
                    <span className="flex self-center bg-fuchsia-200">visit {content.title}</span>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex items-center h-12 text-sm text-center text-muted-foreground">
        Slide {current} of {count}
      </div>
    </>
  )
}

const ContentAsAccordion = (props: { content: CarouselContentProvder }) => {
  const [openItem, setOpenItem] = React.useState('item-0')
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Accordion type="single" className="w-full" value={openItem}>
        {props.content.map((content: CarouselCard, index) => (
          <AccordionItem value={`item-${index}`} className="w-full">
            <AccordionTrigger className="bg-blue-500 " onClick={() => setOpenItem(`item-${index}`)}>
              {content.title}
            </AccordionTrigger>
            <AccordionContent className="bg-blue-300 ">
              <div className="flex flex-col items-center">
                <p className="font-extralight">{content.body}</p>
                <Button
                  className="flex justify-center w-1/2 h-full bg-gray-500 rounded-md"
                  variant={'ghost'}
                >
                  visit {content.title}
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
