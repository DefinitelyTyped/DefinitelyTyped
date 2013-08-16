///<reference path="goJS.d.ts"/>

/**
*@constructor
*@extends DraggingTool
*@class 
*This draggingTool class makes guidelines visible as the nodes are dragged around a diagram
*when the selected node is aligned with another node. 
*/
class GuidedDraggingTool extends go.DraggingTool{
    constructor() {
        super(); 
        this.lengthOfGuideline = 20;
        this.guidelineSnapDistance = 5;
        this.isGuidelineSnapEnabled = true;
        this.isGuidelineEnabled = true;
        var $ = go.GraphObject.make;
        //parts for horizonal guidelines
        this.guidelineHtop =
        $(go.Part,
            { isInDocumentBounds: false, },
            $(go.Shape,
                {
                    geometryString: "M0 0 100 0",
                    stroke: "gray",
                    strokeWidth: 1,
                    isGeometryPositioned: true
                }));
        this.guidelineHbottom =
        $(go.Part,
            { isInDocumentBounds: false },
            $(go.Shape,
                {
                    geometryString: "M0 0 100 0",
                    stroke: "gray",
                    strokeWidth: 1,
                    isGeometryPositioned: true
                }));
        this.guidelineHcenter =
        $(go.Part,
            { isInDocumentBounds: false },
            $(go.Shape,
                {
                    geometryString: "M0 0 100 0",
                    stroke: "gray",
                    strokeWidth: 1,
                    isGeometryPositioned: true
                }));
        //parts for veritcal guidelines
        this.guidelineVleft =
        $(go.Part,
            { isInDocumentBounds: false },
            $(go.Shape,
                {
                    geometryString: "M0 0 0 100",
                    stroke: "gray", strokeWidth: 1,
                    isGeometryPositioned: true
                }));
        this.guidelineVright =
        $(go.Part,
            { isInDocumentBounds: false },
            $(go.Shape,
                {
                    geometryString: "M0 0 0 100",
                    stroke: "gray", strokeWidth: 1,
                    isGeometryPositioned: true
                }));
        this.guidelineVcenter =
        $(go.Part,
            { isInDocumentBounds: false },
            $(go.Shape,
                {
                    geometryString: "M0 0 0 100",
                    stroke: "gray", strokeWidth: 1,
                    isGeometryPositioned: true
                }));
    }
    private guidelineHtop: any; 
    private guidelineHbottom: any; 
    private guidelineHcenter: any; 
    private guidelineVleft: any; 
    private guidelineVright: any; 
    private guidelineVcenter: any; 

    //for storing matches 
    private matchHtop: number; 
    private matchHbottom: number; 
    private matchHcenter: number;
    private matchVleft: number;
    private matchVright: number;
    private matchVcenter: number;
    //information for snapping onMouseUp
    private node: go.Node; 
    private match: number;
    private compareBounds: go.Rect; 
    private comparePlace: string; 
    //qualities that the user can modify
    /** @type {number} */
    lengthOfGuideline: number; 
    /** @type {number} */
    guidelineSnapDistance: number;
    /** @type {boolean} */
    isGuidelineEnabled: boolean; 
    /** @type {string} */
    horizontalGuidelineColor: any; 
    /** @type {string} */
    verticalGuidelineColor: any; 
    /** @type {string} */
    centerGuidelineColor: any; 
    /** @type {number} */
    guidelineWidth: number;
    /** @type {number} */
    searchDistance: number; 
    /** @type {boolean} */
    isGuidelineSnapEnabled: boolean; 

    //go.Diagram.inherit(GuidedDraggingTool, go.DraggingTool);

    /**
    * Calls the base method from {@link DraggingTool#doDeactivate}
    * and removes the guidelines from the graph.
    * @this {GuidedDraggingTool}
    */
    doDeactivate() {
        go.DraggingTool.prototype.doDeactivate.call(this);
        //resets when dragging is done
        this.reset();
    }

