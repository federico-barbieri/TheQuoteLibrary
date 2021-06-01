//
//
// ALL AUTHORS
//
//
// HESSE
const hesse = document.querySelector('.hesse');

const hesseQuotes = document.querySelector('.hesse-quotes');

const pessoa = document.querySelector('.pessoa');

const cortazar = document.querySelector('.cortazar');

const bradbury = document.querySelector('.bradbury');

const borges = document.querySelector('.borges');

const dostoievski = document.querySelector('.dostoievski');

const tolstoi = document.querySelector('.tolstoi');

const navokob = document.querySelector('.navokob');

const orwell = document.querySelector('.orwell');

const benedetti = document.querySelector('.benedetti');

const unamuno = document.querySelector('.unamuno');

const wilde = document.querySelector('.wilde');

//
//

// BACK-TO-LIBRARY BUTTON

const backToLibraryBtn = document.querySelector('.back-to-library');

// WHEN HESSE IS CLICKED
//
hesse.addEventListener('click', () => {
    hesse.style.display = "none";
    pessoa.style.display = "none";
    cortazar.style.display = "none";
    bradbury.style.display = "none";
    borges.style.display = "none";
    dostoievski.style.display = "none";
    tolstoi.style.display = "none";
    navokob.style.display = "none";
    orwell.style.display = "none";
    benedetti.style.display = "none";
    unamuno.style.display = "none";
    wilde.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    hesseQuotes.style.display = "inline";
})

// WHEN BACK TO LIBRARY BUTTON IS PRESSED

backToLibraryBtn.addEventListener('click', () => {
  hesse.style.display = "inline";
  pessoa.style.display = "inline";
  cortazar.style.display = "inline";
  bradbury.style.display = "inline";
  borges.style.display = "inline";
  dostoievski.style.display = "inline";
  tolstoi.style.display = "inline";
  navokob.style.display = "inline";
  orwell.style.display = "inline";
  benedetti.style.display = "inline";
  unamuno.style.display = "inline";
  wilde.style.display = "inline";
  backToLibraryBtn.style.display = "none";
  hesseQuotes.style.display = "none";
})
