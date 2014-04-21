/// <reference path="microsoft-live-connect.d.ts" />

/**
 * From: http://msdn.microsoft.com/en-us/library/live/hh550838.aspx
 */
function createFolder_onClick() {
    var login_props: Microsoft.Live.ILoginProperties = {
        scope: "wl.skydrive_update"
    };
    WL.login(login_props).then(
        function (response) {
            var newFolder: Microsoft.Live.INewFolder = {
                "name": "This is a new folder",
                "description": "A new folder"
            }, api_properties: Microsoft.Live.IAPIProperties = {
                path: "me/skydrive",
                method: "POST",
                body: newFolder
            };
            WL.api<Microsoft.Live.IFolder>(api_properties).then(
                function (response) {
                    document.getElementById("infoArea").innerText =
                    "Created folder. Name: " + response.name + ", ID: " + response.id;
                },
                function (responseFailed: Microsoft.Live.IError) {
                    document.getElementById("infoArea").innerText =
                    "Error calling API: " + responseFailed.error.message;
                }
            );
        },
        function (responseFailed: Microsoft.Live.IJSError) {
            document.getElementById("infoArea").innerText =
            "Error signing in: " + responseFailed.error_description;
        }
    );
}

/**
 * From: http://msdn.microsoft.com/en-us/library/live/jj219386.aspx
 */
function downloadFile_onClick() {
    var picker = setupSavePicker();
    picker.pickSaveFileAsync().then(
        function (file) {
            if (file && (file instanceof Windows.Storage.StorageFile)) {
                WL.login({
                    scope: "wl.skydrive"
                }).then(
                    function (response) {
                        WL.backgroundDownload({
                            path: "file.8c8ce076ca27823f.8C8CE076CA27823F!129/picture?type=thumbnail",
                            file_output: file
                        }).then(
                            function (response) {
                                document.getElementById("infoLabel").innerText = "Downloaded file.";
                            },
                            function (responseFailed: Microsoft.Live.IError) {
                                document.getElementById("infoLabel").innerText =
                                "Error calling API: " + responseFailed.error.message;
                            }
                            );
                    },
                    function (responseFailed: Microsoft.Live.IError) {
                        document.getElementById("infoLabel").innerText =
                        "Error signing in: " + responseFailed.error.message;
                    }
                    );
            }
            else {
                document.getElementById("infoLabel").innerText = "Cannot download file.";
            }
        },
        function (fileFailed) {
            document.getElementById("infoLabel").innerText = "Cannot download file.";
        }
    );
}

function setupSavePicker() {
    var savepicker = new Windows.Storage.Pickers.FileSavePicker();
    savepicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.documentsLibrary;
    // XXX: Type hack for other typings. Apparently string[] isn't an IVector.
    (<any>savepicker.fileTypeChoices).insert("Picture", [".jpg"]);
    return savepicker;
}

/**
 * From: http://msdn.microsoft.com/en-us/library/live/jj219387.aspx
 */
function uploadFile_onClick() {
    var picker = setupOpenPicker();
    var filePickOp = picker.pickSingleFileAsync().then(
        function (file) {
            WL.login({
                scope: "wl.skydrive_update"
            }).then(
                function (response) {
                    WL.backgroundUpload({
                        path: "me/skydrive",
                        file_name: file.name,
                        file_input: file,
                        overwrite: "rename"
                    }).then(
                        function (response) {
                            document.getElementById("infoLabel").innerText = "Uploaded file.";
                        },
                        function (responseFailed: Microsoft.Live.IError) {
                            document.getElementById("infoLabel").innerText =
                            "Error calling API: " + responseFailed.error.message;
                        }
                        );
                },
                function (responseFailed: Microsoft.Live.IError) {
                    document.getElementById("infoLabel").innerText =
                    "Error signing in: " + responseFailed.error.message;
                }
            );
        },
        function (fileFailed) {
            document.getElementById("infoLabel").innerText = "Cannot upload file.";
        }
    );
}

function setupOpenPicker() {
    var openpicker = new Windows.Storage.Pickers.FileOpenPicker();
    openpicker.fileTypeFilter.replaceAll(["*"]);
    return openpicker;
}

/**
 * From: http://msdn.microsoft.com/en-us/library/live/hh550839.aspx
 */
function downloadFile() {
    WL.login({
        scope: "wl.skydrive"
    }).then(
        function (response) {
            WL.download({
                path: "file.a6b2a7e8f2515e5e.A6B2A7E8F2515E5E!131/content"
            }).then(
                function (response) {
                    // Will not be called for web apps.
                },
                function (responseFailed: Microsoft.Live.IError) {
                    document.getElementById("info").innerText =
                    "Error downloading file: " + responseFailed.error.message;
                }
            );
        },
        function (responseFailed: Microsoft.Live.IError) {
            document.getElementById("info").innerText =
            "Error signing in: " + responseFailed.error.message;
        }
    );
}

