import { toast } from 'react-toastify';

const someToastId = toast('Testing!'); // $ExpectType string

// $ExpectType void
toast.update(someToastId, {
    render: "New Content",
    type: toast.TYPE.INFO
});
