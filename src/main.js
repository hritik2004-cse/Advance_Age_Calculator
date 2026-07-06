import "./style.css";

const isValidDate = (date) => {
  return (
    Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
  );
};

const calculateAge = () => {
  const date = new Date();
  const birthDateInput = document.getElementById("birthDate").value.trim();
  const birthDateParts = birthDateInput.split("-"); // it will split the string from - and convert it to array

  const birthDay = Number(birthDateParts[0]);
  const birthMonth = Number(birthDateParts[1]) - 1; // the month stored in Date object starts from 0
  const birthYear = Number(birthDateParts[2]);

  const birthDate = new Date(birthYear,birthMonth,birthDay);

  if (!isValidDate(birthDate)) {
    alert("Not a valid date: Format Should be DD-MM-YYYY");
    return;
  }

  if(birthDate > date){
    alert('Birth Dates cannot be in future!')
    return;
  }

  const ageInMilliSeconds = date - birthDate;
  const ageInSeconds = Math.floor(ageInMilliSeconds / 1000); // 1sec = 1000ms
  const ageInMinutes = Math.floor(ageInSeconds / 60); // 1m = 60sec
  const ageInHours = Math.floor(ageInMinutes / 60); // 1hr = 60min
  const ageInDays = Math.floor(ageInHours / 24); // 1day = 24hrs
  const ageInWeeks = Math.floor(ageInDays / 7); // 1week = 7days
  const ageInMonths = Math.floor(ageInDays / 30.436875); // 1month = 30.436875days approx
  const ageInYears = Math.floor(ageInDays / 365.25); // 1year = 365.25days approx

  const resultContainer = document.getElementById("resultContainer");
  const result = document.getElementById("result");

  result.innerHTML = `
    <div class="flex items-center gap-2 mb-1">
        <h3 class="text-md text-white capitalize">age:</h3>
        <p class="text-sm text-white/70">${ageInYears} years, ${ageInMonths % 12} months, ${ageInDays % 30} days</p>
    </div>
    <div class="flex items-center gap-2 mb-1">
        <h3 class="text-md text-white capitalize">months passed:</h3>
        <p class="text-sm text-white/70">${ageInMonths} months</p>
    </div>
    <div class="flex items-center gap-2 mb-1">
        <h3 class="text-md text-white capitalize">weeks passed:</h3>
        <p class="text-sm text-white/70">${ageInWeeks} weeks</p>
    </div>
    <div class="flex items-center gap-2 mb-1">
        <h3 class="text-md text-white capitalize">days passed:</h3>
        <p class="text-sm text-white/70">${ageInDays} days</p>
    </div>
    <div class="flex items-center gap-2 mb-1">
        <h3 class="text-md text-white capitalize">hours passed:</h3>
        <p class="text-sm text-white/70">${ageInHours} hours</p>
    </div>
    <div class="flex items-center gap-2 mb-1">
        <h3 class="text-md text-white capitalize">minutes passed:</h3>
        <p class="text-sm text-white/70">${ageInMinutes} minutes</p>
    </div>
    <div class="flex items-center gap-2 mb-1">
        <h3 class="text-md text-white capitalize">seconds passed:</h3>
        <p class="text-sm text-white/70">${ageInSeconds} seconds</p>
    </div>
    <div class="flex items-center gap-2 mb-1">
        <h3 class="text-md text-white capitalize">milliseconds passed:</h3>
        <p class="text-sm text-white/70">${ageInMilliSeconds} ms</p>
    </div>
  `;

  resultContainer.classList.remove('hidden')
  resultContainer.classList.add('block')

  console.log(birthDateInput);
  console.log(birthDateParts);
  console.log(birthDay);
  console.log(birthMonth);
  console.log(birthYear);
  console.log(birthDate);
  console.log(date);
};

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stops page from reloading during submittion
  calculateAge();
});
