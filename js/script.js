const navbar = document.getElementById("nav");
const btnClose = document.getElementById("btnClose");
const darkModeToggle1 = document.getElementById('darkModeToggle1');
const darkModeToggle2 = document.getElementById('darkModeToggle2');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
const changeIcons = document.getElementsByClassName("active-bi");
const hoverButtons = document.getElementsByClassName('btn-hover');
const hoverSpinners = document.getElementsByClassName('spinner-border');
const hoverLoding = document.getElementsByClassName('visually');
const text = document.querySelectorAll(".text-hover");
const activeMenu = document.querySelectorAll(".nav-link");
const btnCopy = document.querySelectorAll(".btnCopy");
const copyClipboard = document.querySelectorAll(".biCopy");
const toastLiveExample = document.getElementById('liveToast');
const contactWithMe = document.querySelectorAll(".contact-me");



// Auto close offcanvas
window.addEventListener('resize', function () {
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
        btnClose.click();
    }
});


// dark mode two checkboxes
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle1.checked = true;
    darkModeToggle2.checked = true;

    for (let i = 0; i < changeIcons.length; i++) {
        changeIcons[i].classList.add("bi-brightness-high-fill");
        changeIcons[i].classList.remove("bi-moon-fill");
    }
}

darkModeToggle1.addEventListener('change', () => {
    if (darkModeToggle1.checked) {
        body.classList.add('dark-mode');
        darkModeToggle2.checked = true;
        localStorage.setItem('darkMode', 'enabled');

        // change icon
        for (let i = 0; i < changeIcons.length; i++) {
            changeIcons[i].classList.add("bi-brightness-high-fill");
            changeIcons[i].classList.remove("bi-moon-fill");
        }
    }
    else {
        body.classList.remove('dark-mode');
        darkModeToggle2.checked = false;
        localStorage.setItem('darkMode', 'disabled');

        // change icon
        for (let i = 0; i < changeIcons.length; i++) {
            changeIcons[i].classList.add("bi-moon-fill");
            changeIcons[i].classList.remove("bi-brightness-high-fill");
        }
    }
});

darkModeToggle2.addEventListener('change', () => {
    if (darkModeToggle2.checked) {
        body.classList.add('dark-mode');
        darkModeToggle1.checked = true;
        localStorage.setItem('darkMode', 'enabled');

        // change icon
        for (let i = 0; i < changeIcons.length; i++) {
            changeIcons[i].classList.add("bi-brightness-high-fill");
            changeIcons[i].classList.remove("bi-moon-fill");
        }
    }
    else {
        body.classList.remove('dark-mode');
        darkModeToggle1.checked = false;
        localStorage.setItem('darkMode', 'disabled');

        // change icon
        for (let i = 0; i < changeIcons.length; i++) {
            changeIcons[i].classList.add("bi-moon-fill");
            changeIcons[i].classList.remove("bi-brightness-high-fill");
        }
    }
});


// hover buttons
for (let i = 0; i < hoverButtons.length; i++) {
    hoverButtons[i].addEventListener('mouseenter', function () {
        hoverLoding[i].classList.remove("visually-hidden");
        hoverSpinners[i].classList.add("visually-hidden");
    });

    hoverButtons[i].addEventListener('mouseleave', function () {
        hoverLoding[i].classList.add("visually-hidden");
        hoverSpinners[i].classList.remove("visually-hidden");
    });
}


// hover text
for (let i = 0; i < text.length; i++) {
    text[i].innerHTML = text[i].innerText.split('').map((letters, i) => `<span style="transition-delay:${i * 40}ms; filter:hue-rotate(${i * 30}deg)">${letters}</span>`).join("");
}


// active menu
for (let i = 0; i < activeMenu.length; i++) {
    activeMenu[i].addEventListener("click", function () {
        // Remove active class from all nav-links
        for (let j = 0; j < activeMenu.length; j++) {
            activeMenu[j].classList.remove("active");
        }
        // Add active class to clicked nav-link
        activeMenu[i].classList.add("active");

        if (i <= 5) {
            activeMenu[i + 5].classList.add("active");
        }
        else {
            activeMenu[i - 5].classList.add("active");
        }
    });
}



