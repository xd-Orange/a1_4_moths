// The program makes the micro:bit person do 10 jumping jacks when the B button is pressed.
input.onButtonPressed(Button.A, function () {
    // repeat the jumping jack sequence 10 times
    for (let index = 0; index < 5; index++) {
        // first jumping jack position
        basic.showLeds(`
            . # # # .
            . # # # .
            . . # . .
            . # . # .
            . # . # .
            `)
        // second jumping jack position
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
