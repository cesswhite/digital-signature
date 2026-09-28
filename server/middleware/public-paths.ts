// This application has a single public page; unknown paths must not render it.
const publicPaths = new Set(['/', '/robots.txt', '/sitemap.xml', '/llms.txt', '/favicon.ico'])

export default defineEventHandler((event) => {
  const pathname = getRequestURL(event).pathname
  if (publicPaths.has(pathname) || pathname.startsWith('/_nuxt/') || pathname.startsWith('/api/_nuxt_icon/') || pathname === '/__nuxt_error') {
    return
  }

  setHeader(event, 'X-Robots-Tag', 'noindex')
  setResponseStatus(event, 404, 'Page not found')
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return 'Page not found'
})
