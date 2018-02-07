declare var hiddenField: ASPxClientHiddenField;
declare var mainCallbackPanel: ASPxClientCallbackPanel;
declare var loginPopup: ASPxClientPopupControl;
declare var searchButton: ASPxClientButton;
declare var searchComboBox: ASPxClientComboBox;
declare var roomsNumberSpinEdit: ASPxClientSpinEdit;
declare var adultsNumberSpinEdit: ASPxClientSpinEdit; 
declare var childrenNumberSpinEdit: ASPxClientSpinEdit;
declare var checkInDateEdit: ASPxClientDateEdit;
declare var checkOutDateEdit: ASPxClientDateEdit;
declare var backSlider: ASPxClientImageSlider;
declare var locationComboBox: ASPxClientComboBox;
declare var nightyRateTrackBar: ASPxClientTrackBar;
declare var customerRatingTrackBar: ASPxClientTrackBar;
declare var ourRatingCheckBoxList: ASPxClientCheckBoxList;
declare var startFilterPopupControl: ASPxClientPopupControl;
declare var imagePopupControl: ASPxClientPopupControl;
declare var emailTextBox: ASPxClientTextBox;
declare var creditCardEmailTextBox: ASPxClientTextBox;
declare var accountEmailTextBox: ASPxClientTextBox;
declare var bookingPageControl: ASPxClientPageControl;
declare var paymentTypePageControl: ASPxClientPageControl;
declare var offerFormPopup: ASPxClientPopupControl;
declare var roomsSpinEdit: ASPxClientSpinEdit;
declare var adultsSpinEdit: ASPxClientSpinEdit;
declare var childrenSpinEdit: ASPxClientSpinEdit;
declare var hotelDetailsCallbackPanel: ASPxClientCallbackPanel;
declare var leftPanel: ASPxClientPanel;
declare var menuButton: ASPxClientButton;
declare var aboutWindow: ASPxClientPopupControl;
declare var offersZone: ASPxClientDockZone;

module DXDemo {
    function showPage(page: string, params: { [key: string]: any }, skipHistory?: boolean): void {
        var queryString = getQueryString(params || {});
        hiddenField.Set("page", page);
        hiddenField.Set("parameters", queryString);
        hideMenu();
        var uri = queryString.length ? (page + "?" + queryString) : page;
        try {
            if (!skipHistory && window.history && window.history.pushState)
                window.history.pushState(uri, "", uri || "Default.aspx");
        } catch (e) { }
        mainCallbackPanel.PerformCallback(uri);
    };

    export function onMainMenuItemClick(s: ASPxClientMenu, e: ASPxClientMenuItemClickEventArgs): void {
        switch (e.item.name) {
            case "login":
                hideMenu();
                setTimeout(function () { loginPopup.ShowAtElementByID("MainCallbackPanel_ContentPane"); }, 300);
                break;
            case "offers":
                showPage("SpecialOffers", {});
                break;
            default:
                hideMenu();
                setTimeout(function () { showAboutWindow(); }, 300);
                break;
        }
    };

    export function onLoginButtonClick(s: ASPxClientButton, e: ASPxClientButtonClickEventArgs): void {
        loginPopup.Hide();
        showAboutWindow();
    };

    export function onSearchButtonClick(): void {
        if (ASPxClientEdit.ValidateGroup("DateEditors")) {
            showPage("ShowHotels", {
                location: searchComboBox.GetValue(),
                checkin: getFormattedDate(<Date>checkInDateEdit.GetValue()),
                checkout: getFormattedDate(<Date>checkOutDateEdit.GetValue()),
                rooms: roomsNumberSpinEdit.GetValue() || 1,
                adults: adultsNumberSpinEdit.GetValue() || 1,
                children: childrenNumberSpinEdit.GetValue() || 0
            });
        }
    };

    export function onSearchComboBoxIndexChanged(s: ASPxClientComboBox, e: ASPxClientProcessingModeEventArgs): void {
        hideMenu();
        searchButton.AdjustControl();
    };

    export function onIndexOfferCloseClick(index: number): void {
        var panel = <ASPxClientDockPanel>ASPxClientControl.GetControlCollection().GetByName("OfferDockPanel" + index);
        var sibPanel = <ASPxClientDockPanel>ASPxClientControl.GetControlCollection().GetByName("OfferDockPanel" + (index == 1 ? 2 : 1));
        panel.Hide();
        sibPanel.MakeFloat();
        sibPanel.SetWidth(offersZone.GetWidth());
        sibPanel.Dock(offersZone);
    };

