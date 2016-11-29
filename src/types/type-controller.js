import Type from './Type'

export const index = function (req, res) {
  Type.find({})
    .then(data => {
      res.json({records: data})
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const create = function (req, res) {
  const type = new Type(req.body)
  type.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const show = function (req, res) {
  Type.findById(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const update = function (req, res) {
  Type.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const destroy = function (req, res) {
  Type.findByIdAndRemove(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}