    /**
    * Calls the base method from {@link DragginTool#moveParts}.
    * Calls the methods to find horizontal and vertical matches, and to draw guidelines. 
    * @this {GuidedDraggingTool}
    * @param {Map} parts  a Map mapping {@link Part}s to JavaScript Objects that have a "go.Point" property remembering the original location of that Part
    * @param {Point} offset
    * @param {boolean} check  Whether to check {@link Part#canMove} on each part.
    */
    moveParts(parts:go.Map, offset:go.Point, check:boolean) {
        go.DraggingTool.prototype.moveParts.call(this, parts, offset, check);
        if (this.isActive && parts !== null && parts.count == 1 && this.isGuidelineEnabled) {
            //resets lines
            this.reset();
            //resets other variables
            this.node = null;
            this.match = NaN;
            this.compareBounds = null;
            this.comparePlace = null;
            this.matchHtop = NaN;
            this.matchHbottom = NaN;
            this.matchHcenter = NaN;
            this.matchVleft = NaN;
            this.matchVright = NaN;
            this.matchVcenter = NaN;

            //documents transaction
            this.diagram.startTransaction("guidedDrag");

            //gets the selected part
            var partItr = parts.iterator;
            partItr.next();
            var node = partItr.key;
            var distance = this.diagram.width;

            this.horizonalMatches(node);
            this.verticalMatches(node);

            //ends transaction
            this.diagram.commitTransaction("guidedDrag");
        }
    }

    /**
    * Calls the base method {@link DraggingTool#doMouseUp}.
    * On a mouse-up, snaps the selected node to the nearest guideline.
    * If no guidelines are showing, the node remains at its position.
    * This calls {@link #guidelineSnap}.
    * @this {GuidedDraggingTool}
    */
    doMouseUp() {
        go.DraggingTool.prototype.doMouseUp.call(this);
        //snapps only when the mouse is unclicked 
        this.guidelineSnap(this.node, this.match, this.compareBounds, this.comparePlace);
    }

