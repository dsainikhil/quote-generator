let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      person: "Franklin D. Roosevelt"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "In the middle of difficulty lies opportunity.",
      person: "Albert Einstein"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      person: "John Lennon"
    },
    {
      quote: "Do not watch the clock. Do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The purpose of our lives is to be happy.",
      person: "Dalai Lama"
    },
    {
      quote: "The best way to predict your future is to create it.",
      person: "Abraham Lincoln"
    },
    {
      quote: "You miss 100% of the shots you don’t take.",
      person: "Wayne Gretzky"
    },
    {
      quote: "Life is short, and it's up to you to make it sweet.",
      person: "Sarah Louise Delany"
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      person: "Albert Einstein"
    },
    {
      quote: "Don't let yesterday take up too much of today.",
      person: "Will Rogers"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      person: "Walt Disney"
    },
    {
      quote: "Act as if what you do makes a difference. It does.",
      person: "William James"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "The secret of getting ahead is getting started.",
      person: "Mark Twain"
    },
    {
      quote: "Happiness is not something ready made. It comes from your own actions.",
      person: "Dalai Lama"
    },
    {
      quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
      person: "C.S. Lewis"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It is during our darkest moments that we must focus to see the light.",
      person: "Aristotle"
    },
    {
      quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      person: "Ralph Waldo Emerson"
    },
    {
      quote: "Your time is limited, so don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      person: "Mae West"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "Dream big and dare to fail.",
      person: "Norman Vaughan"
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      person: "Lao Tzu"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "If you cannot do great things, do small things in a great way.",
      person: "Napoleon Hill"
    },
    {
      quote: "I think, therefore I am.",
      person: "René Descartes"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "The mind is everything. What you think you become.",
      person: "Buddha"
    },
    {
      quote: "Everything you’ve ever wanted is on the other side of fear.",
      person: "George Addair"
    },
    {
      quote: "The best way out is always through.",
      person: "Robert Frost"
    },
    {
      quote: "What we achieve inwardly will change outer reality.",
      person: "Plutarch"
    },
    {
      quote: "You can't use up creativity. The more you use, the more you have.",
      person: "Maya Angelou"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
      person: "Winston Churchill"
    },
    {
      quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
      person: "Walt Whitman"
    },
    {
      quote: "The best preparation for tomorrow is doing your best today.",
      person: "H. Jackson Brown, Jr."
    },
    {
      quote: "Do what you can, with what you have, where you are.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "You define your own life. Don’t let other people write your script.",
      person: "Oprah Winfrey"
    },
    {
      quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
      person: "Roy T. Bennett"
    },
    {
      quote: "He who has a why to live can bear almost any how.",
      person: "Friedrich Nietzsche"
    },
    {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      person: "Joshua J. Marine"
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      person: "Charles R. Swindoll"
    },
    {
      quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      person: "Ralph Waldo Emerson"
    },
    {
      quote: "To handle yourself, use your head; to handle others, use your heart.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "It is never too late to be what you might have been.",
      person: "George Eliot"
    },
    {
      quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      person: "Henry Ford"
    },
    {
      quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "A winner is a dreamer who never gives up.",
      person: "Nelson Mandela"
    },
    {
      quote: "You must be the change you wish to see in the world.",
      person: "Mahatma Gandhi"
    },
    {
      quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
      person: "Mark Twain"
    },
    {
      quote: "We become what we think about.",
      person: "Earl Nightingale"
    },
    {
      quote: "An unexamined life is not worth living.",
      person: "Socrates"
    },
    {
      quote: "Don't count the days, make the days count.",
      person: "Muhammad Ali"
    },
    {
      quote: "It is our choices that show what we truly are, far more than our abilities.",
      person: "J.K. Rowling"
    },
    {
      quote: "Everything has beauty, but not everyone sees it.",
      person: "Confucius"
    },
    {
      quote: "The only impossible journey is the one you never begin.",
      person: "Tony Robbins"
    },
    {
      quote: "Try not to become a man of success, but rather become a man of value.",
      person: "Albert Einstein"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "We must not allow other people’s limited perceptions to define us.",
      person: "Virginia Satir"
    },
    {
      quote: "There are no shortcuts to any place worth going.",
      person: "Beverly Sills"
    },
    {
      quote: "I would rather die of passion than of boredom.",
      person: "Vincent Van Gogh"
    },
    {
      quote: "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",
      person: "William James"
    },
    {
      quote: "Everything you’ve ever wanted is on the other side of fear.",
      person: "George Addair"
    },
    {
      quote: "We know what we are, but know not what we may be.",
      person: "William Shakespeare"
    },
    {
      quote: "Go confidently in the direction of your dreams! Live the life you’ve imagined.",
      person: "Henry David Thoreau"
    },
];

quote.innerHTML='';
person.innerHTML='';

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});