import Bananas, { UserInterface, AdminContext } from 'django-bananas';
import themes from 'django-bananas/themes';
import { django, createColor, Color } from 'django-bananas/colors';
import PermissionRequired from 'django-bananas/auth/PermissionRequired';
import UserPassesTest from 'django-bananas/auth/UserPassesTest';

<Bananas.App api={{ url: '' }} pages={(route: string) => {}} />;
<Bananas.App api="" pages={(route: string) => {}} />;
<Bananas.App
    api={{ url: '', requestInterceptor: request => request, responseInterceptor: response => response }}
    pages={(route: string) => {}}
/>;
<Bananas.App api="" pages={(route: string) => {}} logo={true} />;
<Bananas.App api="" pages={(route: string) => {}} logo={''} />;
<Bananas.App api="" pages={(route: string) => {}} logo={<img />} />;
<Bananas.App api="" pages={(route: string) => {}} theme={themes.dark} pageTheme={themes.light} />;
<Bananas.App
    api=""
    pages={(route: string) => {}}
    nav={{
        'example.user:list': {
            title: 'example',
            icon: undefined,
            showSubheader: false,
        },
    }}
/>;

const django2: Color = django;
const color: Color = createColor('');

<PermissionRequired permission={''} />;
<UserPassesTest testFunc={(user: UserInterface) => true} />;
<AdminContext.Consumer>{context => (<></>)}</AdminContext.Consumer>;
