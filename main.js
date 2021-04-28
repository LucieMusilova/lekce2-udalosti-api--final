// tady je místo pro náš program

let veta = document.querySelector('#js-paragraph');
let tlacitkoCervene = document.querySelector('.cerveny');
let tlacitkoZvetsi = document.querySelector('.vetsi');
let tlacitkoPrehraj = document.querySelector('.prehraj');
let tlacitkoPauzni = document.querySelector('.pauzni');
let tlacitkoZtis = document.querySelector('.ztis');
let tlacitkoStredni = document.querySelector('.middle');
let tlacitkoMax = document.querySelector('.max');
let tlacitkoZacatek = document.querySelector('.start');
let zvuk = document.querySelector('#js-audio');

/*tučnější písmo při najetí myší*/

veta.addEventListener('mouseover',ztucni);
veta.addEventListener('mouseout',normalni);

function ztucni() {
  veta.style.fontWeight = 'bold';
};

function normalni() {
  veta.style.fontWeight = 'normal';
};


/**
 * Funkce přidá nebo odebere na prvku třídu, která se stará o červenou barvu písma
 * 
 * @param {string} elementId 
 */

tlacitkoCervene.addEventListener('click', prepniZcervenani);

function prepniZcervenani() {
    veta.classList.toggle('cerveny-text');
}

/**
 * Funkce zvětší/změnší písmo v elementu o definovanou velikost
 * 
 * @param {string} elementSelector 
 * @param {int} fontSizeChange 
 */

 tlacitkoZvetsi.addEventListener('click', zvetsitPismo);

function zvetsitPismo() {
    let currentFontSize = parseInt(veta.style.fontSize);
    veta.style.fontSize = (currentFontSize + 1) + 'px';
}

/*--------------*/
/* AUDIO FUNKCE */
/*--------------*/

tlacitkoPrehraj.addEventListener('click', function() {
  zvuk.play();
});
tlacitkoPauzni.addEventListener('click', function() {
  zvuk.pause();
});
tlacitkoZtis.addEventListener('click', function() {
  zvuk.volume = 0;
});
tlacitkoStredni.addEventListener('click', function() {
  zvuk.volume = 0.5;
});
tlacitkoMax.addEventListener('click', function() {
  zvuk.volume = 1;
});
tlacitkoZacatek.addEventListener('click', function() {
  zvuk.currentTime = 0;
});
