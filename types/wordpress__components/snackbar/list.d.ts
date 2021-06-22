import { ComponentType } from 'react';

import NoticeList from '../notice/list';

declare namespace SnackbarList {
    type Props = NoticeList.Props;
}
declare const SnackbarList: ComponentType<SnackbarList.Props>;

export default SnackbarList;
