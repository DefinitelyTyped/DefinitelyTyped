import * as React from 'react';
import {Sidebar, Tab} from 'react-leaflet-sidebarv2';

export const MetroSidebar = () => {
  return (
  <Sidebar id='sidebar' collapsed={false} selected={'home'} closeIcon='fa' position='right'>
    <Tab id='home' header='Home' icon='fa fa-home'>
      No place like home!
    </Tab>
    <Tab id='settings' header='Settings' icon='fa fa-cog' anchor='bottom'>
      In Settings.
    </Tab>
  </Sidebar>);
}
