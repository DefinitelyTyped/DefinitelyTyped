/**
 * Created by marcwjj on 12/19/2018.
 */

import venn = require('venn');

const vennDiagram = venn.VennDiagram()
    .width(100)
    .height(200)
    .duration(300);

vennDiagram.orientationOrder(
          (a: {setid: string}, b: {setid: string}) =>
              a['setid'].localeCompare(b['setid']));

function lossFunction(
    sets: {[key: string]: venn.Circle},
    overlaps: venn.Overlap[]): number {
  let output = 0;
  for (const area of overlaps) {
    let overlapSize;
    if (area.sets.length === 1) {
      continue;
    } else {
      if (area.sets.length === 2) {
        const left = sets[area.sets[0]];
        const right = sets[area.sets[1]];
        overlapSize = venn.circleOverlap(
            left.radius, right.radius, venn.distance(left, right));
      } else {
        overlapSize =
            venn.intersectionArea(area.sets.map((i: string) => sets[i]));
      }
    }
    if (overlapSize < 100 && area.size > 0) {
      return Number.MAX_VALUE;
    }

    // Penalizes rendering overlapping circles when there is no actual overlap.
    if (area.size === 0 && overlapSize > 0) {
      output += (overlapSize - area.size) * (overlapSize - area.size) * 100000;
    }
    const weight = area.weight !== undefined ? area.weight : 1;
    output += weight * (overlapSize - area.size) * (overlapSize - area.size);
  }
  return output;
}

vennDiagram.layoutFunction(
        (areas: venn.Area[], parameters: venn.LayoutParameter) => {
          return venn.venn(
              areas, {
                initialLayout: (areas: venn.Area[]) => {
                  const circles: {[key: string]: venn.Circle} = {};
                  let circleCount = 0;
                  areas.filter((area) => area.sets.length === 1)
                      .forEach((area) => {
                        circles[area.sets[0]] = {
                          x: 0,
                          y: 0,
                          radius: Math.sqrt(area.size / Math.PI),
                        };
                        circleCount += 1;
                      });
                  return venn.bestInitialLayout(areas, {lossFunction});
                },
                ...parameters,
              });
        });

vennDiagram.lossFunction(lossFunction);
