declare module 'ol/render/ReplayGroup' {

  import ReplayType from 'ol/render/ReplayType';
  import VectorContext from 'ol/render/VectorContext';

  export default class ReplayGroup {
    constructor();
    addDeclutter(group: boolean): any[];
    getReplay(zIndex: number, replayType: ReplayType): VectorContext;
    isEmpty(): boolean;
  }

}
