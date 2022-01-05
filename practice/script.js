var word;
       // api url
const api_url = 
      "https://www.randomlists.com/data/words.json";
      $.getJSON(api_url, function(data) {
    if (word != null && word.length != 4) {
        $.getJSON(api_url, function(data) {
           var letters = word.match(/.{1}/g);
           $("#1Lett").text(letters[0]);
           $("#2Lett").text(letters[1]);
           $("#3Lett").text(letters[2]);
           $("#4Lett").text(letters[3]);
        }
        )} else {
           var letters = data.data[Math.round(Math.random() * (max - min) + min)].match(/.{1}/g);
           $("#1Lett").text(letters[0]);
           $("#2Lett").text(letters[1]);
           $("#3Lett").text(letters[2]);
           $("#4Lett").text(letters[3]);
        }
}, 50);