    /**
    * This finds nodes that are aligned with the seleced node along horizontal lines. It compares the selected
    * node to either all nodes in the diagram or nodes within a rectangle approximately equal to {@link #searchDistance}.
    * The guidelines appear when a node is aligned within a margin-of-error equal to {@link #guidelineSnapDistance}. 
    * The parameters used for {@link #guidelineSnap} are also set here. 
    * @this {GuidedDraggingTool}
    * @param {Node} node
    */
    horizonalMatches(node) {
        var nodeBounds = node.actualBounds;
        var marginOfError = this.guidelineSnapDistance;
        var distance = this.searchDistance;
        if (distance == null) {
            //if no distance specified, compares with all objects on grid
            var compareItr = this.diagram.nodes.iterator;
        }
        else {
            //compares with nodes within area
            var compareWithinRec = nodeBounds.copy();
            compareWithinRec.inflate(distance, 10);
            var compareNodes = this.diagram.findObjectsIn(compareWithinRec,
                function (obj) { return obj.part; },
                function (part) { return part instanceof go.Node; },
                true);
            var compareItr = compareNodes.iterator;
        }

        //horizontal line -- comparing y-values 
        while (compareItr.next()) {
            var compare = compareItr.value;
            var compareBounds = compare.actualBounds;
            //doesn't comapare to links or groups
            if (compare instanceof go.Link || compare instanceof go.Group) continue;
            //doesn't compare to itself
            if (compare == node) continue;

            //top side
            var topToTop = compareBounds.y - nodeBounds.y;
            var topToCenter = (compareBounds.y + compareBounds.height / 2) - nodeBounds.y;
            var topToBottom = (compareBounds.y + compareBounds.height) - nodeBounds.y;
            //bottom side
            var bottomToTop = compareBounds.y - (nodeBounds.y + nodeBounds.height);
            var bottomToCenter = (compareBounds.y + compareBounds.height / 2) - (nodeBounds.y + nodeBounds.height);
            var bottomToBottom = (compareBounds.y + compareBounds.height) - (nodeBounds.y + nodeBounds.height);
            //center
            var centerToTop = compareBounds.y - (nodeBounds.y + nodeBounds.height / 2);
            var centerToCenter = (compareBounds.y + compareBounds.height / 2) - (nodeBounds.y + nodeBounds.height / 2);
            var centerToBottom = (nodeBounds.y + nodeBounds.height / 2) - (compareBounds.y + compareBounds.height);

            //center
            if (Math.abs(centerToCenter) < marginOfError) {
                this.matchHcenter = compareBounds.y + compareBounds.height / 2;
                this.drawHorizontalMatch(nodeBounds, compareBounds, this.matchHcenter);

                this.node = node;
                this.match = this.matchHcenter;
                this.compareBounds = compareBounds;
                this.comparePlace = "center";

            }
            else if (Math.abs(centerToTop) < marginOfError) {
                this.matchHcenter = compareBounds.y;
                this.drawHorizontalMatch(nodeBounds, compareBounds, this.matchHcenter);

                this.node = node;
                this.match = this.matchHcenter;
                this.compareBounds = compareBounds;
                this.comparePlace = "top";

            }
            else if (Math.abs(centerToBottom) < marginOfError) {
                this.matchHcenter = compareBounds.y + compareBounds.height;
                this.drawHorizontalMatch(nodeBounds, compareBounds, this.matchHcenter);

                this.node = node;
                this.match = this.matchHcenter;
                this.compareBounds = compareBounds;
                this.comparePlace = "bottom";

            }
            //bottom
            else if (Math.abs(bottomToCenter) < marginOfError) {
                this.matchHbottom = compareBounds.y + compareBounds.height / 2;
                this.drawHorizontalMatch(nodeBounds, compareBounds, this.matchHbottom);

                this.node = node;
                this.match = this.matchHbottom;
                this.compareBounds = compareBounds;
                this.comparePlace = "center";

            }
            else if (Math.abs(bottomToTop) < marginOfError) {
                this.matchHbottom = compareBounds.y;
                this.drawHorizontalMatch(nodeBounds, compareBounds, this.matchHbottom);

                this.node = node;
                this.match = this.matchHbottom;
                this.compareBounds = compareBounds;
                this.comparePlace = "top";

            }
            else if (Math.abs(bottomToBottom) < marginOfError) {
                this.matchHbottom = compareBounds.y + compareBounds.height;
                this.drawHorizontalMatch(nodeBounds, compareBounds, this.matchHbottom);

                this.node = node;
                this.match = this.matchHbottom;
                this.compareBounds = compareBounds;
                this.comparePlace = "bottom";

            }
            //top
            else if (Math.abs(topToCenter) < marginOfError) {
                this.matchHtop = compareBounds.y + compareBounds.height / 2;
                this.drawHorizontalMatch(nodeBounds, compareBounds, this.matchHtop);

                this.node = node;
                this.match = this.matchHtop;
                this.compareBounds = compareBounds;
                this.comparePlace = "center";

            }
            else if (Math.abs(topToTop) < marginOfError) {
                this.matchHtop = compareBounds.y;
                this.drawHorizontalMatch(nodeBounds, compareBounds, this.matchHtop);

                this.node = node;
                this.match = this.matchHtop;
                this.compareBounds = compareBounds;
                this.comparePlace = "top";

            }
            else if (Math.abs(topToBottom) < marginOfError) {
                this.matchHtop = compareBounds.y + compareBounds.height;
                this.drawHorizontalMatch(nodeBounds, compareBounds, this.matchHtop);

                this.node = node;
                this.match = this.matchHtop;
                this.compareBounds = compareBounds;
                this.comparePlace = "bottom";

            }
        }
    }


