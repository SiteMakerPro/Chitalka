const settingsInput = document.querySelector('.settings__input');
const settingsFontSize = document.querySelector('.settings__font-size');
const settingsFontColor = document.querySelector('.settings__font-color');
const texts = document.querySelectorAll('.text');
const labels = document.querySelectorAll('.label input');

function changeFont(value) {
	document.body.style.fontFamily = value;
}
function changeFontSize(value) {
	texts.forEach((el) => {
		el.style.fontSize = value + 'px';
	});
}
function changeFontColor(value) {
	texts.forEach((el) => {
		el.style.color = value;
	});
}
function changeLineHeight(value) {
	texts.forEach((el) => {
		el.style.lineHeight = value + '%';
	});
}
function changeBgColor() {
	const checked = document.querySelector('.settings__font-color:checked');
	if (document.body.classList.length) document.body.classList.remove(document.body.classList);
	if (checked) {
		document.body.classList.add(checked.value);
	}
}

settingsInput.oninput = () => changeFont(settingsInput.value);
settingsFontSize.oninput = () => changeFontSize(settingsFontSize.value);
settingsFontColor.oninput = () => changeFontColor(settingsFontColor.value);

document.addEventListener('DOMContentLoaded', () => {
	labels.forEach((el) => {
		el.addEventListener('change', () => changeBgColor());
	});
});
