
# NotiSweet.JS

NotiSweet.JS is a JavaScript and CSS library designed to enhance user experience by providing modern and dynamic notifications. With sleek and responsive design, this project offers a seamless way to integrate notifications into web applications. Leveraging the power of JavaScript, NotiSweet.JS enables developers to create visually appealing and interactive notifications that capture users' attention. The CSS styling ensures a polished look, making notifications both functional and aesthetically pleasing. This project is a valuable tool for developers seeking to implement a user-friendly notification system that aligns with contemporary design principles.

## Installation


To integrate NotiSweet.JS into your project, start by downloading the latest version from the project's release page. Once downloaded, extract the contents of the compressed file to obtain a folder containing essential files—a CSS file and a JS file. Next, import these files into your web project by linking the CSS file in the HTML head section and including the JS file just before the closing body tag. This simple integration process enables you to leverage NotiSweet.JS for creating modern and dynamic notifications in your web application. To customize and trigger notifications, refer to the documentation or examples provided with the library. This straightforward installation method ensures a seamless addition of NotiSweet.JS to enhance user experience through visually appealing and responsive notifications.
    
## The NotiSweet.JS function

#### Launch a notification

```http
  notiSweet({ type: "string", title: "string", message: "string", second: int })
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `type` | `string` | **Required**. Type of notification: *success*, *error* or *warning*. |
| `title` | `string` | **Required**. TItle of your notification. |
| `message` | `string` | **Required**. Message of your notification. |
| `second` | `string/int` | **Optional**. Numbers of second before your notification auto close: *int* or string: *infinite* |