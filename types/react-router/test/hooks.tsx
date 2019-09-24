import * as React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router';

interface Params {
    id: string;
}

const HooksTest: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    const { id } = useParams();
    const params = useParams<Params>();
    const match1 = useRouteMatch<Params>('/:id');
    const match2 = useRouteMatch<Params>({ path: '/:id', exact: true });

    history.action;
    location.key;
    id && id.replace;
    params.id.replace;
    match1 && match1.params.id.replace;
    match2 && match2.params.id.replace;

    return null;
};

export default HooksTest;
