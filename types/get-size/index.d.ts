interface Size {
    width: number;
    height: number;

    innerWidth: number;
    innerHeight: number;
    outerWidth: number;
    outerHeight: number;

    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;

    marginLeft: number;
    marginRight: number;
    marginTop: number;
    marginBottom: number;

    borderLeftWidth: number;
    borderRightWidth: number;
    borderTopWidth: number;
    borderBottomWidth: number;
}

declare function getSize(element: string | Element): Size;

export = getSize;
