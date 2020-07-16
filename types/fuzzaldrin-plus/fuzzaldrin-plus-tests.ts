import * as fz from 'fuzzaldrin-plus'

//
// Simple use cases
// ----------------------------------------------------------------------

const candidates = [
    'Find And Replace: Select All',
    'Settings View: Uninstall Packages',
    'Settings View: View Installed Themes',
    'Application: Install Update',
    'Install'
]
const objectCandidates = candidates.map(s => ({ foo: s }))
const options: fz.IOptions = { allowErrors: true }
const filterOptions: fz.IFilterOptions<string> = {
    allowErrors: true,
}

fz.filter(candidates, 'install')
fz.filter(candidates, 'install', options)
fz.filter(candidates, 'install', filterOptions)
fz.filter(objectCandidates, 'install', { key: 'foo' })

const filterOptions2: fz.IFilterOptions<{ foo: string }> = {
    allowErrors: true,
    key: 'foo'
}

const preparedQuery: fz.Query = fz.prepareQuery('install')

fz.score('Maybe', 'me')
fz.score('Maybe', 'me', undefined)
fz.score('Maybe', 'me', null)
fz.score('Maybe', 'me', {})
fz.score('Maybe', 'me', { allowErrors: true })
fz.score('Application: Install Update', 'install')
fz.score('Application: Install Update', 'install', { preparedQuery })

fz.match('Maybe', 'me')
fz.match('Application: Install Update', 'install')
fz.match('Application: Install Update', 'install', { preparedQuery })

fz.wrap('Maybe', 'me')

//
// Complex filter cases, using all the options
// ----------------------------------------------------------------------

fz.filter(['Maybe', 'Me'], 'me')
fz.filter(['Maybe', 'Me'], 'me', undefined)
fz.filter(['Maybe', 'Me'], 'me', null)
fz.filter(['Maybe', 'Me'], 'me', {})
fz.filter(['Maybe', 'Me'], 'me', { allowErrors: true })
fz.filter(['Maybe', 'Me'], 'me', {
    preparedQuery: fz.prepareQuery('me')
})
fz.filter(['Maybe', 'Me'], 'me', {
    allowErrors: true,
    usePathScoring: true
})
fz.filter(['Maybe', 'Me'], 'me', {
    allowErrors: true,
    usePathScoring: true,
    useExtensionBonus: true
})
fz.filter(['Maybe', 'Me'], 'me', {
    allowErrors: true,
    usePathScoring: true,
    useExtensionBonus: true,
    pathSeparator: '/'
})
fz.filter(['Maybe', 'Me'], 'me', {
    allowErrors: true,
    usePathScoring: true,
    useExtensionBonus: true,
    pathSeparator: '\\',
    optCharRegEx: new RegExp('')
})
fz.filter(['Maybe', 'Me'], 'me', {
    allowErrors: true,
    usePathScoring: true,
    useExtensionBonus: true,
    pathSeparator: '\\',
    optCharRegEx: new RegExp(''),
    wrap: {
        tagOpen: '<span>',
        tagClass: '',
        tagClose: '</span>'
    }
})
fz.filter(['Maybe', 'Me'], 'me', {
    allowErrors: true,
    usePathScoring: true,
    useExtensionBonus: true,
    pathSeparator: '\\',
    optCharRegEx: new RegExp(''),
    wrap: {
        tagOpen: '<span>',
        tagClass: '',
        tagClose: '</span>'
    },
    maxResults: 10
})
fz.filter(['Maybe', 'Me'], 'me', {
    allowErrors: true,
    usePathScoring: true,
    useExtensionBonus: true,
    pathSeparator: '\\',
    optCharRegEx: new RegExp(''),
    wrap: {
        tagOpen: '<span>',
        tagClass: '',
        tagClose: '</span>'
    },
    maxResults: 10,
    maxInners: 10
})
fz.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', {
    allowErrors: true,
    usePathScoring: true,
    useExtensionBonus: true,
    pathSeparator: '\\',
    optCharRegEx: new RegExp(''),
    wrap: {
        tagOpen: '<span>',
        tagClass: '',
        tagClose: '</span>'
    },
    maxResults: 10,
    maxInners: 10,
    key: 'title'
})
fz.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', {
    allowErrors: true,
    key: 'title'
})
fz.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', {
    key: 'title'
})

/**
 * ======================================================================
 * Incorrect Usage:
 * ======================================================================
 */

// $ExpectError
fz.score()
// $ExpectError
fz.match()
// $ExpectError
fz.wrap()
// $ExpectError
fz.prepareQuery()
// $ExpectError
fz.score('Maybe', 'me', true)
// $ExpectError
fz.score('Maybe', 'me', 'string')
// $ExpectError
fz.score('Maybe', 'me', 1)

const items = ['Maybe', 'Me']
// $ExpectError
fz.score(items, 'me')
// $ExpectError
fz.score('Maybe', 'me', { unknownProperty: true })
// $ExpectError
fz.match(items, 'me')
// $ExpectError
fz.wrap(items, 'me')
// $ExpectError
fz.prepareQuery()

// $ExpectError
const incorrectOptions: fz.IFilterOptions = { allowErrors: 'not a boolean' }

// $ExpectError
fz.filter(candidates, 'install', { allowErrors: 'not a boolean' })
fz.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', {
    // $ExpectError
    incorrectProperty: true,
    key: 'title'
})

// $ExpectError
fz.score('Maybe', 'me', undefined, options)
// $ExpectError
fz.match('Maybe', 'me', undefined, options)

// $ExpectError
fz.filter()
// $ExpectError
fz.filter('not an array', 'query')
// $ExpectError
fz.filter(['Maybe', 'Me'], 'me', { allowErrors: 'not a boolean' })
// $ExpectError
fz.filter(['Maybe', 'Me'], 'me', { key: true })
// $ExpectError
fz.filter(['Maybe', 'Me'], 'me', { key: 'should not be here' })
// $ExpectError
fz.filter(['Maybe', 'Me'], 'me', { preparedQuery: {} })
// $ExpectError
fz.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', { key: 1 })
// $ExpectError
fz.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', { key: 'invalid key' })
// $ExpectError
fz.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', { allowErrors: 'not a boolean', key: 1 })
// $ExpectError
fz.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', { allowErrors: 'not a boolean', key: 'title' })
