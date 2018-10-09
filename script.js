


var image = document.getElementById("logo");
            var currentPos = 0;
            var images = ['img/logo-all-glow.png', 'img/logo-no-glow1.png', 'img/logo-no-glow2.png','img/logo-no-glow3.png','img/logo-no-glow4.png', 'img/logo-off-letter1.png', 'img/logo-off-letter2.png' ]

            function change() {


                image.src = images[Math.floor(Math.random() * images.length)];
            }

            setInterval(change, 1500);

var selectedCat1;
var selectedCat2;
var selectedCat3;
function toggleMenu(){
  document.getElementById('cat1').style.display ="block";
  return false;
}
function toggleMenu2(){
  document.getElementById('cat2').style.display ="block";
  return false;
}
function toggleMenu3(){
  document.getElementById('cat3').style.display ="block";
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
  ["<img src='img/kowloon.jpg'/>", "<h3>Kowloon</h3>", "<p>Beskrivelse2</p>"],
  ["<img src='img/pitacorner.jpg'/>", "<h3>Pita corner</h3>", "<p>If you go to the corner of Vesterbro Torv where Pita Corner is located on a friday night you will find a line of people going from the small shop to the street but don't let that intimidate you. Pita Corner serves the greatest Pita in Aarhus and you don't want to miss out. <br></p><span class='adress'>Vesterbro Torv 17<br/>8000 Aarhus C</span>"],
  ["<img src='img/siamsushi.jpg'/>", "<h3>A+ Siam Sushi</h3>", "<p>Beskrivelse4</p>"]
  ];
  var bars =
    [
  ["<img src='img/fattereskil.jpg'/>", "<h3>Fatter Eskil</h3>", "<p>Beskrivelse1</p>"],
  ["<img src='img/gbar.jpg'/>", "<h3>G-Bar</h3>", "<p>Beskrivelse2</p>"],
  ["<img src='img/oldirish.jpg'/>", "<h3>Old Irish</h3>", "<p>Beskrivelse3</p>"],
  ["<img src='img/bodegaen.jpg'/>", "<h3>Bodegaen</h3>", "<p>If you want to feel like a true local go to Bodegaen and order a 'Aarhus sæt' (a local Ceres beer and a shot).</p>"]
  ];
  var cult =
    [
  ["<img src='img/steno.jpg'/>", "<h3>Steno Museet</h3>", "<p>Beskrivelse1</p>"],
  ["<img src='img/kunsthal.jpg'/>", "<h3>Kunsthal Aarhus</h3>", "<p>Beskrivelse2</p>"],
  ["<img src='img/kvindemuseet.jpg'/>", "<h3>Kvindemuseet</h3>", "<p>Beskrivelse3</p>"],
  ["<img src='img/marselisborg.jpg'/>", "<h3>Marseillesborg slot</h3>", "<p>Beskrivelse4</p>"]
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
