import * as React from "react";
import Geosuggest, { Suggest, Styles } from "react-geosuggest";

const fixtures = [
    {label: "New York", location: new google.maps.LatLng(40.7033127, -73.979681)},
    {label: "Rio", location: new google.maps.LatLng(-22.066452, -42.9232368)},
    {label: "Tokyo", location: new google.maps.LatLng(35.673343, 139.710388)},
];

const styles: Styles = {
    input: {color: "blue"},
    suggests: {width: 4},
    suggestItem: {display: "flex"},
};

function onFocus() {}
function onActivateSuggest(suggest: Suggest) {}
function getSuggestLabel(suggest: google.maps.places.AutocompletePrediction) { return 'label'; }
function renderSuggestItem(suggest: google.maps.places.AutocompletePrediction) { return <div>HELLO WORLD</div>; }
function skipSuggest(suggest: google.maps.places.AutocompletePrediction) { return false; }
function onBlur(value: string) {}
function onKeyDown(event: any) {}
function onKeyPress(event: any) {}
function onChange(value: string) {}
function onSuggestSelect(suggest: Suggest) {}
function onSuggestNoResults(userInput: string) {}

class ReactGeosuggest extends React.Component {
    private geosuggest: any;

    render() {
        return (
            <div>
                <Geosuggest
                    autoActivateFirstSuggest={true}
                    autoComplete="off"
                    bounds={new google.maps.LatLngBounds()}
                    className="className"
                    country={["US"]}
                    disabled={false}
                    fixtures={fixtures}
                    getSuggestLabel={getSuggestLabel}
                    highlightMatch={true}
                    ignoreTab={true}
                    initialValue="Hamburg"
                    inputClassName="inputClassName"
                    label="label"
                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                    maxFixtures={10}
                    onActivateSuggest={onActivateSuggest}
                    onBlur={onBlur}
                    onChange={onChange}
                    onFocus={onFocus}
                    onKeyDown={onKeyDown}
                    onKeyPress={onKeyPress}
                    onSuggestNoResults={onSuggestNoResults}
                    onSuggestSelect={onSuggestSelect}
                    placeholder="Start typing!"
                    queryDelay={250}
                    radius={20}
                    ref={el => this.geosuggest = el}
                    renderSuggestItem={renderSuggestItem}
                    skipSuggest={skipSuggest}
                    style={styles}
                    suggestsClassName="suggestsClassName"
                    suggestsHiddenClassName="suggestsHiddenClassName"
                    suggestsItemActiveClassName="suggestsItemActiveClassName"
                    suggestsItemClassName="suggestsItemClassName"
                    types={["geocode", "(regions)"]}
                />

                <button onClick={this.geosuggest.focus}>Focus</button>
                <button onClick={this.geosuggest.update("New Zealand")}>Update</button>
                <button onClick={this.geosuggest.clear}>Clear</button>
            </div>
        );
    }
}
