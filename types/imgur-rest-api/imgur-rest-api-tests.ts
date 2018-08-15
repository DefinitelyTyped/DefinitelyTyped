

function testAccount(account: ImgurRestApi.Account) : ImgurRestApi.Account {
    return account;
}

function testAccountSettings(accountSettings: ImgurRestApi.AccountSettings) : ImgurRestApi.AccountSettings {
    return accountSettings;
}

function testAlbum(album: ImgurRestApi.Album) : ImgurRestApi.Album {
    return album;
}

function testAlbumImages(album: ImgurRestApi.Album) : ImgurRestApi.Image {
    return album.images[0];
}

function testComment(comment: ImgurRestApi.Comment) : ImgurRestApi.Comment {
    return comment;
}

function testConversation(conversation: ImgurRestApi.Conversation) : ImgurRestApi.Conversation {
    return conversation;
}

function testCustomGallery(customGallery: ImgurRestApi.CustomGallery) : ImgurRestApi.CustomGallery {
    return customGallery;
}

function testGalleryItem(galleryItem: ImgurRestApi.GalleryItem) : ImgurRestApi.GalleryItem {
    return galleryItem;
}

function testGalleryAlbum(galleryItem: ImgurRestApi.GalleryItem) : ImgurRestApi.GalleryAlbum {
    if(galleryItem.is_album) {
        var galleryAlbum = <ImgurRestApi.GalleryAlbum> galleryItem;
        return galleryAlbum;
    }
    return null;
}

function testGalleryImage(galleryItem: ImgurRestApi.GalleryItem) : ImgurRestApi.GalleryImage {
    if(!galleryItem.is_album) {
        var galleryImage = <ImgurRestApi.GalleryImage> galleryItem;
        return galleryImage;
    }
    return null;
}

function testGalleryProfile(galleryProfile: ImgurRestApi.GalleryProfile) : ImgurRestApi.GalleryProfile {
    return galleryProfile;
}

function testImage(image: ImgurRestApi.Image) : ImgurRestApi.Image {
    return image;
}

function testMemeMeta(meta: ImgurRestApi.MemeMetadata) : ImgurRestApi.MemeMetadata {
    return meta;
}

function testMessage(message: ImgurRestApi.Message) : ImgurRestApi.Message {
    return message;
}

function testAccountNotificationsReply(accountNotif: ImgurRestApi.AccountNotifications) : ImgurRestApi.Notification<ImgurRestApi.Comment> {
    return accountNotif.replies[0];
}

function testAccountNotificationsMessage(accountNotif: ImgurRestApi.AccountNotifications) : ImgurRestApi.Notification<ImgurRestApi.Conversation> {
    return accountNotif.messages[0];
}

function testTag(tag: ImgurRestApi.Tag) : ImgurRestApi.Tag {
    return tag;
}

function testTagVote(tagVote: ImgurRestApi.TagVote) : ImgurRestApi.TagVote {
    return tagVote;
}

function testTopic(topic: ImgurRestApi.Topic) : ImgurRestApi.Topic {
    return topic;
}

function testVote(vote: ImgurRestApi.Vote) : ImgurRestApi.Vote {
    return vote;
}

function testResponseWithError(response: ImgurRestApi.Response<ImgurRestApi.GalleryProfile>) : ImgurRestApi.Error {
    if(response.success === false) {
        return <ImgurRestApi.Error> response.data;
    }
    return null;
}

function testResponseWithValue(response: ImgurRestApi.Response<ImgurRestApi.GalleryProfile>) : ImgurRestApi.GalleryProfile {
    if(response.success === true) {
        return <ImgurRestApi.GalleryProfile> response.data;
    }
    return null;
}
