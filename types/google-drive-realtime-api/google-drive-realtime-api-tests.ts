

// Don't use this as a reference. Use the examples at
//   https://developers.google.com/google-apps/realtime/
// To use the Realtime API effectively, I needed to read lots of the
// (well-written) documentation on the site, and to understand parts of
//   realtime-client-utils.js
// which you can find in the tutorial section of the project's homepage.

declare var $ : any;
interface JQuery {
    [key: string]: any;
};

type CollabModel = gapi.drive.realtime.Model;
type CollabDoc = gapi.drive.realtime.Document;
interface CollaborativeObject extends gapi.drive.realtime.CollaborativeObject {}
interface CollaborativeList<T> extends gapi.drive.realtime.CollaborativeList<T> {}
interface CollaborativeMap<T> extends gapi.drive.realtime.CollaborativeMap<T> {}
interface IndexReference<T> extends gapi.drive.realtime.IndexReference<T> {}
interface CollaborativeString extends gapi.drive.realtime.CollaborativeString {}

type CListOfCObj = CollaborativeList<CollaborativeObject>
type CObjOrStr = CollaborativeObject | string;
type CMapOfCObjOrStr = CollaborativeMap<CObjOrStr>;


namespace GRealtime {




    var default_loader_options : rtclient.LoaderOptions = {
        // Your Application ID from the Google APIs Console.
        appId: "YOUR_APP_ID",

        // This tells us if need to we automatically create a file after auth.
        autoCreate: false,

        // Client ID from the console.
        clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',

        // The ID of the button to click to authorize. Must be a DOM element ID.
        authButtonElementId: 'realtime-authorize-button',

        // The MIME type of newly created Drive Files. By default the application
        // specific MIME type will be used:
        // application/vnd.google-apps.drive-sdk.
        //newFileMimeType: 'text/json',
        newFileMimeType: 'text',
        //newFileMimeType: null, // default

        // Function to be called to initialize custom Collaborative Objects types.
        registerTypes: null, // No action

        defaultTitle: "Default default-doc-title",

        // The rest are only defaults
        afterAuth: function() : void {
            console.log("default afterAuth called")
        },

        initializeModel: function(rtmodel:CollabModel) : void {
            console.log("default initializeModel called");
        },

        onFileLoaded : function(rtdoc:CollabDoc) : void {
            console.log("default onFileLoaded called");
        }

    };

    export class MyRTLoader {
        public loader_options : rtclient.LoaderOptions = $.extend({},default_loader_options);
        private rtloader_client : rtclient.RealtimeLoader;

        // call after setting loader_options appropriately
        authorize() {
            this.rtloader_client = new rtclient.RealtimeLoader(this.loader_options);
            this.rtloader_client.start();
        }

        createNew(title:string, callback: (file:any) => void) {
            rtclient.createRealtimeFile(title, null, callback);
        }

        loadAfterAuth(fileid:string) {
            // use this as part of your afterAuth callback
            rtclient.params.fileIds = fileid;
            this.rtloader_client.load();
        }
    }

    export class MyRealtimeDoc  {
        protected rtmodel: CollabModel;
        protected rtdoc: CollabDoc;
        private readonly myRTLoader = new GRealtime.MyRTLoader();

        newFile(title: string,
                initializeModel: (x:CollabModel) => void,
                onFileLoaded: (x:CollabDoc) => void) : void {

            var _afterAuth = () => {
                this.myRTLoader.createNew(title, (file:rtclient.DriveAPIFileResource) => {
                    console.log(`\n\nThis is the createNew callback. New file's id: ${file.id}\n\n`);
                    $("#file-id-text-input").val(file.id);
                    this.myRTLoader.loadAfterAuth(file.id)
                })
            }

            var _initializeModel = (model:CollabModel) => {
                console.log("\n\nRTModel initialized for NEW document.\n\n");
                this.rtmodel = model;
                if( initializeModel ) {
                    initializeModel(model);
                }
            }

            var _onFileLoaded = (doc:CollabDoc) => {
                console.log("\n\nNEW document loaded.\n\n");
                this.rtmodel = doc.getModel();
                this.rtdoc = doc;
                if( onFileLoaded ) {
                    onFileLoaded(doc);
                }
            }

            this.myRTLoader.loader_options.onFileLoaded = _onFileLoaded;
            this.myRTLoader.loader_options.afterAuth = _afterAuth;
            this.myRTLoader.loader_options.initializeModel = _initializeModel;
            this.myRTLoader.authorize();
        }

        loadExisting(fileid: string,
                     onFileLoaded: (doc:CollabDoc) => void) : void {

            rtclient.params.fileIds = fileid;

            var _onFileLoaded = (doc:CollabDoc) => {
                console.log("\n\nEXISTING document loaded.\n\n");
                this.rtdoc = doc;
                this.rtmodel = doc.getModel();
                if( onFileLoaded ) {
                    onFileLoaded(doc);
                }
            };

            this.myRTLoader.loader_options.onFileLoaded = _onFileLoaded;
            //this.myRTLoader.loader_options.afterAuth = ...
            this.myRTLoader.authorize();
        }

        createString() : CollaborativeString { return this.rtmodel.createString(""); }

        createList() : CollaborativeList<CollaborativeObject> { return this.rtmodel.createList<CollaborativeObject>(); }

        createMap() : CollaborativeMap<CollaborativeObject> { return this.rtmodel.createMap<CollaborativeObject>(); }

        addToPersistDocRoot(x:{pdata:any}, key:string) {
            this.rtmodel.getRoot().set(key,x.pdata);
        }

        bindString(istring:CollaborativeString, $textinput: JQuery) : gapi.drive.realtime.databinding.Binding {
            return gapi.drive.realtime.databinding.bindString(
                <CollaborativeString>istring,
                <HTMLInputElement>$textinput[0] );
        }


    }

        // alternative to RealtimePSDoc.bindString
    function registerLocalStringChangeListener(
                           x: CollaborativeString,
                           listener_or_callback:  (e:Event) => void | EventListener)  : void {
        x.addEventListener(gapi.drive.realtime.EventType.TEXT_INSERTED, listener_or_callback);
        x.addEventListener(gapi.drive.realtime.EventType.TEXT_DELETED, listener_or_callback);
    }

}


// Next example from https://developers.google.com/google-apps/realtime/model-events

declare var doc : CollabDoc;
function displayObjectChangedEvent(evt:gapi.drive.realtime.ObjectChangedEvent) {
  var events = evt.events;
  var eventCount = evt.events.length;
  for (var i = 0; i < eventCount; i++) {
    console.log('Event type: '  + events[i].type);
    console.log('Local event: ' + events[i].isLocal);
    console.log('User ID: '     + events[i].userId);
    console.log('Session ID: '  + events[i].sessionId);
  }
}
doc.getModel().getRoot().addEventListener(gapi.drive.realtime.EventType.OBJECT_CHANGED, displayObjectChangedEvent);
