import parse = require('parse-unit')
let [number, length] = parse('10px')
number === 50
length === 'px'
