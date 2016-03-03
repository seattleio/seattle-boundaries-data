var jsonfile = require('jsonfile')

module.exports = {
  'census-tracts': jsonfile.readFileSync(__dirname + '/census-tracts.geojson'),
  'city-council-districts': jsonfile.readFileSync(__dirname + '/city-council-districts.geojson'),
  'city-limits': jsonfile.readFileSync(__dirname + '/city-limits.geojson'),
  congress: jsonfile.readFileSync(__dirname + '/seattle-congress.geojson'),
  neighborhoods: jsonfile.readFileSync(__dirname + '/neighborhoods.geojson'),
  parks: jsonfile.readFileSync(__dirname + '/seattle-parks-osm.geojson'),
  'sps-es': jsonfile.readFileSync(__dirname + '/sps_attendance_area_ES.geojson'),
  'sps-hs': jsonfile.readFileSync(__dirname + '/sps_attendance_area_HS.geojson'),
  'sps-ms': jsonfile.readFileSync(__dirname + '/sps_attendance_area_MS.geojson'),
  'wa-legislature': jsonfile.readFileSync(__dirname + '/seattle-waleg.geojson'),
  'zip-codes': jsonfile.readFileSync(__dirname + '/zip-codes.geojson'),
  'spd-beats': jsonfile.readFileSync(__dirname + '/spd-beats.geojson'),
  'spd-precincts': jsonfile.readFileSync(__dirname + '/spd-precincts.geojson'),
  'spd-mcpp-areas': jsonfile.readFileSync(__dirname + '/spd-mcpp-areas.geojson'),
  'zoning': jsonfile.readFileSync(__dirname + '/zoning.geojson')
}
