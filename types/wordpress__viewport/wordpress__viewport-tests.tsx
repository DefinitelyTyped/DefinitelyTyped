import { dispatch, select } from '@wordpress/data';
import * as viewport from '@wordpress/viewport';

//
// if-viewport-matches
//
(() => {
    interface Props {
        foo: string;
    }
    const Original = ({ foo }: Props) => <div>{foo}</div>;
    const Enhanced = viewport.ifViewportMatches('< small')(Original);

    <Enhanced foo="bar" />;
})();

//
// with-viewport-match
//
(() => {
    interface Props {
        foo: string;
        isMobile: boolean;
    }
    const Original = ({ foo, isMobile }: Props) => (
        <div>
            {foo}
            {isMobile && <span>On mobile</span>}
        </div>
    );
    const Enhanced = viewport.withViewportMatch({ isMobile: '< small' })(Original);

    <Enhanced foo="bar" />;
})();

//
// store
//

// $ExpectType void
dispatch('core/viewport').setIsMatching({ '< small': false });

// $ExpectType boolean
select('core/viewport').isViewportMatch('< small');
