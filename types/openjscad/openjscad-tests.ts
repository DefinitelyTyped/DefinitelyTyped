

function test() {

  let gProcessor: OpenJsCad.Processor;

  // Show all exceptions to the user:
  OpenJsCad.AlertUserOfUncaughtExceptions();

  function onload()
  {
    gProcessor = new OpenJsCad.Processor(<HTMLDivElement>document.getElementById("viewer"));
    updateSolid();
  }

  function updateSolid()
  {
    gProcessor.setJsCad((<HTMLTextAreaElement>document.getElementById('code')).value);
  }


}

function main()
{
  // Main entry point; here we construct our solid:
  var gear = involuteGear(
    15,
    10,
    20,
    0,
    5
  );
  var centerhole = CSG.cylinder({start: [0,0,-5], end: [0,0,5], radius: 2, resolution: 16});
  gear = gear.subtract(centerhole);
  return gear;
}

function involuteGear(numTeeth: number, circularPitch: number, pressureAngle: number, clearance: number, thickness: number)
{
  // default values:
  if(arguments.length < 3) pressureAngle = 20;
  if(arguments.length < 4) clearance = 0;
  if(arguments.length < 4) thickness = 1;

  var addendum = circularPitch / Math.PI;
  var dedendum = addendum + clearance;

  // radiuses of the 4 circles:
  var pitchRadius = numTeeth * circularPitch / (2 * Math.PI);
  var baseRadius = pitchRadius * Math.cos(Math.PI * pressureAngle / 180);
  var outerRadius = pitchRadius + addendum;
  var rootRadius = pitchRadius - dedendum;

  var maxtanlength = Math.sqrt(outerRadius*outerRadius - baseRadius*baseRadius);
  var maxangle = maxtanlength / baseRadius;

  var tl_at_pitchcircle = Math.sqrt(pitchRadius*pitchRadius - baseRadius*baseRadius);
  var angle_at_pitchcircle = tl_at_pitchcircle / baseRadius;
  var diffangle = angle_at_pitchcircle - Math.atan(angle_at_pitchcircle);
  var angularToothWidthAtBase = Math.PI / numTeeth + 2*diffangle;

  // build a single 2d tooth in the 'points' array:
  var resolution = 5;
  var points = [new CSG.Vector2D(0,0)];
  for(var i = 0; i <= resolution; i++)
  {
    // first side of the tooth:
    var angle = maxangle * i / resolution;
    var tanlength = angle * baseRadius;
    var radvector = CSG.Vector2D.fromAngle(angle);
    var tanvector = radvector.normal();
    var p = radvector.times(baseRadius).plus(tanvector.times(tanlength));
    points[i+1] = p;

    // opposite side of the tooth:
    radvector = CSG.Vector2D.fromAngle(angularToothWidthAtBase - angle);
    tanvector = radvector.normal().negated();
    p = radvector.times(baseRadius).plus(tanvector.times(tanlength));
    points[2 * resolution + 2 - i] = p;
  }

  // create the polygon and extrude into 3D:
  var tooth3d = new CSG.Polygon2D(points).extrude({offset: [0, 0, thickness]});

  var allteeth = new CSG();
  for(var i = 0; i < numTeeth; i++)
  {
    var angle = i*360/numTeeth;
    var rotatedtooth = <CSG>tooth3d.rotateZ(angle);
    allteeth = allteeth.unionForNonIntersecting(rotatedtooth);
  }

  // build the root circle:
  points = [];
  var toothAngle = 2 * Math.PI / numTeeth;
  var toothCenterAngle = 0.5 * angularToothWidthAtBase;
  for(var i = 0; i < numTeeth; i++)
  {
    var angle = toothCenterAngle + i * toothAngle;
    var p = CSG.Vector2D.fromAngle(angle).times(rootRadius);
    points.push(p);
  }

  // create the polygon and extrude into 3D:
  var rootcircle = new CSG.Polygon2D(points).extrude({offset: [0, 0, thickness]});

  var result = rootcircle.union(allteeth);

  // center at origin:
  result = <CSG>result.translate([0, 0, -thickness/2]);

  return result;
}

var cylresolution=16;


function main2()
{
  var params =
    {
      quality: 0,
      diameter1: 12.2,
      shaftlength1: 15,
      outerlength1: 20,
      nutradius1: 4.65,
      nutthickness1: 4.2,
      screwdiameter1: 5,
      diameter2: 9.5,
      shaftlength2: 10,
      outerlength2: 15,
      nutradius2: 3.2,
      nutthickness2: 2.6,
      screwdiameter2: 3,
      outerdiameter: 30,
      spiderlength: 12,
      spidermargin: 0,
      numteeth: 2
    };


  cylresolution=(params.quality == 1)? 64:16;

  var outerdiameter=params.outerdiameter;
  outerdiameter=Math.max(outerdiameter, params.diameter1+0.5);
  outerdiameter=Math.max(outerdiameter, params.diameter2+0.5);

  var spidercenterdiameter=outerdiameter/2;

  var part1=makeShaft(params.diameter1, outerdiameter,spidercenterdiameter,params.shaftlength1,params.outerlength1,params.spiderlength, params.nutradius1, params.nutthickness1, params.screwdiameter1, params.numteeth);
  var part2=makeShaft(params.diameter2, outerdiameter,spidercenterdiameter,params.shaftlength2,params.outerlength2,params.spiderlength, params.nutradius2, params.nutthickness2, params.screwdiameter2, params.numteeth);
  var spider=makeSpider(outerdiameter, spidercenterdiameter, params.spiderlength, params.numteeth);

  if(params.spidermargin > 0)
  {
    spider=spider.contract(params.spidermargin, 4);
  }

  // rotate shaft parts for better 3d printing:
  part1=<CSG>part1.rotateX(180).translate([0,0,params.outerlength1+params.spiderlength]);
  part2=<CSG>part2.rotateX(180).translate([0,0,params.outerlength2+params.spiderlength]);

  var result=<CSG>part1.translate([-outerdiameter-5,0,0]);
  result=result.union(<CSG>part2.translate([0,0,0]));
  result=result.union(<CSG>spider.translate([outerdiameter+5,0,-params.spidermargin]));
  return result;
}

