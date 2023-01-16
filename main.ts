let jarak = 0
basic.showLeds(`
    # # . # #
    . # . # .
    . # # # .
    # . # . #
    . # # # .
    `)
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
Tinybit.RGB_Car_Program().clear()
Tinybit.RGB_Car_Program().show()
basic.forever(function () {
    jarak = Tinybit.Ultrasonic_Car()
    if (jarak < 5) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
    } else if (jarak > 5 && jarak < 15) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    }
})
basic.forever(function () {
    jarak = Tinybit.Ultrasonic_Car()
    if (jarak < 5) {
        basic.showArrow(ArrowNames.North)
    } else if (jarak > 5 && jarak < 15) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.clearScreen()
    }
})
