window.onload = function() {
  console.log(document.getElementById('button'))
  document.getElementById("button").addEventListener("click", startEvent);

  var counter = 0
  var goRight = 0

  let box1 = document.querySelector('.box1');
  let box2 = document.querySelector('.box2');

  function isCollision(b1,b2){
    var box1Pos = box1.getBoundingClientRect();
    var box2Pos = box2.getBoundingClientRect();

    if (box1Pos.top < box2Pos.top + box2Pos.width &&
        box1Pos.top + box1Pos.width > box2Pos.top &&
       box1Pos.left < box2Pos.left + box2Pos.height &&
        box1Pos.height + box1Pos.left > box2Pos.left) {
      alert('collision');
    } else {
      return false
    }
  } // end is collision

  function startEvent() {
    document.addEventListener('keydown', (event) => {

      if (event.keyCode === 40) {
        counter += 10;
        document.querySelector('.box1').style.top = counter + "px";
       if(isCollision(box1,box2)){alert('collision')};
      } // end if down event.keycode

      if (event.keyCode === 38) {
        counter -= 10;
        document.querySelector('.box1').style.top = counter + "px";
       if(isCollision(box1,box2)){alert('collision')};
     } // end if 38 up statement

     if (event.keyCode === 39) {
        goRight += 10;
        document.querySelector('.box1').style.left = goRight + "px";
       if(isCollision(box1,box2)){alert('collision')};
     } // end if 39 right statement, 37 to move left

     if (event.keyCode === 37) {
        goRight -= 10;
        document.querySelector('.box1').style.left = goRight + "px";
       if(isCollision(box1,box2)){alert('collision')};
     } // end if 39 right statement, 37 to move left

    }); // end event listner keydown event
  } // end function start event


} // window onlaod





      //if (event.keyCode === 38) {
      //  counter -= 10;
      //  document.querySelector('.box1').style.top = counter + "px";
      //  if (isCollision(box1,box2)){alert('collision')};
      //}

      // end if event keycode event

    //}); // end keydown event
  //} // end start Event


//} // window onload end

