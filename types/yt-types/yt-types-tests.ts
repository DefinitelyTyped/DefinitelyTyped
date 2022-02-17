interface ReqListParams {
    id: number;
}

interface ResListProps {
    list: string[];
}

const requestList: HttpReqest<ReqListParams, ResListProps> = (params) => {
    return Promise.resolve({
        result: true,
        data: {
            list: ['typescript', 'javascript']
        }
    });
};
