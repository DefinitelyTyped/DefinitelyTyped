import { Country, MuiPhoneNumber, Region } from 'mui-phone-input-ssr';
import * as React from 'react';

<MuiPhoneNumber title="French phone number" defaultCountry={Country.France} />;

<MuiPhoneNumber title="French phone number" defaultCountry={Country['United States']} excludeCountries={[Country.Chile]} />;

<MuiPhoneNumber title="French phone number" defaultCountry={Country['United States']} regions={[Region.America]} />;
