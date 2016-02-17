#! /usr/bin/env node

var fs = require('fs')
var each = require('each-async')
var path = require('path')
var Socrata = require('node-socrata')
var util = require('util')

var file = path.join(__dirname, '..', 'data', 'spd-precincts.geojson')

var config = {
  hostDomain: 'https://data.seattle.gov',
  resource: 'rbau-tzm2'
}

var soda = new Socrata(config)

var geo = {
  'type': 'FeatureCollection',
  'features':[],
  'properties':[]
}

soda.get(function(err, response, data) {
  each(data, function (item, i, done) {
    var feature = {
      type: 'Feature',
      geometry: item.the_geom,
      properties: {
        name: item.name
      }
    }

    geo.features.push(feature)
    done()
  }, function() {
    fs.writeFile(file, JSON.stringify(geo), function (err) {
      if (err) console.log(err)
    })
  })
})
