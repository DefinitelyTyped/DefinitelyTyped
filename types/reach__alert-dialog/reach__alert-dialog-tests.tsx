import {
    AlertDialog,
    AlertDialogLabel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogOverlay,
} from '@reach/alert-dialog';

import * as React from 'react';
import { render } from 'react-dom';

class GoodExamples extends React.Component {
    cancelRef = React.createRef<HTMLButtonElement>();

    render() {
        return (
            <>
                <AlertDialog leastDestructiveRef={this.cancelRef}>
                    <AlertDialogLabel>Please Confirm!</AlertDialogLabel>

                    <AlertDialogDescription>
                        Are you sure you want to delete stuff, it will be permanent.
                    </AlertDialogDescription>

                    <button ref={this.cancelRef}>Nevermind</button>
                </AlertDialog>

                <AlertDialogOverlay leastDestructiveRef={this.cancelRef}>
                    <AlertDialogContent>
                        <AlertDialogLabel>Please Confirm!</AlertDialogLabel>

                        <AlertDialogDescription>
                            Are you sure you want to delete stuff, it will be permanent.
                        </AlertDialogDescription>

                        <button ref={this.cancelRef}>Nevermind</button>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </>
        );
    }
}

render(<GoodExamples />, document.getElementById('app'));
render(<AlertDialogLabel />, document.getElementById('app'));
render(<AlertDialogDescription />, document.getElementById('app'));

// No children and needs leastDestructiveRef
// $ExpectError
render(<AlertDialog />, document.getElementById('app'));
// $ExpectError
render(<AlertDialogOverlay />, document.getElementById('app'));
