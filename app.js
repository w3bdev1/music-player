const audioEl = document.getElementById('audio')
const playPauseBtn = document.getElementById('play-pause')
const forwardBtn = document.getElementById('forward')
const backwardBtn = document.getElementById('backward')
const playPauseImage = document.getElementById('play-pause__img')
const playerStateText = document.getElementById('player_state')
const seekSlider = document.getElementById('slider')

// Initial state
let isPlaying = false;

// Seek Setup
seekSlider.value = 0

audioEl.addEventListener('loadedmetadata', () => {
	seekSlider.max = audioEl.duration
})

audioEl.addEventListener('timeupdate', timeUpdateHandler)

seekSlider.addEventListener('change', () => {
	audioEl.currentTime = +seekSlider.value
	if (!isPlaying) {
		playHandler()
	}	
})

// Play / Pause
playPauseBtn.addEventListener('click', () => {
	if (!isPlaying) {
		playHandler()
	} else {
		pauseHandler()
	}
})

// Forward / Backward
forwardBtn.addEventListener('click', forwardHandler)
backwardBtn.addEventListener('click', backwardHandler)

// Event Handler
function playHandler() {
	isPlaying = true;
	playerStateText.innerText = 'Now Playing'
	playPauseImage.setAttribute('src', './icons/ic_pause.svg')
	audioEl.play();
}

function pauseHandler() {
	isPlaying = false;
	playerStateText.innerText = 'Paused'
	playPauseImage.setAttribute('src', './icons/ic_play.svg')
	audioEl.pause();
}

function forwardHandler() {
	audioEl.currentTime += 5;
	if (!isPlaying) {
		playHandler()
	}	
}

function backwardHandler() {
	audioEl.currentTime -= 5;
	if (!isPlaying) {
		playHandler()
	}	
}

function timeUpdateHandler() {
	seekSlider.value = audioEl.currentTime
	secondsToMS(audioEl.currentTime)

	if (navigator.userAgent.indexOf("Chrome") > -1) {
		const elapsedPercent = getElapsedTimePercent();
		seekSlider.style.setProperty('background', `linear-gradient(90deg, hsla(259, 71%, 49%, 1), hsla(245, 77%, 69%, 1) 0% ${elapsedPercent}%, hsla(248, 11%, 88%, 1) ${elapsedPercent}% 100%)`)
	}
}

// Utility Functions
function secondsToMS(secs) {
	const min = Math.floor(secs / 60);
	const sec = Math.floor(secs - min*60);

	console.log(`${min}:${sec}`)
}

function getElapsedTimePercent() {
	return audioEl.currentTime / audioEl.duration * 100
}


// TODO
//		JS change pseudoelement value
