/// 
export class PlaylistEditCtrl {
    private $scope;
    private playlistSrv;
    private backendSrv;
    private $location;
    private $route;
    filteredDashboards: any;
    filteredTags: any;
    searchQuery: string;
    loading: boolean;
    playlist: any;
    playlistItems: any;
    dashboardresult: any;
    tagresult: any;
    /** @ngInject */
    constructor($scope: any, playlistSrv: any, backendSrv: any, $location: any, $route: any);
    filterFoundPlaylistItems(): void;
    addPlaylistItem(playlistItem: any): void;
    addTagPlaylistItem(tag: any): void;
    removePlaylistItem(playlistItem: any): void;
    savePlaylist(playlist: any, playlistItems: any): void;
    isNew(): boolean;
    isPlaylistEmpty(): boolean;
    backToList(): void;
    searchStarted(promise: any): void;
    movePlaylistItem(playlistItem: any, offset: any): void;
    movePlaylistItemUp(playlistItem: any): void;
    movePlaylistItemDown(playlistItem: any): void;
}
