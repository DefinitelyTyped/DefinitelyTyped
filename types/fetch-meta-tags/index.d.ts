declare module 'fetch-meta-tags' {
  export default function fetchMeta(site: string): {
    url: string
    title?: string
    description?: string
    icon?: string
    image?: string
  }
}

