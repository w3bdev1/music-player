const audioEl = document.getElementById('audio')
const playBtn = document.getElementById('play')

playBtn.addEventListener('click', () => {
	if (audioEl.paused) {
		audioEl.play()
	} else {
		audioEl.pause()
	}
})
