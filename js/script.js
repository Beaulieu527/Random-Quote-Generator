//Quotes to be randomly generated
var quotes = [
  {
    quote: 'Keep your face always toward the sunshine—and shadows will fall behind you.',
    source: 'Walt Whitman',
    citation: "",
    year: ""

  },
  {
    quote: 'The glow of one warm thought is to me worth more than money.',
    source: 'Thomas Jefferson',
    citation: "",
    year: ""

  },
  {
    quote: 'I arise full of eagerness and energy, knowing well what achievement lies ahead of me.',
    source: 'Zane Grey',
    citation: "",
    year: ""
  },
  {
    quote: 'Happiness is not something you postpone for the future; it is something you design for the present.',
    source: 'Jim Rohn',
    citation: "",
    year: ""
  },
  {
    quote: 'The power of imagination makes us infinite.',
    source: 'John Muir',
    citation: "",
    year: ""
  }

];

var random;
var randomQuote;
var quoteHTMl;

// Selects a random quote object from the quotes array and returns the randomly selected quote object
function getRandomQuote() {
   random = Math.floor(Math.random() * quotes.length);
   return quotes[random];
}

// Calls the getRandomQuote function and stores the returned quote object in a variable
function  printQuote() {
  randomQuote = getRandomQuote();

// Creates a string with the different properties to convert to HTML
  quoteHTMl = '<p class="quote">' + randomQuote.quote + '</p>';
  quoteHTMl += '<p class="source">' + randomQuote.source

// Checks top see if the optional citation and year properties are to be included in the HTML string
    if (randomQuote.citation !== ''){
      quoteHTMl += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if (randomQuote.year !== ''){
      quoteHTMl += '<span class="year">' + randomQuote.year + '</span>';
    }
   quoteHTMl += '</p>';
// Displays the final HTML string tot he page
  document.getElementById('quote-box').innerHTML = quoteHTMl;
};

// Event listener to respond to "Show another quote" button clicks
// When user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
