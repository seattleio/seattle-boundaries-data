#! /usr/bin/env node

var fs = require('fs');
var each = require('each-async');
var path = require('path');
var Socrata = require('node-socrata');
var util = require('util');

var file = path.join(__dirname, '..', 'data', 'parks-locations.json');

var config = {
  hostDomain: "https://data.seattle.gov",
  resource: "p262-qazs"
};

soda = new Socrata(config);

var geo = {
    "type": "FeatureCollection",
    "features":[],
    "properties":[]
};


soda.get(function(err, response, data) {
  each(data, function (item, i, done) {
    var feature = {
      "type": "Feature",
      "geometry": {
        "type": "Point"
      },
      "properties": {
        "property": "name"
      }
    };

    feature.geometry.coordinates = [+item.longitude, +item.latitude];
    feature.properties = item.common_name;

    geo.features.push(feature);
    done();
  }, function() {
    fs.writeFile(file, JSON.stringify(geo), function (err) {
      if (err) console.log(err)
    });
  });
});

