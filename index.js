function createParagraph(){
    var word1 = document.getElementById('word1').value;
    var word2 = document.getElementById('word2').value;
    var word3 = document.getElementById('word3').value;
    var word4 = document.getElementById('word4').value;
    var word5 = document.getElementById('word5').value;
    var word6 = document.getElementById('word6').value;
    var word7 = document.getElementById('word7').value;
    var word8 = document.getElementById('word8').value;
    var word9 = document.getElementById('word9').value;
    var word10 = document.getElementById('word10').value;
    var word11 = document.getElementById('word11').value;
    var word12 = document.getElementById('word12').value;
    var word13 = document.getElementById('word13').value;
    var word14 = document.getElementById('word14').value;
    var word15 = document.getElementById('word15').value;
    var word16 = document.getElementById('word16').value;
    var word17 = document.getElementById('word17').value;
    
var paragraph = "It was Thanksgiving and the scent of succulent roast " + word1 + " waved through the house. " + word2 +  ",it's time to " + word3 + " my mother called. I couldn't wait to get my " + word4 + " on that " + word5 + " Thanksgiving meal. My family sat around the dining room " + word6 + " The table was laid out with every kind of " + word7 + " imaginable there was a basket of hot buttered " + word8 + " and a glasses of sparkling " + word9 + ". The " + word10 + "turkey sat, steaming, next to a tureen of " + word11 + " gravy. A bowl of ruby-red " + word12 + "sauce, a sweet-" + word13 + " casserole, and a dish of mash " + word14 + " tempted my taste buds. But the dish I look forward to most was Grandma " + word15 + " famous " + word16 + " pie. Thanksgiving is my favorite holiday, " + word17 + " down!"

document.getElementById('answer').innerHTML = paragraph

}