    /**
    * This finds nodes that are aligned with the seleced node along vertical lines. It compares the selected
    * node to either all nodes in the diagram or nodes within a rectangle approximately equal to {@link #searchDistance}.
    * The guidelines appear when a node is aligned within a margin-of-error equal to {@link #guidelineSnapDistance}. 
    * The parameters used for {@link #guidelineSnap} are also set here. 
    * @this {GuidedDraggingTool}
    * @param {Node} node
    */
    verticalMatches(node:go.Node) {
        var nodeBounds = node.actualBounds;
        var marginOfError = this.guidelineSnapDistance;
        var distance = this.searchDistance;
        if (distance == null) {
            //if no distance specified, compares with all objects on grid
            var compareItr = this.diagram.nodes.iterator;
        }
        else {
            //compares with nodes within area
            var compareWithinRec = nodeBounds.copy();
            compareWithinRec.inflate(10, distance);
            var compareNodes = this.diagram.findObjectsIn(compareWithinRec,
                function (obj) { return obj.part; },
                function (part) { return part instanceof go.Node; },
                true);
            var compareItr = compareNodes.iterator;
        }
        //vertical line -- comparing x-values
        while (compareItr.next()) {
            var compare = compareItr.value;
            //doesn't comapare to links or groups
            if (compare instanceof go.Link || compare instanceof go.Group) continue;
            //doesn't compare to itself
            if (compare == node) continue;
            var compareBounds = compare.actualBounds;
            //left side
            var leftToLeft = nodeBounds.x - compareBounds.x;
            var leftToCenter = nodeBounds.x - (compareBounds.x + compareBounds.width / 2);
            var leftToRight = nodeBounds.x - (compareBounds.x + compareBounds.width);
            //right side
            var rightToLeft = (nodeBounds.x + nodeBounds.width) - compareBounds.x;
            var rightToCenter = (nodeBounds.x + nodeBounds.width) - (compareBounds.x + compareBounds.width / 2);
            var rightToRight = (nodeBounds.x + nodeBounds.width) - (compareBounds.x + compareBounds.width);
            //center
            var centerToLeft = (nodeBounds.x + nodeBounds.width / 2) - compareBounds.x;
            var centerToCenter = (nodeBounds.x + nodeBounds.width / 2) - (compareBounds.x + compareBounds.width / 2);
            var centerToRight = (nodeBounds.x + nodeBounds.width / 2) - (compareBounds.x + compareBounds.width);

            //center
            if (Math.abs(centerToCenter) < marginOfError) {
                this.matchVcenter = compareBounds.x + compareBounds.width / 2;
                this.drawVerticalMatch(nodeBounds, compareBounds, this.matchVcenter);

                this.node = node;
                this.match = this.matchVcenter;
                this.compareBounds = compareBounds;
                this.comparePlace = "center";

            }
            else if (Math.abs(centerToLeft) < marginOfError) {
                this.matchVcenter = compareBounds.x;
                this.drawVerticalMatch(nodeBounds, compareBounds, this.matchVcenter);

                this.node = node;
                this.match = this.matchVcenter;
                this.compareBounds = compareBounds;
                this.comparePlace = "left";

            }
            else if (Math.abs(centerToRight) < marginOfError) {
                this.matchVcenter = compareBounds.x + compareBounds.width;
                this.drawVerticalMatch(nodeBounds, compareBounds, this.matchVcenter);

                this.node = node;
                this.match = this.matchVcenter;
                this.compareBounds = compareBounds;
                this.comparePlace = "right";

            }
            //left
            else if (Math.abs(leftToCenter) < marginOfError) {
                this.matchVleft = compareBounds.x + compareBounds.width / 2;
                this.drawVerticalMatch(nodeBounds, compareBounds, this.matchVleft);

                this.node = node;
                this.match = this.matchVleft;
                this.compareBounds = compareBounds;
                this.comparePlace = "center";

            }
            else if (Math.abs(leftToLeft) < marginOfError) {
                this.matchVleft = compareBounds.x;
                this.drawVerticalMatch(nodeBounds, compareBounds, this.matchVleft);

                this.node = node;
                this.match = this.matchVleft;
                this.compareBounds = compareBounds;
                this.comparePlace = "left";

            }
            else if (Math.abs(leftToRight) < marginOfError) {
                this.matchVleft = compareBounds.x + compareBounds.width;
                this.drawVerticalMatch(nodeBounds, compareBounds, this.matchVleft);

                this.node = node;
                this.match = this.matchVleft;
                this.compareBounds = compareBounds;
                this.comparePlace = "right";

            }
            //right
            else if (Math.abs(rightToCenter) < marginOfError) {
                this.matchVright = compareBounds.x + compareBounds.width / 2;
                this.drawVerticalMatch(nodeBounds, compareBounds, this.matchVright);

                this.node = node;
                this.match = this.matchVright;
                this.compareBounds = compareBounds;
                this.comparePlace = "center";

            }
            else if (Math.abs(rightToLeft) < marginOfError) {
                this.matchVright = compareBounds.x;
                this.drawVerticalMatch(nodeBounds, compareBounds, this.matchVright);

                this.node = node;
                this.match = this.matchVright;
                this.compareBounds = compareBounds;
                this.comparePlace = "left";

            }
            else if (Math.abs(rightToRight) < marginOfError) {
                this.matchVright = compareBounds.x + compareBounds.width;
                this.drawVerticalMatch(nodeBounds, compareBounds, this.matchVright);

                this.node = node;
                this.match = this.matchVright;
                this.compareBounds = compareBounds;
                this.comparePlace = "right";

            }
        }
    }

