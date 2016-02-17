var toJSON = require('shp2json');
toJSON(process.stdin).pipe(process.stdout);
process.stdin.resume();