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
//
//
// BORGES
const borges = document.querySelector('.borges');

const borgesQuotes = document.querySelector('.borges-quotes');
//
//
// DOSTOIEVSKI
const dostoievski = document.querySelector('.dostoievski');

const dostoievskiQuotes = document.querySelector('.dostoievski-quotes');
//
//
// TOLSTOI
const tolstoi = document.querySelector('.tolstoi');

const tolstoiQuotes = document.querySelector('.tolstoi-quotes');
//
//
// NAVOKOB
const navokob = document.querySelector('.navokob');

const navokobQuotes = document.querySelector('.navokob-quotes');
//
//
// ORWELL
const orwell = document.querySelector('.orwell');

const orwellQuotes = document.querySelector('.orwell-quotes');
//
//
// BENEDETTI
const benedetti = document.querySelector('.benedetti');

const benedettiQuotes = document.querySelector('.benedetti-quotes');
//
//
// UNAMUNO
const unamuno = document.querySelector('.unamuno');

const unamunoQuotes = document.querySelector('.unamuno-quotes');
//
//
// WILDE
const wilde = document.querySelector('.wilde');

const wildeQuotes = document.querySelector('.wilde-quotes');
//
//
// BUKOWSKI
const bukowski = document.querySelector('.bukowski');

const bukowskiQuotes = document.querySelector('.bukowski-quotes');
//
//
// THOMPSON
const thompson = document.querySelector('.thompson');

const thompsonQuotes = document.querySelector('.thompson-quotes');
//
//
// ALIGHIERI
const alighieri = document.querySelector('.alighieri');

const alighieriQuotes = document.querySelector('.alighieri-quotes');
//
//
// GARCIA MARQUEZ
const garciaMarquez = document.querySelector('.garcia-marquez');

const garciaMarquezQuotes = document.querySelector('.garcia-marquez-quotes');
//
//
// DESPENTES
const despentes = document.querySelector('.despentes');

const despentesQuotes = document.querySelector('.despentes-quotes');
//
//
// MURAKAMI
const murakami = document.querySelector('.murakami');

const murakamiQuotes = document.querySelector('.murakami-quotes');
//
//
// GOGOL
const gogol = document.querySelector('.gogol');

const gogolQuotes = document.querySelector('.gogol-quotes');
//
//
// KAFKA
const kafka = document.querySelector('.kafka');

const kafkaQuotes = document.querySelector('.kafka-quotes');
//
//
// KIERKEGAARD
const kierkegaard = document.querySelector('.kierkegaard');

const kierkegaardQuotes = document.querySelector('.kierkegaard-quotes');
//
//
//
// JUNG
const jung = document.querySelector('.jung');

const jungQuotes = document.querySelector('.jung-quotes');
//
//
// TWAIN
const twain = document.querySelector('.twain');

const twainQuotes = document.querySelector('.twain-quotes');
//
//
// BURROUGHS
const burroughs = document.querySelector('.burroughs');

const burroughsQuotes = document.querySelector('.burroughs-quotes');
//
//
// PROUST
const proust = document.querySelector('.proust');

const proustQuotes = document.querySelector('.proust-quotes');
//
//
// SARTRE
const sartre = document.querySelector('.sartre');

const sartreQuotes = document.querySelector('.sartre-quotes');
//
//
// POE
const poe = document.querySelector('.poe');

const poeQuotes = document.querySelector('.poe-quotes');
//
//
// WOOLF
const woolf = document.querySelector('.woolf');

const woolfQuotes = document.querySelector('.woolf-quotes');
//
//
// AUSTEN
const austen = document.querySelector('.austen');

const austenQuotes = document.querySelector('.austen-quotes');
//
//
// DICKINSON
const dickinson = document.querySelector('.dickinson');

const dickinsonQuotes = document.querySelector('.dickinson-quotes');
//
//
// BRONTE
const bronte = document.querySelector('.bronte');

