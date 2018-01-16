import * as React from 'react';
import ReactFlagsSelect from 'react-flags-select';

export class ReactFlagsSelectTest extends React.Component {
    countries = ['US', 'GB', 'FR', 'DE', 'IT'];
    customLabels = {US: 'EN-US', GB: 'EN-GB', FR: 'FR', DE: 'DE', IT: 'IT'};
    onSelectFlag(countryCode: string) { }
    render() {
        return (
            <div>
                <ReactFlagsSelect />
                <ReactFlagsSelect defaultCountry='US' />
                <ReactFlagsSelect searchable={true} />
                <ReactFlagsSelect countries={this.countries} />
                <ReactFlagsSelect countries={this.countries} blackList={true} />
                <ReactFlagsSelect className='menu-flags' />
                <ReactFlagsSelect alignOptions='left' />
                <ReactFlagsSelect
                    countries={this.countries}
                    customLabels={this.customLabels}
                />
                <ReactFlagsSelect
                    countries={this.countries}
                    customLabels={this.customLabels}
                    placeholder='Select Language'
                />
                <ReactFlagsSelect
                    countries={this.countries}
                    customLabels={this.customLabels}
                    placeholder='Select Language'
                    showSelectedLabel={false}
                />
                <ReactFlagsSelect
                    countries={this.countries}
                    customLabels={this.customLabels}
                    placeholder='Select Language'
                    showSelectedLabel={false}
                    showOptionLabel={false}
                />
                <ReactFlagsSelect
                    countries={this.countries}
                    customLabels={this.customLabels}
                    placeholder='Select Language'
                    showSelectedLabel={false}
                    showOptionLabel={false}
                    selectedSize={14}
                />
                <ReactFlagsSelect
                    countries={this.countries}
                    customLabels={this.customLabels}
                    placeholder='Select Language'
                    showSelectedLabel={false}
                    showOptionLabel={false}
                    selectedSize={18}
                    optionsSize={14}
                />
                <ReactFlagsSelect
                    defaultCountry='US'
                    showSelectedLabel={false}
                    disabled={true}
                />
                <ReactFlagsSelect
                    defaultCountry='GB'
                    onSelect={this.onSelectFlag}
                />
                <ReactFlagsSelect
                    ref='userFlag'
                    defaultCountry='FR'
                />
            </div>
        );
    }
}
