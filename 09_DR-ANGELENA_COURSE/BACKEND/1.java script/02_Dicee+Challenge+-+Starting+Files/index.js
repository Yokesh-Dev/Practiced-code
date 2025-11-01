// 1 link the js with html
// 2 link the images in img
// new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6.
//Use the random number you created in the last step to pick out a random dice image between dice1.png to dice 6.png then place this image inside the left <img> element.
//Change the text in the h1, (which currently says Refresh Me) to show which user won or if there was a draw depending on the dice values of player 1 (left) and player 2 (right).


var randomNumber1 =Math.floor(Math.random() *6) + 1; 
var randomDiceImage ="dice" + randomNumber1 + ".png";
var randomImageSource ="images/" + randomDiceImage;
var image1 =document.querySelectorAll("img") [0];
image1.setAttribute("src",randomImageSource);


var randomNumber2 =Math.floor(Math.random() *6) + 1;
var randomImageSource2 ="images/" + randomDiceImage;
var image2 =document.querySelectorAll("img") [1];
image2.setAttribute("src",randomImageSource2);
