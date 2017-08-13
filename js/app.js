window.onload = function() {
  console.log(document.getElementById('button'))
  //document.getElementById("button").addEventListener("click", startEvent);
  $('#button').on("click", startEvent);

  const $box1 = $('#box1')[0]; // box1 represents spaceship DIV
  const $box2 = $('#box2')[0]; // box2 represents first asteroid DIV
  const $box3 = $('#box3')[0]; // box 3 represents 2nd asteroid
  //const $asteroid2 = $('#asteroid2')[0];


  let counter = 0 // move vertical
  let goRight = 0 // move horizontal

  const $spaceshuttle = $('#spaceshuttle')

  /*function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}; */







// audio file not working, going to comment-it-out for now. THis is to play
// explosion sound











  let playerName = $("input:text").val(); // Sets Variable for user input


  function isCollision(){
    // returns an object with the top, left, width of the variable spaceship and
    /// variable asteroid
    var $box1Pos = $box1.getBoundingClientRect();
    var $box2Pos = $box2.getBoundingClientRect();

// algorithm to detect collision
    if ($box1Pos.top < $box2Pos.top + $box2Pos.width &&
        $box1Pos.top + $box1Pos.width > $box2Pos.top &&
       $box1Pos.left < $box2Pos.left + $box2Pos.height &&
        $box1Pos.height + $box1Pos.left > $box2Pos.left) {
    $("#spaceshuttle").effect('explode');
    $('#myProgress').remove();
  //let explodeSound = new sound(8-bit-game-explosion-sound-effect.mp3);
   //explodeSound.play();
    const $h3 = $('<h3>');
    const $collision = $('#collision');
    $collision.append($h3);
    $h3.html("Game Over" + "<br>" + playerName + "!");
       //$("#spaceshuttle").explode()

      //$( "#spaceshuttle" ).hide( "explode", {pieces: 30}, 1000 );
      return true;
    } else {
      return false
    }
  } // end 'is collision' function

  function isCollision2(){
    // this is for the second asteroid. Why am I repeating the same function twice instead
    // of passing arguments to the parameters and reusing the function? I tried doing that with Set Interval, but for some reason when
    // including arguments in Set Interval it wouldn't function. I decided to repeat the function in a clunky way since
    // i didn't want to mess around with collision detection. I'll experiment to see why Set Interval won't accept the isCollision function
    // with arguments.
    var $box1Pos = $box1.getBoundingClientRect();
    var $box3Pos = $box3.getBoundingClientRect();



// algorithm to detect collision
    if ($box1Pos.top < $box3Pos.top + $box3Pos.width &&
        $box1Pos.top + $box1Pos.width > $box3Pos.top &&
       $box1Pos.left < $box3Pos.left + $box3Pos.height &&
        $box1Pos.height + $box1Pos.left > $box3Pos.left) {
      //console.log('is collision');
    $("#spaceshuttle").effect('explode');
    $('#myProgress').remove();
    //let explodeSound = new sound(8-bit-game-explosion-sound-effect.mp3);
    //explodeSound.play()
    const $h3 = $('<h3>');
    const $collision = $('#collision');
    $collision.append($h3);
    $h3.html('Game Over' + "<br>" + playerName + "!");
      return true;
    } else {
      return false
    }
  } // end 'is collision' function


// adapted and edited code from W3 school https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_progressbar_3
  function timerbar() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1000);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      const $h3 = $('<h3>');
      const $collision = $('#collision');
      $collision.append($h3);
      $h3.html(playerName + "<br>" +  "wins!");
      $box1.remove()
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}




 // Function I'm experimenting with so if you go off the screen, the spaceship appears
 //  at the other end of the screen. Semi-works, still in experimentation stages.
  //function CheckDimensions() {
           // if (goRight < 0) {
           // $box1.style.left = window.innerWidth + "px";
       // } else if (goRight > window.innerWidth) {
       //     $box1.style.left = "0px";
       // }
      //} //





  function startEvent() {

   timerbar();

    //let $myprogress = $('#myprogress');

    //$($myprogress).css("border", "white");



  setInterval(isCollision, 300); // checks for collisions every 300 milliseconds
  setInterval(isCollision2, 300);

  playerName = $("input:text").val();






  $("#flexcontainer").detach(); // Removes User Input box at Start Click event











    document.addEventListener('keydown', (event) => {

      if (event.keyCode === 40) {
        counter += 10;
        $box1.style.top = counter + "px";
       //if(isCollision(box1,box2)){alert('collision')};
      } // end if down event.keycode, arrow key down

      if (event.keyCode === 38) {
        counter -= 10;
        $box1.style.top = counter + "px";
       //if(isCollision(box1,box2)){alert('collision')};
     } // end if 38 up statement, arrow key up

     if (event.keyCode === 39) {
        goRight += 10;
        $box1.style.left = goRight + "px";
    } // end if 39 right statement, 37 to move left

       //if(isCollision(box1,box2)){alert('collision')};




     if (event.keyCode === 37) {
        goRight -= 10;


        $box1.style.left = goRight + "px";
      } // end if 37 left statement


       //if(isCollision(box1,box2)){alert('collision')};






    }); // end 'event listner keydown event'
  } // end 'start event' function


} // window onLoad end function








// skullship link: https://i.pinimg.com/736x/5d/85/d3/5d85d384b2438e68ca1872cbebb43fec--spaceships-pixel-art.jpg"
// background image link: https://vignette1.wikia.nocookie.net/steamtradingcards/images/c/cd/Kerbal_Space_Program_Background_Kerbin.jpg/revision/latest/scale-to-width-down/1280?cb=20131205203647


