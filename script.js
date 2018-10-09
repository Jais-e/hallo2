


var image = document.getElementById("logo");
            var currentPos = 0;
            var images = ['img/logo-on.png', 'img/logo-no-glow1.png', 'img/logo-no-glow2.png', 'img/logo-off-letter1.png', 'img/logo-off-letter2.png', 'img/logo-off5.png', 'img/logo-off6.png', 'img/logo-on1.png', ]

            function change() {


                image.src = images[Math.floor(Math.random() * images.length)];
            }

            setInterval(change, 1500);

var selectedCat1;
var selectedCat2;
var selectedCat3;
function toggleMenu(){
  document.getElementById('cat1').classList.toggle("show");
  return false;
}
function toggleMenu2(){
  document.getElementById('cat2').classList.toggle("show");
  return false;
}
function toggleMenu3(){
  document.getElementById('cat3').classList.toggle("show");
  return false;
}
$('#btn1').click(function(){
  selectedCat1 =1;
  $('#title1').html('<img src="img/beerlogo.png">');
  console.log(selectedCat1);
  return false;
});
$('#btn2').click(function(){
  selectedCat1 =2;
  console.log(selectedCat1);
  return false;
});
$('#btn3').click(function(){
  selectedCat1 =3;
  console.log(selectedCat1);
  return false;
});
$('#btn4').click(function(){
  selectedCat1 =4;
  console.log(selectedCat1);
  return false;
});


$('#btn5').click(function(){
  selectedCat2 =1;
  console.log(selectedCat1);
  return false;
});
$('#btn6').click(function(){
  selectedCat2 =2;
  console.log(selectedCat1);
  return false;
});
$('#btn7').click(function(){
  selectedCat2 =3;
  console.log(selectedCat1);
  return false;
});
$('#btn8').click(function(){
  selectedCat2 =4;
  console.log(selectedCat1);
  return false;
});

$('#btn9').click(function(){
  selectedCat3 =1;
  console.log(selectedCat1);
  return false;
});
$('#btn10').click(function(){
  selectedCat3 =2;
  console.log(selectedCat1);
  return false;
});
$('#btn11').click(function(){
  selectedCat3 =3;
  console.log(selectedCat1);
  return false;
});
$('#btn12').click(function(){
  selectedCat3 =4;
  console.log(selectedCat1);
  return false;
});

