//MMO Giveaways API
const giveaways = async function (){
    const url = 'https://mmo-games.p.rapidapi.com/giveaways';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3625aacc77mshfab8550bcad685cp158d9fjsnc5147841b6c1',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        //Do stuff with result
    } catch (error) {
        console.error(error);
    }    
}
const jsonData = [
    {"id":128122,"title":"Clash of Lords 2 Gift Pack Key Giveaway","keys_left":"20%","thumbnail":"https:\/\/www.mmobomb.com\/file\/2024\/3\/clash-of-lords-2-218x150.png","main_image":"https:\/\/www.mmobomb.com\/file\/2024\/3\/clash-of-lords-2.png","short_description":"To unlock your key instantly you just need to log in and click the button on the top.","giveaway_url":"https:\/\/www.mmobomb.com\/giveaway\/clash-of-lords-2-keys"},
    {"id":128067,"title":"Mobile Royale Gift Pack Key Giveaway","keys_left":"1%","thumbnail":"https:\/\/www.mmobomb.com\/file\/2024\/3\/mobile-royale-218x150.png","main_image":"https:\/\/www.mmobomb.com\/file\/2024\/3\/mobile-royale.png","short_description":"To unlock your key instantly you just need to log in and click the button on the top.","giveaway_url":"https:\/\/www.mmobomb.com\/giveaway\/mobile-royale-keys"},
    {"id":128072,"title":"Mythic Heroes Gift Pack Key Giveaway (New Players Only)","keys_left":"83%","thumbnail":"https:\/\/www.mmobomb.com\/file\/2022\/5\/mythic-heroes-box-218x150.png","main_image":"https:\/\/www.mmobomb.com\/file\/2022\/5\/mythic-heroes-box.png","short_description":"To unlock your key instantly you just need to log in and click the button on the top.","giveaway_url":"https:\/\/www.mmobomb.com\/giveaway\/mythic-heroes-keys-new-players"},
    {"id":128110,"title":"Evercore Heroes Beta Key Giveaway","keys_left":"10%","thumbnail":"https:\/\/www.mmobomb.com\/file\/2023\/8\/evercore-heroes-giveaway-218x150.png","main_image":"https:\/\/www.mmobomb.com\/file\/2023\/8\/evercore-heroes-giveaway.png","short_description":"To unlock your key instantly you just need to log in and click the button on the top.","giveaway_url":"https:\/\/www.mmobomb.com\/giveaway\/evercore-heroes-beta-keys"}
];
const specificUrl = jsonData[1].giveaway_url;
console.log(specificUrl); // Output: https://www.mmobomb.com/giveaway/mobile-royale-keys
const hyperLink = jsonData[1].giveaway_url; 
        const giveawayLink = document.getElementById('giveaway-link');
        giveawayLink.href = specificUrl;
        giveawayLink.textContent = specificUrl;

// Modal Start
var modal = document.getElementById('myModal');

var btn = document.getElementById("openModalBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
