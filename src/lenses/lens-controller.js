import Lens from './Lens'

export const index = function (req, res) {
  Lens.find({})
    .then(data => {
      res.json({records: data})
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const create = function (req, res) {
  const lens = new Lens(req.body)
  lens.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const show = function (req, res) {
  Lens.findById(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const update = function (req, res) {
  Lens.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const destroy = function (req, res) {
  Lens.findByIdAndRemove(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}
