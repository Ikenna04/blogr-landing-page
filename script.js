const dropHead = document.querySelectorAll('.drop-head');
const dropDown = document.querySelectorAll('.drop-down');

document.querySelector('.mobile-icons').addEventListener('click', () => {
	document.querySelector('.nav-links').classList.toggle('show');
	document.querySelector('.mobile-icons').classList.toggle('show');
	dropHead.forEach(e => {
		e.classList.remove('clicked');
	});
	dropDown.forEach(e => {
		e.classList.remove('clicked');
	});
});

for (let i = 0; i < dropHead.length; i++) {
	dropHead[i].addEventListener('click', () => {
		if (dropHead[i].classList.contains('clicked')) {
			dropHead[i].classList.remove('clicked');
			dropDown[i].classList.remove('clicked');
		} else {
			dropHead.forEach(e => {
				e.classList.remove('clicked');
			});
			dropDown.forEach(e => {
				e.classList.remove('clicked');
			});

			dropHead[i].classList.add('clicked');
			dropDown[i].classList.add('clicked');
		}
	});
}
