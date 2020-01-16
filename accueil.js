

async function a() {
  let data = await fetch("https://dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/?count=10&gender=b&maxage=40&minage=30&cc=all&email=gmail.com%252Cyahoo.com&pwlen=12&ip=a&phone=l%252Ct%252Co&uuid=false&lic=false&color=false&seed=helloworld&images=false&format=json", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com",
      "x-rapidapi-key": "bd01965d33msh19d8910923c1bfap18f527jsn4dfdd7d30133"
    }
  });
  data = await data.json();
  console.log(data);

  var img = document.getElementsByClassName("tabAbo0");



var div = document.getElementsByClassName("tabAbo");

  function b() {
    for(var i = 0; i < div.length; i++){
      div[i].innerHTML = data[i].username
    }
    
    console.log(div)
  }

  var div2 = document.getElementsByClassName("tabAbo2");

  function c() {
    for(var i = 0; i < div2.length; i++){
      div2[i].innerHTML = data[i].lastname
    }
    
    console.log(div2)
  }

  var div3 = document.getElementsByClassName("tabAbo3");

  function d() {
    for(var i = 0; i < div3.length; i++){
      div3[i].innerHTML = data[i].age
    }
    
    console.log(div3)
  }

b();
c();
d();

}

a();
  