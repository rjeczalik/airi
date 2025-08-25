export function isAbsoluteUrl(url: string) {
  try {
    // This could be the most reliable way to check so using side-effect is acceptable
    // eslint-disable-next-line no-new
    new URL(url)
    return true
  }
  catch {
    return false
  }
}

/**
 * Removes trailing slash from a URL string if it exists.
 * @param url - The URL string to process
 * @returns The URL without a trailing slash
 */
export function removeTrailingSlash(url: string): string {
  return url.endsWith('/') ? url.slice(0, -1) : url
}
