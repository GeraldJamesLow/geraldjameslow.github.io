import { useEffect } from 'react'

type PageMetaProps = {
  title: string
  favicon?: string
}

export function PageMeta({ title, favicon }: PageMetaProps) {
  useEffect(() => {
    document.title = title

    if (favicon === undefined) {
      return
    }

    let faviconLink = document.querySelector<HTMLLinkElement>("link[rel='icon']")

    if (faviconLink === null) {
      faviconLink = document.createElement('link')
      faviconLink.rel = 'icon'
      document.head.appendChild(faviconLink)
    }

    faviconLink.href = favicon
  }, [title, favicon])

  return null
}