    export function onLogoClick(): void {
        showPage("", null, false);
    };

    export function onMenuNavButtonCheckedChanged(s: ASPxClientCheckBox, e: ASPxClientProcessingModeEventArgs): void {
        var mainContainer = mainCallbackPanel.GetMainElement();
        if (s.GetChecked()) {
            backSlider.Pause();
            showMenu();
        }
        else {
            hideMenu();
            backSlider.Play();
        }
    };

    export function onBackNavButtonClick(s: ASPxClientButton, e: ASPxClientButtonClickEventArgs): void {
        var params = getCurrentQueryParams();
        switch (getCurrentPage()) {
            case "PrintInvoice":
                showPage("Booking", params, false);
                break;
            case "Booking":
                if (bookingPageControl.GetActiveTabIndex() > 0)
                    bookingPageControl.SetActiveTabIndex(bookingPageControl.GetActiveTabIndex() - 1);
                else
                    showPage("ShowRooms", params, false);
                break;
            case "ShowRooms":
                showPage("ShowHotels", params, false);
                break;
            case "ShowDetails":
                showPage("ShowHotels", params, false);
                break;
            case "ShowHotels":
            case "SpecialOffers":
                showPage("", null, false);
                break;
        }
    };

    export function updateSearchResults(): void {
        var params = getCurrentQueryParams();
        params["location"] = locationComboBox.GetValue();
        params["minprice"] = nightyRateTrackBar.GetPositionStart();
        params["maxprice"] = nightyRateTrackBar.GetPositionEnd();
        params["custrating"] = customerRatingTrackBar.GetPosition();
        params["ourrating"] = ourRatingCheckBoxList.GetSelectedValues().join(",");
        showPage("ShowHotels", params);
    };

    export function onBookHotelButtonClick(hotelID: string): void {
        var queryParams = getCurrentQueryParams();
        queryParams["hotelID"] = hotelID;
        showPage("ShowRooms", queryParams);
    };

    export function onDetailsHotelButtonClick(hotelID: string): void {
        var queryParams = getCurrentQueryParams();
        queryParams["hotelID"] = hotelID;
        showPage("ShowDetails", queryParams);
    };

    export function onShowStartFilterButtonClick(s: ASPxClientButton, e: ASPxClientButtonClickEventArgs): void {
        startFilterPopupControl.ShowAtElementByID("MainCallbackPanel_ContentPane");
    };

    export function onChangeStartFilterButtonClick(s: ASPxClientButton, e: ASPxClientButtonClickEventArgs): void {
        if (ASPxClientEdit.ValidateGroup("DateEditors")) {
            var params = getCurrentQueryParams();
            params["checkin"] = getFormattedDate(<Date>checkInDateEdit.GetValue());
            params["checkout"] = getFormattedDate(<Date>checkOutDateEdit.GetValue());
            params["rooms"] = roomsNumberSpinEdit.GetValue() || 1;
            params["adults"] = adultsNumberSpinEdit.GetValue() || 1;
            params["children"] = childrenNumberSpinEdit.GetValue() || 0;
            startFilterPopupControl.Hide();
            showPage(hiddenField.Get("page").toString(), params);
        }
    };

    export function onBookRoomButtonClick(roomID: string): void {
        var params = getCurrentQueryParams();
        params["roomID"] = roomID;
        showPage("Booking", params);
    };

    export function onShowRoomsButtonClick(): void {
        var queryParams = getCurrentQueryParams();
        showPage("ShowRooms", queryParams);
    };

    export function onShowDetailsButtonClick(): void {
        var queryParams = getCurrentQueryParams();
        showPage("ShowDetails", queryParams);
    };

    export function onRoomImageNavItemClick(roomID: string, pictureName: string): void {
        setTimeout(function () {
            imagePopupControl.PerformCallback(roomID + "|" + pictureName);
            imagePopupControl.ShowAtElementByID("MainCallbackPanel_ContentPane");
        }, 500);
    };

