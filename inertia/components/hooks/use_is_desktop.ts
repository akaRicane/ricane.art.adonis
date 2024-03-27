import React from 'react'

export default function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState(true)

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isDesktop
}
