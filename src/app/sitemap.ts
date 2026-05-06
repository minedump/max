import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.company.domain
  
  // Собираем все маршруты из навигации
  const navigationRoutes = [
    ...siteConfig.navigation.header,
    ...siteConfig.navigation.footer
  ]
  
  // Убираем дубликаты маршрутов
  const uniqueRoutes = Array.from(
    new Map(navigationRoutes.map(route => [route.href, route])).values()
  )
  
  // Создаем массив всех маршрутов
  const routes = [
    '', // главная страница
    ...uniqueRoutes.map(route => route.href)
  ]
  
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}