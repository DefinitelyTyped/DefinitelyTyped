// Create the timer
$("body").timer(
    function () {
        console.log("This function just got called");
    }, 10000, true
);

$("body").timer.set({ time: 5000 }); // Change the time from 10000 millseconds to 5000 milliseconds
$("body").timer.toggle(false); // Reset the timer
$("body").timer.stop(); // Stop the timer
$("body").timer.play(); // Start / play the timer

// #region Outputting if timer is active or not
var isTimerActive = $("body").timer.isActive; // Define boolean isActive as isTimerActive
if (isTimerActive == true){
    console.log("Timer is active!");
}
else{
    console.log("Timer is not active!");
}
// #endregion

// #region Get time remaining
console.log("Time remaining on timer: " + $("body").timer.remaining.toString);
// #endregion

$("body").timer.stop(); // Stop the timer once more for the purpose of the tests (to test once())
$("body").timer.once(1000); // Run the timer ONCE in 1 second
