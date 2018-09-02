import * as Video from 'twilio-video';

// Examples taken from https://twilio.github.io/twilio-video/ (v2.x)

Video.connect('$TOKEN', { name: 'room-name' }).then(room => {
    room.participants.forEach(participantConnected);
    room.on('participantConnected', participantConnected);
    room.on('participantDisconnected', participantDisconnected);
    room.once('disconnected', error => room.participants.forEach(participantDisconnected));
});

function participantConnected(participant: Video.Participant) {
    participant.on('trackSubscribed', trackSubscribed);
    participant.on('trackUnsubscribed', trackUnsubscribed);

    participant.tracks.forEach(publication => {
        const remotePublication = publication as Video.RemoteTrackPublication;
        if (remotePublication.isSubscribed) {
            trackSubscribed(remotePublication.track as Video.VideoTrack | Video.AudioTrack);
        }
    });
}

function participantDisconnected(participant: Video.Participant) {
    participant.tracks.forEach((publication) => {
        const remotePublication = publication as Video.RemoteTrackPublication;
        if (remotePublication.isSubscribed) {
            const { track } = remotePublication;
            if (track) trackUnsubscribed(track as Video.AudioTrack | Video.VideoTrack);
        }
    });
}

function trackSubscribed(track: Video.VideoTrack | Video.AudioTrack) {
    const media = track.attach();
    insertDomElement(media);
}

function trackUnsubscribed(track: Video.VideoTrack | Video.AudioTrack) {
    track.detach().forEach(element => element.remove());
}

function insertDomElement(element: any) {
    // Do something with the dom element
}
