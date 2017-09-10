import * as React from 'react';
import * as MediaBody from './MediaBody';
import * as MediaHeading from './MediaHeading';
import * as MediaLeft from './MediaLeft';
import * as MediaList from './MediaList';
import * as MediaListItem from './MediaListItem';
import * as MediaRight from './MediaRight';

declare class Media extends React.Component<MediaProps> {
  public static Body: typeof MediaBody;
  public static Heading: typeof MediaHeading;
  public static Left: typeof MediaLeft;
  public static Right: typeof MediaRight;
  public static List: typeof MediaList;
  public static ListItem: typeof MediaListItem;
}
declare namespace Media { }
export = Media

interface MediaProps extends React.HTMLProps<Media> {
  componentClass?: React.ReactType;
}
