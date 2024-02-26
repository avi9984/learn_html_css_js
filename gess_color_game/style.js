const cards = document.querySelectorAll('.card');
const p = document.querySelector('p');
let color = [];
const randomColor = [];
const random = Math.floor(Math.random() * 9)
// Generate random colors for each card dynamically
for (let i = 0; i < cards.length * 3; i++) {
    randomColor.push(Math.floor(Math.random() * 256));
}

// Apply random colors to each card
for (let i = 0; i < cards.length; i++) {
    const startIndex = i * 3;
    const endIndex = startIndex + 3;
    const cardColors = randomColor.slice(startIndex, endIndex);
    cards[i].style.backgroundColor = `rgb(${cardColors.join(',')})`;
    color.push(cards[i].style.backgroundColor)
}
// console.log(color);
p.textContent = color[random];

const checkColor = (cardIndex) => {
    // alert(cardIndex);
    if (color[cardIndex] == p.textContent) {
        alert("Correct Answer!!")
        window.location.reload();
    } else {
        alert("Wrong Answer!!")
    }
};
