/* eslint-disable */
import "bootstrap";
import "./style.css";

// window.onload = function() {
//write your code here
window.onload = () => {
  // document.querySelector(".card").classList.add(generateRandomSuit());
  generateRandomSuit();
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let number = Math.floor(Math.random() * numbers.length);
  return numbers[number];
};

let generateRandomSuit = () => {
  let suits = [
    {
      textContent: "♦️",
      color: "red"
    },
    {
      textContent: "♥️",
      color: "red"
    },
    {
      textContent: "♣️",
      color: "black"
    },
    {
      textContent: "♠️",
      color: "black"
    }
  ];
  let randomIndex = Math.floor(Math.random() * suits.length);
  let selectedSuit = suits[randomIndex];
  // grab the suit top and bottom
  let suitTop = document.querySelector(".top");
  let suitBottom = document.querySelector(".bottom");
  // update the content of suit top and bottom
  suitTop.textContent = selectedSuit.textContent;
  suitBottom.textContent = selectedSuit.textContent;
  // update the color for each top and bottom suit div
  suitTop.style.color = selectedSuit.color;
  suitBottom.style.color = selectedSuit.color;
  // rotate bottom suit
  suitBottom.style.transform = "rotate(180deg)";
};
