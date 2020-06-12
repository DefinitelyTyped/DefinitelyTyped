

//test the global app events and functions
function test_AppEvents() {
    App.onError = function (options: any) {
        //do something
    }
    
    App.onExit = function (options: any) {
        //do something
    }
    
    App.onLaunch = function (options: any) {
        //do something
    }
    
    App.reload({ someProperty: 'Testing...' });
}

//test the global device object properties
function test_DeviceProperties() {
    var appIdentifier = Device.appIdentifier;
    var appVersion = Device.appVersion;
    var model = Device.model;
    var productType = Device.productType;
    var systemVersion = Device.systemVersion;
    var vendorIdentifier = Device.vendorIdentifier;
}

function test_FeatureElement() {
    var parser = new DOMParser();
    var document = parser.parseFromString('<menuBar id="menuBar"></menuBar><textField id="textField"></textField>', "application/xml");
    var textField = document.getElementById("textField");
    textField.addEventListener("change", function() {
        change.call(this, textField);
    });
    
    var change = function (textField: AppleTVJS.FeatureElement){
        var keyboard: AppleTVJS.Keyboard = textField.getFeature('Keyboard');
        
        var text = keyboard.text;
    };
    
    var menuBar = document.getElementById("menuBar");
    textField.addEventListener("change", function() {
        change.call(this, textField);
    });
    
    var select = function (menuBar: AppleTVJS.FeatureElement) {
        var menuBarDocument: AppleTVJS.MenuBarDocument = menuBar.getFeature('MenuBarDocument');
        
        var document = menuBarDocument.getDocument(menuBar);
        menuBarDocument.setDocument(document, menuBar);
        menuBarDocument.setSelectedItem(menuBar);
    };
}

function test_MediaItem() {
    var mediaItem = new AppleTVJS.MediaItem('video', 'http://www.vidme.com/abc123');
    mediaItem.artworkImageURL = "http://google.com/artwork.png";
    mediaItem.contentRatingDomain = "movie";
    mediaItem.contentRatingRanking = 1;
    mediaItem.description = "Media Item";
    
    var highlight = new AppleTVJS.Highlight();
    highlight.description = "Highlight";
    highlight.duration = 10;
    highlight.imageURL = "http://google.com/img.png";
    highlight.name = "Name of Highlight";
    highlight.starttime = 10;
    
    var highlightGroup = new AppleTVJS.HighlightGroup();
    highlightGroup.name = "Highlight Group";
    highlightGroup.hightlights.push(highlight);
    
    mediaItem.highlightGroups.push(highlightGroup);
    
    var interstitial = new AppleTVJS.Interstitial();
    interstitial.duration = 10;
    interstitial.starttime = 20;
    
    mediaItem.interstitials.push(interstitial);
        
    mediaItem.isExplicit = false;
    mediaItem.resumeTime = 0;
    mediaItem.subtitle = "Subtitle";
    
    var loadAssetIDCallback = function (assetID: string, error: string) {
        //do something
    };
    
    mediaItem.loadAssetID = function (url: string, loadAssetIDCallback: (assetID: string, error: string) => void) {
        //do something
    };
    
    var loadCertificateCallback = function (certificate: string, error: string) {
        //do something
    };
    
    mediaItem.loadCertificate = function (url: string, loadCertificateCallback: (certificate: string, error: string) => void) {
        //do something
    };
    
    var loadKeyCallback = function (key: string, renewalDate: string, error: string) {
        //do something
    };
    
    mediaItem.loadKey = function (url: string, loadKeyCallback: (key: string, renewalDate: string, error: string) => void) {
        //do something
    };
}

//test the global navigation document object
function test_navigationDocument() {
    var parser = new DOMParser();
    var document = parser.parseFromString('<document></document>', "application/xml");

    var documents = navigationDocument.documents;

    navigationDocument.clear();
    navigationDocument.dismissModal();
    navigationDocument.insertBeforeDocument(document);
    navigationDocument.insertBeforeDocument(document, document);
    navigationDocument.popDocument();
    navigationDocument.popToDocument(document);
    navigationDocument.popToRootDocument();
    navigationDocument.presentModal(document);
    navigationDocument.pushDocument(document);
    navigationDocument.removeDocument(document);
    navigationDocument.replaceDocument(document, document);
}

function test_Player() {
    var playlist =  new AppleTVJS.Playlist();

    var mediaItem = new AppleTVJS.MediaItem('audio');
    playlist.push(mediaItem);
    playlist.pop();
    var result: AppleTVJS.MediaItem[] = playlist.splice(0, 1, mediaItem);
    var length: number = playlist.length;
    
    var player = new AppleTVJS.Player();
    player.playlist = playlist;
    
    var parser = new DOMParser();
    var document = parser.parseFromString('<document></document>', "application/xml");
    player.overlayDocument = document;
    
    player.present();
    player.pause();
    player.play();
    
    var playbackState: string = player.playbackState;
    player.seekToTime(10);
    player.setPlaybackRate(2);
    player.stop();
    
    var currentMediaItem: AppleTVJS.MediaItem = player.currentMediaItem;
    var nextMediaItem: AppleTVJS.MediaItem = player.nextMediaItem;
    var previousMediaItem: AppleTVJS.MediaItem = player.previousMediaItem;
    
    player.mediaItemDidChange = function (reason: string) {
        //do something
    };
    
    player.requestSeekToTime = function (result) {
        //do something
    };
    
    player.shouldHandleStateChange = function (result: boolean) {
        //do something
    };
    
    player.stateDidChange = function (){
        //do something
    };
    
    player.stateWillChange = function (){
        //do something
    };
    
    player.timeBoundaryDidCross = function (){
        //do something
    };
    
    player.timeDidChange = function (){
        //do something
    };
    
    player.timedMetadata = function (){
        //do something
    };
}

//test the global settings object
function test_Settings() {
    var language = Settings.language;
    Settings.onRestrictionsChange = function () {
        //do something
    }
    var restrictions = Settings.restrictions;
    var allowsExplicit = restrictions.allowsExplicit;
    var maxMovieRank = restrictions.maxMovieRank;
    var maxMovieRatingForCountry = restrictions.maxMovieRatingForCountry('US');;
    var allowsExplmaxTVShowRankicit = restrictions.maxTVShowRank;
    var maxTVShowRatingForCountry = restrictions.maxTVShowRatingForCountry('US');
    var storeFrontCountryCode = Settings.storefrontCountryCode;
}

function test_TVError() {
    var tvError = new AppleTVJS.TVError();
    tvError.code = "404";
    tvError.description = "Not found";
    tvError.domain = "NSMachErrorDomain";
}
