// Servo Mode: sweep across the full angle range
geekServo.setAngle(geekServo.GVSPin.P1, 0)
geekServo.setAngle(geekServo.GVSPin.P1, 90)
geekServo.setAngle(geekServo.GVSPin.P1, 180)
geekServo.setAngle(geekServo.GVSPin.P1, 270)
geekServo.setAngle(geekServo.GVSPin.P1, 360)
// out-of-range values should be clamped, not throw
geekServo.setAngle(geekServo.GVSPin.P2, -10)
geekServo.setAngle(geekServo.GVSPin.P2, 400)

// Motor Mode: full reverse, stop, full forward
geekServo.setMotorSpeed(geekServo.GVSPin.P8, -100)
geekServo.setMotorSpeed(geekServo.GVSPin.P8, 0)
geekServo.setMotorSpeed(geekServo.GVSPin.P8, 100)
// out-of-range values should be clamped, not throw
geekServo.setMotorSpeed(geekServo.GVSPin.P12, -150)
geekServo.setMotorSpeed(geekServo.GVSPin.P12, 150)

// Motor 5KG Mode: full reverse, stop, full forward
geekServo.set5KgMotorSpeed(geekServo.GVSPin.P13, -100)
geekServo.set5KgMotorSpeed(geekServo.GVSPin.P13, 0)
geekServo.set5KgMotorSpeed(geekServo.GVSPin.P13, 100)
// out-of-range values should be clamped, not throw
geekServo.set5KgMotorSpeed(geekServo.GVSPin.P14, -150)
geekServo.set5KgMotorSpeed(geekServo.GVSPin.P14, 150)
