const audioEl = document.getElementById('audio')
const playBtn = document.getElementById('play')
const seekSlider = document.getElementById('slider')

// Seek Setup
seekSlider.value = 0

audioEl.addEventListener('loadedmetadata', () => {
	seekSlider.max = audioEl.duration
})

audioEl.addEventListener('timeupdate', () => {
	seekSlider.value = audioEl.currentTime
})

seekSlider.addEventListener('change', () => {
	audioEl.currentTime = +seekSlider.value
	if (audioEl.paused) {
		audioEl.play()
	}	
})

// Play/Pause
playBtn.addEventListener('click', () => {
	if (audioEl.paused) {
		audioEl.play()
	} else {
		audioEl.pause()
	}
})

