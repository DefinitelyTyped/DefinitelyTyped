/** @todo make some real tests */
function testReplication() {
    interface Model {
        foo: number;
    }
    const db = new PouchDB<Model>();

    db.replicate.to('').then((res: PouchDB.Replication.ReplicationResultComplete<Model>) => {
    });

    db.replicate.from('').then((res: PouchDB.Replication.ReplicationResultComplete<Model>) => {
    });
}
