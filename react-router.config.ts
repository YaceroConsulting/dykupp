import type { Config } from '@react-router/dev/config'
import { copyFileSync, existsSync, readdirSync, renameSync, rmSync } from 'node:fs'
import { join } from 'node:path'

export default {
    basename: process.env.VITE_BASE_URL || '/dykupp/',
    prerender: true,
    ssr: false,
    buildEnd: async ({ reactRouterConfig }) => {
        const clientBuildPath = join(reactRouterConfig.buildDirectory, 'client')
        const basename = reactRouterConfig.basename.replace(/^\/|\/$/g, '')
        const basenamePath = join(clientBuildPath, basename)

        if (basename && existsSync(basenamePath)) {
            const files = readdirSync(basenamePath)
            for (const file of files) {
                renameSync(join(basenamePath, file), join(clientBuildPath, file))
            }
            rmSync(basenamePath, { recursive: true })
        }

        copyFileSync(
            join(clientBuildPath, 'index.html'),
            join(clientBuildPath, '404.html')
        )
    },
} satisfies Config
