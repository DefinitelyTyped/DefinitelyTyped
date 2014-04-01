/// <reference path='../jquery/jquery.d.ts' />
/// <reference path='svgjs.d.ts' />
 
// create svg drawing paper


// Example from svgjs.com
function one() {
    var draw = SVG('canvas')

    // create image
    var image = draw.image('images/shade.jpg')
    image.size(600, 600).y(-150)

    // create text
    var text = draw.text('SVG.JS').move(300, 0)
    text.font({
      family: 'Source Sans Pro'
    , size: 180
    , anchor: 'middle'
    , leading: '1em'
    })

    // clip image with text
    image.clipWith(text)    
}


// random one I found online
function two() {
    var draw = SVG('paper').size(300, 300)
    var rect = draw.rect(100, 100).attr({ fill: '#f06' })
    rect.animate().move(150, 150)
}


// Ripped out of a project. 
function renderSVG(data:string) {

    var el:JQuery;

    var root = SVG(el.get(0))

    // Load the SVG into a container
    var div = document.createElement("div")
    var container = SVG(div) // this creates an SVG tag inside
    container.svg(data) // this creates an SVG inside the SVG
    var $inner = $(div).find("svg svg")
    var inner:svgjs.Element = (<svgjs.LinkedHTMLElement>$inner.get(0)).instance

    // Copy in the important attributes
    root.attr('x', inner.attr('x'))
    root.attr('y', inner.attr('y'))
    root.attr('width', inner.attr('width'))
    root.attr('height', inner.attr('height'))
    root.viewbox(inner.viewbox())

    // Append the children
    el.append($inner.children())

    // Activate and Label all child paths
    var index = 0
    el.find("rect, path, circle, ellipse").each(function() {
        var $path: JQuery = $(this)
        var path = (<svgjs.LinkedHTMLElement>$path.get(0)).instance
        var uniqueId = "path"+index++
        path.attr({"path-id": uniqueId})
    })
}

//Test if svgjs.Element.transform() correctly return an svgjs.Element.Transform
function elementTransformShouldReturnTransformObject() {
    /* create an svg drawing */
    var div = document.createElement('div')
    var draw = SVG(div)

    /* draw a rectangle scale, rotate and skew it */
    var rect = draw.rect(50,50).move(100,100).scale(0.5, 0.3).rotate(35).skew(10,25)
    
    /* first try to cast it */
    var trans:svgjs.Transform = rect.transform()
    /* then check values if they are correct */
    if (trans.scaleX != 0.5) { throw "scaleX value is not correct" }
    if (trans.scaleY != 0.3) { throw "scaleY value is not correct" }
    if (trans.rotation != 35) { throw "rotation value is not correct" }
    if (trans.skewX != 10) { throw "skewX value is not correct" }
    if (trans.skewY != 25) { throw "skewY value is not correct" }
}