    /**
    * This draws the guidelines for horizontal matches, stretching from the left side of the left-most node
    * to the right side of the right-most node. The extension of the line beyond those go.Points is determined
    * by {@link #lengthOfGuideline}. 
    * Called by {@link #horizonatalMatches}
    * @this {GuidedDraggingTool}
    * @param {actualBounds} nodeBounds
    * @param {actualBounds} matchBounds
    * @param {number} matchH
    */
    drawHorizontalMatch(nodeBounds:go.Rect, matchBounds: go.Rect, matchH:number) {
        //line extends from x1 to x2 
        var docSize = this.diagram.documentBounds;
        var x1 = Math.min(nodeBounds.x, docSize.x)
        var x2 = Math.max(nodeBounds.x, docSize.width);
        //draws line
        if (matchH == this.matchHtop) {
            this.guidelineHtop.position = new go.Point(x1, matchH);
            this.guidelineHtop.elt(0).width = (x2 - x1);
            this.diagram.add(this.guidelineHtop);
        }
        else if (matchH == this.matchHbottom) {
            this.guidelineHbottom.position = new go.Point(x1, matchH);
            this.guidelineHbottom.elt(0).width = (x2 - x1);
            this.diagram.add(this.guidelineHbottom);
        }
        else if (matchH == this.matchHcenter) {
            this.guidelineHcenter.position = new go.Point(x1, matchH);
            this.guidelineHcenter.elt(0).width = (x2 - x1);
            this.diagram.add(this.guidelineHcenter);
        }
    }

