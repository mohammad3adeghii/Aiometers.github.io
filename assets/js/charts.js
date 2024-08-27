const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Suggested Min and Max Settings'
        }
      },
      scales: {
        y: {
          // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
          suggestedMin: 30,
        }
    }
  },
};