WL.Event.subscribe("auth.login", function () { });
WL.Event.unsubscribe("auth.logout");

/**
 * From: http://msdn.microsoft.com/en-us/library/live/jj219389.aspx
 */
function uploadFile_fileDialog() {
    WL.fileDialog({
        mode: "save"
    }).then(
        function (response) {
            WL.upload({
                path: response.data.folders[0].id,
                element: "file",
                overwrite: "rename"
            }).then(
                function (response) {
                    document.getElementById("info").innerText =
                    "File uploaded.";
                },
                function (responseFailed: Microsoft.Live.IError) {
                    document.getElementById("info").innerText =
                    "Error uploading file: " + responseFailed.error.message;
                }
                );
        },
        function (responseFailed: Microsoft.Live.IError) {
            document.getElementById("info").innerText =
            "Error getting folder info: " + responseFailed.error.message;
        }
    );
}

/**
 * From: http://msdn.microsoft.com/en-us/library/live/hh550842.aspx
 */
function loginStatus() {
    WL.getLoginStatus(function (response) { alert("Your status is: " + response.status) });
}

/**
 * From http://msdn.microsoft.com/en-us/library/live/hh550843.aspx
 */
function onSessionChange() {
    var session = WL.getSession();
    if (session) {
        document.getElementById("infoLabel").innerText =
        "Something about the session changed.";
    }
    else {
        document.getElementById("infoLabel").innerText =
        "Signed out or session error.";
    }
}

/**
 * From: http://msdn.microsoft.com/en-us/library/live/hh550844.aspx
 */
WL.init({
    client_id: "APP_CLIENT_ID",
    redirect_uri: "REDIRECT_URL",
    scope: "wl.signin",
    response_type: "token"
});
WL.init({ scope: "wl.signin" });

/**
 * From: http://msdn.microsoft.com/en-us/library/live/hh550845.aspx
 */
function streamlineAccountReg_onClick() {
    WL.login({
        scope: ["wl.signin", "wl.basic", "wl.birthday", "wl.emails"]
    }).then(
        function (response) {
            WL.api<Microsoft.Live.IUser>({
                path: "me",
                method: "GET"
            }).then(
                function (response) {
                    document.getElementById("first_name").innerText = response.first_name;
                    document.getElementById("last_name").innerText = response.last_name;
                    document.getElementById("email").innerText = response.emails.preferred;
                    document.getElementById("gender").innerText = response.gender;
                    document.getElementById("birthday").innerText =
                    response.birth_month + " " + response.birth_day + " " + response.birth_year;
                },
                function (responseFailed: Microsoft.Live.IError) {
                    document.getElementById("infoArea").innerText =
                    "Error calling API: " + responseFailed.error.message;
                }
            );
        },
        function (responseFailed: Microsoft.Live.IJSError) {
            document.getElementById("infoArea").innerText =
            "Error signing in: " + responseFailed.error_description;
        }
    );
}

/**
 * From: http://msdn.microsoft.com/en-us/library/live/hh550846.aspx
 */
function signUserOut() {
    WL.logout();
}

/**
 * From: http://msdn.microsoft.com/en-us/library/live/hh550847.aspx
 */
var signInProps: Microsoft.Live.ISignInProperties = {
    name: "signin",
    element: "signin"
};
WL.ui(signInProps);
var skyDriveProps: Microsoft.Live.ISkyDrivePickerProperies = {
    name: "skydrivepicker",
    element: "uploadFile_div",
    mode: "save",
    onselected: onUploadFileCompleted,
    onerror: onUploadFileError
};
WL.ui(skyDriveProps);

function onUploadFileCompleted(response: Microsoft.Live.IFilePickerResult) {
    WL.upload({
        path: response.data.folders[0].id,
        element: "file",
        overwrite: "rename"
    }).then(
        function (response) {
            document.getElementById("info").innerText =
            "File uploaded.";
        },
        function (responseFailed: Microsoft.Live.IError) {
            document.getElementById("info").innerText =
            "Error uploading file: " + responseFailed.error.message;
        }
        );
};

function onUploadFileError(response: Microsoft.Live.IError) {
    document.getElementById("info").innerText =
    "Error getting folder info: " + response.error.message;
}
skyDriveProps = {
    name: "skydrivepicker",
    element: "downloadFile_div",
    mode: "open",
    select: "multi",
    onselected: onDownloadFileCompleted,
    onerror: onDownloadFileError
};
WL.ui(skyDriveProps);

