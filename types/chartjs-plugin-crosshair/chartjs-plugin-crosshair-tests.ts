import * as Chart from 'chart.js';

const ctx = new CanvasRenderingContext2D();

// example from readme: https://github.com/AbelHeinsbroek/chartjs-plugin-crosshair#example
const chart = new Chart(ctx, {
  // ... data ...
  options: {
    // ... other options ...
    tooltips: {
      mode: 'interpolate',
      intersect: false
    },
    plugins: {
      crosshair: {
        line: {
          color: '#F66',  // crosshair line color
          width: 1        // crosshair line width
        },
        sync: {
          enabled: true,            // enable trace line syncing with other charts
          group: 1,                 // chart group
          suppressTooltips: false   // suppress tooltips when showing a synced tracer
        },
        zoom: {
          enabled: true,                                      // enable zooming
          zoomboxBackgroundColor: 'rgba(66,133,244,0.2)',     // background color of zoom box
          zoomboxBorderColor: '#48F',                         // border color of zoom box
          zoomButtonText: 'Reset Zoom',                       // reset zoom button text
          zoomButtonClass: 'reset-zoom',                      // reset zoom button class
        },
        callbacks: {
          beforeZoom(start, end) {                  // called before zoom, return false to prevent zoom
            return true;
          },
          afterZoom(start, end) {                   // called after zoom
          }
        }
      }
    }
  }
});

// samples from: https://github.com/AbelHeinsbroek/chartjs-plugin-crosshair/blob/master/samples/basic.html
function generateDataset(shift: number, label: string, color: string): Chart.ChartDataSets {
  const data: Chart.ChartPoint[] = [];
  let x = 0;
  while (x < 30) {
    data.push({ x, y: Math.sin(shift + x / 3) });
    x += Math.random();
  }
  const dataset: Chart.ChartDataSets = {
    backgroundColor: color,
    borderColor: color,
    showLine: true,
    fill: false,
    pointRadius: 2,
    label,
    data,
    lineTension: 0,
    interpolate: true
  };
  return dataset;
}

const chart1 = new Chart(ctx, {
  type: "scatter",
  options: {
    plugins: {
      crosshair: {
        sync: {
          enabled: false
        }
      }
    },

    tooltips: {
      mode: "interpolate",
      intersect: false,
    }
  },
  data: {
    datasets: [
      generateDataset(0, "A", "red"),
      generateDataset(1, "B", "green"),
      generateDataset(2, "C", "blue")
    ]
  }
});

const chart2 = new Chart(ctx, {
  type: "scatter",
  options: {
    tooltips: {
      mode: "interpolate",
      intersect: false,
    }
  },
  data: {
    datasets: [generateDataset(0, "A", "red")]
  }
});

const chart3 = new Chart(ctx, {
  type: "scatter",
  options: {
    tooltips: {
      mode: "interpolate",
      intersect: false,
    }
  },
  data: {
    datasets: [generateDataset(1, "B", "green")]
  }
});
const chart4 = new Chart(ctx, {
  type: "scatter",
  options: {
    tooltips: {
      mode: "interpolate",
      intersect: false,
    }
  },
  data: {
    datasets: [generateDataset(1, "C", "blue")]
  }
});

const chart5 = new Chart(ctx, {
  type: "scatter",
  options: {
    plugins: {
      crosshair: {
        sync: {
          enabled: false
        },
      }
    },
    tooltips: {
      mode: "interpolate",
      intersect: false,
    },
    animation: {
      duration: 0
    },

    responsiveAnimationDuration: 0
  },
  data: {
    datasets: [
      generateDataset(0, "A", "red"),
      generateDataset(1, "B", "green"),
      generateDataset(2, "C", "blue")
    ]
  }
});

const panZoom = (e: KeyboardEvent) => {
  if (e.keyCode === 37) {
    chart5.panZoom(-5);
  } else if (e.keyCode === 39) {
    chart5.panZoom(5);
  }
};
