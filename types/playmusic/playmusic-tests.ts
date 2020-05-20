import PlayMusic, * as pm from "playmusic";

const instance = new PlayMusic();

instance.init({
    androidId: "androidId",
    email: "email",
    password: "password",
    masterToken: "masterToken"
}, (error: Error) => {
    console.log(error.message);
    console.log(error.name);
});

instance.login({
    androidId: "androidId",
    email: "email",
    password: "password"
}, (error: Error, loginResponse: pm.LoginResponse) => {
    console.log(error.message);
    console.log(error.name);
    console.log(loginResponse.androidId);
    console.log(loginResponse.masterToken);
});

instance.getSettings((error: Error, response: any) => {
    console.log(error.message);
    console.log(error.name);
});

instance.getLibrary((error: Error, response: pm.LibraryResponse) => {
    console.log(error.message);
    console.log(error.name);
});

instance.getLibrary({
    limit: 123,
    nextPageToken: "nextPageToken"
}, (error: Error, response: pm.LibraryResponse) => {
    console.log(error.message);
    console.log(error.name);
    if (response && response.data && response.data.items) {
        response.data.items.forEach((item: pm.LibraryItem) => {
            console.log(item.album);
            console.log(item.albumArtist);
            if (item.albumArtRef) {
                console.log(item.albumArtRef[0].url);
            }
            console.log(item.artist);
            if (item.artistArtRef) {
                console.log(item.artistArtRef[0].url);
            }
            if (item.artistId) {
                console.log(item.artistId.length);
            }
            console.log(item.beatsPerMinute);
            console.log(item.clientId);
            console.log(item.comment);
            console.log(item.composer);
            console.log(item.creationTimestamp);
            console.log(item.deleted);
            console.log(item.discNumber);
            console.log(item.durationMillis);
            console.log(item.estimatedSize);
            console.log(item.genre);
            console.log(item.id);
            console.log(item.kind);
            console.log(item.lastModifiedTimestamp);
            console.log(item.nid);
            console.log(item.playCount);
            console.log(item.rating);
            console.log(item.recentTimestamp);
            console.log(item.storeId);
            console.log(item.title);
            console.log(item.totalDiscCount);
            console.log(item.totalTrackCount);
            console.log(item.trackNumber);
            console.log(item.year);
        });
    }
    console.log(response.kind);
    console.log(response.nextPageToken);
});

instance.getStreamUrl("id", (error: Error, streamUrl: string) => {
    console.log(error.message);
    console.log(error.name);
    console.log(streamUrl);
});

instance.getStream("id", (error: Error, stream: any) => {
    console.log(error.message);
    console.log(error.name);
    console.log(stream);
});

instance.search("text", 123, (error: Error, searchResults: any) => {
    console.log(error.message);
    console.log(error.name);
    console.log(searchResults);
});

instance.getPlayLists((error: Error, response: pm.PlaylistListResponse) => {
    console.log(error.message);
    console.log(error.name);
    if (response && response.data && response.data.items) {
        response.data.items.forEach((item: pm.PlaylistListItem) => {
            console.log(item.accessControlled);
            console.log(item.creationTimestamp);
            console.log(item.deleted);
            console.log(item.description);
            console.log(item.id);
            console.log(item.kind);
            console.log(item.lastModifiedTimestamp);
            console.log(item.name);
            console.log(item.ownerName);
            console.log(item.ownerProfilePhotoUrl);
            console.log(item.recentTimestamp);
            console.log(item.shareToken);
            console.log(item.type);
        });
    }
    console.log(response.kind);
});

instance.addPlayList("playlistName", (error: Error, mutateResponses: pm.MutateResponses) => {
    console.log(error.message);
    console.log(error.name);
    if (mutateResponses && mutateResponses.mutate_response) {
        mutateResponses.mutate_response.forEach((mutateResponse: pm.MutateResponse) => {
            console.log(mutateResponse.client_id);
            console.log(mutateResponse.id);
            console.log(mutateResponse.response_code);
        });
    }
});

