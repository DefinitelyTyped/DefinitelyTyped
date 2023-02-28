import { User } from '@ckeditor/ckeditor5-collaboration-core/src/users';
import { Revision, RevisionHistory, RevisionsRepository, RevisionTracker } from '@ckeditor/ckeditor5-revision-history';

new Revision().setAttribute('', '');
new Revision().removeAttribute('');
new Revision().authors.has(new Revision().creator!);
new Revision().id.startsWith('');
new Revision().on('foo', (ev, ...args) => {
    // $ExpectType EventInfo<Revision, "foo">
    ev;
    // $ExpectType any[]
    args;
});
new Revision().set('foo');

new RevisionHistory().adapter.updateRevisions([
    {
        channelId: '',
        name: null,
        createdAt: new Date(),
        creatorId: '',
        diffData: { foo: '' },
        attributes: {},
        revisionId: '',
    },
]);
new RevisionHistory().adapter
    .getRevision({ revisionId: '' })
    .then(revision => revision.creator && revision.authors.has(revision.creator));
new RevisionHistory().adapter
    .getRevision({ channelId: '' })
    .then(revision => revision.creator && revision.authors.has(revision.creator));
new RevisionHistory().adapter.updateRevisions([{ channelId: '', revisionId: '' }]).then(() => {});

new RevisionsRepository().getRevision('')?.authors.has(new User());
new RevisionsRepository().getRevisions().forEach(revision => revision.setAttribute('', ''));
new RevisionsRepository().createRevision({ foo: 'bar' }).authors.has(new User());
new RevisionsRepository().getIndex('').toFixed();

new RevisionTracker().saveRevision.call;
new RevisionTracker().saveRevision().authors.has(new User());
