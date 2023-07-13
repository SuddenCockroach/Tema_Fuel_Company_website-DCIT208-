let search = document.querySelector("#search");
let myform = document.querySelector(".search-form");
let menubar = document.querySelector("#menu-bar");
let mymenubar = document.querySelector("nav")


search.onclick = () =>{
    myform.classList.toggle('active')
    mymenubar.classList.remove("active")
}


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mymenubar.classList.toggle("active")
    myform.classList.remove('active')
}


const typewriter = document.querySelector('.typewriter');
const text = typewriter.textContent;
typewriter.textContent = '';

for (let i = 0; i < text.length; i++) {
  const delay = i * 100; // Adjust the delay between each letter appearance (in milliseconds)
  setTimeout(() => {
    typewriter.textContent += text[i];
  }, delay);
}




const teamDescription = document.querySelector('.team-description');

const options = {
  threshold: 0.05 // Adjust the threshold value as needed
};

const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}, options);

fadeInOnScroll.observe(teamDescription);

