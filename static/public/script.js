// Nav ------
let nav_btn = document.getElementById("nav");
let nav = document.getElementById("shownav");
var count = 1;
nav_btn.addEventListener('click', ()=>{    
    if (count == 1) {
        nav.style.display = "block"
        count++
    } else {
        nav.style.display = "none"
        count = 1;
    }
})


// Hero Car Image -------------
let heroImg = document.getElementById("heroimg");
let imgCollection =['./img/hero/a.png','./img/hero/b.jpg','./img/hero/c.png','./img/hero/d.png','./img/hero/e.png','./img/hero/f.png','./img/hero/g.png']
var imageIndex = 0;

function changeImage() {
    imageIndex++;
  
    if (imageIndex >= imgCollection.length) {
        imageIndex = 0;
    }


    heroImg.classList.add('animate-left');

    
      // Set the src attribute of the image to the next URL
      heroImg.src = imgCollection[imageIndex];
    
      setTimeout(() => {
        heroImg.classList.remove('animate-left');
      }, 500);
  

  }
// setInterval(changeImage, 3000);



// Scrool
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
}


//Animation on Scroll

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    // console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  })
});

let hiddenElements = document.querySelectorAll('.hiddenAni');
hiddenElements.forEach((el) => observer.observe(el));


let hiddenRight = document.querySelectorAll('.hiddenRight');
hiddenRight.forEach((el) => observer.observe(el));

let hiddenUp = document.querySelectorAll('.hiddenUp');
hiddenUp.forEach((el) => observer.observe(el));



//  Lottie animation
// Load the animation JSON file
const animation = bodymovin.loadAnimation({
  container: document.getElementById('animation-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './anime-json/about-us.json' // Replace with the path to your JSON file
});


// review ~~~~~~
const paragraphs = document.querySelectorAll('.review');

paragraphs.forEach(paragraph => {
  // Check if the text content of the <p> element is longer than 118 characters
  if (paragraph.textContent.length > 118) {
    // Create a new <a> element
    const aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = '...';
      
    // Trim the text content to 197 characters and add three dots at the end
    const shortenedText = paragraph.textContent.substring(0, 118);
        
    // Update the text content of the <p> element with the shortened text
    paragraph.textContent = shortenedText;
    paragraph.appendChild(aElement);
  }
});
