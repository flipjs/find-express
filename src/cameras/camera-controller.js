import Camera from './Camera'

export const index = function (req, res) {
  Camera.find({})
    .then(data => {
      res.json({records: data})
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const create = function (req, res) {
  const camera = new Camera(req.body)
  camera.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const show = function (req, res) {
  Camera.findById(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const update = function (req, res) {
  Camera.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}

export const destroy = function (req, res) {
  Camera.findByIdAndRemove(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({error: err.message})
    })
}