    /**
    * This draws the guidelines for vertical matches, stretching from the top side of the top-most node
    * to the bottom side of the bottom-most node. The extension of the line beyond those go.Points is determined
    * by {@link #lengthOfGuideline}. 
    * Called by {@link #verticallMatches}
    * @this {GuidedDraggingTool}
    * @param {actualBounds} nodeBounds
    * @param {actualBounds} matchBounds
    * @param {number} matchV
    */
    drawVerticalMatch(nodeBounds: go.Rect, matchBounds: go.Rect, matchV:number) {
        var extend = this.lengthOfGuideline;
        //line extends from y1 to y2 
        var docSize = this.diagram.documentBounds;
        var y1 = Math.min(nodeBounds.y, docSize.y)
        var y2 = Math.max(nodeBounds.y, docSize.height);
        //draws guideline
        if (matchV == this.matchVleft) {
            this.guidelineVleft.position = new go.Point(matchV, y1);
            this.guidelineVleft.elt(0).height = (y2 - y1);
            this.diagram.add(this.guidelineVleft);
        }
        else if (matchV == this.matchVright) {
            this.guidelineVright.position = new go.Point(matchV, y1);
            this.guidelineVright.elt(0).height = (y2 - y1);
            this.diagram.add(this.guidelineVright);
        }
        else if (matchV == this.matchVcenter) {
            this.guidelineVcenter.position = new go.Point(matchV, y1);
            this.guidelineVcenter.elt(0).height = (y2 - y1);
            this.diagram.add(this.guidelineVcenter);
        }

    }
    /**
    * Snaps the selected node to a guideline. If no guidelines are visible, meaning the node is not aligned with
    * any other, then the position of the node remains the same.
    * @this {GuidedDraggingTool}
    * @param {Node} node
    * @param {Number} match
    * @param {actualBounds} compareBounds
    * @param {String} comparePlace (comparePlace takes "top" "center" "bottom" "left" "right") 
    */
    guidelineSnap(node:go.Node, match:number, compareBounds: go.Rect, comparePlace: string) {
        var e = this.diagram.lastInput;
        //only snaps if guidelineSnap is enabled (default is true)
        //snapping doesn't occur if shift is held while dragging
        if (this.isGuidelineSnapEnabled && e.shift === false && e.control === false) {
            //snapping horizontally 
            if (match == (this.matchHbottom)) {
                if (comparePlace == "center") {
                    var snapTo = compareBounds.y + compareBounds.height / 2 - node.actualBounds.height;
                    node.move(new go.Point(node.actualBounds.x, snapTo));
                }
                else if (comparePlace == "top") {
                    var snapTo = compareBounds.y - node.actualBounds.height;
                    node.move(new go.Point(node.actualBounds.x, snapTo));
                }
                else if (comparePlace == "bottom") {
                    var snapTo = compareBounds.y + compareBounds.height - node.actualBounds.height;
                    node.move(new go.Point(node.actualBounds.x, snapTo));
                }
            }
            else if (match == (this.matchHcenter)) {
                if (comparePlace == "center") {
                    var snapTo = compareBounds.y + compareBounds.height / 2 - node.actualBounds.height / 2;
                    node.move(new go.Point(node.actualBounds.x, snapTo));
                }
                else if (comparePlace == "top") {
                    var snapTo = compareBounds.y - node.actualBounds.height / 2;
                    node.move(new go.Point(node.actualBounds.x, snapTo));
                }
                else if (comparePlace == "bottom") {
                    var snapTo = compareBounds.y + compareBounds.height - node.actualBounds.height / 2;
                    node.move(new go.Point(node.actualBounds.x, snapTo));
                }
            }
            else if (match == (this.matchHtop)) {
                if (comparePlace == "center") {
                    var snapTo = compareBounds.y + compareBounds.height / 2;
                    node.move(new go.Point(node.actualBounds.x, snapTo));
                }
                else if (comparePlace == "top") {
                    var snapTo = compareBounds.y;
                    node.move(new go.Point(node.actualBounds.x, snapTo));
                }
                else if (comparePlace == "bottom") {
                    var snapTo = compareBounds.y + compareBounds.height;
                    node.move(new go.Point(node.actualBounds.x, snapTo));
                }
            }
            //snapping vertically 
            else if (match == (this.matchVcenter)) {
                if (comparePlace == "left") {
                    var snapTo = compareBounds.x - node.actualBounds.width / 2;
                    node.move(new go.Point(snapTo, node.actualBounds.y));
                }
                else if (comparePlace == "right") {
                    var snapTo = compareBounds.x + compareBounds.width - node.actualBounds.width / 2;
                    node.move(new go.Point(snapTo, node.actualBounds.y));
                }
                else if (comparePlace == "center") {
                    var snapTo = compareBounds.x + compareBounds.width / 2 - node.actualBounds.width / 2;
                    node.move(new go.Point(snapTo, node.actualBounds.y));
                }
            }
            else if (match == (this.matchVleft)) {
                if (comparePlace == "left") {
                    var snapTo = compareBounds.x;
                    node.move(new go.Point(snapTo, node.actualBounds.y));
                }
                else if (comparePlace == "right") {
                    var snapTo = compareBounds.x + compareBounds.width;
                    node.move(new go.Point(snapTo, node.actualBounds.y));
                }
                else if (comparePlace == "center") {
                    var snapTo = compareBounds.x + compareBounds.width / 2;
                    node.move(new go.Point(snapTo, node.actualBounds.y));
                }
            }
            else if (match == (this.matchVright)) {
                if (comparePlace == "left") {
                    var snapTo = compareBounds.x - node.actualBounds.width;
                    node.move(new go.Point(snapTo, node.actualBounds.y));
                }
                else if (comparePlace == "right") {
                    var snapTo = compareBounds.x + compareBounds.width - node.actualBounds.width;
                    node.move(new go.Point(snapTo, node.actualBounds.y));
                }
                else if (comparePlace == "center") {
                    var snapTo = compareBounds.x + compareBounds.width / 2 - node.actualBounds.width;
                    node.move(new go.Point(snapTo, node.actualBounds.y));
                }
            }
        }
    }
    
