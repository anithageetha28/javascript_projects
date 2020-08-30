const colors = [
    '#490A3D',
    '#BD1550',
    '#E97F02',
    '#F8CA00',
    '#8A9B0F',
    '#69D2E7',
    '#FA6900',
    '#16a085',
    '#342224',
    '#2c3e50',
    '#FB6964',
    '#C70039',
    '#900C3F',
    '#581845',
];

const quotes = [
    ["You only live once, but if you do it right, once is enough.", "Mae West"],
    ["The Way Get Started Is To Quit Talking And Begin Doing.", "Walt Disney "],
    ["The Pessimist Sees Difficulty In Every Opportunity.The Optimist Sees Opportunity In Every Difficulty.", "Winston Churchill "],
    ["Don’ t Let Yesterday Take Up Too Much Of Today.", "Will Rogers "],
    ["You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.", "Unknown"],
    ["Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.", "Johann Wolfgang Von Goethe"],
    ["The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.", "Franklin D. Roosevelt"],
    ["What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.", "Don Zimmer"],
    ["Do What You Can With All You Have, Wherever You Are.", "Theodore Roosevelt"],
    ["Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.", "Brian Tracy"],
    ["I Think Goals Should Never Be Easy, They Should Force You To Work", "Unknown"]
];
const mainArea = document.querySelector('#quotes');
let currentQuote = '';
let currentAuthor = '';
let randomQuote = '';
let randomColor = '';

function getQuote() {
    randomQuote = Math.floor(Math.random() * quotes.length);
    randomColor = Math.floor(Math.random() * colors.length);

    currentQuote = quotes[randomQuote][0];
    currentAuthor = quotes[randomQuote][1];

    const markup = ` <blockquote id="quote_text" class="text-left">${currentQuote}</blockquote>
    <p id="author">-${currentAuthor}</p>`;
    mainArea.innerHTML = markup;

    document.body.style.background = colors[randomColor];
    document.querySelector('h1').style.color = colors[randomColor];
    document.querySelector('#quote_btn').style.background = colors[randomColor];
    document.querySelector('#quote_text').style.borderLeft = `10px solid ${colors[randomColor]}`;
}
const quotesButton = document.querySelector('#quote_btn');
quotesButton.addEventListener('click', getQuote);
getQuote();