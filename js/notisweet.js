/*! NotiSweet v1.0.0 */

/**
 * Displays a notification with customizable type, title, message and second.
 *
 * @param {Object} options - Notification options.
 * @param {string} options.type - (Obliged) Type of notification ("success", "warning", or "error").
 * @param {string} options.title - (Obliged) Title of the notification.
 * @param {string} options.message - (Obliged) Message content of the notification.
 * @param {number|string} [options.second] - (Optional) Duration in seconds for automatic dismissal. Use "infinite" for a persistent notification.
 */

function notiSweet({ type, title, message, second }) {
    if (!type && (!title || !message)) {
        return console.error('The "type", "title", and "message" parameters must be defined!');
    }

    if (!type || !type.trim()) {
        return console.error('You must define a "type" in the parameters!');
    }

    const typeLowerCase = type.toLowerCase();

    let typeIcon;

    const typeMappings = {
        success: {
            type: "success",
            notiSweetType: 'notiSweet_success',
            icon: '<svg style="height: 20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <defs></defs>\n  <ellipse style="fill: white" cx="12" cy="12" rx="12" ry="12"></ellipse>\n  <polyline id="primary" points="6 11.445 10.286 17 18 7" style="stroke-linecap: round; stroke-linejoin: round; fill: none; stroke-width: 2px;" stroke="#38A169"></polyline>\n</svg>'
        },
        warning: {
            type: "warning",
            notiSweetType: 'notiSweet_warning',
            icon: '<svg style="height: 20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs></defs><ellipse style="fill:#fff" cx="12" cy="12" rx="12" ry="12"></ellipse><path d="M 11.999 14.001 C 12.551 14.001 12.999 13.553 12.999 13.001 L 12.999 7.001 C 12.999 6.231 12.166 5.75 11.499 6.135 C 11.19 6.314 10.999 6.644 10.999 7.001 L 10.999 13.001 C 10.999 13.553 11.447 14.001 11.999 14.001 Z M 11.999 18.001 C 12.961 18.001 13.563 16.959 13.082 16.126 C 12.6 15.293 11.398 15.293 10.917 16.126 C 10.807 16.316 10.749 16.532 10.749 16.751 C 10.749 17.441 11.309 18.001 11.999 18.001 Z" style="fill:#ff9114"></path></svg>'
        },
        error: {
            type: "error",
            notiSweetType: 'notiSweet_error',
            icon: '<svg style="height: 20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs></defs><ellipse style="fill:#fff" cx="12" cy="12" rx="12" ry="12"></ellipse><line id="primary" x1="18" y1="18" x2="6" y2="6" style="fill:none;stroke:#b80f0a;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"></line><line id="primary-2" data-name="primary" x1="18" y1="6" x2="6" y2="18" style="fill:none;stroke:#b80f0a;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"></line></svg>'
        }
    };

    if (typeLowerCase in typeMappings) {
        type = typeMappings[typeLowerCase].notiSweetType;
        typeIcon = typeMappings[typeLowerCase].icon;
    } else {
        return console.error(`The type ${type} is not valid! Possible values: success, error, or warning.`);
    }

    if (!title || !title.trim()) {
        return console.error(typeof title === "undefined" ? 'You must define a "title" in the parameters!' : 'The defined title is not valid!');
    }

    if (!message || !message.trim()) {
        return console.error(typeof message === "undefined" ? 'You must define a "message" in the parameters!' : 'The defined message is not valid!');
    }

    if (typeof second !== "undefined" && second !== "infinite") {
        const parsedSecond = parseInt(second);

        if (isNaN(parseInt(second))) {
            return console.error(!second.trim() ? "The number of seconds cannot be empty" : `${second} is not a number! Possible value: integer or infinite.`);
        }

        if (parsedSecond % 1 !== 0) {
            second = Math.round(parsedSecond);
        } else {
            second = parsedSecond;
        }

        second *= 1000;
    } else if (typeof second === "undefined") {
        second = 5 * 1000;
    }

    const notificationTemplate = `<div class="notiSweet_notification notiSweet_swipeUpAnim ${type}">${typeIcon}<div class="notiSweet_messageBox"><div class="notiSweet_titre">${title}</div><div class="notiSweet_description">${message}</div></div><button class="notiSweet_closeButton"><svg viewBox="0 0 24 24" focusable="false" class="notiSweet_closeSvg" aria-hidden="true"><path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.440A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg></button></div>`;

    document.body.insertAdjacentHTML('beforeend', notificationTemplate);

    const notificationBox = document.querySelector('.notiSweet_notification');
    const closeButton = document.querySelector(".notiSweet_closeButton");

    closeButton.addEventListener("click", function () {
        notificationBox.classList.add("notiSweet_swipeDownAnim");
        setTimeout(() => notificationBox.remove(), 700);
    });

    if (second !== "infinite") {
        setTimeout(() => {
            notificationBox.classList.remove("notiSweet_swipeUpAnim");
        }, 700);
        setTimeout(() => {
            notificationBox.classList.add("notiSweet_swipeDownAnim");
            setTimeout(() => {
                notificationBox.remove();
            }, 700);
        }, second + 700);
    }
};