function onDownloadFileCompleted(response: Microsoft.Live.IFilePickerResult) {
    var msg = "", folder: number, file: number;
    // For each folder selected...
    if (response.data.folders.length > 0) {
        for (folder = 0; folder < response.data.folders.length; folder++) {
            // Use folder IDs to iterate through child folders and files as needed.
            msg += "\n" + response.data.folders[folder].id;
        }
    }
    // For each file selected...
    if (response.data.files.length > 0) {
        for (file = 0; file < response.data.files.length; file++) {
            // Use file IDs to iterate through files as needed.
            msg += "\n" + response.data.files[file].id;
        }
    }
    document.getElementById("info").innerText =
    "Selected folders/files:" + msg;
};

function onDownloadFileError(responseFailed: Microsoft.Live.IError) {
    document.getElementById("info").innerText =
    "Error getting folder/file info: " + responseFailed.error.message;
}

/**
 * From: http://msdn.microsoft.com/en-us/library/live/hh550848.aspx
 */
function uploadFile() {
    WL.login({
        scope: "wl.skydrive_update"
    }).then(
        function (response) {
            WL.upload({
                path: "folder.a6b2a7e8f2515e5e.A6B2A7E8F2515E5E!170",
                element: "file",
                overwrite: "rename"
            }).then(
                function (response) {
                    document.getElementById("info").innerText =
                    "File uploaded.";
                },
                function (responseFailed: Microsoft.Live.IError) {
                    document.getElementById("info").innerText =
                    "Error uploading file: " + responseFailed.error.message;
                }
            );
        },
        function (responseFailed: Microsoft.Live.IError) {
            document.getElementById("info").innerText =
            "Error signing in: " + responseFailed.error.message;
        }
    );
}


//#region From: http://msdn.microsoft.com/en-us/library/live/hh243648.aspx
/**
 * This region contains REST object examples, and verifies that they pass
 * type checking.
 */
var albumCollection: Microsoft.Live.IObjectCollection<Microsoft.Live.IAlbum> = {
    "data": [
        {
            "id": "album.8c8ce076ca27823f.8C8CE076CA27823F!126",
            "from": {
                "name": "Roberto Tamburello",
                "id": "8c8ce076ca27823f"
            },
            "name": "My Sample Album 1",
            "description": "",
            "parent_id": "folder.de57f4126ed7e411",
            "upload_location": "https://apis.live.net/v5.0/folder.de57f4126ed7e411.DE57F4126ED7E411!126/files/",
            "is_embeddable": true,
            "count": 4,
            "link": "https://cid-8c8ce076ca27823f.skydrive.live.com/redir.aspx?page\u003dself\u0026resid\u003d8C8CE076CA27823F!126\u0026type\u003d5",
            "type": "album",
            "shared_with": {
                "access": "Everyone (public)"
            },
            "created_time": "2011-04-21T23:19:47+0000",
            "updated_time": "2011-04-22T19:18:12+0000",
            // XXX: The API example documentation missed this property, but it has been wrong in the past...
            "client_updated_time": "2011-04-22T19:18:12+0000",
        }
   ]
};
var newAlbum: Microsoft.Live.INewAlbum = {
    "name": "Vacation 2011",
    "description": "Photos from our fun vacation."
};
var audioCollection: Microsoft.Live.IObjectCollection<Microsoft.Live.IAudio> = {
    "data": [
        {
            "id": "file.a6b2a7e8f2515e5e.A6B2A7E8F2515E5E!144",
            "from": {
                "name": "Stig Struve-Christensen",
                "id": "a6b2a7e8f2515e5e"
            },
            "name": "SampleAudio.mp3",
            "description": null,
            "parent_id": "folder.a6b2a7e8f2515e5e",
            "size": 8414449,
            "upload_location": "https://apis.live.net/v5.0/file.a6b2a7e8f2515e5e.A6B2A7E8F2515E5E!144/content/",
            "comments_count": 0,
            "comments_enabled": false,
            "is_embeddable": false,
            "source": "http://storage.live.com/s1p60U8Xs4UzIXTScrTioalE-ZaVFiDQBA15MS2BwcsuNjfG64Z2fw-DAjXnPuqC47YR40_xAoPD8aRGhtna9ZFZ9_oO4BTz4CWF973DTXMxc5U3TntcQ9qEA/SampleAudio.mp3:Binary",
            "link": "https://skydrive.live.com/redir.aspx?cid\u003d22688711f5410e6c\u0026page\u003dview\u0026resid\u003d22688711F5410E6C!582\u0026parid\u003d22688711F5410E6C!581",
            "type": "audio",
            "title": "My Sample Audio",
            "artist": "My Favorite Artist",
            "album": "My Favorite Album",
            "album_artist": "My Favorite Artist",
            "genre": "Easy Listening",
            "duration": 225000,
            "picture": "https://storage.live.com/items/A6B2A7E8F2515E5E!144:MobileReady/SampleAudio.mp3?psid=1&ck=0&ex=720",
            "shared_with": {
                "access": "Just me"
            },
            "created_time": "2012-09-23T22:00:57+0000",
            "updated_time": "2012-09-03T22:00:57+0000"
        }
   ]
};

