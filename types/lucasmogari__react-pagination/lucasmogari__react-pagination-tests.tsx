import * as React from 'react';

import { useNavigation } from '@lucasmogari/react-pagination';

const PaginationComponent = () => {
    const paginationData = useNavigation({
        getPageItemProps: () => {},
        page: 1,
        arrows: false,
        numbers: false,
        totalItems: 10,
        maxPageItems: 10,
        itemsPerPage: 10,
    });

    const pageItem = paginationData.getPageItem(1);

    return (
        <ul>
            <li>{pageItem.page}</li>
        </ul>
    );
};

export default PaginationComponent;
