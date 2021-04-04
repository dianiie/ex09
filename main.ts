for (let row = 0; row <= 4; row++) {
    for (let col = 0; col <= 4; col++) {
        led.plot(col, row)
        basic.pause(100)
        led.unplot(col, row)
    }
}
basic.forever(function () {
	
})