    export function onRoomsNavBarExpandedChanged(s: ASPxClientNavBar, e: ASPxClientNavBarGroupEventArgs): void {
        ASPxClientControl.AdjustControls(s.GetMainElement());
    };

    export function onNextBookingStepButtonClick(step: number): void {
        var valid = true;
        var validationGroup = "";
        if (step == 1)
            validationGroup = "Account";
        if (step == 2)
            validationGroup = "RoomDetails";
        if (step == 3)
            validationGroup = "PaymentDetails";

        switch (step) {
            case 1:
                valid = ASPxClientEdit.ValidateEditorsInContainer(bookingPageControl.GetMainElement(), "Account");
                if (valid) {
                    emailTextBox.SetValue(accountEmailTextBox.GetValue());
                    creditCardEmailTextBox.SetValue(accountEmailTextBox.GetValue());
                    showPage("Booking", getCurrentQueryParams());
                    return;
                }
                break;
            case 2:
                valid = ASPxClientEdit.ValidateEditorsInContainer(bookingPageControl.GetMainElement(), "RoomDetails");
                emailTextBox.SetValue(accountEmailTextBox.GetValue());
                break;
            case 3:
                var paymentType = paymentTypePageControl.GetActiveTabIndex();
                if (paymentType == 0)
                    valid = ASPxClientEdit.ValidateEditorsInContainer(bookingPageControl.GetMainElement(), "CreditCard");
                else if (paymentType == 1)
                    valid = ASPxClientEdit.ValidateEditorsInContainer(bookingPageControl.GetMainElement(), "Cash");
                else if (paymentType == 2)
                    valid = ASPxClientEdit.ValidateEditorsInContainer(bookingPageControl.GetMainElement(), "PayPal");
                break;
        }
        if (valid) {
            bookingPageControl.GetTab(step).SetEnabled(true);
            bookingPageControl.SetActiveTabIndex(step);
        }
    };

    export function onAccountCaptchaHiddenFieldInit(s: ASPxClientHiddenField, e: ASPxClientEventArgs): void {
        if (s.Get("IsCaptchaValid")) {
            bookingPageControl.GetTab(1).SetEnabled(true);
            bookingPageControl.SetActiveTabIndex(1);
        }
    };

    export function onFinishBookingStepButtonClick(): void {
        showAboutWindow();
    };

    export function OnPrintInvoiceButtonClick(): void {
        showPage("PrintInvoice", getCurrentQueryParams());
    };

    export function onOfferClick(offerID: string): void {
        offerFormPopup.SetContentHtml("");
        offerFormPopup.PerformCallback(offerID);
        var panel = <ASPxClientDockPanel>ASPxClientControl.GetControlCollection().GetByName("DockPanel" + offerID);
        var panelElement = <HTMLElement>panel.GetMainElement();
        if (panelElement.offsetWidth < 330 || panelElement.offsetHeight < 250) {
            offerFormPopup.SetWidth(400);
            offerFormPopup.SetHeight(280);
            offerFormPopup.ShowAtElementByID("SpecialOffersContainer");
        }
        else {
            offerFormPopup.SetWidth(panelElement.offsetWidth);
            offerFormPopup.SetHeight(panelElement.offsetHeight);
            offerFormPopup.ShowAtElement(panelElement);
        }
    };

    export function onSpecialOfferCheckButtonClick(hotelID: string, locationID: string): void {
        if (ASPxClientEdit.ValidateGroup("DateEditors")) {
            var queryParams: { [key: string]: any } = {
                location: locationID,
                hotelID: hotelID,
                checkin: getFormattedDate(<Date>checkInDateEdit.GetValue()),
                checkout: getFormattedDate(<Date>checkOutDateEdit.GetValue()),
                rooms: roomsSpinEdit.GetValue() || 1,
                adults: adultsSpinEdit.GetValue() || 1,
                children: childrenSpinEdit.GetValue() || 0
            };
            showPage("ShowRooms", queryParams);
        }
    };

    export function onIndexOfferClick(): void {
        showPage("SpecialOffers", {});
    };

    export function onControlsInit(): void {
        ASPxClientUtils.AttachEventToElement(window, 'popstate', onHistoryPopState);
        var pathParts = document.location.href.split("/");
        var url = pathParts[pathParts.length - 1];
        try {
            if (window.history)
                window.history.replaceState(url, "");
        } catch (e) { }
        ASPxClientUtils.AttachEventToElement(window, "resize", onWindowResize);
        if (ASPxClientUtils.iOSPlatform) {
            // animate
        }
    };

