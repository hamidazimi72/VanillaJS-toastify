import Toast from "./toastify.js";

const lightBtn = document.querySelector("#light");
const coloredBtn = document.querySelector("#colored");
const darkBtn = document.querySelector("#dark");
lightBtn.addEventListener("click", () => {
  Toast.default("text", { position: "bottom-left", theme: "light" });
  Toast.success("text", { position: "bottom-left", theme: "light" });
  Toast.warning("text", { position: "bottom-left", theme: "light" });
  Toast.error("text", { position: "bottom-left", theme: "light" });
  Toast.info("text", { position: "bottom-left", theme: "light" });
});

coloredBtn.addEventListener("click", () => {
  Toast.default("text", { position: "top-center", theme: "colored", autoClose: 10000, pauseOnHover: false });
  Toast.success("text", { position: "top-center", theme: "colored", autoClose: 10000, hideProgressBar: true });
  Toast.warning("text", { position: "top-center", theme: "colored", autoClose: 10000 });
  Toast.error("text", { position: "top-center", theme: "colored", autoClose: 10000 });
  Toast.info("text", { position: "top-center", theme: "colored", autoClose: 10000 });
});

darkBtn.addEventListener("click", () => {
  Toast.success("text", {
    position: "top-right",
    theme: "dark",
    transition: "slide",
    autoClose: 5000,
  });
  // Toast.success("text", { position: "top-right", theme: "dark" });
  // Toast.warning("text", { position: "top-right", theme: "dark" });
  // Toast.error("text", { position: "top-right", theme: "dark" });
  // Toast.info("text", { position: "top-right", theme: "dark" });
});
