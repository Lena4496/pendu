
let mot = ["ola","miche", "frite", "voiture", "brouette","chaton","bourge","bougie","noel","rocher","montagne","rodeo","quiche","pet","rat","pc","javsccript"]
let reponse = '';
let erreurMax = 6;
let erreurs = 0;
let devine = [];
let status = null;

function motAleatoire() {
  reponse = mot[Math.floor(Math.random() * mot.length)];
}

function genererBouton() {
  let boutonHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(lettre =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + lettre + `'
        onClick="handleGuess('` + lettre + `')"
      >
        ` + lettre + `
      </button>
    `).join('');

  document.getElementById('clavier').innerHTML = boutonHTML;
}

function handleGuess(lettreChoisie) {
  devine.indexOf(lettreChoisie) === -1 ? devine.push(lettreChoisie) : null;
  document.getElementById(lettreChoisie).setAttribute('disabled', true);

  if (reponse.indexOf(lettreChoisie) >= 0) {
    motDevine();
    checkSiGagne();
  } else if (reponse.indexOf(lettreChoisie) === -1) {
    erreurs++;
    majErreurs();
    checkSiPerdu();
    majImgPendu();
  }
}

function majImgPendu() {
  document.getElementById('hangmanPic').src = '' + erreurs + '.jpg';
}

function checkSiGagne() {
  if (status === reponse) {
    document.getElementById('motVu').innerHTML = 'La réponse est ' + reponse;
    document.getElementById('clavier').innerHTML = 'Champiooooon !!';
  }
}

function checkSiPerdu() {
  if (erreurs === erreurMax) {
    document.getElementById('motVu').innerHTML = 'La réponse était ' + reponse;
    document.getElementById('clavier').innerHTML = 'Tu as perdu, haha :)';
  }
}

function motDevine() {
  status = reponse.split('').map(lettre => (devine.indexOf(lettre) >= 0 ? lettre : " _ ")).join('');

  document.getElementById('motVu').innerHTML = status;
}

function majErreurs() {
  document.getElementById('erreurs').innerHTML = erreurs;
}

function reset() {
  erreurs = 0;
  devine = [];
  document.getElementById('hangmanPic').src = '0.jpg';

  motAleatoire();
  motDevine();
  majErreurs();
  genererBouton();
}

document.getElementById('erreurMax').innerHTML = erreurMax;

motAleatoire();
genererBouton();
motDevine();



















// function motAleatoire(){

//     reponse = mot[Math.floor(Math.random() * mot.length)];


// function genererBouton() {
//     let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
//         `
//           <button
//             class="btn btn-lg btn-primary m-2"
//             id='` + letter + `'
//             onClick="handleGuess('` + letter + `')"
//           >
//             ` + letter + `
//           </button>
//         `).join('');
    
//       document.getElementById('keyboard').innerHTML = buttonsHTML;
//     }

// function handleGuess(chosenLetter){
//     devine.indexOf(chosenLetter) === -1 ? devine.push(chosenLetter) : null;
//     document.getElementById(chosenLetter).setAttribute('disabled', true);


//     if (reponse.indexOf(chosenLetter) >= 0){
//         guessedWord();
//         checkIfGameWon();
//     } else if (reponse.indexOf(chosenLetter) === -1){
//         erreur++;
//         updateMistakes();
//         checkIfGameLost();
//         updateHangmanPic();
//       }
// }

// function updateHangmanPic() {
//     document.getElementById('hangmanPic').src = './images/' + erreur + '.jpg';
//   }

// function checkIfGameWon() {
//     if (status === reponse) {
//       document.getElementById('keyboard').innerHTML = 'Bravo!!!';
//     }
//   }

// function checkIfGameLost() {
//     if (erreur === maxWrong) {
//       document.getElementById('wordSpotlight').innerHTML = 'La réponse est ' + reponse;
//       document.getElementById('keyboard').innerHTML = 'Tu as perdu, haha!';
//     }
//   }

// function guessedWord(){
//     status = reponse.split("").map(letter => (devine.indexOf(letter) >= 0 ? letter :" _ ")).join('');

//     document.getElementById('wordSpotlight').innerHTML = status;

// }

// function updateMistakes(){
//     document.getElementById('mistakes').innerHTML = erreur;
//   }  


// function reset() {
//     erreur = 0;
//     devine = [];
//     document.getElementById('hangmanPic').src = './images/0.jpg';
  
//     motAleatoire();
//     guessedWord();
//     updateMistakes();
//     genererBouton();
//   }



// document.getElementById('maxWrong').innerHTML = maxWrong;



// motAleatoire();
// genererBouton();
// guessedWord();}


// function guessLetter(){
//     for (let i = 0; i < array.length; i++) {
//         if()
        
//     }


// }