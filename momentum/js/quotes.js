const quotes = [
{
    quote : "당신이 아닌 것으로 만들려는 세상 속에서 자신답게 사는 것은 가장 큰 성취이다",
    author: "Ralph Waldo Emerson",
},
{
    quote : "Past is just past.",
    author: "과거는 과거입니다.",
},
{
    quote : "Where there is a will there is a way",
    author: "뜻이 있는 곳엔 길이 있다. -Angela Merkel",
},
{
    quote : "Life is a journey",
    author: "인생은 여정이다. -Ralph Waldo Emerson",
},
{
    quote : "Don't dream, Be it",
    author: "꿈만 꾸지 말고 되어라. -Tim curry",
},
{
    quote : "No pain, No gain",
    author: "고통 없이는 얻는 것도 없다. -Benjamin Franklin",
},
{
    quote : "When they go low, we go high",
    author: "그들이 저급해도 우리는 품위 있게 갑시다. -Michelle Obama",
},
{
    quote : "I was never less alone than when by myself",
    author: "난 혼자 있을 때 가장 외롭지 않았다. -Edward Gibbon",
},
{
    quote : "Don't take your parents for granted.",
    author: "부모님의 존재를 당연시하지 마세요.",
},
{
    quote : "Only I can change my life, no one can do it for me",
    author: "내 인생을 바꾸는 사람은 자신입니다. 아무도 대신해줄 수 없어요. -Carol Burnett",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;