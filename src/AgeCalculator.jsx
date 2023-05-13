


export default function calculateAge(birthday, birthmonth, birthyear) {
    const birthdate = new Date(`${birthyear}-${birthmonth}-${birthday}`);
    const today = new Date();
  
    let ageYears = today.getFullYear() - birthdate.getFullYear();
    let ageMonths = today.getMonth() - birthdate.getMonth();
    let ageDays = today.getDate() - birthdate.getDate();
  
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }
  
    if (ageDays < 0) {
      const daysInLastMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      ageDays += daysInLastMonth;
      ageMonths--;
    }
  
    return { years: ageYears, months: ageMonths, days: ageDays };
  }
  