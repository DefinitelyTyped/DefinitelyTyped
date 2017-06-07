import * as fs from 'fs'
import * as tiletype from 'tiletype'

const dimensions = tiletype.dimensions(fs.readFileSync(__dirname + '/fixtures/world.jpg'))
const header = tiletype.headers(fs.readFileSync(__dirname + '/fixtures/world.jpg'))
const type = tiletype.type(fs.readFileSync(__dirname + '/fixtures/world.jpg'))
