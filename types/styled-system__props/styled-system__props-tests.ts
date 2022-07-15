import { pick, omit } from '@styled-system/props';

omit({
    color: 'red',
    id: 'test',
});

pick({
    color: 'red',
    id: 'test',
});