var newAudioResponse: Microsoft.Live.INewFileResponse = {
    "id": "ID of the new audio",
    "name": "The file's name and file extension",
    "source": "URL where the audio can be downloaded from"
};

var newAudio: Microsoft.Live.INewAudio = {
    "name": "SampleAudioChanged.wav",
    "description": "Holiday Concert"
};

var calendarCollection: Microsoft.Live.IObjectCollection<Microsoft.Live.ICalendar> = {
    "data": [
        {
            "id": "calendar.42d4dbc866f94c83849c88c6eb9985bc",
            "name": "Birthday calendar",
            "description": "If you have birthdays listed for your contacts, they'll appear on this calendar. You can add more birthdays, but you can't add other types of events.",
            "created_time": "2011-08-05T19:41:04+0000",
            "updated_time": "2011-08-05T19:41:04+0000",
            "from": {
                "name": null,
                "id": null
            },
            "is_default": false,
            "subscription_location": null,
            "permissions": "read"
        }
   ]
};

var newCalendar: Microsoft.Live.INewCalendar = {
    "name": "Summer Events",
    "summary": "Things we are doing this summer."
};

var newCalendarSub: Microsoft.Live.INewCalendarSubscription = {
    "name": "Soccer League",
    "subscription_location": "ical.sharedcalendars.com/98754auv"
};

var commentCollection: Microsoft.Live.IObjectCollection<Microsoft.Live.IComment> = {
    "data": [
        {
            "id": "comment.22688711f5410e6c.22688711f0410e6c!818.22688711F5410E6C!979",
            "from": {
                "name": "Roberto Tamburello",
                "id": "8c8ce076ca27823f"
            },
            "message": "A lighthouse built on some rocks.",
            "created_time": "2011-04-21T23:21:28+0000"
        }
   ]
};

var newContact: Microsoft.Live.INewContact = {
    "first_name": "",
    "last_name": "",
    "emails": {
        "preferred": "",
        "personal": "",
        "business": "",
        "other": ""
    },
    "work": [
        {
            "employer": {
                "name": ""
            }
        }
    ]
};

var contactCollection: Microsoft.Live.IObjectCollection<Microsoft.Live.IContact> = {
    "data": [
        {
            "id": "contact.b4466224b2ca42798c3d4ea90c75aa56",
            "first_name": "Henrik",
            "last_name": "Jensen",
            "name": "Henrik Jensen",
            "is_friend": false,
            "is_favorite": false,
            "user_id": null,
            "email_hashes": [
                "9ecdb19f4eb8e04304c5d1280368c42e85b6e4fe39f08b0c837ec592b905a620",
                "fc05492f50da6488aa14dcf221d395bcb29a4e43b43b250d60c68df4f831cad3"
            ],
            "updated_time": "2011-04-22T00:11:13+0000",
            "birth_day": 29,
            "birth_month": 3

        }
   ]
};

var errorObj: Microsoft.Live.IError = {
    "error": {
        "code": "request_token_expired",
        "message": "The provided access token has expired."
    }
};

var eventI: Microsoft.Live.IEvent = {
    "id": "event.611afb17fa9448f28cdb8277e8ffeb77.e9f015000d0249ce847c5306a25d7d75",
    "name": "Global Project Risk Management Meeting",
    "description": "Generate and assess risks for the project",
    "calendar_id": "calendar.611afb17fa9448f28cdb8277e8ffeb77",
    "from": {
        "name": "William Flash",
        "id": "de57f4126ed7e411"
    },
    "start_time": "2011-04-20T01:00:00+0000",
    "end_time": "2011-04-20T02:00:00+0000",
    "location": "Building 81, Room 9981, 123 Anywhere St., Redmond WA 19599",
    "is_all_day_event": false,
    "is_recurrent": false,
    "recurrence": null,
    "reminder_time": null,
    "availability": "busy",
    "visibility": "public",
    "created_time": "2011-03-14T23:01:31+0000",
    "updated_time": "2011-04-19T20:23:03+0000"
};

var newEvent: Microsoft.Live.INewEvent = {
    "name": "Global Project Risk Management Meeting",
    "description": "Generate and assess risks for the project",
    "start_time": "2011-04-20T01:00:00-07:00",
    "end_time": "2011-04-20T02:00:00-07:00",
    "location": "Building 81, Room 9981, 123 Anywhere St., Redmond WA 19599",
    "is_all_day_event": false,
    "availability": "busy",
    "visibility": "public"
};

var eventResponse: Microsoft.Live.INewEventResponse = {
    "name": "Global Project Risk Management Meeting",
    "description": "Generate and assess risks for the project",
    "start_time": "2011-04-20T01:00:00+0000",
    "end_time": "2011-04-20T02:00:00+0000",
    "location": "Building 81, Room 9981, 123 Anywhere St., Redmond WA 19599",
    "is_all_day_event": false,
    "is_recurrent": false,
    "recurrence": null,
    "reminder_time": null,
    "availability": "busy",
    "visibility": "public",
    "updated_time": "2011-04-19T20:23:03+0000"
};

