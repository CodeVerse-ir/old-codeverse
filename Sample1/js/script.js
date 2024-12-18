const navbar = document.getElementById("nav");
const date = document.getElementById("date");
const hoverTextItems = document.getElementsByClassName("hover-text");
const hoverBiItems = document.getElementsByClassName("hover-bi");
const link = document.querySelector("link[rel='icon']");
const btnClose = document.getElementById("btnClose");


// Change the background color of the navbar
window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    navbar.style.setProperty('background-color', 'white', 'important');
    navbar.style.setProperty('  box-shadow', ' var(--light-shadow)', 'important');
  }
  else {
    navbar.style.setProperty('background-color', 'var(--clr-primary-5)', 'important');
  }
});

// set year
date.innerHTML = new Date().getFullYear();

// Change the icon of the last content
for (let i = 0; i < hoverTextItems.length; i++) {
  const hoverTextItem = hoverTextItems[i];
  const hoverBiItem = hoverBiItems[i];

  hoverTextItem.addEventListener('mouseenter', function () {
    hoverBiItem.classList.add("bi-caret-left-fill");
    hoverBiItem.classList.remove("bi-caret-left");
  });

  hoverTextItem.addEventListener('mouseleave', function () {
    hoverBiItem.classList.add("bi-caret-left");
    hoverBiItem.classList.remove("bi-caret-left-fill");
  });
}

// Change the site icon 16*16
document.addEventListener('DOMContentLoaded', function () {
  let j = 0;
  setInterval(() => link.href = `../favicon_io/favicon-16/${++j % 10}.png`, 1000);
});

// Change the site icon 32*32
document.addEventListener('DOMContentLoaded', function () {
  let j = 0;
  setInterval(() => link.href = `../favicon_io/favicon-32/${++j % 10}.png`, 1000);
});

// Auto close offcanvas
window.addEventListener('resize', function () {
  const windowWidth = window.innerWidth;
  if (windowWidth > 768) {
    btnClose.click();
  }
});
