fetch('https://my.api.mockaroo.com/ewd.json?key=364d7740')
  .then(response => response.json())
  .then(data => console.log(data));
  