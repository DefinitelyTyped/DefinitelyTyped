/// 
export declare class PlaylistsCtrl {
  private $scope;
  private $location;
  private backendSrv;
  playlists: any;
  /** @ngInject */
  constructor($scope: any, $location: any, backendSrv: any);
  removePlaylistConfirmed(playlist: any): void;
  removePlaylist(playlist: any): void;
}
