jarak = 0
basic.show_icon(IconNames.HEART)
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
Tinybit.RGB_Car_Program().clear()
Tinybit.RGB_Car_Program().show()

def on_forever():
    global jarak
    jarak = Tinybit.Ultrasonic_Car()
    if jarak < 5:
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_BACK, 100)
    elif jarak > 5 and jarak < 15:
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RUN, 100)
    else:
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_STOP, 0)
basic.forever(on_forever)

def on_forever2():
    global jarak
    jarak = Tinybit.Ultrasonic_Car()
    if jarak < 5:
        basic.show_arrow(ArrowNames.NORTH)
    elif jarak > 5 and jarak < 15:
        basic.show_arrow(ArrowNames.SOUTH)
    else:
        basic.clear_screen()
basic.forever(on_forever2)
