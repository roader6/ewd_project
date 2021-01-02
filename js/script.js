fetch('https://my.api.mockaroo.com/ewd.json?key=364d7740')
  .then(response => response.json())
  .then(data => {
    console.log(data[0]);

    
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