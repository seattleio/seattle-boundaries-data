var boundaries = require('./index')
var expect = require('chai').expect
var geojsonhint = require('geojsonhint')
var _ = require('lodash')

describe('seattle-boundaries', () => {
  var result = boundaries(-122.345002, 47.667044)

  it('returns a valid geojson file', () => {
    var errors = geojsonhint.hint(result)
    expect(errors).to.have.length(0)
  })

  it('returns a geojson FeatureCollection', () => {
    expect(result.type).to.equal('FeatureCollection')
  })

  it('returns features for matching boundaries from data directory', () => {
    var censusTract = _.find(result.features, { properties: { dataset: 'census-tracts' } })

    expect(censusTract.properties.name).to.equal('Census Tract 46, King, WA')
  })

  it('filters by dataset name', () => {
    var filtered = boundaries(-122.345002, 47.667044, 'spd-beats')
    expect(filtered.features.length).to.equal(1)
  })
})
