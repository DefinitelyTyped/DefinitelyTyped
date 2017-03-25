

// A basic message
swal("Here's a message!");

// A title with a text under
swal("Here's a message!", "It's pretty, isn't it?");

// A success message!
swal("Good job!", "You clicked the button!", "success");

// A warning message, with a function attached to the "Confirm"-button...
swal({
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Yes, delete it!",
    closeOnConfirm: false
},
    function () {
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
    });

// ... and by passing a parameter, you can execute something else for "Cancel".
swal({
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel plx!",
    closeOnConfirm: false,
    closeOnCancel: false
},
    function (isConfirm) {
        if (isConfirm) {
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        } else {
            swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
    });

// A message with a custom icon
swal({
    title: "Sweet!",
    text: "Here's a custom image.",
    imageUrl: "images/thumbs-up.jpg"
});

// An HTML message
swal({
    title: "HTML <small>Title</small>!",
    text: "A custom <span style=\"color: #F8BB86\">html<span> message.",
    html: true
});

// A message with auto close timer
swal({
    title: "Auto close alert!",
    text: "I will close in 2 seconds.",
    timer: 2000,
    showConfirmButton: false
},
    function () {
        swal("Time Out!", "The time is out of joint.", "success");
    });

// A replacement for the "prompt" function
swal({
    title: "An input!",
    text: "Write something interesting:",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top",
    inputPlaceholder: "Write something plx",
    inputValue: "Write something"
},
    function (inputValue) {
        if (inputValue === false) return false;

        if (inputValue === "") {
            swal.showInputError("You need to write something!");
            return false;
        }

        swal("Nice!", "You wrote: " + inputValue, "success");
    }
    );

// With a loader (for AJAX request for example)
swal({
    title: "Ajax request example",
    text: "Submit to run ajax request",
    type: "info",
    showCancelButton: true,
    closeOnConfirm: false,
    showLoaderOnConfirm: true
},
    function () {
        setTimeout(function () {
            swal("Ajax request finished!");
        }, 2000);
    });

swal.setDefaults({ confirmButtonColor: "#000000" });

swal.close();

swal.showInputError("Invalid email!");

swal.disableButtons();

swal.enableButtons();