const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode');


// Dark mode
if (isDarkMode) {
  body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', true);
  } else {
    localStorage.removeItem('darkMode');
  }
});


// set year
const today = Date.now();

const todayFa = {
  "day": getDateFormat(today, { "day": "2-digit" }),
  "month": getDateFormat(today, { "month": "numeric" }),
  "year": getDateFormat(today, { "year": "numeric" })
}

function getDateFormat(uDate, option) {
  let date = new Intl.DateTimeFormat('fa-IR', option).format(uDate);
  return date;
}

const data = document.getElementById("data");
console.log(todayFa);
data.innerHTML = todayFa.day + ' / ' + todayFa.month + ' / ' + todayFa.year;

