import * as React from 'react'

import { Button } from '#shadcn/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '#shadcn/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '#shadcn/drawer'
import { LanguageTextsDictionary } from '#types/global'
import { useMediaQuery } from 'usehooks-ts'

export const AboutResponsiveDrawer = (props: { aboutTexts: LanguageTextsDictionary }) => {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const aboutTexts = props.aboutTexts

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">{aboutTexts.about_drawer}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{aboutTexts.about_drawer_title}</DialogTitle>
            <DialogDescription>{aboutTexts.about_drawer_body}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="border-0 w-1/2" variant="ghost">
          {aboutTexts.about_drawer}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{aboutTexts.about_drawer_title}</DrawerTitle>
          <DrawerDescription>{aboutTexts.about_drawer_body}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">{aboutTexts.about_drawer_back}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
