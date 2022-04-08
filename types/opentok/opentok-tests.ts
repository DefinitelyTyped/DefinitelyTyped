import OpenTok = require('opentok');

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

client.dial(
  'SESSION_ID',
  token,
  'SIP_URI',
  {
    from: 'Anna',
    secure: true,
    auth: {
      username: 'anna',
      password: 'password123'
    },
    headers: {
      'x-auth': 'foo,bar'
    }
  },
  (err: Error | null, sipInterconnect: OpenTok.SipInterconnect) => {
    if (err) return console.log(err);
    console.log(sipInterconnect.id);
  }
);

const archiveOptions: OpenTok.ArchiveOptions = {
  name: 'name',
  hasAudio: true,
  hasVideo: true,
  outputMode: 'individual',
};

const archiveCustomLayoutOptions: OpenTok.ArchiveOptions = {
  outputMode: 'composed',
  layout: {
    type: 'custom',
    stylesheet: 'derp',
  },
};

const archivePredefinedLayoutOptions: OpenTok.ArchiveOptions = {
  outputMode: 'composed',
  layout: {
    type: 'pip',
  },
};

const patchStream: OpenTok.PatchStream = {
  hasAudio: false,
  hasVideo: true
}

client.startArchive('SESSION_ID', archiveOptions, (err: Error, archive: OpenTok.Archive) => {
  if (err) return console.log(err);
  console.log(archive.id);
});

client.addArchiveStream('ARCHIVE_ID', 'STREAM_ID', patchStream, (err: Error) => {
  if (err) return console.log(err);
});

client.removeArchiveStream('ARCHIVE_ID', 'STREAM_ID', patchStream, (err: Error) => {
  if (err) return console.log(err);
});

client.stopArchive('ARCHIVE_ID', (err: Error, archive: OpenTok.Archive) => {
  if (err) return console.log(err);
  console.log('Stopped archive:' + archive.id);
});

client.getArchive('ARCHIVE_ID', (err: Error, archive: OpenTok.Archive) => {
  if (err) return console.log(err);
  console.log(archive);
});

client.getBroadcast('BROADCAST_ID', (err: Error, broadcast: OpenTok.Broadcast) => {
  if (err) return console.log(err);
  console.log(broadcast);
});

client.addBroadcastStream('BROADCAST_ID', 'STREAM_ID', patchStream, (err: Error) => {
  if (err) return console.log(err);
});

client.removeBroadcastStream('BROADCAST_ID', 'STREAM_ID', patchStream, (err: Error) => {
  if (err) return console.log(err);
});

client.getStream('SESSION_ID', 'STREAM_ID', (err: Error, stream: OpenTok.Stream) => {
  if (err) return console.log(err);
  console.log(stream);
});

client.deleteArchive('ARCHIVE_ID', (err: Error) => {
  if (err) return console.log(err);
  console.log('success');
});

const listArchivesOptions: OpenTok.ListArchivesOptions = {
  count: 10,
  offset: 5,
  sessionId: '9_JY17LWC6LeKsGQ2-DXQlBac32PLwRSI7TV0FKOIDEX0PsmejJOGhrRtAW3PWABpEW3C-cp',
};

client.listArchives(listArchivesOptions, (err: Error, archives: OpenTok.Archive[], totalCount: number) => {
  if (err) return console.log(err);

  console.log(totalCount + ' archives');
  for (var i = 0; i < archives.length; i++) {
    console.log(archives[i].id);
  }
});

client.playDTMF('SESSION_ID', 'CONNECTION_ID', '0', (err: Error) => {
  if (err) return console.log(err);
  console.log('success');
});

const broadcastOptions: OpenTok.BroadcastOptions = {
  outputs: {
    hls: {},
  },
  layout: {
    type: 'bestFit',
  },
  streamMode: 'auto'
};

client.startBroadcast('SESSION_ID', broadcastOptions, (err: Error, broadcast: OpenTok.Broadcast) => {
  if (err) return console.log(err);
  console.log(broadcast);
});

client.stopBroadcast('BROADCAST_ID', (err: Error, broadcast: OpenTok.BroadcastStopResponse) => {
  if (err) return console.log(err);
  console.log(broadcast);
});

client.listBroadcasts(
  {
    sessionId: 'SESSION_ID',
  },
  (err: Error, broadcasts: OpenTok.Broadcast[]) => {
    if (err) return console.log(err);

    for (var i = 0; i < broadcasts.length; i++) {
      console.log(broadcasts[i].id);
    }
  },
);

client.listStreams('SESSION_ID', (err: Error, streams: OpenTok.Stream[]) => {
  if (err) return console.log(err);

  for (var i = 0; i < streams.length; i++) {
    console.log(streams[i].id);
  }
});

client.forceDisconnect('SESSION_ID', 'CONNECTION_ID', (err: Error) => {
  if (err) return console.log(err);
});

client.setArchiveLayout('ARCHIVE_ID', 'custom', '', (err: Error) => {
  if (err) return console.log(err);
});

client.setBroadcastLayout('BROADCAST_ID', 'custom', '', (err: Error) => {
  if (err) return console.log(err);
});

client.setStreamClassLists('SESSION_ID', [{ id: 'STREAM_ID', layoutClassList: ['class1', 'class2'] }], (err: Error) => {
  if (err) return console.log(err);
});

const signalOptions: OpenTok.SignalOptions = {
  type: 'any',
  data: {
    any: 'any',
  },
};

client.signal('SESSION_ID', null, signalOptions, (err: Error) => {
  if (err) return console.log(err);
});

client.signal('SESSION_ID', 'CONNECTION_ID', signalOptions, (err: Error) => {
  if (err) return console.log(err);
});
