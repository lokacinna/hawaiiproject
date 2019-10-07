
$( document ).ready(function() {
  createCharts();
});

function createCharts() {
  var chart = c3.generate({
      bindto: '#chart-top',
      data: {
        columns: [
          ['2017', 1024115, 912291, 1051514, 978406, 971957, 1066012, 1139710, 1096537, 925203, 962692, 964993, 1142178],
          ['2016', 711868, 685557, 775981, 677378, 707394, 798095, 832486, 775621, 657703, 693242, 687204, 819274],
          ['2015', 676221, 653652, 767989, 667787, 701047, 776972, 815600, 757539, 623899, 670039, 659531, 792742]
        ],
        axes: {
          data2: 'y2'
        }
      },
      axis: {
        y: {
          label: {
            text: 'Number of Tourists',
            position: 'outer-middle'
          }
        },
        x: {
          type: 'category',
          categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          label: {
            text: 'Months of the Year',
            position: 'middle'
          }
        }
      }
  });

  var chart = c3.generate({
    bindto: '#gender-chart',
    data: {
        // iris data from R
        columns: [
            ['Domestic tourists in 2017', 8409740],
            ['International tourists in 2017', 3825868],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

var chart = c3.generate({
    bindto: '#age-chart',
    data: {
        columns: [
          ['2017', 1024115, 912291, 1051514, 978406, 971957, 1066012, 1139710, 1096537, 925203, 962692, 964993, 1142178],
          ['2016', 711868, 685557, 775981, 677378, 707394, 798095, 832486, 775621, 657703, 693242, 687204, 819274],
          ['2015', 676221, 653652, 767989, 667787, 701047, 776972, 815600, 757539, 623899, 670039, 659531, 792742]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    axis: {
      y: {
        label: {
          text: 'Number of Tourists',
          position: 'outer-middle'
        }
      },
      x: {
        type: 'category',
        categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        label: {
          text: 'Months of the Year',
          position: 'middle'
        }
      }
    }
});

}