instance.deletePlaylist("playlistId", (error: Error, mutateResponses: pm.MutateResponses) => {
    console.log(error.message);
    console.log(error.name);
    if (mutateResponses && mutateResponses.mutate_response) {
        mutateResponses.mutate_response.forEach((mutateResponse: pm.MutateResponse) => {
            console.log(mutateResponse.client_id);
            console.log(mutateResponse.id);
            console.log(mutateResponse.response_code);
        });
    }
});

instance.updatePlayListMeta("playlistId", {
    name: "name",
    description: "description",
    shareState: "shareState"
}, (error: Error, mutateResponses: pm.MutateResponses) => {
    console.log(error.message);
    console.log(error.name);
    if (mutateResponses && mutateResponses.mutate_response) {
        mutateResponses.mutate_response.forEach((mutateResponse: pm.MutateResponse) => {
            console.log(mutateResponse.client_id);
            console.log(mutateResponse.id);
            console.log(mutateResponse.response_code);
        });
    }
});

instance.addTrackToPlayList("songId", "playlistId", (error: Error, mutateResponses: pm.MutateResponses) => {
    console.log(error.message);
    console.log(error.name);
    if (mutateResponses && mutateResponses.mutate_response) {
        mutateResponses.mutate_response.forEach((mutateResponse: pm.MutateResponse) => {
            console.log(mutateResponse.client_id);
            console.log(mutateResponse.id);
            console.log(mutateResponse.response_code);
        });
    }
}, "entryBeforeClientId", "entryAfterClientId");

instance.addTrackToPlayList(["songId1", "songId2"], "playlistId", (error: Error, mutateResponses: pm.MutateResponses) => {
    console.log(error.message);
    console.log(error.name);
    if (mutateResponses && mutateResponses.mutate_response) {
        mutateResponses.mutate_response.forEach((mutateResponse: pm.MutateResponse) => {
            console.log(mutateResponse.client_id);
            console.log(mutateResponse.id);
            console.log(mutateResponse.response_code);
        });
    }
}, "entryBeforeClientId", "entryAfterClientId");

instance.movePlayListEntry("entryToMove", "entryBeforeClientId", "entryAfterClientId", (error: Error, mutateResponses: pm.MutateResponses) => {
    console.log(error.message);
    console.log(error.name);
    if (mutateResponses && mutateResponses.mutate_response) {
        mutateResponses.mutate_response.forEach((mutateResponse: pm.MutateResponse) => {
            console.log(mutateResponse.client_id);
            console.log(mutateResponse.id);
            console.log(mutateResponse.response_code);
        });
    }
});

instance.incrementTrackPlaycount("songId", (error: Error, mutateResponses: pm.MutateResponses) => {
    console.log(error.message);
    console.log(error.name);
    if (mutateResponses && mutateResponses.mutate_response) {
        mutateResponses.mutate_response.forEach((mutateResponse: pm.MutateResponse) => {
            console.log(mutateResponse.client_id);
            console.log(mutateResponse.id);
            console.log(mutateResponse.response_code);
        });
    }
});

instance.changeTrackMetadata({ }, (error: Error, mutateResponses: pm.MutateResponses) => {
    console.log(error.message);
    console.log(error.name);
    if (mutateResponses && mutateResponses.mutate_response) {
        mutateResponses.mutate_response.forEach((mutateResponse: pm.MutateResponse) => {
            console.log(mutateResponse.client_id);
            console.log(mutateResponse.id);
            console.log(mutateResponse.response_code);
        });
    }
});

instance.removePlayListEntry("playlistItemId", (error: Error, mutateResponses: pm.MutateResponses) => {
    console.log(error.message);
    console.log(error.name);
    if (mutateResponses && mutateResponses.mutate_response) {
        mutateResponses.mutate_response.forEach((mutateResponse: pm.MutateResponse) => {
            console.log(mutateResponse.client_id);
            console.log(mutateResponse.id);
            console.log(mutateResponse.response_code);
        });
    }
});