var file: Microsoft.Live.IObjectCollection<Microsoft.Live.IFile> = {
    "data": [
        {
            "id": "file.22688711f5410e6c.22688711F5410E6C!942",
            "from": {
                "name": "William Flash",
                "id": "22688711f5410e6c"
            },
            "name": "Processing.docx",
            "description": null,
            "parent_id": "folder.22688711f5410e6c.22688711F5410E6C!479",
            "size": 12692,
            "upload_location": "https://apis.live.net/v5.0/file.22688711f5410e6c.22688711F5410E6C!942/content/",
            "comments_count": 0,
            "comments_enabled": true,
            "is_embeddable": false,
            "source": "http://storage.live.com/s1pEwo9qzyT4_BJZqMNm-aVzgLo-WRsQGzjzFsXjyREuQG5pDYr237vKz3i2pmqFuniYPzsuIZAOCUMB_gdfKCUpLpVcaAMXGrk4T7jOWenRniCv9vex7GWfSvy-XCVBVnU/Processing.docx:Binary",
            "link": "https://skydrive-df.live.com/redir.aspx?cid\u003d22688711f5410e6c\u0026page\u003dview\u0026resid\u003d22688711F5410E6C!942\u0026parid\u003d22688711F5410E6C!479",
            "type": "file",
            "shared_with": {
                "access": "Everyone (public)"
            },
            "created_time": "2011-10-12T23:18:23+0000",
            "updated_time": "2011-10-12T23:18:23+0000",
            // XXX: Not specified in example. Could be a bug in documentation, or maybe these are optional fields.
            "client_updated_time": "2011-10-12T23:18:23+0000",
            "sort_by": null
        }
   ]
};

var fileDownload: Microsoft.Live.IFileDownloadLink = {
    "location": "..."
};

var newFileResponse: Microsoft.Live.INewFileResponse = {
    "id": "file.a6b2a7e8f2515e5e.A6B2A7E8F2515E5E!184",
    "name":"MyNewFile.txt",
    "source": "http://storage.live.com/s1pasGKzgXFvuEQCbxGtOyIpboUVH1OCHoRzUJNDDwL0zVoidb0RRrNVk88hUrOEve5OMT7eCkuxPbop7dV9tMJQ-eE8SCQ28vFv9ZgPnDGwQMRm-0FeG3-KEY4HL9dQSw9/MyNewFile.txt:Binary,Default/MyNewFile.txt"
};

var folderCollection: Microsoft.Live.IObjectCollection<Microsoft.Live.IFolder> = {
    "data": [
        {
            "id": "folder.8c8ce076ca27823f.8C8CE076CA27823F!142",
            "from": {
                "name": "Roberto Tamburello",
                "id": "8c8ce076ca27823f"
            },
            "name": "My Sample Folder in Album 1",
            "description": "",
            "parent_id": "folder.de57f4126ed7e411",
            "upload_location": "https://apis.live.net/v5.0/folder.de57f4126ed7e411.DE57F4126ED7E411!126/files/",
            "is_embeddable": true,
            "count": 3,
            "link": "https://cid-8c8ce076ca27823f.skydrive.live.com/redir.aspx?page\u003dself\u0026resid\u003d8C8CE076CA27823F!142\u0026parid\u003d8C8CE076CA27823F!126\u0026type\u003d5",
            "type": "folder",
            "shared_with": {
                "access": "Just me"
            },
            "created_time": "2011-04-22T00:36:30+0000",
            "updated_time": "2011-04-22T19:18:12+0000",
            // XXX: Omitted in the example.
            "client_updated_time": "???",
            "sort_by": "???"
        }
   ]
};

var newFolder: Microsoft.Live.INewFolder = {
    "name": "Informative Spreadsheets",
    "description": "A folder full of useful data visualizations."
};

var friendCollection: Microsoft.Live.IObjectCollection<Microsoft.Live.IFriend> = {
   "data": [
        {
            "id": "d09ea18fafc39a0c",
            "name": "Henrik Jensen"
        }
    ]
};

var permissionsCollection: Microsoft.Live.IObjectCollection<Microsoft.Live.IPermissions> = {
    "data": [
        {
            "wl.basic": 1,
            "wl.offline_access": 1,
            "wl.signin": 1
        }
    ]
};

