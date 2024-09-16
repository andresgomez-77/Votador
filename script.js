let votes = [0, 0, 0];
let hasVoted = false;

const images = document.getElementsByClassName('image');
const modal = document.getElementById('modal');
const winnerText = document.getElementById('winner-text');
const closeModal = document.getElementById('close-modal');

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        if (!hasVoted) {
            votes[i]++;
            hasVoted = true;
            declareWinner();
        }
    });
}

function declareWinner() {
    let maxVotes = Math.max(...votes);
    let winnerIndex = votes.indexOf(maxVotes);

    for (let i = 0; i < images.length; i++) {
        images[i].style.border = 'none';
    }

    images[winnerIndex].style.border = '2px solid #008CBA';

    // Show modal
    modal.style.display = 'block';
    winnerText.textContent = `La foto ganadora es: Imagen ${winnerIndex + 1}`;
}

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});