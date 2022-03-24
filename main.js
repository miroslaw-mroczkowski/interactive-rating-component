const submitBtn = document.querySelector('.submit-btn')
const ratingScore = document.querySelectorAll('.rating-input')
const modalBox = document.querySelector('.modal-rating-score')
const ratingContainer = document.querySelector('.rating-container')
const scoreParagraph = document.createElement('p')
const modalContainer = document.querySelector('.modal-container')
let scoreValue = ''

const score = () => {
	ratingScore.forEach(score => {
		score.addEventListener('click', e => {
			scoreValue = e.target.value
		})
	})
}

const addScore = e => {
	e.preventDefault()
	if (scoreValue === '') {
		alert('Choose your score!')
		return
	} else {
		scoreParagraph.textContent = `You selected ${scoreValue} out of ${ratingScore.length}`
		scoreParagraph.classList.add('modal-score-text')
		scoreParagraph.textContent = `You selected ${scoreValue} out of ${ratingScore.length}`
		modalBox.append(scoreParagraph)
		toggleModal()
	}
}

const toggleModal = () => {
	ratingContainer.style.display = 'none'
	modalContainer.style.display = 'flex'
}

score()
submitBtn.addEventListener('click', addScore)
