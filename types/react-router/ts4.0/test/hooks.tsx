import * as React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router';

interface Params {
    id: string;
}

interface OptionalParams {
    id?: string;
    s: string | undefined;
}

interface TypedParams {
    t: 'a' | 'b' | 'c';
}

interface LocationState {
    s: string;
}

const HooksTest: React.FC = () => {
    const history = useHistory<LocationState>();
    const location = useLocation<LocationState>();
    const { id } = useParams<Params>();
    const params = useParams<Params>();
    // $ExpectType OptionalParams
    const optionalParams = useParams<OptionalParams>();
    // $ExpectType TypedParams
    const typedParams = useParams<TypedParams>();
    // $ExpectType match<Params> | null
    const match1 = useRouteMatch<Params>('/:id');
    // $ExpectType match<Params> | null
    const match2 = useRouteMatch<Params>(['/one/:id', '/two/:id']);
    // $ExpectType match<Params> | null
    const match3 = useRouteMatch<Params>({ path: '/:id', exact: true });
    // $ExpectType match<Params>
    const match4 = useRouteMatch<Params>();

    history.location.state.s;
    location.state.s;
    id && id.replace;
    params.id.replace;
    optionalParams.id && optionalParams.id.replace;
    optionalParams.s && optionalParams.s.replace;
    typedParams.t.replace;
    match1 && match1.params.id.replace;
    match2 && match2.params.id.replace;
    match3 && match3.params.id.replace;
    match4.params.id.replace;

    return null;
};

export default HooksTest;
