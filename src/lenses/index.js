import express from 'express'

import { index } from './lens-controller'

const router = express.Router()

router.get('/', index)

export default router
