export const index = function (req, res, next) {
  const data = {camera: 'Leica M2'}
  res.json(data)
}
