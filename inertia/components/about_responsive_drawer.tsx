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

export const AboutResponsiveDrawer = (props: {
  isDesktop: boolean
  aboutTexts: LanguageTextsDictionary
}) => {
  const [open, setOpen] = React.useState(false)

  const aboutTexts = props.aboutTexts

  if (props.isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost">{aboutTexts.about_drawer}</Button>
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
        <Button className="w-1/2 border-0" variant="ghost">
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
