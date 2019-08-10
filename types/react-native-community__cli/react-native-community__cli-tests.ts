import { UserDependencyConfigT } from 'react-native-community__cli';
const pluginConfig: UserDependencyConfigT = {
  commands: [
    {
      name: 'test-type',
      func: () => Promise.resolve(),
      options: [
        {
          name: '--option1',
          description: 'description of the command',
        },
      ],
    },
  ],
};
