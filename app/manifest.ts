import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Trilok Krishnan - Insurance Advisor',
    short_name: 'TK Insurance',
    description: 'Professional insurance advisor portal - motor, health, travel, commercial, claim assistance, document guidance',
    start_url: '/',
    display: 'standalone',
    background_color: '#FCFCFD',
    theme_color: '#0E1E3A',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}
