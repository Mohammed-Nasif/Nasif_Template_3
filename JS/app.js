// Skills Animation
const skillsSec = document.querySelector('.skills');
const skillProgCounter = document.querySelectorAll('.skills-cont .skillprog');
const skillWidthProg = document.querySelectorAll('.skills-cont .animateC');
let skillsDone = false; // Function Done ? No

// Stats increase
const statsSec = document.querySelector('.stats');
console.log(statsSec);
const stats = document.querySelectorAll('.stats-num');
let statsDone = false; // Function Done ? No
// Scroll Btn
const btn = document.querySelector('#button');

window.onscroll = function () {
	if (window.scrollY >= skillsSec.offsetTop) {
		skillWidthProg.forEach((skillWid) => animateWidth(skillWid));
		if (!skillsDone) {
			skillProgCounter.forEach((skillprog) => startCount(skillprog));
		}
		skillsDone = true;
	}

	// Stats increase
	if (window.scrollY >= statsSec.offsetTop - 100) {
		if (!statsDone) {
			stats.forEach((stat) => startCount(stat));
		}
		statsDone = true;
	}
	// Scroll Btn
	if (window.scrollY > 300) {
		btn.classList.add('show');
	} else {
		btn.classList.remove('show');
	}
};

function animateWidth(el) {
	el.style.width = el.dataset.width;
}

function startCount(el) {
	const goal = el.dataset.goal;
	let count = setInterval(() => {
		el.textContent++;
		if (el.textContent == goal) {
			clearInterval(count);
		}
	}, 1800 / goal);
}

// Event Timer Counter

let eventCounter = setInterval(() => {
	let currentDate = new Date().getTime();
	// console.log(currentDate);
	let reqDate = new Date('Dec 31 2022 23:59:59').getTime();
	// console.log(reqDate);
	let eventInterval = reqDate - currentDate;
	// console.log(eventInterval);
	let days = Math.floor(eventInterval / (1000 * 60 * 60 * 24));
	let hours = Math.floor(
		(eventInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	);
	let minutes = Math.floor((eventInterval % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((eventInterval % (1000 * 60)) / 1000);
	document.querySelector('#days').innerHTML = days < 10 ? `0${days}` : days;
	document.querySelector('#hours').innerHTML = hours < 10 ? `0${hours}` : hours;
	document.querySelector('#minutes').innerHTML =
		minutes < 10 ? `0${minutes}` : minutes;
	document.querySelector('#seconds').innerHTML =
		seconds < 10 ? `0${seconds}` : seconds;

	if ((eventInterval = 0)) {
		clearInterval(eventCounter);
	}
}, 1000);

// Scroll to top btn

btn.onclick = function (e) {
	e.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};
