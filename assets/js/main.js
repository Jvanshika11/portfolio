// first import.
import Headroom from 'js/headroom';
const carouselText = [
  {text: "Apple", color: "red"},
  {text: "Orange", color: "orange"},
  {text: "Lemon", color: "yellow"}
]

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
document.addEventListener('DOMContentLoaded', function() {
  // grab the header element.
  const Header = document.querySelector("header");
  
  // construct an instance of Headroom, passing the header elemen.
  const headroom = new Headroom(Header, {
    offset: 0,
    tolerance: {
      up: 0,
      down: 0
    },
    classes: {
      initial: "header--fixed",
      top: "top",
      notTop: "not-top"
    }
  });
  
  // initialise
  headroom.init();
});
