import * as hibp from 'hibp';

hibp
.search('someAccountOrEmail')
.then(data => {
    if (data.breaches || data.pastes) {
        // Bummer...
        console.log(data);
    } else {
        // Phew! We're clear.
        console.log('Good news — no pwnage found!');
    }
})
.catch(err => {
    // Something went wrong.
    console.log(err.message);
});
