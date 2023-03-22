async function init() {
	const contact = document.querySelector<HTMLInputElement>("#contact");
	const execute = document.querySelector("#execute");
	const result = document.querySelector("#result");

	result.textContent = "Not Set";
	execute.addEventListener("click", () => {
		const value = contact.value;
		console.log(`Value ${value}`);
		result.textContent = contact.value;
	});
}

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		console.error(error);
	}
});
