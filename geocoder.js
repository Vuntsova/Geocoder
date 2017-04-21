/**
 * Created by Emiliya Vuntsova on 4/20/17.
 */
var geocoder = require("geocoder");


var nodeArgs = process.argv;
// console.log(nodeArgs);

var address = "";

for (var i = 2; i < nodeArgs.length; i++){
    address = address + " " + nodeArgs[i];
}
console.log(address);

geocoder.geocode(address, function (err, data) {
//    Do something with data
    console.log(JSON.stringify(data, null, 2));
});
