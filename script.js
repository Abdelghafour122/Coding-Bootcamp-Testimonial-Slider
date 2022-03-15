const johnImg = "/images/image-john.jpg";
const johnQuote =
  "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
const tanyaImg = "/images/image-tanya.jpg";
const tanyaQuote =
  "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";

const arrows = document.querySelectorAll(".controls span");
const portrait = document.getElementById("portrait");
const quote = document.querySelector("p");

// console.log(arrows);
// console.log(portrait.src);
// console.log(quote);

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (quote.innerText === tanyaQuote && portrait.src === tanyaImg) {
      quote.innerText = johnQuote;
      portrait.src = johnImg;
    } else if (quote.innerText === johnQuote && portrait.src === johnImg) {
      quote.innerText = tanyaQuote;
      portrait.src = tanyaImg;
    }
  });
});
