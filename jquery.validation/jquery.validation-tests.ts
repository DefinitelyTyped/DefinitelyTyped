/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../jquery.form/jquery.form.d.ts"/>
/// <reference path="jquery.validation.d.ts" />

function test_validate() {
    $("#commentForm").validate();
    $(".selector").validate({
        debug: true
    });
    $(".selector").validate({
        submitHandler: function (form) {
            $(form).ajaxSubmit();
        }
    });
    $(".selector").validate({
        invalidHandler: function (form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                var message = errors == 1
                  ? 'You missed 1 field. It has been highlighted'
                  : 'You missed ' + errors + ' fields. They have been highlighted';
                $("div.error span").html(message);
                $("div.error").show();
            } else {
                $("div.error").hide();
            }
        }
    });
    $("#myform").validate({
        ignore: ".ignore"
    });
    $(".selector").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            }
        }
    });
    $(".selector").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            }
        },
        messages: {
            name: {
                required: "We need your email address to contact you",
                minlength: jQuery.format("At least {0} characters required!")
            }
        }
    });
    $("#myform").validate({
        groups: {
            username: "fname lname"
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") == "fname"
                        || element.attr("name") == "lname")
                error.insertAfter("#lastname");
            else
                error.insertAfter(element);
        },
        debug: true
    });
    $(".selector").validate({
        onsubmit: false
    });
    $(".selector").validate({
        onfocusout: false
    });
    $(".selector").validate({
        onkeyup: false
    });
    $(".selector").validate({
        onclick: false
    });
    $(".selector").validate({
        focusInvalid: false
    });
    $(".selector").validate({
        focusCleanup: true
    });
    $("#myform").validate({
        meta: "validate",
        submitHandler: function () { alert("Submitted!") }
    });
    $(".selector").validate({
        errorClass: "invalid"
    });
    $(".selector").validate({
        validClass: "success"
    });
    $(".selector").validate({
        errorElement: "em"
    });
    $(".selector").validate({
        wrapper: "li"
    });
    $("#myform").validate({
        errorLabelContainer: "#messageBox",
        wrapper: "li",
        submitHandler: function () { alert("Submitted!") }
    });
    $("#myform").validate({
        errorContainer: "#messageBox1, #messageBox2",
        errorLabelContainer: "#messageBox1 ul",
        wrapper: "li", debug: true,
        submitHandler: function () { alert("Submitted!") }
    });
    $(".selector").validate({
        showErrors: function (errorMap: ErrorDictionary, errorList: ErrorListItem[]) {
            $("#summary").html("Your form contains " + this.numberOfInvalids() + " errors, see details below.");
            this.defaultShowErrors();
        }
    });
    $("#myform").validate({
        errorPlacement: function (error, element) {
            error.appendTo(element.parent("td").next("td"));
        },
        debug: true
    });
    $("#myform").validate({
        success: "valid",
        submitHandler: function () { alert("Submitted!") }
    });
    $("#myform").validate({
        success: function (label) {
            label.addClass("valid").text("Ok!")
        },
        submitHandler: function () { alert("Submitted!") }
    });
    $(".selector").validate({
        highlight: function (element, errorClass) {
            $(element).fadeOut(function () {
                $(element).fadeIn();
            });
        }
    });
    $(".selector").validate({
        highlight: function (element: HTMLInputElement, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $((<HTMLInputElement>element).form).find("label[for=" + element.id + "]")
                           .addClass(errorClass);
        },
        unhighlight: function (element: HTMLInputElement, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $((<HTMLInputElement>element).form).find("label[for=" + element.id + "]")
                           .removeClass(errorClass);
        }
    });
    $(".selector").validate({
        ignoreTitle: true
    });
}

function test_methods() {
    $("#myform").validate();
    $("a.check").click(function () {
        alert("Valid: " + $("#myform").valid());
        return false;
    });
    $("#myinput").rules("add", {
        required: true,
        minlength: 2,
        messages: {
            required: "Required input",
            minlength: jQuery.format("Please, at least {0} characters are necessary")
        }
    });
    $("#myinput").rules("remove");
    $("#myinput").rules("remove", "min max");
    $("#myinput").rules("add", {
        required: true,
        minlength: 2,
        messages: {
            required: "Required input",
            minlength: jQuery.format("Please, at least {0} characters are necessary")
        }
    });
    $("#skip").click(function () {
        var rules = $("#myinput").removeAttrs("min max");
        $("#myform").submit();
        $("#myinput").attr(rules);
    });
    $("#myform").validate().form();
    $("#myform").validate().element("#myselect");
    var validator = $("#myform").validate();
    validator.resetForm();
    validator.showErrors({ "firstname": "I know that your firstname is Pete, Pete!" });
    validator.hideErrors();
    var isValid: boolean = validator.valid();
    var size: number = validator.size();
    var errorMap: ErrorDictionary = validator.errorMap;
    var errorList: ErrorListItem[] = validator.errorList;

    $("#summary").text(validator.numberOfInvalids() + " field(s) are invalid");
    jQuery.validator.setDefaults({
        debug: true
    });
    jQuery.validator.addMethod("domain", function (value, element) {
        return this.optional(element) || /^http:\/\/mycorporatedomain.com/.test(value);
    }, "Please specify the correct domain for your documents");
    jQuery.validator.addClassRules({
        name: {
            required: true,
            minlength: 2
        },
        zip: {
            required: true,
            digits: true,
            minlength: 5,
            maxlength: 5
        }
    });
    jQuery.validator.addClassRules({
        name: {
            required: true,
            minlength: 2
        },
        zip: {
            required: true,
            digits: true,
            minlength: 5,
            maxlength: 5
        }
    });
    var invalidElements: HTMLElement[] = validator.invalidElements();
    var validElements: HTMLElement[] = validator.validElements();
}
