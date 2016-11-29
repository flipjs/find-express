import Brand from './Brand'

export const index = function (req, res) {
  Brand.find({})
    .then(data => {
      res.json({records: data})
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const create = function (req, res) {
  const brand = new Brand(req.body)
  brand.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const show = function (req, res) {
  Brand.findById(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const update = function (req, res) {
  Brand.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const destroy = function (req, res) {
  Brand.findByIdAndRemove(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}
