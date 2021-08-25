import { Plugin } from '@ckeditor/ckeditor5-core';
import FontBackgroundColor from './fontbackgroundcolor';
import FontColor from './fontcolor';
import FontFamily from './fontfamily';
import FontSize from './fontsize';

export default class Font extends Plugin {
    static readonly requires: [typeof FontFamily, typeof FontSize, typeof FontColor, typeof FontBackgroundColor];
    static readonly pluginName: 'Font';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Font: Font;
    }
}
