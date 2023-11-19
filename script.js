let word_hint = [
        {"word": "sunflower", "hint": "A bright and colorful flower that follows the sun."},
        {"word": "ocean", "hint": "A large body of saltwater that covers much of the Earth's surface."},
        {"word": "mountain", "hint": "A large landform that rises prominently above its surroundings."},
        {"word": "butterfly", "hint": "A flying insect with brightly colored wings."},
        {"word": "oasis", "hint": "A fertile area in a desert with water and vegetation."},
        {"word": "puzzle", "hint": "A game, toy, or problem designed to test ingenuity or knowledge."},
        {"word": "adventure", "hint": "An exciting or unusual experience, often involving risk and danger."},
        {"word": "paradise", "hint": "An ideal or idyllic place or state of utter perfection and happiness."},
        {"word": "serendipity", "hint": "The occurrence and development of events by chance in a happy or beneficial way."},
        {"word": "harmony", "hint": "A pleasing arrangement or combination of different things."},
        {"word": "whimsical", "hint": "Playfully quaint or fanciful, especially in an appealing and amusing way."},
        {"word": "tranquility", "hint": "The quality or state of being tranquil; calm."},
        {"word": "candlelight", "hint": "The light produced by a candle."},
        {"word": "silhouette", "hint": "The dark shape and outline of someone or something visible in restricted light against a brighter background."},
        {"word": "effervescent", "hint": "Bubbly, lively, and enthusiastic."},
        {"word": "nostalgia", "hint": "A sentimental longing or affection for the past."},
        {"word": "whisper", "hint": "Speaking very softly using one's breath without one's vocal cords."},
        {"word": "sunset", "hint": "The daily disappearance of the sun below the horizon."},
        {"word": "laughter", "hint": "The action or sound of laughing."},
        {"word": "chocolate", "hint": "A sweet, usually brown, food preparation of Theobroma cacao seeds."},
        {"word": "garden", "hint": "A piece of ground, often near a house, used for growing flowers, fruit, or vegetables."},
        {"word": "umbrella", "hint": "A portable device designed to protect against rain or sunlight."},
        {"word": "cascade", "hint": "A small waterfall, typically one of several that fall in stages down a steep rocky slope."},
        {"word": "serenade", "hint": "A piece of music sung or played in the open air, typically by a man at night under the window of his lover."},
        {"word": "champion", "hint": "A person who has defeated or surpassed all rivals in a competition."},
        {"word": "breeze", "hint": "A gentle wind."},
        {"word": "dazzling", "hint": "Extremely bright, especially so as to blind the eyes temporarily."},
        {"word": "freedom", "hint": "The power or right to act, speak, or think as one wants."},
        {"word": "gratitude", "hint": "The quality of being thankful; readiness to show appreciation for and to return kindness."},
        {"word": "journey", "hint": "An act of traveling from one place to another."},
        {"word": "waterfall", "hint": "A natural flow of water over a vertical drop or cliff."},
        {"word": "firefly", "hint": "A nocturnal flying insect with bioluminescent light-producing organs."},
        {"word": "mystical", "hint": "Having a spiritual significance or symbolic meaning beyond the literal sense."},
        {"word": "avalanche", "hint": "A sudden and overwhelming occurrence of events, often used to describe a mass of snow, ice, and rocks falling rapidly down a mountainside."},
        {"word": "safari", "hint": "An expedition to observe or hunt animals in their natural habitat."},
        {"word": "jubilant", "hint": "Feeling or expressing great joy and triumph."},
        {"word": "whirlwind", "hint": "A column of air moving rapidly in a circular motion."},
        {"word": "ethereal", "hint": "Extremely delicate, light, and otherworldly."},
        {"word": "velvet", "hint": "A soft, closely woven fabric of silk, cotton, or nylon."},
        {"word": "echo", "hint": "A sound or series of sounds caused by the reflection of sound waves."},
        {"word": "serenity", "hint": "The state of being calm, peaceful, and untroubled."},
        {"word": "zenith", "hint": "The highest point reached by a celestial or other object."},
        {"word": "lullaby", "hint": "A quiet, gentle song sung to send a child to sleep."},
        {"word": "radiance", "hint": "The quality or state of being radiant; brightness."},
        {"word": "spectacle", "hint": "An eye-catching or dramatic display or event."},
        {"word": "vivid", "hint": "Producing powerful feelings or strong, clear images in the mind."},
        {"word": "enchantment", "hint": "A feeling of great pleasure; delight."},
        {"word": "mesmerize", "hint": "Hold the attention of someone to the exclusion of all else or so as to transfix them."},
        {"word": "azure", "hint": "Bright blue in color like a cloudless sky."},
        {"word": "glisten", "hint": "Shine with a sparkling light."},
        {"word": "whispering", "hint": "Speaking or moving softly with hushed sounds."},
        {"word": "moonlight", "hint": "The light from the moon."},
        {"word": "whirlpool", "hint": "A rapidly rotating mass of water."},
        {"word": "melody", "hint": "A sequence of single tones that is musically satisfying."},
        {"word": "dewdrop", "hint": "A drop of dew."},
        {"word": "zephyr", "hint": "A gentle, mild breeze."},
        {"word": "labyrinth", "hint": "A complicated and confusing arrangement of passages."},
        {"word": "cascade", "hint": "A small waterfall, typically one of several that fall in stages down a steep rocky slope."},
        {"word": "silhouette", "hint": "The dark shape and outline of someone or something visible against a brighter background."},
        {"word": "luminescent", "hint": "Emitting light not caused by heat."},
        {"word": "tranquil", "hint": "Free from disturbance; calm."},
        {"word": "sincere", "hint": "Free from pretense or deceit; truthful and straightforward."},
        {"word": "whispering", "hint": "Speaking very softly using one's breath without vocal cords."},
        {"word": "serene", "hint": "Calm, peaceful, and untroubled."},
        {"word": "enchanting", "hint": "Delightfully charming or attractive."},
        {"word": "lullaby", "hint": "A quiet, gentle song sung to send a child to sleep."},
        {"word": "glimmer", "hint": "A faint sign of a feeling or quality, especially a desirable one."},
        {"word": "ethereal", "hint": "Extremely delicate and light in a way that seems not to be of this world."},
        {"word": "captivating", "hint": "Capable of attracting and holding interest; charming."},
        {"word": "luminous", "hint": "Full of or shedding light; bright or shining, especially in the dark."},
        {"word": "resplendent", "hint": "Shining brilliantly; radiant."},
        {"word": "efflorescent", "hint": "Having a flowering or blooming appearance."},
        {"word": "blissful", "hint": "Extremely happy; full of joy."},
        {"word": "crystalline", "hint": "Having the structure and form of a crystal; transparent."},
        {"word": "soothing", "hint": "Having a calming, gently calming effect."},
        {"word": "symbiosis", "hint": "A mutually beneficial relationship between different people or groups."},
        {"word": "ephemeral", "hint": "Lasting for a very short time."},
        {"word": "lucid", "hint": "Expressed clearly; easy to understand."},
        {"word": "whimsy", "hint": "Playfully quaint or fanciful behavior."},
        {"word": "effulgent", "hint": "Shining brightly; radiant."},
        {"word": "imagine", "hint": "To form a mental image or concept."},
        {"word": "serenity", "hint": "The state of being calm, peaceful, and untroubled."},
        {"word": "mellifluous", "hint": "Sweet or musical; pleasant to hear."},
        {"word": "ephemeral", "hint": "Lasting for a very short time."},
        {"word": "verdant", "hint": "Green with grass or other rich vegetation."},
        {"word": "gossamer", "hint": "A fine, filmy substance consisting of cobwebs spun by small spiders."},
        {"word": "petrichor", "hint": "The pleasant, earthy scent that comes after a fresh rainfall."},
        // Add more words as needed
     
     
    
];