    /**
    * Removes all of the guidelines from the grid. 
    * @this {GuidedDraggingTool}
    */
    reset() {
        this.diagram.remove(this.guidelineHbottom);
        this.diagram.remove(this.guidelineHcenter);
        this.diagram.remove(this.guidelineHtop);
        this.diagram.remove(this.guidelineVleft);
        this.diagram.remove(this.guidelineVright);
        this.diagram.remove(this.guidelineVcenter);
    }

}//END GuidedDraggingTool 


/**
* Gets or sets the length of the guideline that extends beyond the aligned objects.
* The default value is 20.
* @name GuidedDraggingTool#lengthOfGuideline
* @function.
* @return {number}
*/
Object.defineProperty(GuidedDraggingTool.prototype, "lengthOfGuideline", {
    get: function () { return this._lengthOfGuideline; },
    set: function (val) {
        if (val < 0 || isNaN(val)) throw new Error("new value for GuidedDraggingTool.lengthOfGuideline must be a positive number");
        if (this._lengthOfGuideline !== val) {
            this._lengthOfGuideline = val;
        }
    }
});

/**
* Gets or sets the margin of error for which guidelines show up.
* The default value is 3. Guidelines will show up when the aligned nods are 3px away from perfect alignment.
* @name GuidedDraggingTool#guidelineSnapDistance
* @function.
* @return {number}
*/
Object.defineProperty(GuidedDraggingTool.prototype, "guidelineSnapDistance", {
    get: function () { return this._guidelineSnapDistance; },
    set: function (val) {
        if (val < 0 || isNaN(val)) throw new Error("new value for GuidedDraggingTool.guidelineSnapDistance must be a positive number");
        if (this._guidelineSnapDistance !== val) {
            this._guidelineSnapDistance = val;
        }
    }
});


/**
* Gets or sets whether the guidelines are enabled or disable.
* The default value is true.
* @name GuidedDraggingTool#isGuidelineEnabled
* @function.
* @return {boolean}
*/
Object.defineProperty(GuidedDraggingTool.prototype, "isGuidelineEnabled", {
    get: function () { return this._isGuidelineEnabled; },
    set: function (val) {
        if (!(val.constructor === Boolean)) throw new Error("new value for GuidedDraggingTool.isGuidelineEnabled must be a boolean value");
        if (this._isGuidelineEnabled !== val) {
            this._isGuidelineEnabled = val;
        }
    }
});

