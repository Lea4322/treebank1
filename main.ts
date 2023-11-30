let strip: neopixel.Strip = null
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
})
input.onGesture(Gesture.Shake, function () {
    if (0 > pins.digitalReadPin(DigitalPin.P3)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . # # .
            # # # # #
            `)
        basic.pause(100)
    } else if (0 == pins.digitalReadPin(DigitalPin.P3)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # . #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
    } else {
        basic.showLeds(`
            . . . . .
            # . # # .
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
    }
})
function two () {
    strip.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(3, 3, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(3, 2, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(1, 2, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(1, 1, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(3, 0, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.White))
    strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.White))
}
function rotate () {
    for (let index = 0; index <= 4; index++) {
    	
    }
}
basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() < 100) {
        strip.showRainbow(1, 360)
        strip.show()
    }
})
