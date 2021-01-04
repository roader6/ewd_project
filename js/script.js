var arr = ["Miesiąc",0,0,0,0,0,0,0,0,0,0,0,0,0]; //chart1
var arr1 = ["Średnia ocena telefonu w danym miesiącu",0,0,0,0,0,0,0,0,0,0,0,0,0]; ////chart2
var arr2 = ["Wartość sprzedaży",0,0,0,0,0,0,0,0,0,0,0,0,0]; ////chart3

fetch('https://my.api.mockaroo.com/ewd.json?key=b68b4930')
  .then(response => response.json())
  .then(data => {
    //100 rows indexed from 0 to 99
    for(var i=0;i<=99;i++){
      for(var j=1;j<=12;j++){
        if(data[i].month == j){
          arr[j+1] = arr[j+1]+1;
          arr1[j+1] = arr1[j+1]+data[i].rating;
        }
      }
    };

    for(j=2;j<=13;j++){
      arr1[j] = arr1[j]/arr[j]; //chart2
      arr2[j] = arr[j]*1100; //chart3
    }

    //console.log(arr);
    //console.log(arr1);
    //console.log(arr2);
    
    var chart = bb.generate({ //chart1
      bindto: "#chart",
      data: {
        type: "bar",
        columns: [arr]
      }
    });

    var chart_2 = bb.generate({ //chart2
      bindto: "#chart2",
      data: {
        type: "area",
        columns: [arr1]
      }
    });

    var chart_3 = bb.generate({ //chart3
      bindto: "#chart3",
      data: {
        type: "spline",
        columns: [arr2]
      }
    });

});