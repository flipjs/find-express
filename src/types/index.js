import express from 'express'

import {
  index,
  create,
  show,
  update,
  destroy
} from './type-controller'

const router = express.Router()

router
  .get('/', index)
  .post('/', create)
  .get('/:id', show)
  .put('/:id', update)
  .delete('/:id', destroy)

export default router
