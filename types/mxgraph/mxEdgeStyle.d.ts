/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
declare namespace mxgraph {
	export class mxEdgeStyle {
		/**
		 * Class: mxEdgeStyle
		 * 
		 * Provides various edge styles to be used as the values for
		 * <mxConstants.STYLE_EDGE> in a cell style.
		 *
		 * Example:
		 * 
		 * (code)
		 * var style = stylesheet.getDefaultEdgeStyle();
		 * style[mxConstants.STYLE_EDGE] = mxEdgeStyle.ElbowConnector;
		 * (end)
		 * 
		 * Sets the default edge style to <ElbowConnector>.
		 * 
		 * Custom edge style:
		 * 
		 * To write a custom edge style, a function must be added to the mxEdgeStyle
		 * object as follows:
		 * 
		 * (code)
		 * mxEdgeStyle.MyStyle = function(state, source, target, points, result)
		 * {
		 *   if (source != null && target != null)
		 *   {
		 *     var pt = new mxPoint(target.getCenterX(), source.getCenterY());
		 * 
		 *     if (mxUtils.contains(source, pt.x, pt.y))
		 *     {
		 *       pt.y = source.y + source.height;
		 *     }
		 * 
		 *     result.push(pt);
		 *   }
		 * };
		 * (end)
		 * 
		 * In the above example, a right angle is created using a point on the
		 * horizontal center of the target vertex and the vertical center of the source
		 * vertex. The code checks if that point intersects the source vertex and makes
		 * the edge straight if it does. The point is then added into the result array,
		 * which acts as the return value of the function.
		 *
		 * The new edge style should then be registered in the <mxStyleRegistry> as follows:
		 * (code)
		 * mxStyleRegistry.putValue('myEdgeStyle', mxEdgeStyle.MyStyle);
		 * (end)
		 * 
		 * The custom edge style above can now be used in a specific edge as follows:
		 * 
		 * (code)
		 * model.setStyle(edge, 'edgeStyle=myEdgeStyle');
		 * (end)
		 * 
		 * Note that the key of the <mxStyleRegistry> entry for the function should
		 * be used in string values, unless <mxGraphView.allowEval> is true, in
		 * which case you can also use mxEdgeStyle.MyStyle for the value in the
		 * cell style above.
		 * 
		 * Or it can be used for all edges in the graph as follows:
		 * 
		 * (code)
		 * var style = graph.getStylesheet().getDefaultEdgeStyle();
		 * style[mxConstants.STYLE_EDGE] = mxEdgeStyle.MyStyle;
		 * (end)
		 * 
		 * Note that the object can be used directly when programmatically setting
		 * the value, but the key in the <mxStyleRegistry> should be used when
		 * setting the value via a key, value pair in a cell style.
		 * 
		 * Function: EntityRelation
		 * 
		 * Implements an entity relation style for edges (as used in database
		 * schema diagrams). At the time the function is called, the result
		 * array contains a placeholder (null) for the first absolute point,
		 * that is, the point where the edge and source terminal are connected.
		 * The implementation of the style then adds all intermediate waypoints
		 * except for the last point, that is, the connection point between the
		 * edge and the target terminal. The first ant the last point in the
		 * result array are then replaced with mxPoints that take into account
		 * the terminal's perimeter and next point on the edge.
		 *
		 * Parameters:
		 * 
		 * state - <mxCellState> that represents the edge to be updated.
		 * source - <mxCellState> that represents the source terminal.
		 * target - <mxCellState> that represents the target terminal.
		 * points - List of relative control points.
		 * result - Array of <mxPoints> that represent the actual points of the
		 * edge.
		 */
		EntityRelation(state: mxCellState, source: mxCellState, target: mxCellState, points: mxPoint[], result: mxPoint[]): void;

		/**
		* Function: Loop
		* 
		* Implements a self-reference, aka. loop.
		*/
		Loop(state: mxCellState, source: mxCellState, target: mxCellState, points: mxPoint[], result: mxPoint[]): void;

		/**
		 * Function: ElbowConnector
		 * 
		 * Uses either <SideToSide> or <TopToBottom> depending on the horizontal
		 * flag in the cell style. <SideToSide> is used if horizontal is true or
		 * unspecified. See <EntityRelation> for a description of the
		 * parameters.
		 */
		ElbowConnector(state: mxCellState, source: mxCellState, target: mxCellState, points: mxPoint[], result: mxPoint[]): void;

		/**
		 * Function: SideToSide
		 * 
		 * Implements a vertical elbow edge. See <EntityRelation> for a description
		 * of the parameters.
		 */
		SideToSide(state: mxCellState, source: mxCellState, target: mxCellState, points: mxPoint[], result: mxPoint[]): void;

		/**
		 * Function: TopToBottom
		 * 
		 * Implements a horizontal elbow edge. See <EntityRelation> for a
		 * description of the parameters.
		 */
		TopToBottom(state: mxCellState, source: mxCellState, target: mxCellState, points: mxPoint[], result: mxPoint[]): void;

		/**
		 * Function: SegmentConnector
		 * 
		 * Implements an orthogonal edge style. Use <mxEdgeSegmentHandler>
		 * as an interactive handler for this style.
		 */
		SegmentConnector(state: mxCellState, source: mxCellState, target: mxCellState, hints: mxPoint[], result: mxPoint[]): void;


		/**
		 * Function: OrthConnector
		 * 
		 * Implements a local orthogonal router between the given
		 * cells.
		 * 
		 * Parameters:
		 * 
		 * state - <mxCellState> that represents the edge to be updated.
		 * source - <mxCellState> that represents the source terminal.
		 * target - <mxCellState> that represents the target terminal.
		 * points - List of relative control points.
		 * result - Array of <mxPoints> that represent the actual points of the
		 * edge.
		 * 
		 */
		OrthConnector(state: mxCellState, source: mxCellState, target: mxCellState, points: mxPoint[], result: mxPoint[]): void;

	}
}
