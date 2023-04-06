music.onEvent(MusicEvent.MelodyNotePlayed, function () {
	
})
basic.forever(function () {
    if (input.compassHeading() >= 0 && input.compassHeading() < 90) {
        music.playMelody("D - D E F D - D ", 352)
        music.playMelody("D E F G F E F E ", 352)
        music.playMelody("C D - - - - - - ", 352)
        led.toggle(music.volume(), music.volume())
        basic.pause(100)
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
