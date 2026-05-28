import es from './es.json';
import en from './en.json';

export type Locale = 'es' | 'en';

const translations: Record<Locale, typeof es> = { es, en };

export function t(locale: Locale, key: string): string {
  const dict = translations[locale] as Record<string, unknown>;
  const keys = key.split('.');
  let result: unknown = dict;
  for (const k of keys) {
    if (result && typeof result === 'object') {
      result = (result as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  return typeof result === 'string' ? result : key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] === 'en') return 'en';
  return 'es';
}

export function getAlternateUrl(currentPath: string, targetLocale: Locale): string {
  const cleanPath = currentPath.replace(/^\/en(\/|$)/, '/').replace(/\/$/, '') || '/';
  if (targetLocale === 'en') {
    return `/en${cleanPath === '/' ? '' : cleanPath}`;
  }
  return cleanPath || '/';
}

export function localePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'en') return `/en${clean === '/' ? '' : clean}`;
  return clean;
}
