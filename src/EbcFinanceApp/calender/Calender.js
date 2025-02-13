import React, { useState } from "react";

export default function Calender() {
  const [week, setWeek] = useState([]);
  let arr = [];
  function getWeeksInYear(year) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const weeksInYear = {};

    // Loop through each month
    for (let month = 0; month < 12; month++) {
      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);

      let currentWeekStart = new Date(firstDayOfMonth);
      weeksInYear[months[month]] = [];

      // Loop through the days of the month to calculate weeks
      while (currentWeekStart <= lastDayOfMonth) {
        const currentWeekEnd = new Date(currentWeekStart);
        currentWeekEnd.setDate(currentWeekStart.getDate() + 6);

        // Ensure the week end does not exceed the last day of the month
        const endOfWeek =
          currentWeekEnd > lastDayOfMonth ? lastDayOfMonth : currentWeekEnd;

        // Push the current week to the month's weeks array
        weeksInYear[months[month]].push({
          start: formatDate(currentWeekStart),
          end: formatDate(endOfWeek),
        });

        // Move to the next week
        currentWeekStart.setDate(currentWeekStart.getDate() + 7);
      }
    }

    return weeksInYear;
  }

  // Helper function to format date (e.g., "YYYY-MM-DD")
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // Display the weeks of the year
  const year = 2025; // Replace with the desired year
  const weeks = getWeeksInYear(year);

  // Output the result
  const weeksInMonth = () => {
    for (const [month, weeksInMonth] of Object.entries(weeks)) {
      arr.push(weeksInMonth);

      weeksInMonth.forEach((week, index) => {
        // console.log(`  Week ${index + 1}: ${week.start} - ${week.end}`);
      });
    }

    return arr;
  };

  const displayJanuary = weeksInMonth()[0].map((week, i) => (
    <div>
      <h1>Week {i + 1}</h1>
      {week.start}- {week.end}
    </div>
  ));

  const displayFeb = weeksInMonth()[1].map((week, i) => (
    <div>
      <h1>Week {i + 1}</h1>
      {week.start}- {week.end}
    </div>
  ));

  return (
    <main>
      <section>
        <div>
          <h1>January</h1>
          {displayJanuary}
        </div>
        <div>
          <h1>February</h1>
          {displayFeb}
        </div>
      </section>
    </main>
  );
}
