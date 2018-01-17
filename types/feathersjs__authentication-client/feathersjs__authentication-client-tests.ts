import feathersAuthClient from '@feathersjs/authentication-client';

// we can't really do much, because the augmentation of @feathersjs/feathers breaks importing it here.
const configureFn = feathersAuthClient({});
