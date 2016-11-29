import express from 'express'

import { index } from './film-controller'

const router = express.Router()

router.get('/', index)

export default router
