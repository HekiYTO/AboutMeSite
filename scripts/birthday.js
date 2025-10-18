document.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date('2008-10-08');
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    const birthdayThisYear = new Date(now.getFullYear(), startDate.getMonth(), startDate.getDate());
    if (now < birthdayThisYear) years--;

    const rusEl = document.querySelector('.rus');
    const engEl = document.querySelector('.eng');

    if (rusEl) rusEl.innerHTML = `Мне сейчас ${years} лет`;
    if (engEl) engEl.innerHTML = `I'm ${years} years old`;

    console.log('Birthday script is online');
});