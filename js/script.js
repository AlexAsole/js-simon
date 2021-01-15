function randomStuff(n, m){ // random number generator
  var pcNumber = Math.floor(Math.random() * (m + 1 - n) + n);
  return pcNumber;
}
function check(user, n, m) { // check input valido
  if(isNaN(user) === true){
    return false
  }
  if(user < n || user > m){
    return false
  }
  return true
}

var btn = document.getElementsByTagName('button')[0];
var pcArray;
var userArray;
var min = 1;
var max = 10;
var long = 5;
var userNumber;
var x;

btn.addEventListener('click',function(){
  // Un alert espone 5 numeri casuali diversi.
  pcArray = [];
  userArray = [];
  while (pcArray.length < long) {
    number = randomStuff(min, max);
    if (pcArray.indexOf(number) === -1){
      pcArray.push(number);
    }
  }
  alert(pcArray);
  // Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
  setTimeout(function(){
    x = 0;
    while (x < pcArray.length) {
      userNumber = parseInt(prompt('Inserisci numero da ' + min + ' a ' + max + '!' ));
      if (check(userNumber, min, max) === true){
        if(userArray.indexOf(userNumber) === -1){ // se non è presente nell'array utente va avanti
          if (pcArray.indexOf(userNumber) !== -1){ // se presente nell'array pc va avanti, salvando il numero
            userArray.push(userNumber);
            x++;
          } else { // se non presente nell'array pc va avanti, senza salvare il numero
            x++;
          }
        } else {
          alert('Hai già inserito questo numero! Riprova!');
        }
      } else {
        alert('Input non valido! Riprova!');
      }
    }
    // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
    alert('Hai indovinato: ' + userArray.length + ' numeri!');
    alert('I numeri generati erano: ' + pcArray);
    alert('I numeri indovinati sono: ' + userArray);
  }, 3000);

})
