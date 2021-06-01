//
//
// ALL AUTHORS
//
//
// HESSE
const hesse = document.querySelector('.hesse');

const hesseQuotes = document.querySelector('.hesse-quotes');
//
//
// PESSOA
const pessoa = document.querySelector('.pessoa');

const pessoaQuotes = document.querySelector('.pessoa-quotes');
//
//
// CORTAZAR
const cortazar = document.querySelector('.cortazar');

const cortazarQuotes = document.querySelector('.cortazar-quotes');
//
//
// BRADBURY
const bradbury = document.querySelector('.bradbury');

const bradburyQuotes = document.querySelector('.bradbury-quotes');

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
//
// WHEN BACK TO LIBRARY BUTTON IS PRESSED
//
backToLibraryBtn.addEventListener('click', () => {
  hesse.style.display = "flex";
  pessoa.style.display = "flex";
  cortazar.style.display = "flex";
  bradbury.style.display = "flex";
  borges.style.display = "flex";
  dostoievski.style.display = "flex";
  tolstoi.style.display = "flex";
  navokob.style.display = "flex";
  orwell.style.display = "flex";
  benedetti.style.display = "flex";
  unamuno.style.display = "flex";
  wilde.style.display = "flex";
  backToLibraryBtn.style.display = "none";
  hesseQuotes.style.display = "none";
  pessoaQuotes.style.display = "none";
  cortazarQuotes.style.display = "none";
  bradburyQuotes.style.display = "none";
})
//
// WHEN PESSOA IS CLICKED
//
pessoa.addEventListener('click', () => {
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
    pessoaQuotes.style.display = "inline";
})
//
// WHEN CORTAZAR IS CLICKED
//
cortazar.addEventListener('click', () => {
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
    cortazarQuotes.style.display = "inline";
})
//
// WHEN BRADBURY IS CLICKED
//
bradbury.addEventListener('click', () => {
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
    bradburyQuotes.style.display = "inline";

})
