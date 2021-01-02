var arr1 = [];
var arr2 = [];

fetch('https://my.api.mockaroo.com/ewd.json?key=a57b9890')
  .then(response => response.json())
  .then(data => {
    
    console.log(data[0].month);
    arr2.push("month");
    for(var i=0;i<=99;i++){
      arr2.push(data[i].month);
      arr1.push(arr2)
    };

    
    var chart = bb.generate({
      bindto: "#chart",
      data: {
          type: "bar",
          columns: [
              arr2,
              ["data2", 130, 100, 140, 35, 110, 50]
          ]
      }
  });

  });