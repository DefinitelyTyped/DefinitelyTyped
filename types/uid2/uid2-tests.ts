import uid2 from 'uid2';

uid2(20); // $ExpectType string

uid2(20, (error, result) => {
    error; // $ExpectType Error | null
    result; // $ExpectType string | undefined
});
