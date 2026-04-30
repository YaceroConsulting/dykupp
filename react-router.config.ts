import type { Config } from '@react-router/dev/config'
import { copyFileSync } from 'node:fs'
import { join } from 'node:path'

export default {
    basename: '/dykupp/',
    routeDiscovery: {
        mode: 'initial',
    },
    ssr: false,
    buildEnd: async ({ reactRouterConfig }) => {
        const clientBuildPath = join(reactRouterConfig.buildDirectory, 'client')
        copyFileSync(
            join(clientBuildPath, 'index.html'),
            join(clientBuildPath, '404.html')
        )
    },
} satisfies Config
