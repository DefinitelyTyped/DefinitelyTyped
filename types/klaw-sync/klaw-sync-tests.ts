import * as path from 'path'
import klawSync = require('klaw-sync')

const outputMessage = (result: klawSync.Item) => {
    console.log(`file: ${result.path} has size '${result.stats.size}'`)
}

klawSync('/some/dir').forEach(outputMessage)

const defaultOptions = {}

klawSync('/some/dir', defaultOptions).forEach(outputMessage)

const options = {
    nodir: true,
    nofile: false,
    noRecurseOnFailedFilter: false,
    filter(item: klawSync.Item) {
        return item.path.indexOf('node_modules') < 0
    },
}

klawSync('/some/dir', options).forEach(outputMessage)
