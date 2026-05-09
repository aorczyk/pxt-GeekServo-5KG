/**
 * Functions for GeekServo 5KG servo and motor control.
 * 
 * Servo Mode: PWM 500~2500μs, Center 1500μs, range 360°±10°
 * Motor Mode: Forward 3000~4000μs, Stop 4000μs, Reverse 4000~5000μs
 */
//% color=#1197c0 icon="\uf085" block="GeekServo 5KG" blockId="geekServo"
namespace geekServo {

    /**
     * GVS pin list available on micro:bit
     */
    export enum GVSPin {
        //% block="P1"
        P1 = AnalogPin.P1,
        //% block="P2"
        P2 = AnalogPin.P2,
        //% block="P8"
        P8 = AnalogPin.P8,
        //% block="P12"
        P12 = AnalogPin.P12,
        //% block="P13"
        P13 = AnalogPin.P13,
        //% block="P14"
        P14 = AnalogPin.P14,
        //% block="P15"
        P15 = AnalogPin.P15
    }

    /**
     * Set the angle of a GeekServo 5KG in Servo Mode.
     * Servo Mode PWM: 500~2500μs, Center 1500μs, range 360°±10°
     * @param pin GVS pin connected to the servo signal wire
     * @param angle Angle from 0 to 360 degrees
     */
    //% weight=100
    //% blockId=geekServoSetAngle block="Set GeekServo 5KG on pin %pin angle to %angle °"
    //% angle.min=0 angle.max=360
    //% angle.defl=180
    export function setAngle(pin: GVSPin, angle: number): void {
        // Servo Mode: 0° → 500μs, 360° → 2500μs
        angle = Math.clamp(0, 360, angle)
        let pulseUs = Math.map(angle, 0, 360, 500, 2500)
        pins.servoSetPulse(pin, pulseUs)
    }

    /**
     * Set the speed of a GeekServo 5KG in Motor Mode.
     * Motor Mode PWM: Forward 3000~4000μs, Stop 4000μs, Reverse 4000~5000μs
     * Connect the motor to a GVS pin, NOT to S0~S7 servo ports on WuKong.
     * @param pin GVS pin connected to the motor signal wire
     * @param speed Speed from -100% (full reverse) to 100% (full forward), 0 = stop
     */
    //% weight=90
    //% blockId=geekServoSetMotorSpeed block="Set GeekServo 5KG motor on pin %pin speed to %speed %"
    //% speed.min=-100 speed.max=100
    //% speed.defl=0
    export function setMotorSpeed(pin: GVSPin, speed: number): void {
        // Motor Mode: +100% → 3000μs (full forward), 0% → 4000μs (stop), -100% → 5000μs (full reverse)
        speed = Math.clamp(-100, 100, speed)
        let pulseUs = Math.map(speed, -100, 100, 5000, 3000)
        pins.servoSetPulse(pin, pulseUs)
    }
}