const bronteQuotes = document.querySelector('.bronte-quotes');
//
//
//
// PLATH
const plath = document.querySelector('.plath');

const plathQuotes = document.querySelector('.plath-quotes');
//
//
// CHRISTIE
const christie = document.querySelector('.christie');

const christieQuotes = document.querySelector('.christie-quotes');
//
//
//
// LEE
const lee = document.querySelector('.lee');

const leeQuotes = document.querySelector('.lee-quotes');
//
//
//
// SHELLEY
const shelley = document.querySelector('.shelley');

const shelleyQuotes = document.querySelector('.shelley-quotes');
//
//
// ASIMOV
const asimov = document.querySelector('.asimov');

const asimovQuotes = document.querySelector('.asimov-quotes');

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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
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
  bukowski.style.display = "flex";
  thompson.style.display = "flex";
  alighieri.style.display = "flex";
  garciaMarquez.style.display = "flex";
  despentes.style.display = "flex";
  murakami.style.display = "flex";
  gogol.style.display = "flex";
  kafka.style.display = "flex";
  kierkegaard.style.display = "flex";
  jung.style.display = "flex";
  twain.style.display = "flex";
  burroughs.style.display = "flex";
  proust.style.display = "flex";
  sartre.style.display = "flex";
  poe.style.display = "flex";
  woolf.style.display = "flex";
  austen.style.display = "flex";
  dickinson.style.display = "flex";
  bronte.style.display = "flex";
  plath.style.display = "flex";
  christie.style.display = "flex";
  lee.style.display = "flex";
  shelley.style.display = "flex";
  asimov.style.display = "flex";
  backToLibraryBtn.style.display = "none";
  hesseQuotes.style.display = "none";
  pessoaQuotes.style.display = "none";
  cortazarQuotes.style.display = "none";
  bradburyQuotes.style.display = "none";
  borgesQuotes.style.display = "none";
  dostoievskiQuotes.style.display = "none";
  tolstoiQuotes.style.display = "none";
  navokobQuotes.style.display = "none";
  orwellQuotes.style.display = "none";
  benedettiQuotes.style.display = "none";
  unamunoQuotes.style.display = "none";
  wildeQuotes.style.display = "none";
  bukowskiQuotes.style.display = "none";
  thompsonQuotes.style.display = "none";
  alighieriQuotes.style.display = "none";
  garciaMarquezQuotes.style.display = "none";
  despentesQuotes.style.display = "none";
  murakamiQuotes.style.display = "none";
  gogolQuotes.style.display = "none";
  kafkaQuotes.style.display = "none";
  kierkegaardQuotes.style.display = "none";
  jungQuotes.style.display = "none";
  twainQuotes.style.display = "none";
  burroughsQuotes.style.display = "none";
  proustQuotes.style.display = "none";
  sartreQuotes.style.display = "none";
  poeQuotes.style.display = "none";
  woolfQuotes.style.display = "none";
  austenQuotes.style.display = "none";
  dickinsonQuotes.style.display = "none";
  bronteQuotes.style.display = "none";
  plathQuotes.style.display = "none";
  christieQuotes.style.display = "none";
  leeQuotes.style.display = "none";
  shelleyQuotes.style.display = "none";
  asimovQuotes.style.display = "none";

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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    bradburyQuotes.style.display = "inline";

})

// WHEN BORGES IS CLICKED
//
borges.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    borgesQuotes.style.display = "inline";

})

// WHEN DOSTOIEVSKI IS CLICKED
//
dostoievski.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    dostoievskiQuotes.style.display = "inline";

})

// WHEN TOLSTOI IS CLICKED
//
tolstoi.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    tolstoiQuotes.style.display = "inline";

})

// WHEN NAVOKOB IS CLICKED
//
navokob.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    navokobQuotes.style.display = "inline";

})

// WHEN ORWELL IS CLICKED
//
orwell.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    orwellQuotes.style.display = "inline";

})

// WHEN BENEDETTI IS CLICKED
//
benedetti.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    benedettiQuotes.style.display = "inline";

})

