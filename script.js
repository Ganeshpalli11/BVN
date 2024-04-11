let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;
  const parallaxElements = document.querySelectorAll('.parallax');

  parallaxElements.forEach(function(element) {
      const speed = element.getAttribute('data-speed');
      const movement = -(scrolled * speed);

      element.style.transform = 'translateY(' + movement + 'px)';
  });
});

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dotsContainer = document.querySelector(".dots-container");
    if (slides.length === 0) return;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    let dots = "";
    for (let i = 0; i < slides.length; i++) {
        dots += "<span class='dot' onclick='currentSlide(" + (i + 1) + ")'></span>";
    }
    dotsContainer.innerHTML = dots;
    
    let dotElements = document.getElementsByClassName("dot");
    for (let i = 0; i < dotElements.length; i++) {
        dotElements[i].classList.remove("active");
    }
    dotElements[slideIndex - 1].classList.add("active");
    
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

showSlides();
