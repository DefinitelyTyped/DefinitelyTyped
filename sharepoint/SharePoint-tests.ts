///<reference path="SharePoint.d.ts" />

// Website tasks
function retrieveWebsite(resultpanel:HTMLElement) {
    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();
    clientContext.load(oWebsite);

    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Web site title: " + oWebsite.get_title();
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function retrieveWebsiteProps(resultpanel: HTMLElement) {
    
    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();

    clientContext.load(oWebsite, "Description", "Created");

    clientContext.executeQueryAsync(successHandler,errorHandler);

    function successHandler() {
        resultpanel.innerHTML = "Description: " + oWebsite.get_description() +
            "<br/>Date created: " + oWebsite.get_created();
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function writeWebsiteProps(resultpanel: HTMLElement) {

    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();

    oWebsite.set_description("This is an updated description.");
    oWebsite.update();

    clientContext.load(oWebsite, "Description");

    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );


    function successHandler() {
        resultpanel.innerHTML = "Web site description: " + oWebsite.get_description();
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

// Lists tasks
function readAllProps(resultpanel: HTMLElement) {

    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();

    var collList = oWebsite.get_lists();
    clientContext.load(collList);

    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {

        var listEnumerator = collList.getEnumerator();
        
        var listInfo = "";
        while (listEnumerator.moveNext()) {
            var oList = listEnumerator.get_current();
            listInfo += "Title: " + oList.get_title() + " Created: " +
                oList.get_created().toString() + "<br/>";
        }

        resultpanel.innerHTML = listInfo;
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function readSpecificProps(resultpanel: HTMLElement) {

    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();

    var collList = oWebsite.get_lists();

    clientContext.load(collList, "Include(Title, Id)");

    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
       
        var listEnumerator = collList.getEnumerator();

        var listInfo = "";
        while (listEnumerator.moveNext()) {
            var oList = listEnumerator.get_current();
            listInfo += "Title: " + oList.get_title() +
                " ID: " + oList.get_id().toString() + "<br/>";
        }

        resultpanel.innerHTML = listInfo;
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function readColl(resultpanel: HTMLElement) {

    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();
    var collList = oWebsite.get_lists();

    var listInfoCollection = clientContext.loadQuery(collList, "Include(Title, Id)");

    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
        var listInfo = "";
        for (var i = 0; i < listInfoCollection.length; i++) {
            var oList = listInfoCollection[i];
            listInfo += "Title: " + oList.get_title() +
                " ID: " + oList.get_id().toString() + "<br/>";
        }
        
        resultpanel.innerHTML = listInfo;
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function readFilter(resultpanel: HTMLElement) {
    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();
    var collList = oWebsite.get_lists();

    var listInfoArray = clientContext.loadQuery(collList,
        "Include(Title,Fields.Include(Title,InternalName))");

    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {

        for (var i = 0; i < listInfoArray.length; i++) {
            var oList = listInfoArray[i];
            var collField = oList.get_fields();
            var fieldEnumerator = collField.getEnumerator();

            var listInfo = "";
            while (fieldEnumerator.moveNext()) {
                var oField = fieldEnumerator.get_current();
                var regEx = new RegExp("name", "ig");

                if (regEx.test(oField.get_internalName())) {
                    listInfo += "List: " + oList.get_title() +
                        "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Field Title: " + oField.get_title() +
                        "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Field Internal name: " + oField.get_internalName();
                }
            }
        }

        resultpanel.innerHTML = listInfo;
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

// Create, update and delete lists
function createList(resultpanel: HTMLElement) {

    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();

    var listCreationInfo = new SP.ListCreationInformation();
    listCreationInfo.set_title("My Announcements List");
    listCreationInfo.set_templateType(SP.ListTemplateType.announcements);

    var oList = oWebsite.get_lists().add(listCreationInfo);
    clientContext.load(oList);

    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the <a href='../Lists/My Announcements List'>list</a>.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function updateList(resultpanel: HTMLElement) {

    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();

    var oList = oWebsite.get_lists().getByTitle("My Announcements List");
    oList.set_description("New Announcements List");
    oList.update();

    clientContext.load(oList);
    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Check the description in the <a href='../Lists/My Announcements List'>list</a>.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function addField(resultpanel: HTMLElement) {

    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();
    var oList = oWebsite.get_lists().getByTitle("My Announcements List");

    var oField = oList.get_fields().addFieldAsXml(
        "<Field DisplayName='MyField' Type='Number' />",
        true,
        SP.AddFieldOptions.defaultValue
    );

    var fieldNumber = <SP.FieldNumber>clientContext.castTo(oField, SP.FieldNumber);
    fieldNumber.set_maximumValue(100);
    fieldNumber.set_minimumValue(35);
    fieldNumber.update();

    clientContext.load(oField);

    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "The <a href='../Lists/My Announcements List'>list</a> with a new field.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function deleteList(resultpanel: HTMLElement) {
    var listTitle = "My Announcements List";

    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();
    var oList = oWebsite.get_lists().getByTitle(listTitle);
    oList.deleteObject();

    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = listTitle + " deleted.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

// Create, update and delete folders
function createFolder(resultpanel: HTMLElement) {
    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();
    var oList = oWebsite.get_lists().getByTitle("Shared Documents");

    var itemCreateInfo = new SP.ListItemCreationInformation();
    itemCreateInfo.set_underlyingObjectType(SP.FileSystemObjectType.folder);
    itemCreateInfo.set_leafName("My new folder!");
    var oListItem = oList.addItem(itemCreateInfo);
    oListItem.update();

    clientContext.load(oListItem);
    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the <a href='../Lists/Shared Documents'>document library</a> to see your new folder.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function updateFolder(resultpanel: HTMLElement) {
    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();
    var oList = oWebsite.get_lists().getByTitle("Shared Documents");

    var  oListItem = oList.getItemById(1);
    oListItem.set_item("FileLeafRef", "My updated folder");
    oListItem.update();

    clientContext.load(oListItem);
    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the <a href='../Lists/Shared Documents'>document library</a> to see your updated folder.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function deleteFolder(resultpanel: HTMLElement) {
    var clientContext =     SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();
    var oList = oWebsite.get_lists().getByTitle("Shared Documents");

    var oListItem = oList.getItemById(1);
    oListItem.deleteObject();

    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the <a href='../Lists/Shared Documents'>document library</a> to make sure the folder is no longer there.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

// List item tasks
function readItems(resultpanel: HTMLElement) {
    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();
    var oList = oWebsite.get_lists().getByTitle("Announcements");
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml(
        '<View><Query><Where><Geq><FieldRef Name=\'ID\'/>' +
        '<Value Type=\'Number\'>1</Value></Geq></Where></Query>' +
        '<RowLimit>10</RowLimit></View>'
    );
    var collListItem = oList.getItems(camlQuery);

    clientContext.load(collListItem);
    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
        var listItemEnumerator = collListItem.getEnumerator();

        var listItemInfo = "";
        while (listItemEnumerator.moveNext()) {
            var oListItem = listItemEnumerator.get_current();
            listItemInfo += "ID: " + oListItem.get_id() + "<br/>" +
                "Title: " + oListItem.get_item("Title") + "<br/>" +
                "Body: " + oListItem.get_item("Body") + "<br/>";
        }

        resultpanel.innerHTML = listItemInfo;
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function readInclude(resultpanel: HTMLElement) {
    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();
    var oList = oWebsite.get_lists().getByTitle("Announcements");
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><RowLimit>100</RowLimit></View>');

    var collListItem = oList.getItems(camlQuery);

    clientContext.load(collListItem, "Include(Id, DisplayName, HasUniqueRoleAssignments)");
    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
        var listItemEnumerator = collListItem.getEnumerator();

        var listItemInfo = "";
        while (listItemEnumerator.moveNext()) {
            var oListItem = listItemEnumerator.get_current();
            listItemInfo += "ID: " + oListItem.get_id() + "<br/>" +
            "Display name: " + oListItem.get_displayName() + "<br/>" +
            "Unique role assignments: " + oListItem.get_hasUniqueRoleAssignments() + "<br/>";
        }

        resultpanel.innerHTML = listItemInfo;
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

// Create, update and delete list items
function createListItem(resultpanel: HTMLElement) {
    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();
    var oList = oWebsite.get_lists().getByTitle("Announcements");

    var itemCreateInfo = new SP.ListItemCreationInformation();
    var oListItem = oList.addItem(itemCreateInfo);
    oListItem.set_item("Title", "My New Item!");
    oListItem.set_item("Body", "Hello World!");
    oListItem.update();
    
    clientContext.load(oListItem);
    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the <a href='../Lists/Announcements'>list</a> to see your new item.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function updateListItem(resultpanel: HTMLElement) {
    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();
    var oList = oWebsite.get_lists().getByTitle("Announcements");

    var oListItem = oList.getItemById(1);
    oListItem.set_item("Title", "My updated title");
    oListItem.update();

    clientContext.load(oListItem);
    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the <a href='../Lists/Announcements'>list</a> to see your updated item.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function deleteListItem(resultpanel: HTMLElement) {
    var clientContext = SP.ClientContext.get_current();
    var oWebsite = clientContext.get_web();
    var oList = oWebsite.get_lists().getByTitle("Announcements");

    var oListItem = oList.getItemById(1);
    oListItem.deleteObject();

    clientContext.executeQueryAsync(
      successHandler,
       errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the <a href='../Lists/Announcements'>list</a> to make sure the item is no longer there.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}