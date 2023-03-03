
const TEXT = `u n i c o r n s `;
const textStyles = {
  fontSize: "30px",
  lineHeight: "35px",
  fontFamily: "Helvetica, Arial, sans-serif",
  fontWeight: 400,
  width: 100,
  paddingLeft: "10px",
  paddingRight: "5px",
  whiteSpace: "pre-wrap",
};

const textMetrics = init(textStyles)
const width = textMetrics.width(TEXT)
const height = textMetrics.height(TEXT)
const lines = textMetrics.lines(TEXT)
const maxFontSize = textMetrics.maxFontSize(TEXT)


const el = document.getElementById("test")
const textMetrics = init(el)
const width = textMetrics.width()
const height = textMetrics.height()
const lines = textMetrics.lines()
const maxFontSize = textMetrics.maxFontSize()

const options = { multiline: false }
const styleOverwrites = { fontSize: "30px" }

const textMetrics = init(el, options, styleOverwrites)
const width = textMetrics.width()
const height = textMetrics.height()
const lines = textMetrics.lines()
const maxFontSize = textMetrics.maxFontSize()
