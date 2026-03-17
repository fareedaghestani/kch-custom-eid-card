document.addEventListener("DOMContentLoaded", () => {

  const canvas = document.getElementById('eidCardCanvas');
  const ctx = canvas.getContext('2d');
  const nameInput = document.getElementById('nameInput');
  const generateBtn = document.getElementById('generateBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const backBtn = document.getElementById('backBtn');
  const inputPage = document.getElementById('inputPage');
  const cardPage = document.getElementById('cardPage');

  const cardImage = new Image();
  cardImage.src = 'Eid-Mubarak.png'; // make sure file name matches exactly

  function drawCard(name = '') {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(cardImage, 0, 0, canvas.width, canvas.height);

    if (name) {
      ctx.font = 'bold 42px "Tajawal", Arial, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
     // Use 'top' so we can control vertical offset
        ctx.textBaseline = 'top';

        // Move text slightly above the vertical center
        const textY = canvas.height / 2 - 60; // adjust 60 as needed

        ctx.fillText(name, canvas.width / 2, textY);
      canvas.classList.add('card-visible');
    }
  }

  cardImage.onload = () => drawCard();

  generateBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) {
      alert('Please enter your name!');
      return;
    }

    drawCard(name);
    inputPage.style.display = 'none';
    cardPage.style.display = 'block';
  });

  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'Eid-Mubarak.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });

  backBtn.addEventListener('click', () => {
    cardPage.style.display = 'none';
    inputPage.style.display = 'block';
    canvas.classList.remove('card-visible');
  });

});
