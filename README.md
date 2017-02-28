# seattle-boundaries-data

GeoJSON for various boundaries related to Seattle.

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
- Seattle Police Department
  - [Beats](/data/spd-beats.geojson)
  - [Precincts](/data/spd-precints.geojson)
  - [Micro Community Policing Plan Areas](/data/spd-mcpp-areas.geojson)
- [Residential Urban Villages](/data/ruv.geojson)
- Seattle public schools 
  - [Public school locations](/data/sps_school_site_2015_2016.geojson)
  - Attendance area maps
    - [Elementary schools](/data/sps_attendance_area_ES.geojson)
    - [Middle schools](/data/sps_attendance_area_MS.geojson)
    - [High schools](/data/sps_attendance_area_HS.geojson)
- [ZIP codes](/data/zip-codes.geojson)
- [Zoning](/data/zoning.geojson)

## How to access the data

### Web map

At [boundaries.seattle.io](https://boundaries.seattle.io) you can view each boundary on a map by entering a location.

### JSON API

Request the data via a JSON API by using [boundaries-api.seattle.io](https://boundaries-api.seattle.io). 

Example request:

```
GET https://boundaries-api.seattle.io/boundaries?long=-122.345002&lat=47.667044
```

### npm

This data is available via [npm](https://npmjs.com/seattle-boundaries-data) to use as a JavaScript/Node.js module.

**Install:**

```
npm install --save seattle-boundaries-data
```

**Usage:**

```
var boundaries = require('seattle-boundaries-data')

var matches = boundaries({
  long: -122.345002,
  lat: 47.667044,
  dataset: dataset
})
```

Returns a `FeatureCollection` where all the features are a match for the point. The slug of the dataset that the feature is from is stored in the properties of the feature with the key `dataset`.

### Dat

[Dat](https://datproject.org/) is a decentralized data-sharing tool. There are a few ways you might get this data using Dat.

**Dat command-line tool**

```sh
npm i -g dat
dat clone dat://a20663417ea679e7b9230ffba08f1da65072d5790112e20c3bb8bb24df46e25a seattle-boundaries-data
```

**Dat Desktop**

The desktop app lets you download and share files via Dat.

- [Install the Dat Desktop app](https://datproject.org/install)
- Import this dat dat://a20663417ea679e7b9230ffba08f1da65072d5790112e20c3bb8bb24df46e25a
- View the downloaded files

**Beaker Browser**

Beaker is a new browser with support for p2p file sharing.

- [Install Beaker](https://beakerbrowser.com)
- visit `dat://a20663417ea679e7b9230ffba08f1da65072d5790112e20c3bb8bb24df46e25a` as a url in the Beaker

## Contributing
- Fork the repo
- Create a branch for your changes
- Submit pull request
- When possible, we attempt to pull data from [City of Seattle](https://data.seattle.gov/) using Node.js but we are open to other solutions
  as well.

## TODO

See the [issues queue](http://github.com/openseattle/seattle-boundaries/issues) for todos.

## License
[CC0 1.0 Universal (CC0 1.0)](https://creativecommons.org/publicdomain/zero/1.0/)
