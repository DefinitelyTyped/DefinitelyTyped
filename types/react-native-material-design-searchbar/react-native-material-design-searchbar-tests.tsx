import * as React from 'react';
import SearchBar from 'react-native-material-design-searchbar';

class SearchbarTest extends React.Component<any, any> {
  render() {
    return (
      <SearchBar
        onSearchChange={() => console.log('On Search Change')}
        height={50}
        onFocus={() => console.log('On Focus')}
        onBlur={() => console.log('On Blur')}
        placeholder={'Search...'}
        autoCorrect={false}
        padding={5}
        returnKeyType={'search'}
      />
    );
  }
}
