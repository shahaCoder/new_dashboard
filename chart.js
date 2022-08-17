const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Graph',
      backgroundColor: ['red', 'black', 'blue'],
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };





  
  const data2 = {
    datasets: [{
      label: 'My First Dataset',
      data: [300, 120, 100],
      backgroundColor: [
        'blue',
         'red',
        'yellow'
      ],
      hoverOffset: 4
    }]
  };

  const config2 = {
    type: 'doughnut',
    data: data2,
  };