/// <reference path="imgur-api.d.ts" />

function testAccount(account: ImgurApi.Account) : ImgurApi.Account {
    return account;
}

function testAccountSettings(accountSettings: ImgurApi.AccountSettings) : ImgurApi.AccountSettings {
    return accountSettings;
}

function testAlbum(album: ImgurApi.Album) : ImgurApi.Album {
    return album;
}

function testAlbumImages(album: ImgurApi.Album) : ImgurApi.Image {
    return album.images[0];
}

function testComment(comment: ImgurApi.Comment) : ImgurApi.Comment {
    return comment;
}

function testConversation(conversation: ImgurApi.Conversation) : ImgurApi.Conversation {
    return conversation;
}

function testCustomGallery(customGallery: ImgurApi.CustomGallery) : ImgurApi.CustomGallery {
    return customGallery;
}

function testGalleryItem(galleryItem: ImgurApi.GalleryItem) : ImgurApi.GalleryItem {
    return galleryItem;
}

function testGalleryAlbum(galleryItem: ImgurApi.GalleryItem) : ImgurApi.GalleryAlbum {
    if(galleryItem.is_album) {
        var galleryAlbum = <ImgurApi.GalleryAlbum> galleryItem;
        return galleryAlbum;
    }
    return null;
}

function testGalleryImage(galleryItem: ImgurApi.GalleryItem) : ImgurApi.GalleryImage {
    if(!galleryItem.is_album) {
        var galleryImage = <ImgurApi.GalleryImage> galleryItem;
        return galleryImage;
    }
    return null;
}

function testGalleryProfile(galleryProfile: ImgurApi.GalleryProfile) : ImgurApi.GalleryProfile {
    return galleryProfile;
}

function testImage(image: ImgurApi.Image) : ImgurApi.Image {
    return image;
}

function testMemeMeta(meta: ImgurApi.MemeMetadata) : ImgurApi.MemeMetadata {
    return meta;
}

function testMessage(message: ImgurApi.Message) : ImgurApi.Message {
    return message;
}

function testAccountNotificationsReply(accountNotif: ImgurApi.AccountNotifications) : ImgurApi.Notification<ImgurApi.Comment> {
    return accountNotif.replies[0];
}

function testAccountNotificationsMessage(accountNotif: ImgurApi.AccountNotifications) : ImgurApi.Notification<ImgurApi.Conversation> {
    return accountNotif.messages[0];
}

function testTag(tag: ImgurApi.Tag) : ImgurApi.Tag {
    return tag;
}

function testTagVote(tagVote: ImgurApi.TagVote) : ImgurApi.TagVote {
    return tagVote;
}

function testTopic(topic: ImgurApi.Topic) : ImgurApi.Topic {
    return topic;
}

function testVote(vote: ImgurApi.Vote) : ImgurApi.Vote {
    return vote;
}

function testResponseWithError(response: ImgurApi.Response<ImgurApi.GalleryProfile>) : ImgurApi.Error {
    if(response.success === false) {
        return <ImgurApi.Error> response.data;
    }
    return null;
}

function testResponseWithValue(response: ImgurApi.Response<ImgurApi.GalleryProfile>) : ImgurApi.GalleryProfile {
    if(response.success === true) {
        return <ImgurApi.GalleryProfile> response.data;
    }
    return null;
}
