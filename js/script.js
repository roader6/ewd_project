var arr = ["Miesiąc",0,0,0,0,0,0,0,0,0,0,0,0,0];
var arr1 = ["Średnia ocena telefonu w danym miesiącu",0,0,0,0,0,0,0,0,0,0,0,0,0];
var arr2 = ["Wartość sprzedaży",0,0,0,0,0,0,0,0,0,0,0,0,0];

fetch('https://my.api.mockaroo.com/ewd.json?key=b68b4930')
  .then(response => response.json())
  .then(data => {
    
    //console.log(data[0].month);
    for(var i=0;i<=99;i++){
      for(var j=1;j<=12;j++){
        if(data[i].month == j){
          arr[j+1] = arr[j+1]+1;
          arr1[j+1] = arr1[j+1]+data[i].rating;
        }
      }
    };

    for(j=2;j<=13;j++){
      arr1[j] = arr1[j]/arr[j];
      arr2[j] = arr[j]*1100;
    }

    console.log(arr);
    console.log(arr1);
    console.log(arr2);
    
    var chart = bb.generate({
      bindto: "#chart",
      data: {
          type: "bar",
          columns: [
              arr
              //["data2", 130, 100, 140, 35, 110, 50]
          ]
      }
  });

  var chart_2 = bb.generate({
    bindto: "#chart2",
    data: {
        type: "area",
        columns: [
            arr1
            //["data2", 130, 100, 140, 35, 110, 50]
        ]
    }
});

var chart = bb.generate({
  bindto: "#chart3",
  data: {
      type: "spline",
      columns: [
          arr2
          //["data2", 130, 100, 140, 35, 110, 50]
      ]
  }
});

  });