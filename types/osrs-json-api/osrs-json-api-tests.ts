import { hiscores, ge } from 'osrs-json-api';

hiscores.getPlayer('b0aty').then(
    (res: hiscores.Player): void => {
    }
);

ge.getItem(449).then(
    (res: ge.Item): void => {
    }
);

ge.getItem(20997).then(
    (res: ge.Item): void => {
    }
);

ge.getGraph(449).then(
    (res: ge.Graph): void => {
    }
);
