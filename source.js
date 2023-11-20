function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBingoCard() {
    const bingoCard = document.getElementById("bingo-card");
    const phrases = [
      ">Ask a question 7 times[NEWLINE]>Still no answer",
      "Pirate Software Story",
      "Burrito Index",
      "DnD chest",
      "He who has no life",
      "Talks about his hair",
      "\"Now it's going to die\"",
      "Psychoholics",
      "Defcon Black Badge",
      "AI Thor Error",
      "Noods Folder",
      "Games, unlimited games, but no games"
      "Asmongold Clip",
      "Work on game",
      "(b)ADs",
      "Holding Ferret",
      "Heidi Klum",
      "\"Don't buy my game\"",
      "Life Story",
      "Shorts Strategy",
      "Subscriber Count",
      "\"No sevens in chat\"",
      "7",
      "Block Game",
      "Hotdog Clip",
      "\"I hacked powerplants\"",
      "\"DJ Clancy is a Chad\"",
      "Cursed Quest",
      "Thor Old",
      "Eggs Over MyHammy",
      "\"I'm not Markiplier\"",
      "Heartbound on Fridge",
      "You are Allowed to Make Games",
      "Music Stops for Some Serious Stuff",
      "Shay Appearance",
      "Blizzard Stories",
      "\"Cyber\"",
      "Make Box Move",
      "\"100%\"",
      "Work/Sleep Schedule",
      "Thor's out of touch",
      "Our Dad",
      "Chat is Goblins",
      "Interview Box",
      "Onion",
      "Pak Choy",
      "Game Jam",
      "Develop.Games",
      "Free Socks",
      "Buy the Heartbound Demo",
      "Don't Quit Your Day Job!",
      "Dad is the WOW Guy South Park",
      "Ferretts",
      "Eat My WHOLE ASS",
      "How to Start Hacking LEGALLY",
      "Rick Roll",
      "Cursed TTS Donation Message",
      "You interacted with my Shorts, You're stuck with me.",
      "Eagles Per Gun, Feet/Centipedes",
      "\"Deeply Hilarious\"",
    ];

    shuffleArray(phrases);

    let cellIndex = 0;
    for (let row = 0; row < 5; row++) {
        const tr = document.createElement('tr');

        for (let col = 0; col < 5; col++) {
            const td = document.createElement('td');
            td.textContent = phrases[cellIndex].replace("[NEWLINE]", '\n');
            tr.appendChild(td);
            cellIndex++;
        }

        bingoCard.appendChild(tr);
    }
}

createBingoCard();

const tdElements = document.querySelectorAll("td");

tdElements.forEach((td) => {
    let originalColor = getComputedStyle(td).backgroundColor;

    td.addEventListener("click", () => {
        if (getComputedStyle(td).backgroundColor === originalColor) {
            td.style.backgroundColor = "#8b0000"; // Dark Red
        } else {
            td.style.backgroundColor = originalColor;
        }
    });
});

function dsylexia() {
    var paragraphElement = document.querySelector('.dsylexicButton p');
    curFont = window.getComputedStyle(document.body).fontFamily;
    console.log(curFont)
    if (curFont != "\"Comic Sans MS\", \"Chalkboard SE\", \"Comic Neue\", sans-serif") {
        document.body.style.fontFamily = "\"Comic Sans MS\", \"Chalkboard SE\", \"Comic Neue\", sans-serif";
        paragraphElement.textContent = "I not read can";
    } else {
        document.body.style.fontFamily = 'OpenDyslexic';
        paragraphElement.textContent = "I read can";
    }
}
