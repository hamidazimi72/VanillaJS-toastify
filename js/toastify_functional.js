const DEFAULT_OPTIONS = {
  position: "top-right",
  text: "",
  type: "",
  autoClose: null,
};

const uniqeIdGenerator = () => {
  let id = Math.random().toString(10).slice(2);
  return id;
};

const createWrapper = () => {
  const wrapper = document.querySelector(".toast-wrapper");

  if (!wrapper) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("toast-wrapper");
    document.body.appendChild(wrapper);
  }
};

const createContainer = (position = "") => {
  const wrapper = document.querySelector(".toast-wrapper");
  const container = wrapper.querySelector(`.toast-container-${position}`);

  if (!container) {
    const container = document.createElement("div");
    container.classList.add("toast-container");
    container.classList.add(`toast-container-${position}`);
    wrapper.appendChild(container);
  }
};

const createToast = (position = "", text = "", type = "", autoClose = null) => {
  let id = uniqeIdGenerator();
  const wrapper = document.querySelector(".toast-wrapper");
  const container = wrapper.querySelector(`.toast-container-${position}`);
  const toast = document.createElement("div");
  const progressBar = document.createElement("div");

  toast.setAttribute("id", id);
  toast.classList.add("toast");
  toast.classList.add(`toast-${type}`);
  toast.textContent = text;

  if (autoClose) {
    toast.appendChild(progressBar);
    progressBar.classList.add("toast-progress");
    progressBar.classList.add(`toast-progress-${type}`);

    progressBar.style.animationDuration = `${autoClose}ms`;
  }

  container.appendChild(toast);

  toast.addEventListener("click", () => removeToast(toast));

  if (autoClose) {
    setTimeout(() => {
      removeToast(toast);
    }, autoClose);
  }
};

const removeToast = (el) => {
  let containerLength;
  const container = el?.parentElement;

  let wrapperLength;
  const wrapper = container?.parentElement;

  if (container) {
    el.remove();
    containerLength = container.children.length;
    if (containerLength < 1) container.remove();
  }

  if (wrapper) {
    wrapperLength = wrapper.children.length;
    if (wrapperLength < 1) {
      wrapper.remove();
    }
  }
};

export const toast = (options) => {
  const mainOptions = { ...DEFAULT_OPTIONS, ...options };
  createWrapper(mainOptions?.position);
  createContainer(mainOptions?.position);
  createToast(mainOptions?.position, mainOptions?.text, mainOptions?.type, mainOptions?.autoClose);
};