var photoCollection: Microsoft.Live.IObjectCollection<Microsoft.Live.IPhoto> = {
    "data": [
        {
            "id": "file.de57f4126ed7e411.DE57F4126ED7E411!128",
            "from": {
                "name": "Nuno Bento",
                "id": "de57f4126ed7e411"
            },
            "name": "Maui-2012_0034.JPG",
            "description": null,
            "parent_id": "folder.de57f4126ed7e411.DE57F4126ED7E411!126",
            "size": 561683,
            "comments_count": 1,
            "comments_enabled": true,
            "tags_count": 0,
            "tags_enabled": true,
            "is_embeddable": true,
            "picture": "http://storage.live.com/s1pKk5vzd-gdPanbzKYhB0nQGn8wGq5DSgqvrgIHU1NTXA4e2-spGkAhQjW1d9pcgKAGLB4NsEsSvDoREmdx5w-JiFrinEJJuEoz08Ws_IFupkX2bPSvy5qmths9ijwvDrXi1OBCWk9GW9Kt-qNNOAA9g/Maui09_0034.JPG:Thumbnail",
            "source": "http://storage.live.com/s1pKk5vzd-gdPanbzKYhB0nQGn8wGq5DSgqvrgIHU1NTXA4e2-spGkAhQjW1d9pcgKAGLB4NsEsSvDoREmdx5w-JiFrinEJJuEoz08Ws_IFupkX2bPSvy5qmths9ijwvDrXi1OBCWk9GW9Kt-qNNOAA9g/Maui09_0034.JPG:HighRes",
            "upload_location": "https://apis.live.net/v5.0/file.de57f4126ed7e411.DE57F4126ED7E411!128/content/",
            "images": [
                {
                    "height": 450,
                    "width": 600,
                    "source": "http://storage.live.com/s1pKk5vzd-gdPanbzKYhB0nQGn8wGq5DSgqvrgIHU1NTXA4e2-spGkAhQjW1d9pcgKAGLB4NsEsSvDoREmdx5w-JiFrinEJJuEoz08Ws_IFupkX2bPSvy5qmths9ijwvDrXi1OBCWk9GW9Kt-qNNOAA9g/Maui09_0034.JPG:WebReady",
                    "type": "normal"
                }, {
                    "height": 132,
                    "width": 176,
                    "source": "http://storage.live.com/s1pKk5vzd-gdPanbzKYhB0nQGn8wGq5DSgqvrgIHU1NTXA4e2-spGkAhQjW1d9pcgKAGLB4NsEsSvDoREmdx5w-JiFrinEJJuEoz08Ws_IFupkX2bPSvy5qmths9ijwvDrXi1OBCWk9GW9Kt-qNNOAA9g/Maui09_0034.JPG:MobileReady",
                    "type": "album"
                }, {
                    "height": 72,
                    "width": 96,
                    "source": "http://storage.live.com/s1pKk5vzd-gdPanbzKYhB0nQGn8wGq5DSgqvrgIHU1NTXA4e2-spGkAhQjW1d9pcgKAGLB4NsEsSvDoREmdx5w-JiFrinEJJuEoz08Ws_IFupkX2bPSvy5qmths9ijwvDrXi1OBCWk9GW9Kt-qNNOAA9g/Maui09_0034.JPG:Thumbnail",
                    "type": "thumbnail"
                }, {
                    "height": 1200,
                    "width": 1600,
                    "source": "http://storage.live.com/s1pKk5vzd-gdPanbzKYhB0nQGn8wGq5DSgqvrgIHU1NTXA4e2-spGkAhQjW1d9pcgKAGLB4NsEsSvDoREmdx5w-JiFrinEJJuEoz08Ws_IFupkX2bPSvy5qmths9ijwvDrXi1OBCWk9GW9Kt-qNNOAA9g/Maui09_0034.JPG:HighRes",
                    "type": "full"
                }
            ],
            "link": "https://skydrive.live.com/redir.aspx?cid\u003dde57f4126ed7e411\u0026page\u003dview\u0026resid\u003dDE57F4126ED7E411!128\u0026parid\u003dDE57F4126ED7E411!126",
            "when_taken": "2008-03-24T23:41:53+0000",
            "height": 1200,
            "width": 1600,
            "type": "photo",
            "location": {
                "latitude": 47.65316,
                "longitude": -122.135911,
                "altitude": 43
            },
            "camera_make": "MyManufacturer",
            "camera_model": "MyModel",
            "focal_ratio": 2.8,
            "focal_length": 3.85,
            "exposure_numerator": 1,
            "exposure_denominator": 15,
            "shared_with": {
                "access": "Everyone (public)"
            },
            "created_time": "2012-12-03T18:14:03+0000",
            "updated_time": "2012-12-03T18:31:01+0000"
        }
   ]
};

var tag: Microsoft.Live.ITag = {
    "id": "tag.22688711f5410e6c.22688711f5410e6c!767.PRaXZrdHI1uYGQYi9CU0StrzHak",
    "user": {
        "name": "Roberto Tamburello",
        "id": "8c8ce076ca27823f"
    },
    "x": 43.8986,
    "y": 54.4138,
    "created_time": "2011-04-22T01:17:00+0000"
};

