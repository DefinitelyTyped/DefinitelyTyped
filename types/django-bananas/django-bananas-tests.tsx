import Bananas from 'django-bananas';
import themes from 'django-bananas/themes';

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
            title: "example",
            icon: undefined,
            showSubheader: false
        }
    }}
/>;
