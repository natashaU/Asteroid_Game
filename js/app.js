window.onload = function() {
  console.log(document.getElementById('button'))
  document.getElementById("button").addEventListener("click", startEvent);


  const $box1 = $('#box1')[0]; // box1 represents spaceship DIV
  const $box2 = $('#box2')[0]; // box2 represents first asteroid DIV
  //const $asteroid2 = $('#asteroid2')[0];


  let counter = 0
  let goRight = 0


  function isCollision(){
    // returns an object with the top, left, width of the variable spaceship and
    /// asteroid
    var $box1Pos = $box1.getBoundingClientRect();
    var $box2Pos = $box2.getBoundingClientRect();

// algorithm to detect collision
    if ($box1Pos.top < $box2Pos.top + $box2Pos.width &&
        $box1Pos.top + $box1Pos.width > $box2Pos.top &&
       $box1Pos.left < $box2Pos.left + $box2Pos.height &&
        $box1Pos.height + $box1Pos.left > $box2Pos.left) {
      console.log('is collision');
       //$("#spaceshuttle").explode()
      $( "#spaceshuttle" ).hide( "explode", {pieces: 16}, 2000 );
      return true;
    } else {
      return false
    }
  } // end 'is collision' function

  //function CheckDimensions() {
           // if (goRight < 0) {
           // $box1.style.left = window.innerWidth + "px";
       // } else if (goRight > window.innerWidth) {
       //     $box1.style.left = "0px";
       // }
      //} //





  function startEvent() {

  setInterval(isCollision, 300);




    document.addEventListener('keydown', (event) => {

      if (event.keyCode === 40) {
        counter += 10;
        $box1.style.top = counter + "px";
       //if(isCollision(box1,box2)){alert('collision')};
      } // end if down event.keycode

      if (event.keyCode === 38) {
        counter -= 10;
        $box1.style.top = counter + "px";
       //if(isCollision(box1,box2)){alert('collision')};
     } // end if 38 up statement

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







