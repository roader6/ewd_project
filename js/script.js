var arr = ["Miesiąc",0,0,0,0,0,0,0,0,0,0,0,0,0];

fetch('https://my.api.mockaroo.com/ewd.json?key=a57b9890')
  .then(response => response.json())
  .then(data => {
    
    //console.log(data[0].month);
    for(var i=0;i<=99;i++){
      for(var j=1;j<=12;j++){
        if(data[i].month == j){
          arr[j+1] = arr[j+1]+1;
        }
      }
    };

    console.log(arr);

    
    var chart = bb.generate({
      bindto: "#chart",
      data: {
          type: "bar",
          columns: [
              arr,
              //["data2", 130, 100, 140, 35, 110, 50]
          ]
      }
  });

  });