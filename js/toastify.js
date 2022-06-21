import Timer from "./timeout.js";

export default class Toast {
  constructor(
    content = "",
    {
      position = "top-right", // top-right | top-left | top-center | bottom-right | bottom-left | bottom-center
      theme = "colored", // light | dark | colored
      transition = "slide", // slide |
      autoClose = false, // bool | number(ms)
      hideProgressBar = false, // bool
      pauseOnHover = true, // bool
      newestOnTop = false, // bool
    }
  ) {
    this.content = content;
    this.position = position;
    this.theme = theme;
    this.transition = transition;
    this.autoClose = autoClose;
    this.hideProgressBar = hideProgressBar;
    this.pauseOnHover = pauseOnHover;
    this.newestOnTop = newestOnTop;
  }

  static uniqeIdGenerator = () => Math.random().toString(16).slice(2);

  static createWrapper() {
    let wrapper = document.querySelector(".toast-wrapper");

    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.classList.add("toast-wrapper");
      document.body.appendChild(wrapper);
    }

    return wrapper;
  }

  static createContainer(position, newestOnTop) {
    const wrapper = this.createWrapper();
    let container = wrapper.querySelector(`.toast-container-${position}`);

    if (!container) {
      container = document.createElement("div");
      container.classList.add("toast-container", `toast-container-${position}`);
      if (newestOnTop) container.classList.add("toast-container-reverse");
      wrapper.appendChild(container);
    }

    return container;
  }

  static createToast(
    type = "default",
    content = "",
    {
      position = "top-right",
      theme = "colored",
      transition = "slide",
      autoClose = false,
      hideProgressBar = false,
      pauseOnHover = true,
      newestOnTop = false,
    }
  ) {
    const container = this.createContainer(position, newestOnTop);
    const toast = document.createElement("div");

    toast.setAttribute("id", this.uniqeIdGenerator());
    toast.classList.add(
      "toast",
      `toast-${theme}-${type}`,
      `toast-enter-${transition}-${position}`
    );
    toast.textContent = content;

    if (autoClose) {
      const timer = new Timer(
        () => this.removeToast(toast, transition, position),
        autoClose
      );

      const progressBar = document.createElement("div");
      if (!hideProgressBar) {
        toast.appendChild(progressBar);

        progressBar.classList.add("toast-progress", `toast-progress-${type}`);
        progressBar.style.animationDuration = `${autoClose}ms`;
      }

      if (pauseOnHover) {
        toast.addEventListener("mouseenter", () => {
          if (!hideProgressBar) progressBar.style.animationPlayState = "paused";
          if (document.hasFocus()) timer.pause();
        });

        toast.addEventListener("mouseleave", () => {
          if (!hideProgressBar && document.hasFocus())
            progressBar.style.animationPlayState = "running";
          if (document.hasFocus()) timer.resume();
        });
      }

      window.addEventListener("blur", () => {
        progressBar.style.animationPlayState = "paused";
        timer.pause();
      });

      window.addEventListener("focus", () => {
        progressBar.style.animationPlayState = "running";
        timer.resume();
      });
    }

    container.appendChild(toast);

    toast.addEventListener("click", () =>
      this.removeToast(toast, transition, position)
    );
  }

  static removeToast(el, transition, position) {
    let containerLength, wrapperLength;
    let id = el.getAttribute("id") || "";
    let element = document.getElementById(id);

    const container = el?.parentElement;
    const wrapper = container?.parentElement;

    if (container) {
      element.classList.add(`toast-exit-${transition}-${position}`);
      element.classList.remove(`toast-enter-${transition}-${position}`);
      element.addEventListener("animationend", () => {
        element.remove();
        containerLength = container.children.length;
        if (containerLength < 1) container.remove();

        if (wrapper) {
          wrapperLength = wrapper.children.length;
          if (wrapperLength < 1) {
            wrapper.remove();
          }
        }
      });
    }
  }

  static default(
    content = "",
    {
      position = "top-right",
      theme = "colored",
      transition = "slide",
      autoClose = false,
      hideProgressBar = false,
      pauseOnHover = true,
      newestOnTop = false,
    }
  ) {
    Toast.createToast("default", content, {
      position,
      theme,
      transition,
      autoClose,
      hideProgressBar,
      pauseOnHover,
      newestOnTop,
    });
  }

  static success(
    content = "",
    {
      position = "top-right",
      theme = "colored",
      transition = "slide",
      autoClose = false,
      hideProgressBar = false,
      pauseOnHover = true,
      newestOnTop = false,
    }
  ) {
    Toast.createToast("success", content, {
      position,
      theme,
      transition,
      autoClose,
      hideProgressBar,
      pauseOnHover,
      newestOnTop,
    });
  }

  static error(
    content = "",
    {
      position = "top-right",
      theme = "colored",
      transition = "slide",
      autoClose = false,
      hideProgressBar = false,
      pauseOnHover = true,
      newestOnTop = false,
    }
  ) {
    this.createToast("error", content, {
      position,
      theme,
      transition,
      autoClose,
      hideProgressBar,
      pauseOnHover,
      newestOnTop,
    });
  }

  static warning(
    content = "",
    {
      position = "top-right",
      theme = "colored",
      transition = "slide",
      autoClose = false,
      hideProgressBar = false,
      pauseOnHover = true,
      newestOnTop = false,
    }
  ) {
    this.createToast("warning", content, {
      position,
      theme,
      transition,
      autoClose,
      hideProgressBar,
      pauseOnHover,
      newestOnTop,
    });
  }

  static info(
    content = "",
    {
      position = "top-right",
      theme = "colored",
      transition = "slide",
      autoClose = false,
      hideProgressBar = false,
      pauseOnHover = true,
      newestOnTop = false,
    }
  ) {
    this.createToast("info", content, {
      position,
      theme,
      transition,
      autoClose,
      hideProgressBar,
      pauseOnHover,
      newestOnTop,
    });
  }
}
