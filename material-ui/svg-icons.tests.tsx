///<reference path='../react/react.d.ts' />
///<reference path='../react/react-dom.d.ts' />
///<reference path='svg-icons.d.ts' />

import * as React from "react";
import * as ReactDOM from "react-dom";

import ActionAndroid from 'material-ui/svg-icons/action/android';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {
    ToggleStar,
    ToggleCheckBox,
    ToggleCheckBoxOutlineBlank
}from "material-ui/svg-icons";

ReactDOM.render(
  <div>
    <ActionAndroid/>
    <ActionAssignment/>
    <ActionFavorite/>
    <ActionFavoriteBorder/>
    <ActionFlightTakeoff/>
    <ActionGrade/>
    <ActionHome/>
    <ActionInfo/>

    <ToggleStar/>
    <ToggleCheckBox/>
    <ToggleCheckBoxOutlineBlank/>
  </div>,
  document.getElementById('app')
);
