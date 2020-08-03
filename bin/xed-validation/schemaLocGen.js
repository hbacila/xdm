//This script generate the schema location map.
'use strict';
const fs = require('fs');
const glob = require("glob");

glob("tempinput/**/*.schema.json", function(er, files) {
    let schemaLoc = {};
    files.forEach(function(file) {
        let schema = JSON.parse(fs.readFileSync(file));
        schemaLoc[schema["$id"]] = file.replace("tempinput/schemas/","xdm/").replace("tempinput/extensions/", "xdm-extensions/");
    });
    fs.writeFileSync('schemaLoc.json', JSON.stringify(schemaLoc,null,2));
});
