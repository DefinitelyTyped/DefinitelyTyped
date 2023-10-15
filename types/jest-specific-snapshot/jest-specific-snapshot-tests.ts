import toJson from "enzyme-to-json";
import { addSerializer, toMatchSpecificSnapshot } from "jest-specific-snapshot";

expect(100).toMatchSpecificSnapshot("mySnapshotFile.snap");

addSerializer(toJson);

function doSomeThing(received: any) {
    return received;
}
expect.extend({
    toMatchDecoratedSpecificSnapshot(received, snapshotFile) {
        const data = doSomeThing(received);
        return toMatchSpecificSnapshot.call(this, data, snapshotFile);
    },
});
