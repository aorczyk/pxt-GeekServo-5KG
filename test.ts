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
geekServo.geekServoSetMotorSpeed(geekServo.GVSPin.P8, -100)
geekServo.geekServoSetMotorSpeed(geekServo.GVSPin.P8, 0)
geekServo.geekServoSetMotorSpeed(geekServo.GVSPin.P8, 100)
// out-of-range values should be clamped, not throw
geekServo.geekServoSetMotorSpeed(geekServo.GVSPin.P12, -150)
geekServo.geekServoSetMotorSpeed(geekServo.GVSPin.P12, 150)

// Motor 5KG Mode: full reverse, stop, full forward
geekServo.geekServo5KgSetMotorSpeed(geekServo.GVSPin.P13, -100)
geekServo.geekServo5KgSetMotorSpeed(geekServo.GVSPin.P13, 0)
geekServo.geekServo5KgSetMotorSpeed(geekServo.GVSPin.P13, 100)
// out-of-range values should be clamped, not throw
geekServo.geekServo5KgSetMotorSpeed(geekServo.GVSPin.P14, -150)
geekServo.geekServo5KgSetMotorSpeed(geekServo.GVSPin.P14, 150)