    export function updateRatingLabels(ratingControl: ASPxClientTrackBar) {
        var start = ratingControl.GetPositionStart().toString();
        var end = ratingControl.GetPositionEnd().toString();
        document.getElementById("cpLeftLabelID").innerHTML = start + " " + end;
    };

    export function onRatingControlItemClick(s: ASPxClientRatingControl, e: ASPxClientRatingControlItemClickEventArgs): void {
        hotelDetailsCallbackPanel.PerformCallback(s.GetValue().toString());
    };

    export function onInputKeyDown(s: ASPxClientTextBox, e: ASPxClientEditKeyEventArgs): void {
        var keyCode = ASPxClientUtils.GetKeyCode(e.htmlEvent);
        if (keyCode == 13)
            (<HTMLElement>s.GetInputElement()).blur();
    };

    function getCurrentPage(): string {
        var hfPage = <string>hiddenField.Get("page");
        if (hfPage)
            return hfPage;
        var pathParts = document.location.pathname.split("/");
        return pathParts[pathParts.length - 1];
    };

    function showAboutWindow(): void {
        aboutWindow.ShowAtElementByID("MainCallbackPanel_ContentPane");
    };

    function hideMenu(): void {
        leftPanel.Collapse();
        if (menuButton.GetMainElement() && menuButton.GetChecked())
            menuButton.SetChecked(false);
    };

    function showMenu(): void {
        leftPanel.Expand();
    };

    var _resizeSpecialOffersTimeoutID = -1;
    function onWindowResize(): void {
        switch (<string>hiddenField.Get("page")) {
            case "SpecialOffers":
                if (_resizeSpecialOffersTimeoutID == -1)
                    _resizeSpecialOffersTimeoutID = setTimeout(resizeSpecialOffers, 200);
                break;
        }
        hidePopups("AboutWindow", "StartFilterPopupControl", "LoginPopup", "OfferFormPopup", "ImagePopupControl");
    };

    function hidePopups(...names: string[]): void {
        for (var i = 0; i < names.length; i++) {
            var popupControl = <ASPxClientPopupControl>ASPxClientControl.GetControlCollection().GetByName(names[i]);
            popupControl.Hide();
        }
    };

    function resizeSpecialOffers(): void {
        for (var i = 1; i <= 4; i++) {
            var panel = <ASPxClientDockPanel>ASPxClientControl.GetControlCollection().GetByName("DockPanel" + i);
            if (panel && panel.IsVisible()) {
                var zone = panel.GetOwnerZone();
                zone.SetWidth((<HTMLElement>(<HTMLElement>zone.GetMainElement()).parentNode).offsetWidth)
            }
        }
        _resizeSpecialOffersTimeoutID = -1;
    };

    function getFormattedDate(date: Date): string {
        return (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();
    };

    function getCurrentQueryParams(): { [key:string]: any } {
        var hfParams = <string>hiddenField.Get("parameters");
        if (hfParams)
            return getParamsByQueryString(hfParams);
        var query = document.location.search;
        if (query[0] === "?")
            query = query.substr(1);
        return getParamsByQueryString(query);
    };

    function getQueryString(params: { [key:string]: any }): string {
        var queryItems: any[] = [];
        for (var key in params) {
            if (!params.hasOwnProperty(key)) continue;
            queryItems.push(key + "=" + params[key]);
        }
        if (queryItems.length > 0)
            return queryItems.join("&");
        return "";
    };

    function getParamsByQueryString(queryString: string): { [key: string]: string } {
        var result: { [key: string]: any } = {};
        if (queryString) {
            var queryStringArray = queryString.split("&");
            for (var i = 0; i < queryStringArray.length; i++) {
                var part = queryStringArray[i].split('=');
                if (part.length != 2) continue;
                result[part[0]] = decodeURIComponent(part[1].replace(/\+/g, " "));
            }
        }
        return result;
    };

    function onHistoryPopState(evt: any): void {
        if (evt.state !== null && evt.state !== undefined) {
            var uriParts = evt.state.split("?");
            showPage(uriParts[0], getParamsByQueryString(uriParts[1]), true);
        }
    };
}