// Dette er vores randomizer - P.t. kan den vælge tre tilfældige items ud og sætte dem ind i html'en. Vi skal udvide den lidt :-)
$('#randomize').click(function(){
  var food =
  [
  ["<img src='img/alibaba.jpg'/>", "<h3>Ali Baba<br/>", "<p>Stop any person from Aarhus and ask about Ali Baba and they'll let you know how they serve the greatest drunk food in the city. Whether you want a slice of pizza or a kebab or a pita this is the place to go. <br></p><span class='adress'>Vestergade 6B<br/>8000 Aarhus C</span>"],
  ["<img src='img/kowloon.jpg'/>", "<h3>Kowloon</h3>", "<p>Everyone in Aarhus knows Kowloon for its delicious asian food and low prices. You can get a takeaway box for only 40 kr, but we will recommend you to eat at the restaurant and get the whole feel of Asia. <br></p><span class='adress'>Frederiksgade 78<br/>8000 Aarhus C</span>"],
  ["<img src='img/pitacorner.jpg'/>", "<h3>Pita corner</h3>", "<p>If you go to the corner of Vesterbro Torv where Pita Corner is located on a friday night you will find a line of people going from the small shop to the street but don't let that intimidate you. Pita Corner serves the greatest Pita in Aarhus and you don't want to miss out. <br></p><span class='adress'>Vesterbro Torv 17<br/>8000 Aarhus C</span>"],
  ["<img src='img/siamsushi.jpg'/>", "<h3>A+ Siam Sushi</h3>", "<p><br></p><span class='adress'><br/></span>"]
  ];
  var bars =
    [
  ["<img src='img/fattereskil.jpg'/>", "<h3>Fatter Eskil</h3>", "<p>Fatter Eskil is known in Aarhus for its live music. They used to play jazz and blues but most of the bands play cover music and pop today. At 02-05 am the place becomes a discotheque with live dj. <br></p><span class='adress'>Skolegade 25<br/>8000 Aarhus C</span>"],
  ["<img src='img/gbar.jpg'/>", "<h3>G-Bar</h3>", "<p> G-bar is the only gay bar in Aarhus. Still it is a place for all genders and sexualities where you canjust be yourself, let go, party and dance all night long.<br></p><span class='adress'>Skolegade 28<br/>8000 Aarhus C</span>"],
  ["<img src='img/oldirish.jpg'/>", "<h3>Old Irish</h3>", "<p>Do you want to watch sport while having a beer? Then Old Irish is the perfect place for you. It’s also a very charming bar, that mixes the vibe of Aarhus and old Ireland.<br></p><span class='adress'>Kannikegade 10<br/>8000 Aarhus C</span>"],
  ["<img src='img/bodegaen.jpg'/>", "<h3>Bodegaen</h3>", "<p>If you want to feel like a true local go to Bodegaen and order a 'Aarhus sæt' (a local Ceres beer and a shot). There is a true pub vibe and it's open most weekdays as well.<br></p><span class='adress'>Åboulevarden 33<br/>8000 Aarhus C</span>"]
  ];
  var cult =
    [
  ["<img src='img/steno.jpg'/>", "<h3>Steno Museet</h3>", "<p>This scientific museum explores the natural wonders of the world, digs deep in science history and teaches you about the stars in the great planetarium. It is a interesting place to learn about our world.<br></p><span class='adress'>C. F. Møllers Allé 2<br/>8000 Aarhus C</span>"],
  ["<img src='img/kunsthal.jpg'/>", "<h3>Kunsthal Aarhus</h3>", "<p>This exhibit hall shows contemporary art. They try to move the art around in Aarhus city, by making activities and showing it online. It’s worth a watch. <br></p><span class='adress'>J.M. Mørks Gade 13<br/>8000 Aarhus C</span>"],
  ["<img src='img/kvindemuseet.jpg'/>", "<h3>Kvindemuseet</h3>", "<p>This museum is one of the rare Women museums in the world. They discuss gender roles, body and sexuality, while showing both historical and present facts about the topic.<br></p><span class='adress'>Domkirkepladsen 5<br/>8000 Aarhus C</span>"],
  ["<img src='img/marselisborg.jpg'/>", "<h3>Marseillesborg slot</h3>", "<p>The danish royal family’s summer resident, and the garden is open to the public all year long, except when the royal family is staying there. It is a beautiful garden with spectacular view and great art.<br></p><span class='adress'>Kongevejen 100<br/>8000 Aarhus C</span>"]
  ];
  var activity =
    [
  ["<img src='img/ohaven.jpg'/>", "<h3>Ø-Haven</h3>", "<p>Ø-haven is Denmark's biggest city garden with one of the most beautiful views. It is open to the public but the produce of the garden is reserved for the city farmers so enjoy the garden with your eyes and nose only. <br></p><span class='adress'>Helga Pedersens gade<br/>8000 Aarhus C</span>"],
  ["<img src='img/eventhall.jpg'/>", "<h3>Eventhall</h3>", "<p>Eventhall is the greatest playground for adults in Aarhus. Try inflatable activities such as bungeebasket, gladiator fights and mega foosball or go outside to try a game of paintball.<br></p><span class='adress'>Øster Parkvej 2<br/>8270 Højbjerg</span>"],
  ["<img src='img/dyrehaven.jpg'/>", "<h3>Dyrehaven</h3>", "<p>In Dyrehaven you can meet deers up close and feed them carrots or apples. You can also see wild boar through a fence and talk a walk along the beach nearby. Keep in mind the animals are wild, not pets. <br></p><span class='adress'>Ørneredevej 6<br/>8270 Højbjerg</span>"],
  ["<img src='img/boulders.jpg'/>", "<h3>Aarhus Boulders</h3>", "<p>In bouldering you climb up to 4.5 meters high walls with no harness or other equipment. Aarhus Boulders is for everyone - whether you've climbed a hundred times or never before. <br></p><span class='adress'>Graham Bells vej 18A<br/>8200 Aarhus N</span>"]
  ];




  // Hvis bar kategori er valgt i slot1, 2 og 3
  if (selectedCat1 == 1 && selectedCat2 == 1 && selectedCat3 == 1){

    var randName = [];
    do {
      randName[randName.length] = bars.splice(
                                    Math.floor(Math.random() * bars.length)
                                  , 1)[0];
    } while (randName.length < 3);
  $('#one').html(randName[0]);
  $('#two').html(randName[1]);
  $('#three').html(randName[2]);
  $('select').hide();
  $('.selected').hide();
    console.log(randName);
  }


  // Hvis food kategori er valgt i slot1, 2 og 3
  if (selectedCat1 == 2 && selectedCat2 == 2 && selectedCat3 == 2){

    var randName = [];
    do {
      randName[randName.length] = food.splice(
                                    Math.floor(Math.random() * food.length)
                                  , 1)[0];
    } while (randName.length < 3);
  $('#one').html(randName[0]);
  $('#two').html(randName[1]);
  $('#three').html(randName[2]);
  $('select').hide();
  $('.selected').hide();
    console.log(randName);
  }
  // Hvis Culture kategori er valgt i slot1, 2 og 3
  if (selectedCat1 == 3 && selectedCat2 == 3 && selectedCat3 == 3){

    var randName = [];
    do {
      randName[randName.length] = cult.splice(
                                    Math.floor(Math.random() * cult.length)
                                  , 1)[0];
    } while (randName.length < 3);
  $('#one').html(randName[0]);
  $('#two').html(randName[1]);
  $('#three').html(randName[2]);
  $('select').hide();
  $('.selected').hide();
    console.log(randName);
  }

  // Hvis activity kategori er valgt i slot1, 2 og 3
  if (selectedCat1 == 4 && selectedCat2 == 4 && selectedCat3 == 4){

    var randName = [];
    do {
      randName[randName.length] = activity.splice(
                                    Math.floor(Math.random() * activity.length)
                                  , 1)[0];
    } while (randName.length < 3);
  $('#one').html(randName[0]);
  $('#two').html(randName[1]);
  $('#three').html(randName[2]);
  $('select').hide();
  $('.selected').hide();
    console.log(randName);
  }


// SLOT1

// Hvis bar kategori er valgt i slot1
if (selectedCat1 == 1 ){

  var randName = [];
  do {
    randName[randName.length] = bars.splice(
                                  Math.floor(Math.random() * bars.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#one').html(randName[0]);

$('select').hide();
$('.selected').hide();
  console.log(randName);
}

// Hvis food kategori er valgt i slot1
if (selectedCat1 == 2){

  var randName = [];
  do {
    randName[randName.length] = food.splice(
                                  Math.floor(Math.random() * food.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#one').html(randName[0]);

$('select').hide();
$('.selected').hide();
  console.log(randName);
}

// Hvis culture kategori er valgt i slot1
if (selectedCat1 == 3){

  var randName = [];
  do {
    randName[randName.length] = cult.splice(
                                  Math.floor(Math.random() * cult.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#one').html(randName[0]);
$('select').hide();
$('.selected').hide();
  console.log(randName);
}
// Hvis activity kategori er valgt i slot1
if (selectedCat1 == 4){

  var randName = [];
  do {
    randName[randName.length] = activity.splice(
                                  Math.floor(Math.random() * activity.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#one').html(randName[0]);
$('select').hide();
$('.selected').hide();
  console.log(randName);
}

// SLOT2

// Hvis bar kategori er valgt i slot2
if (selectedCat2 == 1 ){

  var randName = [];
  do {
    randName[randName.length] = bars.splice(
                                  Math.floor(Math.random() * bars.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#two').html(randName[0]);

$('select').hide();
$('.selected').hide();
  console.log(randName);
}

// Hvis food kategori er valgt i slot2
if (selectedCat2 == 2){

  var randName = [];
  do {
    randName[randName.length] = food.splice(
                                  Math.floor(Math.random() * food.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#two').html(randName[0]);

$('select').hide();
$('.selected').hide();
  console.log(randName);
}

// Hvis culture kategori er valgt i slot2
if (selectedCat2 == 3){

  var randName = [];
  do {
    randName[randName.length] = cult.splice(
                                  Math.floor(Math.random() * cult.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#two').html(randName[0]);
$('select').hide();
$('.selected').hide();
  console.log(randName);
}
// Hvis activity kategori er valgt i slot2
if (selectedCat2 == 4){

  var randName = [];
  do {
    randName[randName.length] = activity.splice(
                                  Math.floor(Math.random() * activity.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#two').html(randName[0]);
$('select').hide();
$('.selected').hide();
  console.log(randName);
}

// SLOT3

// Hvis bar kategori er valgt i slot3
if (selectedCat3 == 1 ){

  var randName = [];
  do {
    randName[randName.length] = bars.splice(
                                  Math.floor(Math.random() * bars.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#three').html(randName[0]);

$('select').hide();
$('.selected').hide();
  console.log(randName);
}

// Hvis food kategori er valgt i slot3
if (selectedCat3 == 2){

  var randName = [];
  do {
    randName[randName.length] = food.splice(
                                  Math.floor(Math.random() * food.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#three').html(randName[0]);

$('select').hide();
$('.selected').hide();
  console.log(randName);
}

// Hvis culture kategori er valgt i slot3
if (selectedCat3 == 3){

  var randName = [];
  do {
    randName[randName.length] = cult.splice(
                                  Math.floor(Math.random() * cult.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#three').html(randName[0]);
$('select').hide();
$('.selected').hide();
  console.log(randName);
}
// Hvis activity kategori er valgt i slot3
if (selectedCat3 == 4){

  var randName = [];
  do {
    randName[randName.length] = activity.splice(
                                  Math.floor(Math.random() * activity.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#three').html(randName[0]);
$('select').hide();
$('.selected').hide();
  console.log(randName);
}
});


//newsslider - gentagelse, hastighed og hurtig start

$('.marquee').marquee({
  duplicated: true,
  duration: 8000,
  delayBeforeStart: 0,
});
