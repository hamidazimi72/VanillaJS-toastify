// console.log(Notification.permission);

// const showNotification = () => {
//   const notification = new Notification("Hello World!", {
//     body: "this is a single body",
//     silent: true,
//   });

//   notification.onclick = (e) => console.log(e);
// };

// if (Notification.permission === "granted") {
//   showNotification();
// } else if (Notification.permission !== "denied") {
//   Notification.requestPermission().then((per) => {
//     if (per === "granted") {
//       showNotification();
//     }
//   });
// }
