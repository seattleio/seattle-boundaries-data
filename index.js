var turf = require('turf')
var flatten = require('lodash.flatten')
var data = require('./data')

module.exports = function boundaries (options) {
  var dataset = options.dataset
  var long = options.long
  var lat = options.lat

  var point = turf.point([long, lat])

  var collection = {
    type: 'FeatureCollection',
    features: []
  }

  collection.features = flatten(Object.keys(data).map(function (key) {
    return data[key].features
      .filter(function (boundary) {
        if (dataset) {
          if (key == dataset) return boundary
        } else {
          return boundary
        }
      })
      .filter(function (boundary) {
        return turf.inside(point, boundary)
      })
      .map(function (boundary) {
        boundary.properties = boundary.properties || {}
        boundary.properties.dataset = key
        return boundary
      })
  }))

  return collection
}