/**
* Gets or sets the color of horizontal guidelines.
* The default value is "gray".
* @name GuidedDraggingTool#horizontalGuidelineColor
* @function.
* @return {color}
*/
Object.defineProperty(GuidedDraggingTool.prototype, "horizontalGuidelineColor", {
    get: function () { return this._horizontalGuidelineColor; },
    set: function (val) {
        if (this._horizontalGuidelineColor !== val) {
            this._horizontalGuidelineColor = val;
            this.guidelineHbottom.elements.first().stroke = this._horizontalGuidelineColor;
            this.guidelineHtop.elements.first().stroke = this._horizontalGuidelineColor;
        }
    }
});

/**
* Gets or sets the color of vertical guidelines.
* The default value is "gray".
* @name GuidedDraggingTool#verticalGuidelineColor
* @function.
* @return {color}
*/
Object.defineProperty(GuidedDraggingTool.prototype, "verticalGuidelineColor", {
    get: function () { return this._verticalGuidelineColor; },
    set: function (val) {
        if (this._verticalGuidelineColor !== val) {
            this._verticalGuidelineColor = val;
            this.guidelineVleft.elements.first().stroke = this._verticalGuidelineColor;
            this.guidelineVright.elements.first().stroke = this._verticalGuidelineColor;
        }
    }
});

/**
* Gets or sets the color of center guidelines.
* The default value is "red".
* @name GuidedDraggingTool#centerGuidelineColor
* @function.
* @return {color}
*/
Object.defineProperty(GuidedDraggingTool.prototype, "centerGuidelineColor", {
    get: function () { return this._centerGuidelineColor; },
    set: function (val) {
        if (this._centerGuidelineColor !== val) {
            this._centerGuidelineColor = val;
            this.guidelineVcenter.elements.first().stroke = this._centerGuidelineColor;
            this.guidelineHcenter.elements.first().stroke = this._centerGuidelineColor;
        }
    }
});

/**
* Gets or sets the width guidelines.
* The default value is 1.
* @name GuidedDraggingTool#guidelineWidth
* @function.
* @return {number}
*/
Object.defineProperty(GuidedDraggingTool.prototype, "guidelineWidth", {
    get: function () { return this._guidelineWidth; },
    set: function (val) {
        if (isNaN(val)) throw new Error("New value for GuidedDraggingTool.guidelineWidth must be a number.");
        if (this._guidelineWidth !== val) {
            this._guidelineWidth = val;
            this.guidelineVcenter.elements.first().strokeWidth = val;
            this.guidelineHcenter.elements.first().strokeWidth = val;
            this.guidelineVleft.elements.first().strokeWidth = val;
            this.guidelineVright.elements.first().strokeWidth = val;
            this.guidelineHbottom.elements.first().strokeWidth = val;
            this.guidelineHtop.elements.first().strokeWidth = val;
        }
    }
});
/**
* Gets or sets the distance around the selected node to search for aligned nodes.
* The default value is null, which searches the entire diagram.
* @name GuidedDraggingTool#searchDistance
* @function.
* @return {number}
*/
Object.defineProperty(GuidedDraggingTool.prototype, "searchDistance", {
    get: function () { return this._searchDistance; },
    set: function (val) {
        if (isNaN(val) || val < 0) throw new Error("new value for GuidedDraggingTool.searchDistance must be a positive number");
        if (this._searchDistance !== val) {
            this._searchDistance = val;
        }
    }
});

/**
* Gets or sets whether snapping to guidelines is enabled.
* The default value is true.
* @name GuidedDraggingTool#isGuidelineSnapEnabled
* @function.
* @return {Boolean}
*/
Object.defineProperty(GuidedDraggingTool.prototype, "isGuidelineSnapEnabled", {
    get: function () { return this._isGuidelineSnapEnabled; },
    set: function (val) {
        if (!(typeof val == "boolean" )) throw new Error("new value for GuidedDraggingTool.isGuidelineSnapEnabled must be a boolean");
        if (this._isGuidelineSnapEnabled !== val) {
            this._isGuidelineSnapEnabled = val;
        }
    }
});

