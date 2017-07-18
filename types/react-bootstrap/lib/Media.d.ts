import * as React from 'react';
import MediaBody from './MediaBody';
import MediaHeading from './MediaHeading';
import MediaLeft from './MediaLeft';
import MediaList from './MediaList';
import MediaListItem from './MediaListItem';
import MediaRight from './MediaRight';

interface MediaProps extends React.HTMLProps<Media> {
  componentClass?: React.ReactType;
}

export default class Media extends React.Component<MediaProps> {
  public static Body: typeof MediaBody;
  public static Heading: typeof MediaHeading;
  public static Left: typeof MediaLeft;
  public static Right: typeof MediaRight;
  public static List: typeof MediaList;
  public static ListItem: typeof MediaListItem;
}
