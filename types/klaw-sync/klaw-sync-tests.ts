import klawSync = require('klaw-sync')
import * as fs from 'fs'

const outputMessage = (result: klawSync.Item) => {
    console.log(`file: ${result.path} has size '${result.stats.size}'`)
}

klawSync('/some/dir').forEach(outputMessage)

const defaultOptions: klawSync.Options = {}

klawSync('/some/dir', defaultOptions).forEach(outputMessage)

const options: klawSync.Options = {
    nodir: true,
    nofile: false,
    filter(item: klawSync.Item) {
        return item.path.indexOf('node_modules') < 0
    },
    depthLimit: 5,
    fs
}

klawSync('/some/dir', options).forEach(outputMessage)
