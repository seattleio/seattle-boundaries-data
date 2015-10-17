var turf = require('turf')
var flatten = require('lodash.flatten')
var data = require('./data')

module.exports = function boundaries (long, lat) {
  var point = turf.point([long, lat])

  return flatten(Object.keys(data).map(function (key) {
    return data[key].features
      .filter(function (boundary) {
        return turf.inside(point, boundary)
      })
      .map(function (boundary) {
        var result = {}
        result[key] = boundary
        return result
      })
  }))
}
