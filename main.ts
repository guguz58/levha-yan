radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.StickFigure)
            basic.showString("DUR")
        }
    }
    if (receivedNumber == 2) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Butterfly)
            basic.showString("GEC")
        }
    }
})
radio.setGroup(1)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
