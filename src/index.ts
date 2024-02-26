import express from 'express'

import { env } from '@/utils/env'

const app = express()

app.listen(env.PORT, () => {
    console.log(`Server listening on Port: ${env.PORT}`)
})