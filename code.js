
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function cambiaContenutoH1() {
    let shopName = document.getElementById('name');
    shopName.innerText = 'EGSAY PRIVE';
  }

cambiaContenutoH1();

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function cambiaColoreSfondo() {
    document.body.style.backgroundColor = 'lightblue';
  }
  
  cambiaColoreSfondo();


//   ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
function cambiaIndirizzo() {
    let indirizzo = document.getElementById('andress');
    indirizzo.innerText = 'Viale Rapisarda 142';
  }

  cambiaIndirizzo();


  // ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function aggiungiClasseLinkAmazon() {
    let links = document.querySelectorAll('a');
    links.forEach(function(link) {
      link.classList.add('amazon-link');
    });
  }
  
  aggiungiClasseLinkAmazon();

  // ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
  function toggleVisibility(element) {
    element.classList.toggle("hidden");
  }

  toggleVisibility();

  // ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
  function changeColor(element) {
    let colors = ["red", "blue", "green"]; // Array di colori disponibili
  
    // Genera un numero casuale tra 0 e la lunghezza dell'array
    let randomIndex = Math.floor(Math.random() * colors.length);
  
    // Ottiene il colore casuale dall'array
    let randomColor = colors[randomIndex];
  
    // Modifica il colore del prezzo
    element.style.color = randomColor;
  }
  
  changeColor();