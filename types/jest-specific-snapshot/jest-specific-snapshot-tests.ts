import { addSerializer, toMatchSpecificSnapshot } from 'jest-specific-snapshot';
import toJson from 'enzyme-to-json';

expect(100).toMatchSpecificSnapshot('mySnapshotFile.snap');

addSerializer(toJson);

function doSomeThing(received: any) {
    return received;
}
expect.extend({
    toMatchDecoratedSpecificSnapshot(received, snapshotFile) {
        const data = doSomeThing(received);
        return toMatchSpecificSnapshot.call(this, data, snapshotFile);
    }
});
