import { User } from '@ckeditor/ckeditor5-collaboration-core/src/users';
import { Revision, RevisionHistory, RevisionsRepository, RevisionTracker } from '@ckeditor/ckeditor5-revision-history';

new Revision().setAttribute('', '');
new Revision().removeAttribute('');
new Revision().authors.has(new Revision().creator!);
new Revision().id.startsWith('');

new RevisionHistory().adapter.addRevision({
    channelId: '',
    id: '',
    name: null,
    createdAt: new Date(),
    creatorId: '',
    data: { foo: '' },
    attributes: {},
});
new RevisionHistory().adapter.getRevision({ revisionId: '' }).then(revision => revision.authors.has(revision.creator!));
new RevisionHistory().adapter
    .getRevisions({ channelId: '' })
    .then(revisions => revisions.filter(revision => revision.authors.has(revision.creator!)));
new RevisionHistory().adapter.updateRevision({ revisionId: '' }).then(() => {});

new RevisionsRepository().getRevision('')?.authors.has(new User());
new RevisionsRepository().getRevisions().forEach(revision => revision.setAttribute('', ''));
new RevisionsRepository().createRevision({ foo: 'bar' }).authors.has(new User());
new RevisionsRepository().getIndex('').toFixed();

new RevisionTracker().adapter.addRevision.call;
new RevisionTracker().saveRevision().authors.has(new User());
new RevisionTracker().getCurrentRevision({ name: '' }).authors.has(new User());
