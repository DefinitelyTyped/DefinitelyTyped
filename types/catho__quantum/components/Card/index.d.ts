import React = require('react');
import Content from './Content';
import Description from './Description';
import Footer from './Footer';
import Header from './Header';
import HeaderText from './HeaderText';
import Media from './Media';
import Thumbnail from './Thumbnail';
import Title from './Title';

export default class Card extends React.Component<{ theme?: { colors?: object } }> {
    static Content: Content;

    static Description: Description;

    static Footer: Footer;

    static Header: Header;

    static HeaderText: HeaderText;

    static Media: Media;

    static Thumbnail: Thumbnail;

    static Title: Title;
}
