async function init() {
	const contact = document.querySelector('#contact');
	const execute = document.querySelector('#execute');
	const result = document.querySelector('#result');

	result.textContent = 'Not Set';
	execute.addEventListener('click', () => {
		const value = contact.value;
		console.log(`Value ${value}`);
		result.textContent = contact.value;
	});
}

document.addEventListener('DOMContentLoaded', () => {
	try {
		init();
	} catch (error) {
		console.error(error);
	}
});
