import initStoryshots, { multiSnapshotWithOptions, snapshotWithOptions, getSnapshotFileName, renderOnly } from "@storybook/addon-storyshots";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest';
import 'jest-specific-snapshot';

initStoryshots({
    integrityOptions: { cwd: '' },
    test: multiSnapshotWithOptions({}),
});

initStoryshots({
  test: ({ story, context }) => {
    const snapshotFileName = getSnapshotFileName(context);
    const storyElement = story.render() as JSX.Element;
    const shallowTree = shallow(storyElement);

    if (snapshotFileName) {
      expect(toJson(shallowTree)).toMatchSpecificSnapshot(snapshotFileName);
    }
  }
});

initStoryshots({
    configPath: "",
    test: renderOnly
});

initStoryshots({
    framework: 'react',
    configPath: '',
    test: snapshotWithOptions({
        createNodeMock: (element) => {
            if (element.type === 'div') {
              return { scrollWidth: 123 };
            }
            return null;
        }
    })
});