// animation button copy text
for (let i = 0; i < btnCopy.length; i++) {
    btnCopy[i].addEventListener("click", function () {
        this.classList.remove("press");
        setTimeout(function () {
            copyClipboard[i].classList.remove("bi-clipboard");
            copyClipboard[i].classList.add("bi-check-lg");
            btnCopy[i].classList.add("press");
        }, 10);
    });
}

// button copy text 1,2,3 
function copyText1() {

    var textToCopy = "codeversesite@gmail.com";

    if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(function () {
            console.log("متن کپی شد");
        }).catch(function (err) {
            console.error("خطا در کپی متن.", err);
            // در صورتی که کپی با `navigator.clipboard` موفقیت‌آمیز نباشد، از تابع دیگر استفاده می‌کنیم
            var copied = copyTextToClipboard(textToCopy);
            if (copied) {
                console.log("متن کپی شد.");
            } else {
                console.error("کپی متن ناموفق بود.");
            }
        });
    } else {
        // در صورتی که مرورگر از `navigator.clipboard` پشتیبانی نکند، از تابع دیگر استفاده می‌کنیم
        var copied = copyTextToClipboard(textToCopy);
        if (copied) {
            console.log("متن کپی شد.");
        } else {
            console.error("کپی متن ناموفق بود.");
        }
    }

}
function copyText2() {

    var textToCopy = "@Mohammad_mk_1380";

    if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(function () {
            console.log("متن کپی شد");
        }).catch(function (err) {
            console.error("خطا در کپی متن.", err);
            // در صورتی که کپی با `navigator.clipboard` موفقیت‌آمیز نباشد، از تابع دیگر استفاده می‌کنیم
            var copied = copyTextToClipboard(textToCopy);
            if (copied) {
                console.log("متن کپی شد.");
            } else {
                console.error("کپی متن ناموفق بود.");
            }
        });
    } else {
        // در صورتی که مرورگر از `navigator.clipboard` پشتیبانی نکند، از تابع دیگر استفاده می‌کنیم
        var copied = copyTextToClipboard(textToCopy);
        if (copied) {
            console.log("متن کپی شد.");
        } else {
            console.error("کپی متن ناموفق بود.");
        }
    }

}
function copyText3() {

    var textToCopy = "09162917063";

    if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(function () {
            console.log("متن کپی شد");
        }).catch(function (err) {
            console.error("خطا در کپی متن.", err);
            // در صورتی که کپی با `navigator.clipboard` موفقیت‌آمیز نباشد، از تابع دیگر استفاده می‌کنیم
            var copied = copyTextToClipboard(textToCopy);
            if (copied) {
                console.log("متن کپی شد.");
            } else {
                console.error("کپی متن ناموفق بود.");
            }
        });
    } else {
        // در صورتی که مرورگر از `navigator.clipboard` پشتیبانی نکند، از تابع دیگر استفاده می‌کنیم
        var copied = copyTextToClipboard(textToCopy);
        if (copied) {
            console.log("متن کپی شد.");
        } else {
            console.error("کپی متن ناموفق بود.");
        }
    }

}


// set year
date.innerHTML = new Date().getFullYear();




// toast
const toastElList = document.querySelectorAll('.toast');
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, {
    animation: true,
    autohide: true,
    delay: 1000
}));

// btn copy show toast
for (let i = 0; i < btnCopy.length; i++) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    btnCopy[i].addEventListener('click', () => {
        toastBootstrap.show();
    })
}



// footer Contact with me resize
document.addEventListener('DOMContentLoaded', function () {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 430) {
        for (let i = 0; i < contactWithMe.length; i++) {

            contactWithMe[i].classList.remove("col-6");
            contactWithMe[i].classList.add("col-12");
        }
    }
    else {
        for (let i = 0; i < contactWithMe.length; i++) {

            contactWithMe[i].classList.remove("col-12");
            contactWithMe[i].classList.add("col-6");
        }
    }
});


window.addEventListener('resize', function () {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 430) {
        for (let i = 0; i < contactWithMe.length; i++) {

            contactWithMe[i].classList.remove("col-6");
            contactWithMe[i].classList.add("col-12");
        }
    }
    else {
        for (let i = 0; i < contactWithMe.length; i++) {

            contactWithMe[i].classList.remove("col-12");
            contactWithMe[i].classList.add("col-6");
        }
    }
});