instance.removePlayListEntry(["playlistItemId1", "playlistItemId2"], (error: Error, mutateResponses: pm.MutateResponses) => {
    console.log(error.message);
    console.log(error.name);
    if (mutateResponses && mutateResponses.mutate_response) {
        mutateResponses.mutate_response.forEach((mutateResponse: pm.MutateResponse) => {
            console.log(mutateResponse.client_id);
            console.log(mutateResponse.id);
            console.log(mutateResponse.response_code);
        });
    }
});

instance.getPlayListEntries((error: Error, response: pm.PlaylistResponse) => {
    console.log(error.message);
    console.log(error.name);
    if (response && response.data && response.data.items) {
        response.data.items.forEach((item: pm.PlaylistItem) => {
            console.log(item.absolutePosition);
            console.log(item.clientId);
            console.log(item.creationTimestamp);
            console.log(item.deleted);
            console.log(item.id);
            console.log(item.kind);
            console.log(item.lastModifiedTimestamp);
            console.log(item.playlistId);
            console.log(item.source);
            if (item.track) {
                console.log(item.track.album);
                console.log(item.track.albumArtist);
                if (item.track.albumArtRef) {
                    console.log(item.track.albumArtRef[0].url);
                }
                console.log(item.track.albumAvailableForPurchase);
                console.log(item.track.albumId);
                console.log(item.track.artist);
                if (item.track.artistArtRef) {
                    console.log(item.track.artistArtRef[0].url);
                }
                if (item.track.artistId) {
                    console.log(item.track.artistId.length);
                }
                console.log(item.track.composer);
                console.log(item.track.contentType);
                console.log(item.track.discNumber);
                console.log(item.track.durationMillis);
                console.log(item.track.estimatedSize);
                console.log(item.track.genre);
                console.log(item.track.kind);
                console.log(item.track.nid);
                console.log(item.track.playCount);
                console.log(item.track.storeId);
                console.log(item.track.title);
                console.log(item.track.trackAvailableForPurchase);
                console.log(item.track.trackAvailableForSubscription);
                console.log(item.track.trackNumber);
                console.log(item.track.trackType);
                console.log(item.track.year);
            }
            console.log(item.trackId);
        });
    }
    console.log(response.kind);
    console.log(response.nextPageToken);
});

instance.getPlayListEntries({
    limit: 123,
    nextPageToken: "nextPageToken"
}, (error: Error, response: pm.PlaylistResponse) => {
    console.log(error.message);
    console.log(error.name);
    if (response && response.data && response.data.items) {
        response.data.items.forEach((item: pm.PlaylistItem) => {
            console.log(item.absolutePosition);
            console.log(item.clientId);
            console.log(item.creationTimestamp);
            console.log(item.deleted);
            console.log(item.id);
            console.log(item.kind);
            console.log(item.lastModifiedTimestamp);
            console.log(item.playlistId);
            console.log(item.source);
            if (item.track) {
                console.log(item.track.album);
                console.log(item.track.albumArtist);
                if (item.track.albumArtRef) {
                    console.log(item.track.albumArtRef[0].url);
                }
                console.log(item.track.albumAvailableForPurchase);
                console.log(item.track.albumId);
                console.log(item.track.artist);
                if (item.track.artistArtRef) {
                    console.log(item.track.artistArtRef[0].url);
                }
                if (item.track.artistId) {
                    console.log(item.track.artistId.length);
                }
                console.log(item.track.composer);
                console.log(item.track.contentType);
                console.log(item.track.discNumber);
                console.log(item.track.durationMillis);
                console.log(item.track.estimatedSize);
                console.log(item.track.genre);
                console.log(item.track.kind);
                console.log(item.track.nid);
                console.log(item.track.playCount);
                console.log(item.track.storeId);
                console.log(item.track.title);
                console.log(item.track.trackAvailableForPurchase);
                console.log(item.track.trackAvailableForSubscription);
                console.log(item.track.trackNumber);
                console.log(item.track.trackType);
                console.log(item.track.year);
            }
            console.log(item.trackId);
        });
    }
    console.log(response.kind);
    console.log(response.nextPageToken);
});
