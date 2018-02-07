import chaiJestSnapshot from 'chai-jest-snapshot';
import { expect } from 'chai';

chai.use(chaiJestSnapshot);

expect({}).to.matchSnapshot();
expect({}).to.matchSnapshot(true);
expect({}).to.matchSnapshot("filename");
expect({}).to.matchSnapshot("filename", "snapshotname");
expect({}).to.matchSnapshot("filename", "snapshotname", false);

const mockContext: Mocha.IBeforeAndAfterContext = <any> {
    currentTest: {
       file: 'testfile',
       fullTitle: () => 'fullTitle'
    }
};

chaiJestSnapshot.setFilename("filename");
chaiJestSnapshot.setTestName("testname");
chaiJestSnapshot.configureUsingMochaContext(mockContext);
chaiJestSnapshot.resetSnapshotRegistry();
chaiJestSnapshot.addSerializer({});
