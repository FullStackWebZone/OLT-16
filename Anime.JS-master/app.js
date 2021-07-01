/*jshint esversion: 6 */

const animation = anime.timeline({
  autoplay: false,
});

animation
.add ({
    targets: '#btn',
    easing: 'easeInOutSine',
    top: '1500px',
    duration: 500
})

.add ({
    targets: '#stars',
    easing: 'easeInOutSine',
    top: '0px',
    duration: 1000
})


.add ({
    targets: '#mount-back',
    easing: 'easeInOutSine',
    bottom: '0px',
    duration: 1000
})

.add ({
    targets: '#moon',
    easing: 'easeInOutSine',
    top: '0px',
    duration: 1000
})

.add ({
    targets: '#mount-front',
    easing: 'easeInOutSine',
    bottom: '0px',
    duration: 1000
})

.add ({
    targets: '#text',
    easing: 'easeInOutSine',
    marginRight: 0,
    duration: 1000
})

.add ({
    targets: '#btn',
    easing: 'easeInOutSine',
    top: '50%',
    duration: 1000
});


document.querySelector('#btn').onclick = animation.play;