const fs = require('fs')

const chomp = require("line-chomper").chomp;

chomp("sorted-uniq.txt", function (err, lines) {
    console.log("[")
    for(let i=0; i<lines.length; i++) {
    // lines.forEach(function (line) {
        let line = lines[i]
        let arr = line.split(" ")
        let code = arr[0]
        let num = arr[1]
        let val = arr[2] == "N.A."? null: arr[2]
        let comma = i == lines.length - 1? "": ","
        console.log('  {"code": "' + code + '", "number": ' + parseInt(num) + ', "decimalDigits": ' + val + '}' + comma)
    }
    console.log("]")
})
