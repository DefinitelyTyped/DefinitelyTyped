import ss = require("steelseries");

// Testing two random gauges
const radParams = { size: 30 };
const radial = new ss.Radial("rad", radParams); // $ExpectType Radial
radial
	.setArea([])
	.setBackgroundColor(ss.BackgroundColor.ANTHRACITE)
	.setForegroundType(ss.ForegroundType.TYPE1)
	.setFractionalScaleDecimals(3)
	.setFrameDesign(ss.FrameDesign.BLACK_METAL)
	.setLabelNumberFormat(ss.LabelNumberFormat.SCIENTIFIC)
	.setTrendVisible(true)
	.setUnitString("mm")
	.setUserLedColor(ss.LedColor.MAGENTA_LED)
	.setUserLedOnOff(true)
	.setUserLedVisible(false)
	.setValue(33)
	.setValueAnimated(23, () => { console.log("callback!"); })
	.resetMaxMeasuredValue()
	.resetMinMeasuredValue();
radial.repaint(); // $ExpectType void
radial.getMaxValue(); // $ExpectType number
radial.getMinValue(); // $ExpectType number
radial.getOdoValue(); // $ExpectType number
radial.getValue(); // $ExpectType number

const radBarCanvas = document.createElement("canvas");
radBarCanvas.setAttribute("width", "25px");
radBarCanvas.setAttribute("height", "25px");
const radialBar = new ss.RadialBargraph(radBarCanvas, {
	gaugeType: ss.GaugeType.TYPE4,
	size: 25,
	minValue: 10,
	maxValue: 20,
	niceScale: true,
	threshold: 18,
	thresholdRising: false,
	section: [ss.Section(10, 15, "rgba(123, 56, 32, 0.2)"), ss.Section(15, 20, "rgba(65, 23, 134, 0.9)")],
	useSectionColors: false,
	titleString: "test :)",
	unitString: "ANOTHER TEST! (:",
	frameDesign: ss.FrameDesign.METAL,
	frameVisible: true,
	backgroundColor: ss.BackgroundColor.BROWN,
	backgroundVisible: true,
	valueColor: ss.ColorDef.GREEN,
	lcdColor: ss.LcdColor.ORANGE,
	lcdVisible: false,
	lcdDecimals: 10,
	digitalFont: false,
	fractionalScaleDecimals: 2,
	customLayer: null,
	ledColor: ss.LedColor.ORANGE_LED,
	ledVisible: true,
	userLedColor: ss.LedColor.MAGENTA_LED,
	userLedVisible: true,
	labelNumberFormat: ss.LabelNumberFormat.SCIENTIFIC,
	foregroundType: ss.ForegroundType.TYPE2,
	foregroundVisible: true,
	playAlarm: true,
	alarmSound: "not_really_provided",
	valueGradient: new ss.gradientWrapper(10, 20, [10, 15, 20], []),
	useValueGradient: true,
	tickLabelOrientation: ss.TickLabelOrientation.HORIZONTAL,
	trendVisible: true,
	trendColors: [ss.LedColor.GREEN_LED, ss.LedColor.ORANGE_LED, ss.LedColor.RED_LED],
	fullScaleDeflectionTime: 10
});

// Testing image draw functions
const testCanvas = document.createElement("canvas");
testCanvas.setAttribute("width", "25px");
testCanvas.setAttribute("height", "25px");
const testCtx = testCanvas.getContext("2d");
if (testCtx) {
	ss.drawFrame(testCtx, ss.FrameDesign.BLACK_METAL, 25 / 2, 25 / 2, 25, 25);
	ss.drawBackground(testCtx, ss.BackgroundColor.BEIGE, 25 / 2, 25 / 2, 25, 25);
	ss.drawForeground(testCtx, ss.ForegroundType.TYPE3, 25, 25, false);
}

// Testing some tools
const rgbaCol = new ss.rgbaColor(122, 33, 248, 0.3); // $ExpectType rgbaColor
rgbaCol.getRgbColor(); // $ExpectType string

const rgbaCol2 = new ss.rgbaColor(32, 213, 28, 0.6);
const rgbaCol3 = new ss.rgbaColor(78, 99, 255, 0.9);
const conGrad = new ss.ConicalGradient([1, 2, 3], [rgbaCol, rgbaCol2, rgbaCol3]); // $ExpectType ConicalGradient

const sect = ss.Section(10, 15, "rgba(123, 56, 32, 0.2)"); // $ExpectType Section
