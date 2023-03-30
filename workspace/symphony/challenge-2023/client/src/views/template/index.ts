import { create, addEventListener as addNotificationEventListener, NotificationOptions } from "@openfin/workspace/notifications";

function addNotificationListeners() {
	addNotificationEventListener("notification-created", (event) => {
		console.log(`Created: ${event.notification.id}`);
	});

	addNotificationEventListener("notification-closed", (event) => {
		console.log(`Closed: ${event.notification.id}`);
	});

	addNotificationEventListener("notification-action", (event) => {
		if (event?.result?.BODY_CLICK === "dismiss_event") {
			if (event.notification?.customData?.action) {
				console.log(
					`Data: ${
						event?.notification?.customData ? JSON.stringify(event.notification.customData) : "None"
					}`
				);
			} else {
				console.log("No action");
			}
			console.log("Body click dismiss");
		} else {
			console.log(
				`Data: ${event?.result?.customData ? JSON.stringify(event.result.customData) : "None"}`
			);
			console.log(`Task: ${event?.result?.task ?? "None"}`);
			console.log(`Action: ${event.notification.id}`);
		}

		console.log(event);
	});

	addNotificationEventListener("notification-toast-dismissed", (event) => {
		console.log(`Toast Dismissed: ${event.notification.id}`);
	});

	addNotificationEventListener("notification-form-submitted", (event) => {
		console.log(`Data: ${event?.form ? JSON.stringify(event.form) : "None"}`);
		console.log(`Form: ${event.notification.id}`);
		console.log(event);
	});

	addNotificationEventListener("notifications-count-changed", (event) => {
		console.log(`Notification Count: ${event.count}`);
	});
}

async function init() {
	const contact = document.querySelector<HTMLInputElement>("#contact");
	const execute = document.querySelector("#execute");
	const result = document.querySelector("#result");

	result.textContent = "Not Set";
	execute.addEventListener("click", () => {
		const value = contact.value;
		console.log(`Value ${value}`);
		result.textContent = contact.value;
		const notification: NotificationOptions = {
			title: "Simple Notification",
			body: `This is a simple notification. Input: ${contact.value}`,
			toast: "transient",
			category: "default",
			template: "markdown",
			id: `id-${Date.now()}`,
			platform: fin.me.identity.uuid
		};
		 create(notification); 
	});
	addNotificationListeners();
}

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		console.error(error);
	}
});
