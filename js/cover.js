const btnCopy = document.querySelectorAll(".btnCopy");
const copyClipboard = document.querySelectorAll(".biCopy");
const toastLiveExample1 = document.getElementById('liveToast1');
const toastLiveExample2 = document.getElementById('liveToast2');
const toastLiveExample3 = document.getElementById('liveToast3');
const contactWithMe = document.querySelectorAll(".contact-me");



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
    const toastBootstrap1 = bootstrap.Toast.getOrCreateInstance(toastLiveExample1);
    const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2);
    const toastBootstrap3 = bootstrap.Toast.getOrCreateInstance(toastLiveExample3);
    btnCopy[i].addEventListener('click', () => {
        if (i == 0) {
            toastBootstrap1.show();
        }
        if (i == 1) {
            toastBootstrap2.show();
        }
        if (i == 2) {
            toastBootstrap3.show();
        }
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