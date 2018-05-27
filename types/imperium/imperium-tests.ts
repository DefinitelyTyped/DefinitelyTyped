import imperium from 'imperium'

import { Imperium, ImperiumUnauthorizedError } from 'imperium'

imperium.role('admin', async (req) => {
    return req.session.role === 'admin'
})

imperium.role('user')
    .can('seeUser', { user: '@' })
    .can('manageUser', { user: '@' })

imperium.role('admin')
    .is('user', { user: '*' })

imperium.can('seeUser')
imperium.can(['seeUser', 'manageUser'])
imperium.can({ action: 'seeUser', user: ':userId' })
imperium.can([{ action: 'manageUser', user: ':userId' }])
imperium.is('admin')
imperium.is(['admin', 'user'])
