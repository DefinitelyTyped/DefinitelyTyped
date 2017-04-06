notie.alert(1, 'Success!', 1.5);
notie.alert(2, 'Warning<br><b>with</b><br><i>HTML</i><br><u>included.</u>', 2);
notie.alert(3, 'Error.', 2.5);
notie.alert(4, 'Information.', 2);

notie.confirm('Are you sure you want to do that?', 'Yes', 'Cancel', function() {
    notie.alert(1, 'Good choice!', 2);
});
notie.confirm('Are you sure?', 'Yes', 'Cancel', function() {
    notie.confirm('Are you <b>really</b> sure?', 'Yes', 'Cancel', function() {
        notie.confirm('Are you really <b>really</b> sure?', 'Yes', 'Cancel', function() {
            notie.alert(1, 'Okay, jeez...', 2);
        });
    });
});

notie.input('Please enter your email address:', 'Submit', 'Cancel', 'email', 'name@example.com', function(value_entered) {
    notie.alert(1, 'You entered: ' + value_entered, 2);
});
notie.input('What city do you live in?', 'Submit', 'Cancel', 'text', 'Enter your city:', function(value_entered) {
    notie.alert(1, 'You entered: ' + value_entered, 2);
}, 'New York');
