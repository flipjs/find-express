import express from 'express'

import { index } from './camera-controller'

const router = express.Router()

router.get('/', index)

export default router
