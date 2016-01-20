# Seattle boundaries

GeoJSON for various boundaries within Seattle

## Boundaries
- [City limits](/data/city-limits.geojson)
- [US Census tracts](/data/census-tracts.geojson)
- Seattle City Council districts
  - [GeoJSON](/data/city-council-districts.geojson)
  - [TopoJSON](/data/city-council-districts.topojson)
- [Neighborhoods](/data/neighborhoods.geojson)
- [Seattle congressional districts](/data/seattle-congress.geojson)
- Seattle parks
  - [From open street map](/data/seattle-parks-osm.geojson)
  - [From data.seattle.gov](/data/seattle-parks-points.geojson)
- Seattle public schools 
  - [Public school locations](/data/sps_school_site_2015_2016.geojson)
  - Attendance area maps
    - [Elementary schools](/data/sps_attendance_area_ES.geojson)
    - [Middle schools](/data/sps_attendance_area_MS.geojson)
    - [High schools](/data/sps_attendance_area_HS.geojson)
- [ZIP codes](/data/zip-codes.geojson)

## Install

To install the Node.js module:

```
npm install --save seattle-boundaries
```

## Usage

```
var boundaries = require('seattle-boundaries')

var matches = boundaries(-122.345002, 47.667044)
```

## API

```
var boundaries = require('seattle-boundaries')
...
boundaries(long, lat)
```

Returns a `FeatureCollection` where all the features are a match for the point. The slug of the dataset that the feature is from is stored in the properties of the feature with the key `dataset`.

## Contributing
- Fork the repo
- Create a branch for your changes
- Submit pull request
- When possible, we attempt to pull data from [City of Seattle](https://data.seattle.gov/) using Node.js but we are open to other solutions
  as well.
  
## See also
- [boundaries.seattle.io](https://github.com/seattleio/boundaries.seattle.io) – an api server for the boundaries.

## TODO

See the [issues queue](http://github.com/openseattle/seattle-boundaries/issues) for todos.

## License
[CC0 1.0 Universal (CC0 1.0)](https://creativecommons.org/publicdomain/zero/1.0/)
