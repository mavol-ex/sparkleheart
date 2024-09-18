const ScrollButton = () => {
  const btnUp = document.getElementById("btn-up");
  let isScrolling;

  // Added debounce to avoid too frequent calling.
  document.addEventListener("scroll", () => {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
      if (window.scrollY > 50) {
        btnUp.classList.add("active");
      } else {
        btnUp.classList.remove("active");
      }
    }, 50);
  });

  btnUp.addEventListener("click", () => {
    btnUp.classList.remove("active");
  });
};

const acceptCookiesPopup = () => {
  const cookiesPopup = document.getElementById("accept-cookies");

  setTimeout(() => {
    cookiesPopup.classList.add("active");
  }, 1500);

  const close = () => {
    cookiesPopup.classList.remove("active");
  };

  cookiesPopup.addEventListener("click", () => {
    close();
  });

  return { close };
};

ScrollButton();
acceptCookiesPopup();
