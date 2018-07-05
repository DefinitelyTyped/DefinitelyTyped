import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'My Storybook',
  url: 'https://example.com',
  goFullScreen: false,
  showStoriesPanel: false,
  showAddonPanel: false,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: false,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  selectedAddonPanel: 'storybook/actions/action-panel',
});

setOptions({
  name: 'My Storybook - deprecated options',
  url: 'https://example.com',
  goFullScreen: false,
  showLeftPanel: false,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/
});

setOptions({
  hierarchySeparator: '.',
  hierarchyRootSeparator: '#',
});
