import Oled = require('oled-i2c-bus')
import { openSync } from 'i2c-bus'

// Test: Constructor with minimal options
function testConstructorMinimal(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, {})

  // Verify readonly properties exist
  const width: number = oled.WIDTH
  const height: number = oled.HEIGHT
  const driver: string = oled.DRIVER
}

// Test: Constructor with full options
function testConstructorFull(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, {
    width: 128,
    height: 64,
    address: 0x3c,
    bus: 1,
    driver: 'SSD1306',
    linespacing: 1,
    letterspacing: 1,
  })
}

// Test: Constructor with SH1106 driver
function testConstructorSH1106(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, {
    width: 128,
    height: 64,
    driver: 'SH1106',
  })
}

// Test: Display control methods
function testDisplayControl(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, { width: 128, height: 64 })

  oled.turnOnDisplay()
  oled.turnOffDisplay()
  oled.dimDisplay(true)
  oled.dimDisplay(false)
  oled.invertDisplay(true)
  oled.invertDisplay(false)
  oled.startScroll('left', 0, 15)
  oled.startScroll('right', 0, 15)
  oled.startScroll('left diagonal', 0, 15)
  oled.startScroll('right diagonal', 0, 15)
  oled.stopScroll()
  oled.update()
}

// Test: Clear display
function testClearDisplay(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, { width: 128, height: 64 })

  oled.clearDisplay()
  oled.clearDisplay(true)
  oled.clearDisplay(false)
}

// Test: Cursor
function testCursor(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, { width: 128, height: 64 })

  oled.setCursor(0, 0)
  oled.setCursor(64, 32)
}

// Test: Low-level page/segment drawing
function testPageDrawing(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, { width: 128, height: 64 })

  oled.drawPageCol(0, 0, 0xff)
  oled.drawPageSeg(0, 0, 0xff)
  oled.drawPageSeg(0, 0, 0xff, true)
  oled.drawPageSeg(0, 0, 0xff, false)
}

// Test: Draw pixels
function testDrawPixel(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, { width: 128, height: 64 })

  // Single pixel
  oled.drawPixel([64, 32, 1])
  oled.drawPixel([64, 32, 0])
  oled.drawPixel([64, 32, true])
  oled.drawPixel([64, 32, false])

  // Multiple pixels
  oled.drawPixel([
    [0, 0, 1],
    [127, 0, 1],
    [0, 63, 1],
    [127, 63, 1],
  ])

  // With sync parameter
  oled.drawPixel([64, 32, 1], true)
  oled.drawPixel([64, 32, 1], false)
}

// Test: Draw line
function testDrawLine(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, { width: 128, height: 64 })

  oled.drawLine(0, 0, 127, 63, 1)
  oled.drawLine(0, 0, 127, 63, 0)
  oled.drawLine(0, 0, 127, 63, 1, true)
  oled.drawLine(0, 0, 127, 63, 1, false)
}

// Test: Fill rectangle
function testFillRect(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, { width: 128, height: 64 })

  oled.fillRect(10, 10, 50, 30, 1)
  oled.fillRect(10, 10, 50, 30, 0)
  oled.fillRect(10, 10, 50, 30, 1, true)
  oled.fillRect(10, 10, 50, 30, 1, false)
}

// Test: Write string
function testWriteString(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, { width: 128, height: 64 })

  // Mock font object matching oled-font-5x7 structure
  const font: Oled.Font = {
    width: 5,
    height: 7,
    lookup: ['A', 'B', 'C'],
    fontData: [0x00, 0x00, 0x00, 0x00, 0x00],
  }

  oled.setCursor(0, 0)
  oled.writeString(font, 1, 'Hello World!', 1, true)
  oled.writeString(font, 2, 'Big Text', 1, false)
  oled.writeString(font, 1, 'With sync', 1, true, true)
  oled.writeString(font, 1, 'Without sync', 1, true, false)
}

// Test: Draw RGBA image
function testDrawRGBAImage(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, { width: 128, height: 64 })

  // Mock RGBA image (compatible with pngjs)
  const image: Oled.RGBAImage = {
    width: 32,
    height: 32,
    data: Buffer.alloc(32 * 32 * 4),
  }

  oled.drawRGBAImage(image, 0, 0)
  oled.drawRGBAImage(image, 48, 16, true)
  oled.drawRGBAImage(image, 48, 16, false)
}

// Test: Draw bitmap
function testDrawBitmap(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, { width: 128, height: 64 })

  const pixels: number[] = new Array(128 * 64).fill(0)
  oled.drawBitmap(pixels)
  oled.drawBitmap(pixels, true)
  oled.drawBitmap(pixels, false)
}

// Test: Battery indicator
function testBattery(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, { width: 128, height: 64 })

  oled.battery(100, 0, 100) // Full battery
  oled.battery(100, 0, 75) // 3 bars
  oled.battery(100, 0, 50) // 2 bars
  oled.battery(100, 0, 25) // 1 bar
  oled.battery(100, 0, 5) // 0 bars
}

// Test: Bluetooth icon
function testBluetooth(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, { width: 128, height: 64 })

  oled.bluetooth(0, 0)
}

// Test: WiFi indicator
function testWifi(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, { width: 128, height: 64 })

  oled.wifi(110, 0, 100) // Full signal
  oled.wifi(110, 0, 75) // 3 bars
  oled.wifi(110, 0, 50) // 2 bars
  oled.wifi(110, 0, 25) // 1 bar
  oled.wifi(110, 0, 5) // 0 bars
}

// Test: Image method
function testImage(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, { width: 128, height: 64 })

  const font: Oled.Font = {
    width: 5,
    height: 7,
    lookup: ['A', 'B', 'C'],
    fontData: [0x00, 0x00, 0x00, 0x00, 0x00],
  }

  // Display static image
  oled.image(0, 0, 'logo.png', font, true, false, false, true)

  // Display animated image
  oled.image(0, 0, 'logo.png', font, true, false, true, true)

  // Reset animations
  oled.image(0, 0, '', font, true, true, false, false)
}

// Test: Complete workflow example
function testCompleteWorkflow(): void {
  const i2cBus = openSync(1)
  const oled = new Oled(i2cBus, {
    width: 128,
    height: 64,
    address: 0x3c,
    driver: 'SSD1306',
  })

  // Initialize display
  oled.clearDisplay(true)
  oled.turnOnDisplay()

  // Draw some content
  oled.fillRect(0, 0, oled.WIDTH, 10, 1, false)

  const font: Oled.Font = {
    width: 5,
    height: 7,
    lookup: ['H', 'e', 'l', 'o', ' ', 'W', 'r', 'd', '!'],
    fontData: new Array(45).fill(0),
  }

  oled.setCursor(2, 2)
  oled.writeString(font, 1, 'Hello World!', 0, false, false)

  // Draw battery and wifi indicators
  oled.battery(100, 0, 75)
  oled.wifi(80, 0, 80)
  oled.bluetooth(60, 0)

  // Update display
  oled.update()

  // Cleanup
  oled.turnOffDisplay()
}
