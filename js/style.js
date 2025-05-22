AOS.init({
  duration: 1000
});

const newsSentences = [
  "Understanding High Cholesterol: Causes, Risks, and Management",
  "Tips for Maintaining a Healthy Heart",
  "The Role of Exercise in Mental Well-being",
  "Balanced Diet: Key to Long-Term Health"
];

let index = 0;
const newsSpan = document.getElementById("news-text");


setInterval(() => {
  index = (index + 1) % newsSentences.length;
  newsSpan.textContent = newsSentences[index];
}, 1200); // 2 minutes = 120000 ms



function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}


$('#bannersection').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: true,
  items: 1,
})


$('#testimonialsection').owlCarousel({
  loop: true,
  margin: 30,
  dots: true,
  nav: false,
  items: 1,
})

