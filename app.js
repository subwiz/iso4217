'use strict';

const fs = require('fs')
const xml2js = require('xml2js')
 
const parser = new xml2js.Parser()
fs.readFile(__dirname + '/iso4217.xml', (err, data) => {
  parser.parseString(data, (err, result) => {
    for(let v of result['ISO_4217']['CcyTbl'][0]['CcyNtry']) {
      if(v['Ccy'] != undefined) {
        console.log('%s %s %s', v['Ccy'][0], v['CcyNbr'][0], v['CcyMnrUnts'][0])
      }
    }
  })
})
