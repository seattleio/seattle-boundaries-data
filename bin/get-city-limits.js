#! /usr/bin/env node

var fs = require('fs');
var each = require('each-async');
var path = require('path');
var Socrata = require('node-socrata');
var util = require('util');

var file = path.join(__dirname, '..', 'data', 'city-limits.json');

var config = {
  hostDomain: "https://data.seattle.gov",
  resource: "uwqp-6qu8",
};

soda = new Socrata(config);

var geo = {
    "type": "FeatureCollection",
    "features":[]
};

var params = {
  where: "juris = 'Seattle'"
};

soda.get(params, function(err, response, data) {
  each(data, function (item, i, done) {
    var feature = {
      "type": "Feature",
      "geometry": {
        "type": "Polygon"
      }
    };

    feature.geometry.coordinates = item.shape.geometry.rings

    geo.features.push(feature);
    done();
  }, function() {
    fs.writeFile(file, JSON.stringify(geo), function (err) {
      if (err) console.log(err)
    });
  });
});

