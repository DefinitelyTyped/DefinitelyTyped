import RBAC = require('easy-rbac');
import rbac = require('easy-rbac');

const roles = {
    manager: {
        can: ['post:save', 'post:delete', 'account:*'],
        inherits: ['user']
    },
    user: {
        can: [
            'post:add',
            {
                name: 'post:save',
                when: async () => true,
            },
            'user:create'
        ],
        inherits: ['manager']
    }
};

const RBACInstance = new RBAC(roles);
RBACInstance.can(['user', 'manager'], 'post:save', { userId: 1, ownerId: 2 });

const RBACFunction = rbac.create(roles);
RBACFunction.can('user', 'post:save', { userId: 1, ownerId: 2 });
RBACFunction.can(['user', 'manager'], 'post:save', { userId: 1 });
