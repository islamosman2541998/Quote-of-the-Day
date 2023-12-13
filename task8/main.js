var author=['--Wayne Gretzy'  , '--Nelson Mandela' , '--Frank Sinatra' , '--Epictetus' , '--Elbert Hubbard']



var quote=[
    "\"You miss 100% of the shots you don't take.\"",
    "\"Resentment is like drinking poison and waiting for your enemies to die.\"",
    "\"The best revenge is massive success.\"",
    "\"It's not what happens to you, but how you react to it that matters.\"",
    "\"Do not take life too seriously. You will not get out alive.\""
]


function randomQuotes(){

    var x = Math.floor(Math.random() * author.length);
    document.getElementById('Quotes').innerHTML = quote[x]
    document.getElementById('Authors').innerHTML = author[x]

}