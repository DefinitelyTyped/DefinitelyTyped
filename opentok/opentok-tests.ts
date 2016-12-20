import * as OpenTok from 'opentok';

const client = new OpenTok('API_KEY', 'API_SECRET');

const sessionOptions: OpenTok.SessionOptions = {
  mediaMode: 'routed',
  archiveMode: 'manual',
  location: '12.34.56.78',
};

client.createSession(sessionOptions, (err: Error, session: OpenTok.Session) => {
  if (err) return console.log(err);
  console.log(session.sessionId);
});

const tokenOptions: OpenTok.TokenOptions = {
  role: 'subscriber',
  data: 'name=Seth',
  expireTime: 123456,
};

const token = client.generateToken('SESSION_ID', tokenOptions);

const archiveOptions: OpenTok.ArchiveOptions = {
  name: 'name',
  hasAudio: true,
  hasVideo: true,
  outputMode: 'individual',
};

client.startArchive('SESSION_ID', archiveOptions, (err: Error, archive: OpenTok.Archive) => {
  if (err) return console.log(err);
  console.log(archive.id);
});

client.stopArchive('ARCHIVE_ID', (err: Error, archive: OpenTok.Archive) => {
  if (err) return console.log(err);
  console.log('Stopped archive:' + archive.id);
});

client.getArchive('ARCHIVE_ID', (err: Error, archive: OpenTok.Archive) => {
  if (err) return console.log(err);
  console.log(archive);
});

client.deleteArchive('ARCHIVE_ID', (err: Error) => {
  if (err) return console.log(err);
  console.log('success');
});

const listArchivesOptions: OpenTok.ListArchivesOptions = {
  count: 10,
  offset: 5,
}

client.listArchives(listArchivesOptions, (err: Error, archives: OpenTok.Archive[], totalCount: number) => {
  if (err) return console.log(err);

  console.log(totalCount + ' archives');
  for (var i = 0; i < archives.length; i++) {
    console.log(archives[i].id);
  }
});
