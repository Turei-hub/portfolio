import { useEffect } from 'react'

const BASE_URL = 'https://turei.dev'

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(path) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', `${BASE_URL}${path}`)
}

export default function useMeta({ title, description, path }) {
  useEffect(() => {
    document.title = title

    setMeta('description', description)

    setProperty('og:title', title)
    setProperty('og:description', description)
    setProperty('og:url', `${BASE_URL}${path}`)

    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:url', `${BASE_URL}${path}`)

    setCanonical(path)
  }, [title, description, path])
}
