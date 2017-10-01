import * as fs from 'fs'
import * as path from 'path'
import * as handlebars from 'handlebars'

handlebars.registerHelper('repeat', require('handlebars-helper-repeat'))
handlebars.registerHelper(require('handlebars-helpers').comparison())
handlebars.registerHelper(require('handlebars-helpers').math())

handlebars.registerPartial(
    'genparams',
    '<{{#repeat vsN}}V{{@index}}, {{/repeat}}{{#repeat tsN}}T{{add @index 1}}{{#unless @last}}, {{/unless}}{{/repeat}}>'
);

handlebars.registerPartial(
    'funcparams',
    '({{#repeat argN}}x{{@index}}: {{argSymb}}{{@index}}{{#unless @last}}, {{/unless}}{{/repeat}})'
);

const templateContext = {
    minArgN: 0,
    maxArgN: 4,
    minFnN: 1,
    maxFnN: 10,
}

const templatesDir = path.resolve(__dirname, 'templates')
const outputDir = path.resolve(__dirname, '..', 'generated')

fs.readdir(templatesDir, (err, files) => {
    if (err) throw err

    files.forEach(file => {
        const filepath = path.resolve(templatesDir, file)
        const outputName = path.parse(filepath).name + '.d.ts'
        const outputPath = path.resolve(outputDir, outputName)

        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) throw err;

            const template = handlebars.compile(data);
            const output = template(templateContext)

            fs.writeFile(outputPath, output, (err) => {
                if (err) throw err

                console.log(`${outputName} was saved`)
            })
        })
    });
})

