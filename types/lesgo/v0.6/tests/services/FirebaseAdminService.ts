import FirebaseAdmin from 'lesgo/lib/services/FirebaseAdminService';

const firebase = new FirebaseAdmin(); // $ExpectType FirebaseAdmin

// $ExpectType void
firebase.connect({
    serviceAccount: require('path/to/serviceAccountKey.json'),
    projectName: 'testproject',
});

(async () => {
    await firebase.getAllUsers(); // $ExpectType UserRecord[]
    // $ExpectType UserRecord
    await firebase.createUser({
        email: 'leo.lavarias@gmail.com',
        username: 'xXLXx',
        password: '1234567',
    });
    await firebase.deleteUser('1234'); // $ExpectType void
    await firebase.delete(); // $ExpectType void
})();
