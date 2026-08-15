/**
 * Functions for GeekServo servo and motor control.
 * 
 * Servo Mode: PWM 500~2500μs, Center 1500μs, range 360°±10°
 * Motor Mode: Forward 500~1500μs, Stop 1500μs, Reverse 1500~2500μs
 * Motor 5KG Mode: Forward 3000~4000μs, Stop 4000μs, Reverse 4000~5000μs
 */
//% color=#1197c0 icon="\uf085" block="GeekServo" blockId="geekServo"
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
     * Set the angle of a GeekServo in Servo Mode.
     * Servo Mode PWM: 500~2500μs, Center 1500μs, range 360°±10°
     * @param pin GVS pin connected to the servo signal wire
     * @param angle Angle from 0 to 360 degrees
     */
    //% weight=100
    //% blockId=geekServoSetAngle block="Set GeekServo on pin %pin angle to %angle °"
    //% angle.min=0 angle.max=360
    //% angle.defl=180
    export function setAngle(pin: GVSPin, angle: number): void {
        // Servo Mode: 0° → 500μs, 360° → 2500μs
        angle = Math.clamp(0, 360, angle)
        let pulseUs = Math.map(angle, 0, 360, 500, 2500)
        pins.servoSetPulse(pin, pulseUs)
    }

    /**
     * Set the speed of a GeekServo in Motor Mode.
     * Motor Mode PWM: Forward 500~1500μs, Stop 1500μs, Reverse 1500~2500μs
     * Connect the motor to a GVS pin, NOT to S0~S7 servo ports on WuKong.
     * @param pin GVS pin connected to the motor signal wire
     * @param speed Speed from -100% (full reverse) to 100% (full forward), 0 = stop
     */
    //% weight=90
    //% blockId=geekServoSet2KgMotorSpeed block="Set GeekServo 2KG motor on pin %pin speed to %speed\\%"
    //% speed.min=-100 speed.max=100
    //% speed.defl=0
    export function set2KgMotorSpeed(pin: GVSPin, speed: number): void {
        // Motor Mode: +100% → 500μs (full forward), 0% → 1500μs (stop), -100% → 2500μs (full reverse)
        speed = Math.clamp(-100, 100, speed)
        let pulseUs = Math.map(speed, -100, 100, 2500, 500)
        pins.servoSetPulse(pin, pulseUs)
    }

    /**
     * Set the speed of a GeekServo 5KG in Motor Mode.
     * Motor Mode PWM: Forward 3000~4000μs, Stop 4000μs, Reverse 4000~5000μs
     * Connect the motor to a GVS pin, NOT to S0~S7 servo ports on WuKong.
     * @param pin GVS pin connected to the motor signal wire
     * @param speed Speed from -100% (full reverse) to 100% (full forward), 0 = stop
     */
    //% weight=80
    //% blockId=geekServoSet5KgMotorSpeed block="Set GeekServo 5KG motor on pin %pin speed to %speed\\%"
    //% speed.min=-100 speed.max=100
    //% speed.defl=0
    export function set5KgMotorSpeed(pin: GVSPin, speed: number): void {
        // Motor Mode: +100% → 3000μs (full forward), 0% → 4000μs (stop), -100% → 5000μs (full reverse)
        speed = Math.clamp(-100, 100, speed)
        let pulseUs = Math.map(speed, -100, 100, 5000, 3000)
        pins.servoSetPulse(pin, pulseUs)
    }
}
