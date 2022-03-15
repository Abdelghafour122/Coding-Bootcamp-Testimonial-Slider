const johnImg = "/images/image-john.jpg";
const johnQuote =
  "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
const tanyaImg = "/images/image-tanya.jpg";
const tanyaQuote =
  "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";

const arrows = document.querySelectorAll(".controls span");
const portrait = document.getElementById("portrait");
const quote = document.querySelector("p");

console.log(portrait.src);

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    console.log(portrait.src.toString().includes(tanyaImg));
    if (portrait.src.toString().includes(tanyaImg)) {
      quote.innerText = johnQuote;
      // portrait.src = johnImg;
      portrait.src =
        "https://abdelghafour122.github.io/Coding-Bootcamp-Testimonial-Slider/images/image-john.jpg";
    } else if (portrait.src.toString().includes(johnImg)) {
      quote.innerText = tanyaQuote;
      // portrait.src = tanyaImg;
      portrait.src =
        "https://abdelghafour122.github.io/Coding-Bootcamp-Testimonial-Slider/images/image-tanya.jpg";
    }
  });
});