let point = 0;
let input_area = document.querySelector(".input-area");
let scoreRetrieve = document.querySelector(".popup");
let hint_area = document.querySelector(".hint-area");
let scoreCard = localStorage.getItem('scoreValue'); // Fix the typo here
let score = document.getElementsByClassName("score")[0];
if (scoreCard !== null) {
    point = parseInt(scoreCard);
    score.innerHTML = `Total Score: ${point}`
    scoreRetrieve.style.scale = "1";
    scoreRetrieve.textContent = "Your Previous score Retrieved from local storage";


    setTimeout(()=>{
        scoreRetrieve.style.scale = "0";
    },7000)
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setHintAndWord() {
    let len = word_hint.length;
    let randomNumber = getRandomNumber(0, len - 1);
    currentWord = word_hint[randomNumber].word;
    console.log(currentWord);
    hint_area.innerHTML = `<span style="color: red;"> Hint: </span>${word_hint[randomNumber].hint}`;
    hint_area.style.color = "green";

    while (currentWord.length > 12) {
        randomNumber = getRandomNumber(0, len - 1);
        currentWord = word_hint[randomNumber].word;
        hint_area.innerHTML = `<span style="color: red;"> Hint: </span>${word_hint[randomNumber].hint}`;
    }
}

function wordInput() {
    let randomWordPlace = [];
    for (let index = 0; index <= currentWord.length / 2; index++) {
        let number = getRandomNumber(0, currentWord.length - 1);
        randomWordPlace.push(number);
    }

    for (let i = 0; i < currentWord.length; i++) {
        let box = document.createElement("div");
        box.setAttribute("class", "input-box");

        let charInput = document.createElement("input");
        charInput.setAttribute("type", "text");
        charInput.setAttribute("maxlength", "1");
        charInput.setAttribute("class", "char");

        if (randomWordPlace.includes(i)) {
            charInput.value = currentWord[i];
            charInput.readOnly = true;
        }

        box.appendChild(charInput);
        input_area.appendChild(box);
    }
   
}





function handleCorrectInput() {
    let finalWord = "";
    let inputBoxes = document.querySelectorAll('.char');
   
    inputBoxes.forEach((ele) => {
        finalWord += ele.value;
    });

    if (finalWord === currentWord) {
        console.log("Correct!");
        point++;
        score.textContent = `Total solved: ${point}`;
        localStorage.setItem('scoreValue', point); // Fix the typo here

        input_area.innerHTML = "";
     
        
        let won1 = document.querySelector(".result");
        let ballon1 = document.querySelector('.ballon1');
        let ballon2 = document.querySelector('.ballon2');
        
        ballon1.style.animation = "ballonAnim 2s ease";
        ballon2.style.animation = "ballonAnim 2s ease";

        won1.style.scale = "1";
        ballon1.style.scale = "1";
        ballon2.style.scale = "1";
        document.getElementsByTagName("main")[0].style.filter = "blur(3px)";
        createConfetti();
    
    }
}

function handleInputNavigation(input, index, array) {
    input.addEventListener('input', function () {
        if (this.value.length === 1) {
            let nextIndex = index + 1;

            while (nextIndex < array.length && array[nextIndex].readOnly) {
                nextIndex++;
            }

            if (nextIndex < array.length) {
                array[nextIndex].focus();
            }
        }
    });

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Backspace' && this.value.length === 0) {
            setTimeout(() => {
                if (index > 0) {
                    array[index - 1].focus();
                }
            }, 50);
        }

        if (e.key === 'ArrowLeft') {
            if (index > 0) {
                array[index - 1].focus();
            }
        }

        if (e.key === 'ArrowRight') {
            array[index + 1]?.focus();
        }
    });
}

