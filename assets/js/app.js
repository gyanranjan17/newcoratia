window.addEventListener("resize", function () {
	addRequiredClass();
});

function addRequiredClass() {
	if (window.innerWidth < 860) {
		document.body.classList.add("mobile");
	} else {
		document.body.classList.remove("mobile");
	}
}

window.onload = addRequiredClass;

let hamburger = document.querySelector(".hamburger");
let mobileNav = document.querySelector(".nav-list");

let bars = document.querySelectorAll(".hamburger span");

isActive = false;

hamburger.addEventListener("click", function () {
	mobileNav.classList.toggle("open");
	if (!isActive) {
		bars[0].style.transform = "rotate(45deg)";
		bars[1].style.opacity = "0";
		bars[2].style.transform = "rotate(-45deg)";
		isActive = true;
	} else {
		bars[0].style.transform = "rotate(0deg)";
		bars[1].style.opacity = "1";
		bars[2].style.transform = "rotate(0deg)";
		isActive = false;
	}
});

// ----------Marquee-------------- //
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
	"--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
	marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

/*---------------Shrinking Nav------------------*/

// const video = document.querySelector(".video");
// const nav = document.querySelector(".nav");
// const navwrapper = document.querySelector(".nav-wrapper");
// const logo = document.querySelector(".logo");
// const hamburgershrink = document.querySelector(".hamburger");
{
	const nav = document.querySelector(".nav");
	let lastScrollY = window.scrollY;
  
	window.addEventListener("scroll", () => {
	  if (lastScrollY < window.scrollY) {
		nav.classList.add("nav--hidden");
	  } else {
		nav.classList.remove("nav--hidden");
	  }
  
	  lastScrollY = window.scrollY;
	});
  }

window.addEventListener("scroll", fixVid);

function fixVid() {
	if (window.scrollY > video.offsetHeight + 150) {
		video.classList.add("shrink");
		nav.classList.add("shrink");
		navwrapper.classList.add("shrink");
		logo.classList.add("shrink-img");
		hamburgershrink.classList.add("hamburger-shrink");
	} else {
		video.classList.remove("shrink");
		nav.classList.remove("shrink");
		navwrapper.classList.remove("shrink");
		logo.classList.remove("shrink-img");
		hamburgershrink.classList.remove("hamburger-shrink");
	}
}

//sWIPER JS
const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	slidesPerView: "auto",
	centeredSlides: true,
	spaceBetween: 30,
	autoplay: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	freemode: true,
	longSwipes: true,

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
//  mouse scroll Animation

// Get the image container element
var container = document.querySelector('.image-container');

// Get all the scroll images
var images = document.querySelectorAll('.scroll-image');

// Set the initial active image index
var activeImageIndex = 0;

// Show the active image
images[activeImageIndex].style.opacity = '1';

// Add event listener for mouse scroll
container.addEventListener('wheel', function(event) {
  // Determine the direction of the scroll
  var delta = Math.sign(event.deltaY);
  
  // Hide the current active image
  images[activeImageIndex].style.opacity = '0';
  
  // Update the active image index based on scroll direction
  activeImageIndex += delta;
  
  // Wrap the active image index within the image count
  if (activeImageIndex < 0) {
    activeImageIndex = images.length - 1;
  } else if (activeImageIndex >= images.length) {
    activeImageIndex = 0;
  }
  
  // Show the new active image
  images[activeImageIndex].style.opacity = '1';
});


