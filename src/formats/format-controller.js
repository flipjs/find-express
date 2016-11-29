import Format from './Format'

export const index = function (req, res) {
  Format.find({})
    .then(data => {
      res.json({records: data})
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const create = function (req, res) {
  const format = new Format(req.body)
  format.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const show = function (req, res) {
  Format.findById(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const update = function (req, res) {
  Format.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const destroy = function (req, res) {
  Format.findByIdAndRemove(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}