// WHEN UNAMUNO IS CLICKED
//
unamuno.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    unamunoQuotes.style.display = "inline";

})

// WHEN WILDE IS CLICKED
//
wilde.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    wildeQuotes.style.display = "inline";

})

// WHEN BUKOWSKI IS CLICKED
//
bukowski.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    bukowskiQuotes.style.display = "inline";
})

// WHEN THOMPSON IS CLICKED
//
thompson.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    thompsonQuotes.style.display = "inline";
})

// WHEN ALIGHIERI IS CLICKED
//
alighieri.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    alighieriQuotes.style.display = "inline";
})

// WHEN GARCIA MARQUEZ IS CLICKED
//
garciaMarquez.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    garciaMarquezQuotes.style.display = "inline";
})

// WHEN DESPENTES IS CLICKED
//
despentes.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    despentesQuotes.style.display = "inline";
})

// WHEN MURAKAMI IS CLICKED
//
murakami.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    murakamiQuotes.style.display = "inline";
})

// WHEN GOGOL IS CLICKED
//
gogol.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    gogolQuotes.style.display = "inline";
})

// WHEN KAFKA IS CLICKED
//
kafka.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    kafkaQuotes.style.display = "inline";
})

// WHEN KIERKEGAARD IS CLICKED
//
kierkegaard.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    kierkegaardQuotes.style.display = "inline";
})

// WHEN JUNG IS CLICKED
//
jung.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    jungQuotes.style.display = "inline";
})

// WHEN TWAIN IS CLICKED
//
twain.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    twainQuotes.style.display = "inline";
})

// WHEN BURROUGHS IS CLICKED
//
burroughs.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    burroughsQuotes.style.display = "inline";
})

// WHEN PROUST IS CLICKED
//
proust.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    proustQuotes.style.display = "inline";
})

// WHEN SARTRE IS CLICKED
//
sartre.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    sartreQuotes.style.display = "inline";
})

// WHEN POE IS CLICKED
//
poe.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    poeQuotes.style.display = "inline";
})

// WHEN WOOLF IS CLICKED
//
woolf.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    woolfQuotes.style.display = "inline";
})

// WHEN AUSTEN IS CLICKED
//
austen.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    austenQuotes.style.display = "inline";
})

// WHEN DICKINSON IS CLICKED
//
dickinson.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    dickinsonQuotes.style.display = "inline";
})

// WHEN BRONTE IS CLICKED
//
bronte.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    bronteQuotes.style.display = "inline";
})

// WHEN PLATH IS CLICKED
//
plath.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    plathQuotes.style.display = "inline";
})

// WHEN CHRISTIE IS CLICKED
//
christie.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    christieQuotes.style.display = "inline";
})

// WHEN LEE IS CLICKED
//
lee.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    leeQuotes.style.display = "inline";
})

// WHEN SHELLEY IS CLICKED
//
shelley.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    shelleyQuotes.style.display = "inline";
})

// WHEN ASIMOV IS CLICKED
//
asimov.addEventListener('click', () => {
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
    bukowski.style.display = "none";
    thompson.style.display = "none";
    alighieri.style.display = "none";
    garciaMarquez.style.display = "none";
    despentes.style.display = "none";
    murakami.style.display = "none";
    gogol.style.display = "none";
    kafka.style.display = "none";
    kierkegaard.style.display = "none";
    jung.style.display = "none";
    twain.style.display = "none";
    burroughs.style.display = "none";
    proust.style.display = "none";
    sartre.style.display = "none";
    poe.style.display = "none";
    woolf.style.display = "none";
    austen.style.display = "none";
    dickinson.style.display = "none";
    bronte.style.display = "none";
    plath.style.display = "none";
    christie.style.display = "none";
    lee.style.display = "none";
    shelley.style.display = "none";
    asimov.style.display = "none";
    backToLibraryBtn.style.display = "inline";
    asimovQuotes.style.display = "inline";
})
