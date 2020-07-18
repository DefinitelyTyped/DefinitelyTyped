import MemoryFileSystem = require('memory-fs')
import webpack = require('webpack')

// integration with webpack
const compiler = webpack()
compiler.inputFileSystem = new MemoryFileSystem()
compiler.outputFileSystem = new MemoryFileSystem()