var user: Microsoft.Live.IUser = {
    "id": "8c8ce076ca27823f",
    "name": "Roberto Tamburello",
    "first_name": "Roberto",
    "last_name": "Tamburello",
    // XXX: Not in the REST API example, but is included in the WL.ui example.
    "gender": null,
    "link": "http://cid-8c8ce076ca27823f.profile.live.com/",
    "birth_day": 20,
    "birth_month": 4,
    "birth_year": 2010,
    "work": [
        {
            "employer": {
                "name": "Microsoft Corporation"
            },
            "position": {
                "name": "Software Development Engineer"
            }
        }
    ],
    "emails": {
        "preferred": "Roberto@contoso.com",
        "account": "Roberto@contoso.com",
        "personal": "Roberto@fabrikam.com",
        "business": "Robert@adatum.com",
        "other": "Roberto@adventure-works.com"
    },
    "addresses": {
        "personal": {
            "street": "123 Main St.",
            "street_2": "Apt. A",
            "city": "Redmond",
            "state": "WA",
            "postal_code": "12990",
            "region": "United States"
        },
        "business": {
            "street": "456 Anywhere St.",
            "street_2": "Suite 1",
            "city": "Redmond",
            "state": "WA",
            "postal_code": "12399",
            "region": "United States"
        }
    },
    "phones": {
        "personal": "(555) 555-1212",
        "business": "(555) 111-1212",
        "mobile": null
    },
    "locale": "en_US",
    "updated_time": "2011-04-21T23:55:34+0000"
};

var videoCollection: Microsoft.Live.IObjectCollection<Microsoft.Live.IVideo> = {
    "data": [
        {
            "id": "file.de57f4126ed7e411.DE57F4126ED7E411!135",
            "from": {
                "name": "Nuno Bento",
                "id": "de57f4126ed7e411"
            },
            "name": "Wildlife.wmv",
            "description": null,
            "parent_id": "folder.de57f4126ed7e411.DE57F4126ED7E411!126",
            "size": 26246026,
            "comments_count": 0,
            "comments_enabled": true,
            "tags_count": 0,
            "tags_enabled": true,
            "is_embeddable": true,
            "picture": "http://storage.live.com/s1pKk5vzd-gdPaJ5Q1MKN34itsyRlUkAYzD_zsr0Dg-5r4bH8Qo8XRgsunA0M-V4G-XPpu1spowx4xwfjCuDcWQVa7aWld2WCdfeWjBK_coPqaQqzoE26BJP3OZAITB5i_DRPK8jK3ZLilSbNJd-onrOA/Wildlife.wmv:Thumbnail",
            "source": "http://storage.live.com/s1pKk5vzd-gdPaJ5Q1MKN34itsyRlUkAYzD_zsr0Dg-5r4bH8Qo8XRgsunA0M-V4G-XPpu1spowx4xwfjCuDcWQVa7aWld2WCdfeWjBK_coPqaQqzoE26BJP3OZAITB5i_DRPK8jK3ZLilSbNJd-onrOA/Wildlife.wmv:VideoMain",
            "upload_location": "https://apis.live.net/v5.0/file.de57f4126ed7e411.DE57F4126ED7E411!135/content/",
            "link": "https://skydrive.live.com/redir.aspx?cid\u003dde57f4126ed7e411\u0026page\u003dview\u0026resid\u003dDE57F4126ED7E411!135\u0026parid\u003dDE57F4126ED7E411!126",
            "height": 720,
            "width": 1280,
            "duration": 30093,
            "bitrate": 5942130,
            "type": "video",
            "shared_with": {
                "access": "Everyone (public)"
            },
            "created_time": "2011-08-23T23:41:18+0000",
            "updated_time": "2011-08-23T23:41:32+0000"
        }
   ]
};
//#endregion From: http://msdn.microsoft.com/en-us/library/live/hh243648.aspx

//#region From http://isdk.dev.live.com/dev/isdk/Default.aspx
/**
 * The following code snippets were lifted from the Interactive Live SDK
 * sandbox. We only include snippets that exercise portions of the API not
 * already exercised above.
 */

function log(message: string) {
    var child = document.createTextNode(message);
    var parent = document.getElementById('JsOutputDiv') || document.body;
    parent.appendChild(child);
    parent.appendChild(document.createElement("br"));
}

function openFromSkyDrive() {
    WL.fileDialog({
        mode: 'open',
        select: 'single'
    }).then(
        function (response) {
            log("The following file is being downloaded:");
            log("");

            var files = response.data.files;
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                log(file.name);
                WL.download({ "path": file.id + "/content" });
            }
        },
        function (errorResponse) {
            log("WL.fileDialog errorResponse = " + JSON.stringify(errorResponse));
        }
    );
}

