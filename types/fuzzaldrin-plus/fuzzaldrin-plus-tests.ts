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

// @ts-expect-error
fz.score()
// @ts-expect-error
fz.match()
// @ts-expect-error
fz.wrap()
// @ts-expect-error
fz.prepareQuery()
// @ts-expect-error
fz.score('Maybe', 'me', true)
// @ts-expect-error
fz.score('Maybe', 'me', 'string')
// @ts-expect-error
fz.score('Maybe', 'me', 1)

const items = ['Maybe', 'Me']
// @ts-expect-error
fz.score(items, 'me')
// @ts-expect-error
fz.score('Maybe', 'me', { unknownProperty: true })
// @ts-expect-error
fz.match(items, 'me')
// @ts-expect-error
fz.wrap(items, 'me')
// @ts-expect-error
fz.prepareQuery()

// @ts-expect-error
const incorrectOptions: fz.IFilterOptions = { allowErrors: 'not a boolean' }

// @ts-expect-error
fz.filter(candidates, 'install', { allowErrors: 'not a boolean' })
fz.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', {
    // @ts-expect-error
    incorrectProperty: true,
    key: 'title'
})

// @ts-expect-error
fz.score('Maybe', 'me', undefined, options)
// @ts-expect-error
fz.match('Maybe', 'me', undefined, options)

// @ts-expect-error
fz.filter()
// @ts-expect-error
fz.filter('not an array', 'query')
// @ts-expect-error
fz.filter(['Maybe', 'Me'], 'me', { allowErrors: 'not a boolean' })
// @ts-expect-error
fz.filter(['Maybe', 'Me'], 'me', { key: true })
// @ts-expect-error
fz.filter(['Maybe', 'Me'], 'me', { key: 'should not be here' })
// @ts-expect-error
fz.filter(['Maybe', 'Me'], 'me', { preparedQuery: {} })
// @ts-expect-error
fz.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', { key: 1 })
// @ts-expect-error
fz.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', { key: 'invalid key' })
// @ts-expect-error
fz.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', { allowErrors: 'not a boolean', key: 1 })
// @ts-expect-error
fz.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', { allowErrors: 'not a boolean', key: 'title' })
