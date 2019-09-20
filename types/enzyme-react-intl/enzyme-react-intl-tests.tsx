import * as intl from 'enzyme-react-intl';
import * as React from 'react';

class SampleComponent extends React.Component {
  render() {
    return <div>Sample</div>;
  }
}

intl.getLocale();
intl.loadTranslation('en');
intl.mountWithIntl(<SampleComponent />);
intl.renderWithIntl(<SampleComponent />);
intl.shallowWithIntl(<SampleComponent />);
intl.setLocale('pl');
