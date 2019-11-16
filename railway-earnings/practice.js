var json = require('./data.json'); //with path
var label = []
var obj = {}
var finalArray = []
json.fields.map(val => label.push(val.label))
var myData = json.data
for (var i = 0; i < myData.length; i++) {
    const ab = myData[i];
    for (var j = 0; j < ab.length; j++) {
        obj[`${label[j]}`] = ab[j]
    }
    finalArray.push(obj)
    obj = {}
}
finalArray.map(val => console.log(Object.keys(val)))
