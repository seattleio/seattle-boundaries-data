#! /usr/bin/env node

var fs = require('fs');
var path = require('path');
var each = require('each-async');
var wiki = require('localwiki-client')();

var file = path.join(__dirname, '..', 'data', 'neighborhoods.json');

var geo = {
  type: 'FeatureCollection',
  features: []
}

var opts = { page__tags: 'neighborhood', region__slug: 'seattle', limit: 100, };

wiki.list('maps', opts, function (err, res) {
  each(res.results, function (item, i, done) {

    wiki.get(item.page, function (err, page) {
      geo.features.push({
        type: 'Feature',
        geometry: item.geom,
        properties: page
      });
      done();
    });
    
  }, function () {
    fs.writeFile(file, JSON.stringify(geo), function (err) {
      if (err) console.log(err)
    });
  });
});
