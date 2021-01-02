arr1 = [];
arr2 = [];

fetch('https://my.api.mockaroo.com/ewd.json?key=a57b9890')
  .then(response => response.json())
  .then(data => {
    
    console.log(data[0].month);
    for(var i=5;i<=50;i++){
      arr2.push("month");
      arr2.push(data[i].month);
      arr1.push(arr2)
    }
    console.log(data);

    
  });

  
var chart = bb.generate({
    bindto: "#chart",
    data: {
        type: "bar",
        columns: [
            ["data1", 30, 200, 100, 170, 150, 250],
            ["data2", 130, 100, 140, 35, 110, 50]
        ]
    }
});