function makeShaft(innerdiameter: number, outerdiameter: number, spidercenterdiameter: number, shaftlength: number, outerlength: number, spiderlength: number, nutradius: number, nutthickness: number, screwdiameter: number, numteeth: number)
{
  var result=CSG.cylinder({start:[0,0,0], end:[0,0,outerlength], radius:outerdiameter/2, resolution:cylresolution});

  for(var i=0; i < numteeth; i++)
  {
    var angle=i*360/numteeth;
    var pie=makePie(outerdiameter/2, spiderlength,angle-45/numteeth, angle+45/numteeth);
    pie=<CSG>pie.translate([0,0,outerlength]);
    result=result.union(pie);
  }
  var spidercylinder=CSG.cylinder({start:[0,0,outerlength], end:[0,0,outerlength+spiderlength],radius:spidercenterdiameter/2,resolution:cylresolution});
  result=result.subtract(spidercylinder);
  var shaftcylinder=CSG.cylinder({start:[0,0,0], end:[0,0,shaftlength], radius:innerdiameter/2, resolution:cylresolution});
  result=result.subtract(shaftcylinder);

  var screwz=shaftlength/2;
  if(screwz < nutradius) screwz=nutradius;
  var nutcutout = <CSG>hexagon(nutradius, nutthickness).translate([0,0,-nutthickness/2]);
  var grubnutradiusAtFlatSide = nutradius * Math.cos(Math.PI / 180 * 30);
  var nutcutoutrectangle = CSG.cube({
    radius: [outerlength/2, grubnutradiusAtFlatSide, nutthickness/2],
    center: [outerlength/2, 0, 0],
  });
  nutcutout = nutcutout.union(nutcutoutrectangle);
  nutcutout = <CSG>nutcutout.rotateY(90);
  nutcutout = <CSG>nutcutout.translate([(outerdiameter+innerdiameter)/4, 0, screwz]);
  result = result.subtract(nutcutout);

  var screwcutout=CSG.cylinder({
    start: [outerdiameter/2, 0, screwz],
    end: [0, 0, screwz],
    radius: screwdiameter/2,
    resolution:cylresolution
  });
  result=result.subtract(screwcutout);

//return nutcutout;
//  nutcutout = nutcutout.translate([-grubnutheight/2 - centerholeradius - nutdistance,0,0]);

  return result;
}

function makePie(radius: number, height: number, startangle: number, endangle: number)
{
  var absangle=Math.abs(startangle-endangle);
  if(absangle >= 180)
  {
    throw new Error("Pie angle must be less than 180 degrees");
  }
  var numsteps=cylresolution*absangle/360;
  if(numsteps < 1) numsteps=1;
  var points: CSG.Vector2D[] = [];
  for(var i=0; i <= numsteps; i++)
  {
    var angle=startangle+i/numsteps*(endangle-startangle);
    var vec = CSG.Vector2D.fromAngleDegrees(angle).times(radius);
    points.push(vec);
  }
  points.push(new CSG.Vector2D(0,0));
  var shape2d=new CSG.Polygon2D(points);
  var extruded=shape2d.extrude({
    offset: [0,0,height],   // direction for extrusion
  });
  return extruded;
}

function hexagon(radius: number, height: number)
{
  var vertices: CSG.Vertex[] = [];
  for(var i=0; i < 6; i++)
  {
    var point=CSG.Vector2D.fromAngleDegrees(-i*60).times(radius).toVector3D(0);
    vertices.push(new CSG.Vertex(point));
  }
  var polygon=new CSG.Polygon(vertices);
  var hexagon=polygon.extrude([0,0,height]);
  return hexagon;
}

function makeSpider(outerdiameter: number, spidercenterdiameter: number, spiderlength: number, numteeth: number)
{
  var result=new CSG();
  var numspiderteeth=numteeth*2; // spider has twice the number of teeth
  for(var i=0; i < numspiderteeth; i++)
  {
    var angle=i*360/numspiderteeth;
    var pie=makePie(outerdiameter/2, spiderlength,angle-90/numspiderteeth, angle+90/numspiderteeth);
    pie=<CSG>pie.translate([0,0,0]);
    result=result.union(pie);
  }

  var centercylinder=CSG.cylinder({start:[0,0,0], end:[0,0,spiderlength], radius:spidercenterdiameter/2, resolution:cylresolution});
  result=result.union(centercylinder);

  return result;
}
