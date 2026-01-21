const currentLock = document.querySelector(".lock-wrapper.current");

if (currentLock) {
  setTimeout(() => {
    currentLock.classList.add("unlocking");
  }, 600);

  setTimeout(() => {
    document.body.style.transform = "scale(1.4)";
    document.body.style.opacity = "0";
  }, 1600);
}