function generateKeyboard() {
    let keyboard = document.querySelector(".inputAplha");

    for (let i = 0; i < 26; i++) {
        let char = String.fromCharCode(97 + i);
        let keyboardDiv = document.createElement('div');


        if (i == 10 || i == 19) {
            keyboard.append(document.createElement("br"));
        }

        keyboardDiv.className = char;
        keyboardDiv.textContent = `${char}`;
        // keyboard.setAttribute = ("class", "keyboardElement")
        keyboard.appendChild(keyboardDiv);
    }
}
function connectKeyboardWithBoxes() {
    let keyboardChildren = document.querySelectorAll(".inputAplha div");
    let focusedInput = null;

    keyboardChildren.forEach((ele) => {
        ele.addEventListener("click", () => {
            if (focusedInput) {
                let clickedChar = ele.textContent;
                focusedInput.value = clickedChar;

                // Trigger the 'input' event to simulate user input
                let inputEvent = new Event('input', { bubbles: true });
                focusedInput.dispatchEvent(inputEvent);

                // Focus on the next input box
                let nextInput = focusedInput.nextElementSibling;
                if (nextInput) {
                    focusedInput = nextInput;
                    nextInput.focus();
                } else {
                    focusedInput = null; // Reset the focused input
                }
            }
        });
    });

    // Set initial focus
    // let firstInput = document.querySelector('.char');
    // if (firstInput) {
    //     focusedInput = firstInput;
    //     firstInput.focus();
    // }
}



function createConfetti() {
    const confettiContainer = document.getElementById("confetti-container");

    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random()}s`;

        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}



// Initial setup
setHintAndWord();
wordInput();
// generateKeyboard();
// connectKeyboardWithBoxes();

// Logic for checking correctness
let interval = setInterval(handleCorrectInput, 500);

// Event listeners for handling input navigation
let inputBoxes = document.querySelectorAll('.char');
inputBoxes.forEach(handleInputNavigation);


//game restart
let nextBtn = document.querySelector(".next-btn")
nextBtn.addEventListener("click", () =>{
    let won1 = document.querySelector(".result");
    let ballon1 = document.querySelector('.ballon1');
    let ballon2 = document.querySelector('.ballon2');
    
    ballon1.style.animation = "ballonAnim 2s ease";
    ballon2.style.animation = "ballonAnim 2s ease";

    won1.style.scale = "0";
    ballon1.style.scale = "0";
    ballon2.style.scale = "0";

    document.getElementsByTagName("main")[0].style.filter = "blur(0px)";
    setHintAndWord();
    wordInput();
    handleCorrectInput();
    let inputBoxes = document.querySelectorAll('.char');
    inputBoxes.forEach(handleInputNavigation);

    connectKeyboardWithBoxes();
})