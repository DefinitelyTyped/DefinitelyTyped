import * as path from 'path'
import klawSync = require('klaw-sync')

const outputMessage = (result: klawSync.Item) => {
  console.log(`file: ${result.path} has size '${result.stats.size}'`)
}

klawSync('/some/dir').forEach(outputMessage)

const defaultOptions = {}

klawSync('/some/dir', defaultOptions).forEach(outputMessage)

const options = {
  ignore: ['.exe'],
  nodir: true,
  nofile: false,
}

klawSync('/some/dir', options).forEach(outputMessage)
