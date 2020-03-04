function touchSwipe(){


  var container = document.querySelectorAll('section');

  var touchstartX = 0;
  var touchendX = 0;

  var cl;
  var n;



  var classes = [];

  var arr = [];




  if(container.length){
    for(var i = 0; i < container.length; i++){



      container[i].addEventListener('touchstart', function (event) {
        event.preventDefault();

        n = this.querySelectorAll('article').length;
        touchstartX = event.changedTouches[0].screenX;
        cl = this.classList.value;


        if(classes.indexOf(cl) == -1){
          classes.push(cl)
        }


      }, false);


      


      container[i].addEventListener('touchend', function (event) {
        event.preventDefault();

        touchendX = event.changedTouches[0].screenX;

        gesture(this, classes, cl);
        

      }, false);

      

    } // end for



    
    function gesture(container, classes, cl){
      var x = classes.indexOf(cl);
      if (touchendX < touchstartX) {
        arr[x] = typeof(arr[x]) == 'undefined' ? 1 : arr[x] + 1;
        swipe('left', container, x)
      }
      else{
        swipe('right', container, x)
      }

    }


    function swipe(dir, container, x){

      var slide = slide ? slide : arr[x] * 100; /* change the 100% to something else (such as 90%) depending on how much of the card is peeking out */

      if(dir == 'left'){
        if(arr[x] < n ){
          container.querySelector('.wrapper').style.left = (slide * -1) + '%';
        }
        else{
          arr[x] = 0;
          container.querySelector('.wrapper').style.left = 0;
        }
      }
      else if(dir == 'right'){

        slide = (slide - 100)

        if(arr[x] > 0 ){
          container.querySelector('.wrapper').style.left = (slide * -1) + '%';
          arr[x] = (arr[x]) - 1;
        }
        else{
          arr[x] = 0;
        }
      }


    }






  } // end if







} // end function

touchSwipe();