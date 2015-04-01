/// <reference path="sweet-alert.d.ts" />

swal("Here's a message!");

swal("Here's a message!", "It's pretty, isn't it?");

swal("Good job!", "You clicked the button!", "success");

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

swal({
    title: "Sweet!",
    text: "Here's a custom image.",
    imageUrl: "images/thumbs-up.jpg"
});

swal({
    title: "HTML <small>Title</small>!",
    text: "A custom <span style=\"color: #F8BB86\">html<span> message.",
    html: true
});

swal({
    title: "Auto close alert!",
    text: "I will close in 2 seconds.",
    timer: 2000,
    showConfirmButton: false
});

swal({
    title: "An input!",
    text: "Write something interesting:",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top"
},
    function (inputValue) {
        if (inputValue === false) return false;

        if (inputValue === "") {
            swal.showInputError("You need to write something!");
            return false
        }

        swal("Nice!", "You wrote: " + inputValue, "success");
    }
    );

swal.setDefaults({ confirmButtonColor: '#0000' });

swal.close();

swal.showInputError("Invalid email!");