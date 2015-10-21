# Seattle boundaries

> geojson for various boundaries in Seattle

## Boundaries:

- [census tracts](/data/census-tracts.geojson)
- [city council districts](/data/city-council-districts.geojson)
- [city council districts as topojson](/data/city-council-districts.topojson.json)
- [city limits](/data/city-limits.geojson)
- [neighborhoods](/data/neighborhoods.geojson)
- [Seattle Congressional Districts](/data/seattle-congress.geojson)
- [Seattle parks from open street map](/data/seattle-parks-osm.geojson)
- [Seattle parks points from data.seattle.gov](/data/seattle-parks-points.geojson)
- [Seattle public schools attendance area map Elementary Schools](/data/sps_attendance_area_ES.geojson)
- [Seattle public schools attendance area map Middle Schools](/data/sps_attendance_area_MS.geojson)
- [Seattle public schools attendance area map High Schools](/data/sps_attendance_area_HS.geojson)
- [Seattle public schools Site Map](/data/sps_school_site_2015_2016.geojson)
- [zip codes](/data/zip-codes.geojson)

## Install

To install the node/js module:

```
npm install --save seattle-boundaries
```

## Usage

```
var boundaries = require('seattle-boundaries')

var matches = boundaries(-122.345002, 47.667044)
```

## API

### `var boundaries = require('seattle-boundaries')`

### `boundaries(long, lat)`

Returns a `FeatureCollection` where all the features are a match for the point. The slug of the dataset that the feature is from is stored in the properties of the feature with the key `dataset`.

## Contributing:
- Fork the repo
- Create a branch for your changes
- Submit pull request
- When possible, we attempt to pull data from [City of Seattle](https://data.seattle.gov/) using Node.js but we are open to other solutions
  as well.

### TODO:

See the [issues queue](http://github.com/openseattle/seattle-boundaries/issues) for todos.

## License
[CC0 1.0 Universal (CC0 1.0)](https://creativecommons.org/publicdomain/zero/1.0/)
