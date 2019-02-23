import {
    map
} from '../preset';
interface ExtraData {
    test: number;
}
declare const overlay: AMap.Overlay<ExtraData>;

// $ExpectType void
overlay.show();

// $ExpectType void
overlay.hide();

// $ExpectType Map | null | undefined
overlay.getMap();

// $ExpectType void
overlay.setMap(map);
// $ExpectType void
overlay.setMap(null);

// $ExpectError
overlay.setExtData({ any: 123 });

// $ExpectError ExtraData
overlay.getExtData();
