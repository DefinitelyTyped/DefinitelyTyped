/// <reference path='svgjs.d.ts' />
/// <reference path='../jquery/jquery.d.ts' />
 
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
    var inner:svgjs.Element = $inner.get(0).instance

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
        var $path = $(this)
        var path = $path.get(0).instance
        var uniqueId = "path"+index++
        path.attr({"path-id": uniqueId})
    })
}