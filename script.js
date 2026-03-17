const canvas = document.getElementById('eidCardCanvas');
const ctx = canvas.getContext('2d');
const nameInput = document.getElementById('nameInput');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const backBtn = document.getElementById('backBtn');
const inputPage = document.getElementById('inputPage');
const cardPage = document.getElementById('cardPage');

const cardImage = new Image();
cardImage.src = 'Ramadan-Kareem.jpg';

function drawCard(name = '') {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(cardImage, 0, 0, canvas.width, canvas.height);

    if (name) {
        ctx.font = 'bold 42px "Tajawal", Arial, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';

        // ✅ Text ABOVE center
        const textY = canvas.height / 2;

        ctx.fillText(name, canvas.width / 2, textY);

        // Show canvas with fade-in
        canvas.classList.add('card-visible');
    }
}

cardImage.onload = () => drawCard();

generateBtn.onclick = () => {
    const name = nameInput.value.trim();
    if (!name) {
        alert('Please enter your name!');
        return;
    }
    drawCard(name);
    inputPage.style.display = 'none';
    cardPage.style.display = 'block';
};

downloadBtn.onclick = () => {
    const link = document.createElement('a');
    link.download = 'Ramadan-Kareem.jpg';
    link.href = canvas.toDataURL('image/jpeg');
    link.click();
};

backBtn.onclick = () => {
    cardPage.style.display = 'none';
    inputPage.style.display = 'block';
    canvas.classList.remove('card-visible');
};
