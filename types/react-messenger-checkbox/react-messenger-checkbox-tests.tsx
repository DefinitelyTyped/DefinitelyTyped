import * as React from 'react';
import MessengerCheckbox from 'react-messenger-checkbox';

const PAGE_ID = '';
const APP_ID = '';
const ORIGIN = '';
const USER_REF = '';

class Test extends React.Component {
    render() {
        return <MessengerCheckbox pageId={PAGE_ID} appId={APP_ID} origin={ORIGIN} userRef={USER_REF} />;
    }
}
