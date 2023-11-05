let words = [
    "about", "above", "across", "act", "active", "activity", "add", "afraid", "after", "again",
    "age", "ago", "agree", "air", "all", "alone", "along", "already", "always", "am", "amount",
    "an", "and", "angry", "another", "answer", "any", "anyone", "anything", "anytime", "appear",
    "apple", "are", "area", "arm", "army", "around", "arrive", "art", "as", "ask", "at",
    "attack", "aunt", "autumn", "away",
    "baby", "back", "bad", "bag", "ball", "bank", "base", "basket", "bath", "be",
    "bean", "bear", "beautiful", "bed", "bedroom", "beer", "behave", "before", "begin", "behind", "bell",
    "below", "besides", "best", "better", "between", "big", "bird", "birth", "birthday", "bit", "bite",
    "black", "bleed", "block", "blood", "blow", "blue", "board", "boat", "body", "boil", "bone",
    "book", "border", "born", "borrow", "both", "bottle", "bottom", "bowl", "box", "boy", "branch",
    "brave", "bread", "break", "breakfast", "breathe", "bridge", "bright", "bring", "brother", "brown", "brush",
    "build", "burn", "business", "bus", "busy", "but", "buy", "by",
    "cake", "call", "can", "candle", "cap", "car", "card", "care", "careful", "careless",
    "carry", "case", "cat", "catch", "central", "century", "certain", "chair", "chance", "change", "chase",
    "cheap", "cheese", "chicken", "child", "children", "chocolate", "choice", "choose", "circle", "city", "class",
    "clever", "clean", "clear", "climb", "clock", "cloth", "clothes", "cloud", "cloudy", "close", "coffee",
    "coat", "coin", "cold", "collect", "colour", "comb", "comfortable", "common", "compare", "come", "complete",
    "computer", "condition", "continue", "control", "cook", "cool", "copper", "corn", "corner", "correct", "cost",
    "contain", "count", "country", "course", "cover", "crash", "cross", "cry", "cup", "cupboard", "cut",
    "dance", "dangerous", "dark", "daughter", "day", "dead", "decide", "decrease", "deep", "deer", "depend",
    "desk", "destroy", "develop", "die", "different", "difficult", "dinner", "direction", "dirty", "discover", "dish",
    "do", "dog", "door", "double", "down", "draw", "dream", "dress", "drink", "drive", "drop", "dry",
    "duck", "dust", "duty",
    "each", "ear", "early", "earn", "earth", "east", "easy", "eat", "education", "effect", "egg",
    "eight", "either", "electric", "elephant", "else", "empty", "end", "enemy", "enjoy", "enough", "enter",
    "equal", "entrance", "escape", "even", "evening", "event", "ever", "every", "everybody", "everyone", "exact",
    "examination", "example", "except", "excited", "exercise", "expect", "expensive", "explain", "extremely", "eye",
    "face", "fact", "fail", "fall", "false", "family", "famous", "far", "farm", "father", "fast",
    "fat", "fault", "fear", "feed", "feel", "female", "fever", "few", "fight", "fill", "film",
    "find", "fine", "finger", "finish", "fire", "first", "fish", "fit", "five", "fix", "flag",
    "flat", "float", "floor", "flour", "flower", "fly", "fold", "food", "fool", "foot", "football",
    "for", "force", "foreign", "forest", "forget", "forgive", "fork", "form", "fox", "four", "free",
    "freedom", "freeze", "fresh", "friend", "friendly", "from", "front", "fruit", "full", "fun", "funny",
    "furniture", "further", "future",
    "game", "garden", "gate", "general", "gentleman", "get", "gift", "give", "glad", "glass", "go",
    "goat", "god", "gold", "good", "goodbye", "grandfather", "grandmother", "grass", "grave", "great", "green",
    "gray", "ground", "group", "grow", "gun",
    "hair", "half", "hall", "hammer", "hand", "happen", "happy", "hard", "hat", "hate", "have",
    "he", "head", "healthy", "hear", "heavy", "heart", "heaven", "height", "hello", "help", "hen", "her",
    "here", "hers", "hide", "high", "hill", "him", "his", "hit", "hobby", "hold", "hole", "holiday",
    "home", "hope", "horse", "hospital", "hot", "hotel", "house", "how", "hundred", "hungry", "hour",
    "hurry", "husband", "hurt",
    "ice", "idea", "if", "important", "in", "increase", "inside", "into", "introduce", "invent", "iron",
    "invite", "is", "island", "it", "its",
    "jelly", "job", "join", "juice", "jump", "just",
    "keep", "key", "kill", "kind", "king", "kitchen", "knee", "knife", "knock", "know",
    "ladder", "lady", "lamp", "land", "large"
];



let getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let alphabets = () => {
    return Math.floor(Math.random() * (122-97+1)) + 97;
}

let input_field = document.querySelector(".input-field");
let hint = document.getElementsByClassName("non-title")[0];
let next = document.getElementsByClassName("next-game")[0];
let start = document.querySelector(".start-game");
let non_ava = document.querySelector(".non-available-word");
let word
start.addEventListener("click", () => {

    start.style.display = "none";
    input_field.innerHTML = ''; // Clear the input field
    hint.style.display = "block";

    const min = 0;
    const max = words.length - 1;
    let random_num = getRandomInt(min, max);
    word = words[random_num];
   while(word.length>6){
       random_num = getRandomInt(min, max);
       word = words[random_num];
   }

    // Create input fields for each character in the word
    for (let i = 0; i < word.length; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "text1");
        input.setAttribute("maxlength", "1");
        input_field.appendChild(input);

        // if (window.matchMedia("(max-width: 500px)").matches) {
        //     const text1Elements = document.querySelectorAll(".text1");
        //     text1Elements.forEach((element) => {
        //         // Apply specific styles for screens less than 500px
        //         element.style.fontSize = "21px";
        //         element.style.width = "30px";
        //         element.style.padding = "2px";
        //         element.style.border = "2px solid black";
        //         element.color = "purple"
        //     });
        // }



            if (i % 2 === 0) {
                input.value = word.charAt(i);
                input.readOnly = true;
                input.style.color = "red";
            } else {
                if (word.length <= 6) {
                    let unav = document.createElement("span");
                    unav.setAttribute("class", "unwanted");
                    unav.innerText = String.fromCharCode(alphabets()).toUpperCase();
                    non_ava.appendChild(unav);
                }


                let unav = document.createElement("span");
                unav.setAttribute("class", "unwanted");
                unav.innerText = word.charAt(i).toUpperCase();
                non_ava.appendChild(unav);

            }
        }

    });




setInterval(() => {
    let verify_character = document.querySelectorAll(".text1");
    let text_verify = "";
    verify_character.forEach((charac) => {
        text_verify += charac.value;
    });
    if (text_verify == word) {
        non_ava.style.transform = "scale(1)";
        non_ava.innerHTML = `<h1>${word}</h1>`;
        non_ava.style.textTransform = "uppercase";
        non_ava.style.color = "green";
        // non_ava.style.boxShadow = "2px 2px 43px black"
       
        non_ava.style.fontSize = "34px"
        // non_ava.style.padding = "10px"
        // non_ava.style.borderRadius = "23px"
        hint.style.display = "none";
    } else {
        console.log(false);
    }
}, 1000)


