
/* this is meant to work w/desktop too (buttons on desktop) */

function slider(){
  var wrapper = document.querySelector('.swipe .wrapper');
  var itemWidth = document.querySelector('.swipe article').offsetWidth;
  var itemLength = document.querySelectorAll('.swipe article').length;

  // var show = Math.ceil(window.innerWidth / itemWidth); // container width divided by item width. whatever that container may be.
  var show = Math.ceil(document.querySelector('.swipe').offsetWidth / itemWidth); // container width divided by item width. whatever that container may be.


  var max = (itemLength - show);


  var pct = (100 / show).toFixed(2);
  pct = parseFloat(pct);

  


  var next = document.querySelector('.swipe .next');
  var prev = document.querySelector('.swipe .prev');

  var click = 0;



  if(show >= itemLength){
    document.querySelector('.swipe .buttons').classList.add('hidden');
  }
  




  /* mobile */

  var touchstartX;
  var touchendX;

  wrapper.addEventListener('touchstart', function (event) {
    event.preventDefault();

    touchstartX = event.changedTouches[0].screenX;

  }, false);






  wrapper.addEventListener('touchend', function (event) {
    event.preventDefault();

    touchendX = event.changedTouches[0].screenX;

    console.log(touchstartX);
    console.log(touchendX);

    if(touchstartX > touchendX){
      console.log('next');
      slideNext();
    }
    else if(touchstartX < touchendX){
      console.log('prev');
      slidePrev();
    }


  }, false);





  /* end mobile */


  next.addEventListener('click', function (event) {
    event.preventDefault();

    slideNext();

  }, false);


  prev.addEventListener('click', function (event) {
    event.preventDefault();

    slidePrev();



  }, false);




  function slideNext(){
    prev.classList.contains('inactive') ? prev.classList.remove('inactive') : '';

    if(click < max){
      click += 1;
    }

    else{
      click = max;
    }

    wrapper.style.left = (-1 * click * pct) + '%';
    (click == max ? next.classList.add('inactive') : '');
    console.log(click);
  }



  function slidePrev(){
    next.classList.contains('inactive') ? next.classList.remove('inactive') : '';

    if(click > 0){
      click -= 1;
    }
    else if(click == 0){
      prev.classList.add('inactive');
    }

    else{
      click = 0;
    }

    wrapper.style.left = (-1 * click * pct) + '%';
    (click == 0 ? prev.classList.add('inactive') : '');
    console.log(click);
  }





}

slider();