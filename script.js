//declare global variables at top, define in functions
var userName;
var userColor;

var floor1A = ["As you search the first floor of the tower, you can't seem to find the way to the next floor. As you search, you notice an old scroll laying on a ledge near the barren window, illuminated by the moonlight. Two words have been scratched out, but you believe you can decipher it."]

var floor1B = ["(It turns out that Tiberius was a unicorn puppy--much smaller than a horse.)","You go through the door at the top of the stairs, and enter what looks like dining room. The smell of beef stew filters through the air, but there is no stew in sight. You hear a voice. \" Which has the longest neck? It was the satchimo, no, it was the ostrich... which one was it again? Oh, but it <i>has</i> to be the longest neck... the potion will be ruined...\"", "You see a lonely note on the dining table. It is stained by what appears to be gravy."]

var floor2A = ["You jump in surprise and whirl around. Nobody's there, but the door you entered is gone. In its place is another stone staircase extending up, leading up into the darkness.", "You ascend to the next floor."]

var floor2B = ["The potions lab is empty, but it's clear that someone was here not long ago. The potions in the flasks are still fizzy, with bubbles threatening to froth over.", "A hastily scribbled recipe lays abandoned next to the cauldron."]

var floor3A = ["You cautiously step through the door, and creep up the stairs. As you do so, you hear a shriek to your right.", "When you turn, you see a old man cowering pitifully in the corner. He braces himself against a balcony, which juts out from the rest of the third floor.", "The wind whips across the balcony, blowing his long beard into his face. The old man splutters incoherently as his hands scrabble, pushing himself further into the corner.", "\"I didn't do it!\" he squeals. \"I didn't cast the spell! I didn't let the lion out!\""]

var floor3B = ["\"You couldn't have been reading about Satchimos; the only book on that topic was destroyed years ago! What were you really doing?\"", "The old man whimpers. \"Alright, alright, I'll tell you! I wasn't reading about Quippers and Satchimos. I was reading about the Draconian Astroprediction Algorithm when the lion got out!\""]

var credits = ["College Junior majoring in software dev and Digital Media  and about learning new things in code. Love developing programs and designing websites. In the future I hope to program video games.", "First-year CS major at Georgia Tech interested in applications of CS in film and video game industries. After graduation, I intend to work in video game or animation software development. My hobbies include digital art/animation and video editing, and I want to combine those interests with computer science to contribute to the creation of the movies and games I enjoy!", "After graduating from Dartmouth College and teaching in China for 3 years, I am now finishing a Postbaccalaureate in Computer Science at Tufts University, which has given me a great foundation in software programming, web development, group programming and project management. I am excited to go into a career in developing software solutions for education, language, accessibility, and travel. Fun fact: in addition to CS languages C, C++, JavaScript, and HTML/CSS, I speak four foreign languages!", "Kind, curious, and self-directed software engineering intern seeking to apply my experience with software quality assurance testing, hardware/software troubleshooting and testing, software development, embedded systems, low-level programming, grit, resilience, interpersonal skills, and organizational skills in a gender-inclusive software engineering career. Has 9 months of experience automating IT tasks using Python/batch scripts and modifying an Oracle SQL database. I enjoy learning, reading, and having deep, esoteric conversations.", "I'm a current high school senior, expecting to major in Computer Science with a focus in machine learning and natural language processing. I have experience with Python, HTML&CSS and JavaScript, Java, and C++. My biggest project so far is the Nursing Home Mask Initiative, which I founded in the early months of the pandemic as a creative solution to connect crafters making masks with nursing homes in need. I recruited and worked with a team of other high school students to develop the project website and database, and to coordinate publicity for our initiative. Outside of CS, I enjoy reading about history and playing video games.", "I'm a current sophomore at New York University, studying Computer Science, Finance, and Statistics, and I have experience with Python, Java, HTML,CSS, and JavaScript. My hobbies include drawing, playing tennis, and baking."];

function setUsername() {
  buttonDisappear();
  userName = '';

  while (userName == '') {
    userName = prompt("please enter your name:");
    if (userName == '') {
      window.alert("Invalid input, please try again");
    }
  }

  //Print out welcome
  document.getElementById("messageBoxFloor").innerHTML = "<bold>Boolean Wizard: </bold>" + "\"Hello, " + userName + "! I am the Boolean Wizard. Climb to the top floor of the tower!";

  document.getElementById("next-option").innerHTML = "<h3 id=\"button-label\" style=\"background-color:#FFFFFF;opacity:0.5;max-width:300px;\">Where next?</h3> <button onclick=\"location.href= '/Floors/floor1A.html';\">Start Adventure</button> <button onclick=\"location.href='/index.html';\" value=\"Home\">Home</button>";
}

function getUsername() {
  return userName;
}

function checkDropdown(correctFirst, correctSecond, path) {

  first = document.getElementById("first");
  selectedFirst = first.options[first.selectedIndex].index;

  second = document.getElementById("second");
  selectedSecond = second.options[second.selectedIndex].index;

  if ( (selectedFirst != correctFirst) || (selectedSecond != correctSecond) ) {
    location.href = '/Floors/wrongAnswer.html';
  }
  else {
    location.href = path;
  }
}

function buttonDisappear(){
  var x = document.getElementById("setName");
  x.style.display = "none";
}

function nextText(floor){
  if (floor.length > 0) {
    document.getElementById("messageBoxFloor").innerHTML = floor[0];
    floor.splice(0,1);
  }
  else {
    var x = document.getElementById("continue");
    var y = document.getElementById("messageBoxFloor");
    var z = document.getElementById("questionDiv");
    x.style.visibility = "hidden";
    y.style.visibility = "hidden";
    z.style.visibility = "visible";
  }
}

function showHint(){
  var hint = document.getElementById("hintDiv");
  hint.style.display = "block";
}

function showBio(i) {
    document.getElementById("showBoxText").innerHTML = credits[i];
}
