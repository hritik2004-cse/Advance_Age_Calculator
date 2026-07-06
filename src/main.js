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
    <div class="mb-5 pb-4 border-b border-white/10">
      <p class="text-[10px] font-semibold tracking-widest text-slate-500 uppercase mb-1">Your Age</p>
      <p class="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-indigo-200 to-cyan-300 leading-tight">${ageInYears} <span class="text-lg font-semibold text-slate-400">yrs</span> &nbsp;${ageInMonths % 12} <span class="text-lg font-semibold text-slate-400">mo</span> &nbsp;${ageInDays % 30} <span class="text-lg font-semibold text-slate-400">days</span></p>
    </div>
    <div class="grid grid-cols-2 gap-x-4 gap-y-3">
      <div class="flex flex-col gap-0.5">
        <span class="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">Months</span>
        <span class="text-base font-semibold text-white">${ageInMonths} <span class="text-sm font-normal text-slate-400">months</span></span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">Weeks</span>
        <span class="text-base font-semibold text-white">${ageInWeeks} <span class="text-sm font-normal text-slate-400">weeks</span></span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">Days</span>
        <span class="text-base font-semibold text-white">${ageInDays} <span class="text-sm font-normal text-slate-400">days</span></span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">Hours</span>
        <span class="text-base font-semibold text-white">${ageInHours} <span class="text-sm font-normal text-slate-400">hrs</span></span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">Minutes</span>
        <span class="text-base font-semibold text-white">${ageInMinutes} <span class="text-sm font-normal text-slate-400">min</span></span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">Seconds</span>
        <span class="text-base font-semibold text-white">${ageInSeconds} <span class="text-sm font-normal text-slate-400">sec</span></span>
      </div>
      <div class="col-span-2 flex flex-col gap-0.5 pt-1 border-t border-white/10">
        <span class="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">Milliseconds</span>
        <span class="text-base font-semibold text-white">${ageInMilliSeconds.toLocaleString()} <span class="text-sm font-normal text-slate-400">ms</span></span>
      </div>
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
