import { z } from 'zod'
import { createEnv } from '@t3-oss/env-core'

export const env = createEnv({
    isServer: true,
    server: {
        PORT: z.coerce.number(),
        DATABASE_URL: z.string().url()
    },
    runtimeEnv: process.env
})