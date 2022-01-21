function calculateTotalWeight(data) {
  const totals = [];

  

  return totals;
}

function populateChart(data) {
  const durations = data.map(({ totalDuration }) => totalDuration);
  const pounds = calculateTotalWeight(data);

  const line = document.querySelector('#canvas').getContext('2d');
  const bar = document.querySelector('#canvas2').getContext('2d');

  const labels = data.map(({ day }) => {
    const date = new Date(day);

    // Use JavaScript's `Intl` object to help format dates
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    }).format(date);
  });

  let lineChart = new Chart(line, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Workout Duration In Minutes',
          backgroundColor: 'blue',
          borderColor: 'blue',
          data: durations,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Time Spent Working Out last week',
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  let barChart = new Chart(bar, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Pounds',
          data: pounds,
          backgroundColor: '#51469e',
         
          borderColor: '469a9e',
          borderWidth: 1,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'Pounds Lifted last week',
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

// get all workout data from back-end
API.getWorkoutsInRange().then(populateChart);
