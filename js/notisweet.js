/*! NotiSweet v1.0.0 */

/**
 * Displays a notification with customizable type, title, message, and duration.
 *
 * @param {Object} options - Notification options.
 * @param {string} options.type - (Required) Type of notification ("success", "warning", or "error").
 * @param {string} options.title - (Required) Title of the notification.
 * @param {string} options.message - (Required) Message content of the notification.
 * @param {number} [options.second] - (Optional) Duration in seconds for automatic dismissal.
 *
 * @example
 * // Display a success notification for 5 seconds
 * notiSweet({
 *   type: "success",
 *   title: "Success!",
 *   message: "Your operation was completed successfully.",
 *   second: 5
 * });
 *
 * @example
 * // Display an error notification that persists
 * notiSweet({
 *   type: "error",
 *   title: "Error!",
 *   message: "Something went wrong.",
 * });
 */
const notiSweet = ({ type, title, message, second = undefined }) => {
    const icons = {
        success: '<svg style="height: 20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <defs></defs>\n  <ellipse style="fill: white" cx="12" cy="12" rx="12" ry="12"></ellipse>\n  <polyline id="primary" points="6 11.445 10.286 17 18 7" style="stroke-linecap: round; stroke-linejoin: round; fill: none; stroke-width: 2px;" stroke="#38A169"></polyline>\n</svg>',
        warning: '<svg style="height: 20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs></defs><ellipse style="fill:#fff" cx="12" cy="12" rx="12" ry="12"></ellipse><path d="M 11.999 14.001 C 12.551 14.001 12.999 13.553 12.999 13.001 L 12.999 7.001 C 12.999 6.231 12.166 5.75 11.499 6.135 C 11.19 6.314 10.999 6.644 10.999 7.001 L 10.999 13.001 C 10.999 13.553 11.447 14.001 11.999 14.001 Z M 11.999 18.001 C 12.961 18.001 13.563 16.959 13.082 16.126 C 12.6 15.293 11.398 15.293 10.917 16.126 C 10.807 16.316 10.749 16.532 10.749 16.751 C 10.749 17.441 11.309 18.001 11.999 18.001 Z" style="fill:#ff9114"></path></svg>',
        error: '<svg style="height: 20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs></defs><ellipse style="fill:#fff" cx="12" cy="12" rx="12" ry="12"></ellipse><line id="primary" x1="18" y1="18" x2="6" y2="6" style="fill:none;stroke:#b80f0a;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"></line><line id="primary-2" data-name="primary" x1="18" y1="6" x2="6" y2="18" style="fill:none;stroke:#b80f0a;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"></line></svg>'
    };
    document.body.insertAdjacentHTML('beforeend', `<div class="notiSweet_notification notiSweet_swipeUpAnim notiSweet_${type}">${icons[type]}<div class="notiSweet_messageBox"><div class="notiSweet_titre">${title}</div><div class="notiSweet_description">${message}</div></div><button class="notiSweet_closeButton"><svg viewBox="0 0 24 24" focusable="false" class="notiSweet_closeSvg" aria-hidden="true"><path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.440A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg></button></div>`);
    const notificationBox = document.querySelector('.notiSweet_notification');
    const closeButton = notificationBox.querySelector('.notiSweet_closeButton');
    const removeNotification = () => {
        notificationBox.classList.add('notiSweet_swipeDownAnim');
        setTimeout(() => notificationBox.remove(), 700);
    };
    closeButton.addEventListener('click', removeNotification);
    if (second !== undefined) {
        setTimeout(() => notificationBox.classList.remove('notiSweet_swipeUpAnim'), 700);
        setTimeout(removeNotification, (second * 1000) + 700);
    }
}
