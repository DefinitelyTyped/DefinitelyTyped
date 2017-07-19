/// <reference types="jquery.form" />

function test_validate() {
    $("#commentForm").validate();
    $(".selector").validate({
        debug: true
    });
    $(".selector").validate({
        submitHandler: (form) => {
            $(form).ajaxSubmit();
        }
    });
    $(".selector").validate({
        invalidHandler: (form, validator) => {
            const errors = validator.numberOfInvalids();
            if (errors) {
                const message = errors === 1
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
        errorPlacement: (error, element) => {
            if (element.attr("name") === "fname"
                || element.attr("name") === "lname")
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
        onfocusin: (elt, event) => { },
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
        onfocusout: (elt) => { },
        onkeyup: (elt) => { },
        onclick: (elt) => { }
    });
    $(".selector").validate({
        onfocusout: (elt, event) => { },
        onkeyup: (elt, event) => { },
        onclick: (elt, event) => { }
    });

    $(".selector").validate({
        focusInvalid: false
    });
    $(".selector").validate({
        focusCleanup: true
    });
    $("#myform").validate({
        meta: "validate",
        submitHandler: () => { alert("Submitted!"); }
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
        submitHandler: () => { alert("Submitted!"); }
    });
    $("#myform").validate({
        errorContainer: "#messageBox1, #messageBox2",
        errorLabelContainer: "#messageBox1 ul",
        wrapper: "li", debug: true,
        submitHandler: () => { alert("Submitted!"); }
    });
    $(".selector").validate({
        showErrors: (errorMap: JQueryValidation.ErrorDictionary, errorList: JQueryValidation.ErrorListItem[]) => {
            $("#summary").html("Your form contains " + this.numberOfInvalids() + " errors, see details below.");
            this.defaultShowErrors();
        }
    });
    $("#myform").validate({
        errorPlacement: (error, element) => {
            error.appendTo(element.parent("td").next("td"));
        },
        debug: true
    });
    $("#myform").validate({
        success: "valid",
        submitHandler: () => { alert("Submitted!"); }
    });
    $("#myform").validate({
        success: (label) => {
            label.addClass("valid").text("Ok!");
        },
        submitHandler: () => { alert("Submitted!"); }
    });
    $(".selector").validate({
        highlight: (element, errorClass) => {
            $(element).fadeOut(() => {
                $(element).fadeIn();
            });
        }
    });
    $(".selector").validate({
        highlight: (element: HTMLInputElement, errorClass, validClass) => {
            $(element).addClass(errorClass).removeClass(validClass);
            $((<HTMLInputElement> element).form).find("label[for=" + element.id + "]")
                .addClass(errorClass);
        },
        unhighlight: (element: HTMLInputElement, errorClass, validClass) => {
            $(element).removeClass(errorClass).addClass(validClass);
            $((<HTMLInputElement> element).form).find("label[for=" + element.id + "]")
                .removeClass(errorClass);
        }
    });
    $(".selector").validate({
        ignoreTitle: true
    });
    // onSubmit, onfocusout, onkeyup, onclick
    $('.selector').validate({
        onsubmit: false,
        onfocusout: false,
        onkeyup: false,
        onclick: false,
    });
    $('.selector').validate({
        onfocusout: () => { },
        onkeyup: () => { },
        onclick: elt => 2,
    });
}

function test_methods() {
    $("#myform").validate();
    $("a.check").click(() => {
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
    $("#skip").click(() => {
        const rules = $("#myinput").removeAttrs("min max");
        $("#myform").submit();
        $("#myinput").attr(rules);
    });
    $("#myform").validate().checkForm();
    $("#myform").validate().form();
    $("#myform").validate().element("#myselect");
    $("#myform").validate().element($("#myselect"));
    const validator = $("#myform").validate();
    validator.resetForm();
    validator.showErrors({ firstname: "I know that your firstname is Pete, Pete!" });
    validator.hideErrors();
    const isValid: boolean = validator.valid();
    const size: number = validator.size();
    const errorMap: JQueryValidation.ErrorDictionary = validator.errorMap;
    const errorList: JQueryValidation.ErrorListItem[] = validator.errorList;

    $("#summary").text(validator.numberOfInvalids() + " field(s) are invalid");
    const invalidElements: HTMLElement[] = validator.invalidElements();
    const validElements: HTMLElement[] = validator.validElements();
}

function test_static_methods() {
    jQuery.validator.setDefaults({
        debug: true
    });
    jQuery.validator.addMethod("domain", function(value, element) {
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

    // jQuery.validator.format
    jQuery.validator.format('{0}');
    jQuery.validator.format('{0} {1}')('a', 2);
    jQuery.validator.format('{0} {1}', 'a', 2);
    jQuery.validator.format('{0} {1}', ['a', 2]);
}
