### Lecture Code  

Today's lecture code will be based around building a simple `Charts.js` example application.  

Start by creating your `index.html`:  
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Charts Demo</title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
  </head>
  <body>
    <canvas id="chart"></canvas>
    <script type="text/javascript" src="app.js"></script>
  </body>
</html>
```  

Then in `style.css`:
```css
canvas {
  width: 75%;
  height: 500px;
}
```  

Add a `app.js` file:
```JavaScript
'use strict';

var ctx = document.getElementById('chart').getContext('2d');

var data = [12, 19, 3, 5, 2, 3];
var labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labelColors,
    datasets: [{
      label: '# of Votes',
      data: data,
      backgroundColor: labelColors
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
```  

Show students that they can also change the data using `.` notation:  
```javascript
myChart.data.datasets[0].data = [100,200,300,50,10];
```  
