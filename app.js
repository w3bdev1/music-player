const audioEl = document.getElementById('audio')
const playPauseBtn = document.getElementById('play-pause')
const forwardBtn = document.getElementById('forward')
const backwardBtn = document.getElementById('backward')
const playPauseImage = document.getElementById('play-pause__img')
const playerStateText = document.getElementById('player_state')
const seekSlider = document.getElementById('slider')
const playerCurrentTimeText = document.querySelector('.seek')

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
}

// Utility Functions
function secondsToMS(secs) {
	const min = Math.floor(secs / 60);
	const sec = Math.floor(secs - min*60);

	console.log(`${min}:${sec}`)
}


// TODO
//		JS change pseudoelement value
//		Style seek
