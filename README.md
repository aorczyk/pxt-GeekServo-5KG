# pxt-geekservo

MakeCode extension for micro:bit to control the **GeekServo 5KG** in Servo Mode and Motor Mode.

## Features

- Control servo position across a full **360° range**
- Drive the servo as a **continuous rotation motor** with variable speed
- Supports GVS pins: P1, P2, P8, P12–P15

## Blocks

### Set angle (Servo Mode)

Sets the angular position of the GeekServo 5KG. Range: **0° to 360°**.

PWM range: 500–2500 µs, Center: 1500 µs = 180°

```blocks
geekServo.setAngle(geekServo.GVSPin.P1, 180)
```

### Set motor speed (Motor Mode)

Controls the GeekServo as a continuous rotation motor. Speed: **-100% to 100%**, where 0 = stop.

PWM range: 500–2500 µs, Stop: 1500 µs

```blocks
geekServo.setMotorSpeed(geekServo.GVSPin.P1, 50)
```

### Set 5KG motor speed (Motor 5KG Mode)

Controls the GeekServo 5KG as a continuous rotation motor. Speed: **-100% to 100%**, where 0 = stop.

PWM range: 3000–5000 µs, Stop: 4000 µs

```blocks
geekServo.set5KgMotorSpeed(geekServo.GVSPin.P1, 50)
```

> **Note:** Connect the signal wire to a GVS pin (P1, P2, P8, P12–P15), **not** to S0–S7 servo ports on the WuKong board.

## PWM Reference

| Mode | Min | Center / Stop | Max |
|------|-----|---------------|-----|
| Servo (angle) | 500 µs (0°) | 1500 µs (180°) | 2500 µs (360°) |
| Motor (speed) | 500 µs (+100%) | 1500 µs (stop) | 2500 µs (−100%) |
| Motor 5KG (speed) | 3000 µs (+100%) | 4000 µs (stop) | 5000 µs (−100%) |

## Example

```blocks
// Rotate servo to 90 degrees on pin P1
geekServo.setAngle(geekServo.GVSPin.P1, 90)

// Drive motor forward at 75% speed on pin P2
geekServo.setMotorSpeed(geekServo.GVSPin.P2, 75)
```

## Adding to MakeCode

Open [https://makecode.microbit.org/](https://makecode.microbit.org/), go to **Extensions**, and search for `pxt-geekservo` or paste the GitHub repository URL.

## License

MIT

## Supported targets

- for PXT/microbit
