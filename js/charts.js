
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");
var myOrdersChart = new Chart(ordersChart, {
  type: 'line',
  data: {
    labels: ["Aug 1", "Aug 2", "Aug 3", "Aug 4", "Aug 5", "Aug 6", "Aug 7", "Aug 8", "Aug 9", "Aug 10", "Aug 11", "Aug 12", "Aug 13"],
    datasets: [{
      label: "Orders",
      lineTension: 0.3,
      backgroundColor: "rgb(55, 49, 94, 0.5)",
      borderColor: "rgba(218,65,103,0.8)",
      pointBackgroundColor: "rgba(218,65,103,0.8)",
      pointBorderColor: "rgba(218,65,103,1)",
      pointHoverBackgroundColor: "rgba(218,65,103,0.8)",
      pointRadius: 5,
      pointHoverRadius: 5,
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [7559, 30201, 24201, 20012, 19501, 26011, 32420, 35012, 30087, 29515, 20215, 35785, 39741],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgb(55, 49, 94, 0.2)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");
var myVisitorChart = new Chart(visitorChart, {
  type: 'bar',
  data: {
    labels: ["June", "July", "August", "September ", "October", "November", "December"],
    datasets: [{
      label: "Man",
      backgroundColor: "rgb(55, 49, 94, 0.8)",
      hoverBackgroundColor: "rgb(55, 49, 94, 1)",
      data: [4001, 4510, 13048, 5001, 7085, 9505, 12001],
    },{
      label: "Women",
      backgroundColor: "rgba(218,65,103,0.8)",
      hoverBackgroundColor: "rgba(218,65,103,1)",
      data: [5801, 5910, 15848, 7201, 9785, 13005, 14001],
    }
  ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 8
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 8
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: true
    }
  }
});

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");
var myCitiesChart = new Chart(citiesChart, {
  type: 'pie',
  data: {
    labels: ["Riyadh", "Jaddah", "Sharqia", "Mecca"],
    datasets: [{
      data: [40, 20.2, 10.11, 30],
      backgroundColor: ["rgba(218,65,103,0.8)", "rgb(55, 49, 94, 0.8)", "rgba(218,65,99,0.8)", "rgb(25, 39, 90, 0.8)"],
    }],
  },
});

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");
var myRatChart = new Chart(ratChart, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
      label: "Average Rat",
      borderColor: "rgba(218,65,103,1)",
      pointBackgroundColor: "rgba(218,65,103)",
      pointBorderColor: "rgba(218,65,103,1)",
      pointHoverBackgroundColor: "rgba(218,65,103,0.8)",
      pointRadius: 5,
      pointHoverRadius: 5,
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [1, 1.5, 2.5, 4, 5, 3.2, 4.2],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 5,
          maxTicksLimit: 6
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
