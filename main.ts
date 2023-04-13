let x = 0
let y = 0
let 音量 = 0
basic.forever(function () {
    basic.pause(100)
    音量 = input.soundLevel()
    if (input.soundLevel() >= 80) {
        y = 4
        for (let y = 0; y <= 4; y++) {
            basic.pause(10)
            for (let x = 0; x <= 4; x++) {
                led.plot(4 - x, 4 - y)
            }
        }
        basic.pause(100)
        basic.clearScreen()
    } else if (input.soundLevel() < 80 && input.soundLevel() >= 60) {
        y = 3
        for (let y = 0; y <= 3; y++) {
            basic.pause(10)
            for (let x = 0; x <= 4; x++) {
                led.plot(4 - x, 4 - y)
            }
        }
        basic.pause(100)
        basic.clearScreen()
    } else if (input.soundLevel() < 60 && input.soundLevel() >= 40) {
        y = 2
        for (let y = 0; y <= 2; y++) {
            basic.pause(10)
            for (let x = 0; x <= 4; x++) {
                led.plot(4 - x, 4 - y)
            }
        }
        basic.pause(100)
        basic.clearScreen()
    } else if (input.soundLevel() < 40 && input.soundLevel() >= 20) {
        y = 1
        for (let y = 0; y <= 1; y++) {
            basic.pause(10)
            for (let x = 0; x <= 4; x++) {
                led.plot(4 - x, 4 - y)
            }
        }
        basic.pause(100)
        basic.clearScreen()
    } else {
        y = 0
        for (let y = 0; y <= 0; y++) {
            basic.pause(10)
            for (let x = 0; x <= 4; x++) {
                led.plot(4 - x, 4 - y)
            }
        }
        basic.pause(100)
        basic.clearScreen()
    }
})
