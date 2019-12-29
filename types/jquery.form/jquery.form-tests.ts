// Basic usage

jQuery('#myFormId').ajaxForm();

jQuery('#myFormId').ajaxSubmit();

var queryString1 : string = jQuery('#myFormId').formSerialize();

var queryString2 : string = jQuery('#myFormId .specialFields').fieldSerialize();

var valueArray1 : string[] = jQuery('#myFormId :password').fieldValue();

var valueArray2: string[] = jQuery('#myUncheckedCheckbox').fieldValue(false);

var value1: string = jQuery.fieldValue(document.getElementById("some_id"));

var value2: string = jQuery.fieldValue(document.getElementById("some_id"), false);

jQuery('#myFormId').resetForm();

jQuery('#myFormId').clearForm();

jQuery('#myFormId .specialFields').clearFields();

// Debug

jQuery.fn.ajaxSubmit.debug = true;

// ajaxForm

// bind form using 'ajaxForm'
$('#myForm1').ajaxForm({
    target: '#output1',   // target element(s) to be updated with server response
    beforeSubmit: function (formData, jqForm, options) {  // pre-submit callback
        // formData is an array; here we use $.param to convert it to a string to display it
        // but the form plugin does this for you automatically when it submits the data
        var queryString = $.param(formData);

        // jqForm is a jQuery object encapsulating the form element.  To access the
        // DOM element for the form do this:
        // var formElement = jqForm[0];

        alert('About to submit: \n\n' + queryString);

        // here we could return false to prevent the form from being submitted;
        // returning anything other than false will allow the form submit to continue
        return true;
    },
    success: function (responseText, statusText, xhr) {  // post-submit callback
        // for normal html responses, the first argument to the success callback
        // is the XMLHttpRequest object's responseText property

        // if the ajaxForm method was passed an Options Object with the dataType
        // property set to 'xml' then the first argument to the success callback
        // is the XMLHttpRequest object's responseXML property

        // if the ajaxForm method was passed an Options Object with the dataType
        // property set to 'json' then the first argument to the success callback
        // is the json data object returned by the server

        alert('status: ' + statusText + '\n\nresponseText: \n' + responseText +
            '\n\nThe output div should have already been updated with the responseText.');
    }

    // other available options:
    //url:       url         // override for form's 'action' attribute
    //type:      type        // 'get' or 'post', override for form's 'method' attribute
    //dataType:  null        // 'xml', 'script', or 'json' (expected server response type)
    //clearForm: true        // clear all form fields after successful submit
    //resetForm: true        // reset the form after successful submit

    // $.ajax options can be used here too, for example:
    //timeout:   3000
});

// ajaxSubmit

$('#myForm2').ajaxSubmit({
    target: '#output2',   // target element(s) to be updated with server response
    beforeSubmit: function (formData, jqForm, options) {  // pre-submit callback
        // formData is an array; here we use $.param to convert it to a string to display it
        // but the form plugin does this for you automatically when it submits the data
        var queryString = $.param(formData);

        // jqForm is a jQuery object encapsulating the form element.  To access the
        // DOM element for the form do this:
        // var formElement = jqForm[0];

        alert('About to submit: \n\n' + queryString);

        // here we could return false to prevent the form from being submitted;
        // returning anything other than false will allow the form submit to continue
        return true;
    },
    success: function showResponse(responseText, statusText, xhr) {  // post-submit callback
        // for normal html responses, the first argument to the success callback
        // is the XMLHttpRequest object's responseText property

        // if the ajaxSubmit method was passed an Options Object with the dataType
        // property set to 'xml' then the first argument to the success callback
        // is the XMLHttpRequest object's responseXML property

        // if the ajaxSubmit method was passed an Options Object with the dataType
        // property set to 'json' then the first argument to the success callback
        // is the json data object returned by the server

        alert('status: ' + statusText + '\n\nresponseText: \n' + responseText +
            '\n\nThe output div should have already been updated with the responseText.');
    }

    // other available options:
    //url:       url         // override for form's 'action' attribute
    //type:      type        // 'get' or 'post', override for form's 'method' attribute
    //dataType:  null        // 'xml', 'script', or 'json' (expected server response type)
    //clearForm: true        // clear all form fields after successful submit
    //resetForm: true        // reset the form after successful submit

    // $.ajax options can be used here too, for example:
    //timeout:   3000
});

// Validation

$('#myForm2').ajaxForm({
    beforeSubmit: function (formData, jqForm, options) {
        // formData is an array of objects representing the name and value of each field
        // that will be sent to the server;  it takes the following form:
        //
        // [
        //     { name:  username, value: valueOfUsernameInput },
        //     { name:  password, value: valueOfPasswordInput }
        // ]
        //
        // To validate, we can examine the contents of this array to see if the
        // username and password fields have values.  If either value evaluates
        // to false then we return false from this method.

        for (var i = 0; i < formData.length; i++) {
            if (!formData[i].value) {
                alert('Please enter a value for both Username and Password');
                return false;
            }
        }
        alert('Both fields contain values.');
    }
});

// JSON

$('#jsonForm').ajaxForm({
    // dataType identifies the expected content type of the server response
    dataType: 'json',

    // success identifies the function to invoke when the server response
    // has been received
    success: function (data) {
        // 'data' is the json object returned from the server
        alert(data.message);
    }
});

// XML

$('#xmlForm').ajaxForm({
    // dataType identifies the expected content type of the server response
    dataType: 'xml',

    // success identifies the function to invoke when the server response
    // has been received
    success: function (responseXML) {
        // 'responseXML' is the XML document returned by the server; we use
        // jQuery to extract the content of the message node from the XML doc
        var message = $('message', responseXML).text();
        alert(message);
    }
});

// HTML

$('#htmlForm').ajaxForm({
    // target identifies the element(s) to update with the server response
    target: '#htmlExampleTarget',

    // success identifies the function to invoke when the server response
    // has been received; here we apply a fade-in effect to the new content
    success: function () {
        $('#htmlExampleTarget').fadeIn('slow');
    }
});