function saveToSkyDrive() {
    WL.fileDialog({ mode: 'save' }).then(
        function (response) {
            var folder = response.data.folders[0];

            WL.upload<Microsoft.Live.IFile>({
                path: folder.id,
                element: 'save-to-skydrive-file-input',
                overwrite: 'rename'
            }).then(
                function (response) {
                    log("You saved to " + response.source + ". " +
                        "Below is the result of the upload.");
                    log("");
                    log(JSON.stringify(response));
                },
                function (errorResponse) {
                    log("WL.upload errorResponse = " + JSON.stringify(errorResponse));
                },
                function (progress) {
                    // progress events for the upload are raised here
                }
            );
        }, function (errorResponse) {
            log("WL.fileDialog errorResponse = " + JSON.stringify(errorResponse));
        }
    );
}

function getFiles() {
    var files_path = "/me/skydrive/files";
    WL.api<Microsoft.Live.IObjectCollection<Microsoft.Live.IObject>>({ path: files_path, method: "GET" }).then(
        onGetFilesComplete,
        function (response) {
            log("Cannot get files and folders: " +
                JSON.stringify(response.error).replace(/,/g, ",\n"));
        }
    );
}

// should have an interface that captures the fact that it only has type.
function onGetFilesComplete(response: Microsoft.Live.IObjectCollection<Microsoft.Live.IObject>) {
    var items = response.data;
    var foundFolder = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].type === "folder") {
            log("Found a folder with the following information: " +
                JSON.stringify(items[i]).replace(/,/g, ",\n"));
            foundFolder = 1;
            break;
        }
    }

    if (foundFolder == 0) {
        log("Unable to find any folders");
    }
}

function registerUser() {
    WL.api<Microsoft.Live.IUser>({ path: "/me", method: "GET" }).then(
        function (response) {
            fillRegistrationForm(response);
        },
        function (response) {
            log("API call failed: " + JSON.stringify(response.error).replace(/,/g, "\n"));
        }
        );
}

function fillRegistrationForm(user: Microsoft.Live.IUser) {
    // NOTE: Assign these values to your form elements to streamline registration.
    log("First name: " + user.first_name);
    log("Last name: " + user.last_name);
    log("Preferred email: " + user.emails.preferred);
    log("Gender: " + user.gender);
    log("Birthday: " + user.birth_month + "/" + user.birth_day + "/" + user.birth_year);
}

function showUserContactInfo() {
    WL.api<Microsoft.Live.IUser>({ path: "/me", method: "GET" }).then(
        function (response) {
            log("Addresses: " + JSON.stringify(response.addresses).replace(/,/g, "\n"));
            log("Phone Numbers: " + JSON.stringify(response.phones).replace(/,/g, "\n"));
            log("Email Addresses: " + JSON.stringify(response.emails).replace(/,/g, "\n"));
        },
        function (response) {
            log("API call failed: " + JSON.stringify(response.error).replace(/,/g, "\n"));
        }
    );
}

function enablePurchase() {
    var date = new Date();
    var year = date.getFullYear();

    WL.api<Microsoft.Live.IUser>({ path: "/me", method: "GET" }).then(
        function (response) {
            var user = response;
            if (year - user.birth_year >= 18) {
                log("Purchase enabled.");
            } else {
                log("Purchase disabled. You are only " + user.birth_year + " year(s) old.");
            }
        },
        function (response) {
            log("API call failed: " + JSON.stringify(response.error).replace(/,/g, "\n"));
        }
    );
}

function createContact() {
    var contact: Microsoft.Live.INewContact = {
        first_name: "William",
        last_name: "Flash"
    };
    WL.api({
        path: "/me/contacts",
        method: "POST",
        body: contact
    }).then(
        function (response) {
            log(JSON.stringify(response).replace(/,/g, ",\n"));
        },
        function (response) {
            log("Cannot create contact: " +
                JSON.stringify(response.error).replace(/,/g, ",\n"));
        }
    );
}
 
function createEvent() {
    var startTime = new Date();
    var endTime = new Date(startTime.getTime() + (60 * 60 * 1000));

    log("Start time: " + startTime);
    log("End time: " + endTime);
    var newEvent: Microsoft.Live.INewEvent = {
        name: "Family Dinner",
        description: "Dinner with Cynthia's family",
        start_time: startTime,
        end_time: endTime,
        location: "Coho Vineyard and Winery, 123 Main St., Redmond WA 98052",
        is_all_day_event: false,
        availability: "busy",
        visibility: "public"
    };

    WL.api({
        path: "/me/events",
        method: "POST",
        body: newEvent
    }).then(
        function (response) {
            log("Successfully created event. Response: " +
                JSON.stringify(response).replace(/,/g, "\n"));
        },
        function (response) {
            log("Could not create event: " +
                JSON.stringify(response.error).replace(/,/g, "\n"));
        }
    );
}
//#endregion From http://isdk.dev.live.com/dev/isdk/Default.aspx
