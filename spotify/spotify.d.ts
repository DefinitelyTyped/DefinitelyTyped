declare module spotify {
  interface TrackSearchResult {
    tracks:Tracks;
  }

  interface Tracks {
    href:string;
    limit:number;
    next:string;
    offset:number;
    previous?:string;
    total:number
    items:Array<Track>;
  }

  interface Track {
    available_markets:Array<string>;
    uri:string;
    name:string;
    type:string;
    artists:Array<MiniArtist>;
    duration_ms:number;
  }

  interface MiniArtist {
    name:string
  }
}
