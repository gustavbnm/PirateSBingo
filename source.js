function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBingoCard() {
    const bingoCard = document.getElementById("bingo-card");
    const phrases = [
      "Pirate Software Story",
      "DnD chest",
      "He who has no life",
      "Talks about his hair",
      "Psychoholics",
      "Defcon Black Badge",
      "AI Thor Error",
      "Noods Folder",
      "Asmondgold Clip",
      "Work on game",
      "(b)ADs",
      "Holding Ferret",
      "Heidi Klum",
      "Don't buy my game",
      "Life Story",
      "Shorts Strategy",
      "Subscriber Count",
      "No sevens in chat",
      "Block Game",
      "Hotdog Clip",
      "I hacked powerplants",
      "DJ Clancy is a Chad",
      "Cursed Quest",
      "Thor Old",
      "Eggs Over MyHammy",
      "I'm not Markiplier",
      "Heartbound on Fridge",
      "Sound like Howard Stern",
      "Thor's out of touch",
      "Our Dad",
      "Chat is Goblins",
      "Switch Box",
      "Onion",
    ];

    shuffleArray(phrases);

    let cellIndex = 0;
    for (let row = 0; row < 5; row++) {
        const tr = document.createElement('tr');

        for (let col = 0; col < 5; col++) {
            const td = document.createElement('td');
            td.textContent = phrases[cellIndex];
            tr.appendChild(td);
            cellIndex++;
        }

        bingoCard.appendChild(tr);
    }
}

createBingoCard();


      const tdElements = document.querySelectorAll("td");

      tdElements.forEach((td) => {
        let originalColor = td.style.backgroundColor;

        td.addEventListener("click", () => {
          if (td.style.backgroundColor === originalColor) {
            td.style.backgroundColor = "#8b0000"; // Dark Red
          } else {
            td.style.backgroundColor = originalColor;
          }
        });
      });
