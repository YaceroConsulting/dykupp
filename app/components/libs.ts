export function classNames(...classes: Array<string | boolean>) {
    return classes.filter(Boolean).join(' ')
}

export function publicAsset(path: string) {
    const normalizedPath = path.replace(/^\/+/, '')
    const configuredBaseUrl = import.meta.env.VITE_BASE_URL || import.meta.env.BASE_URL
    const normalizedBaseUrl = configuredBaseUrl
        ? `${configuredBaseUrl.replace(/\/+$/, '')}/`
        : '/'

    return `${normalizedBaseUrl}${normalizedPath}`
}
