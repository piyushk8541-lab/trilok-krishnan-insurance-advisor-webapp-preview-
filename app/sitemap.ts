import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://trilok-krishnan-insurance.vercel.app'
  const now = new Date()
  const pages = [
    '',
    '/insurance-advisor-bihar',
    '/car-insurance-bihar',
    '/health-insurance-bihar',
    '/bike-insurance-bihar',
    '/travel-insurance-bihar',
    '/insurance-renewal-bihar',
    '/claim-assistance-bihar',
    '/insurance-advisor-muzaffarpur',
    '/insurance-advisor-patna',
    '/insurance-advisor-gaya',
  ]
  return pages.map(p => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : 0.7
  }))
}
