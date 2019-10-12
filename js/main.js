//functions
var tl = new TimelineMax({});


//animation
tl.pause();

//logo oneplus
tl.to(".logo", 1.5, {scale: 1.75})
.to(".logo", 0.5, {css:{display: "none"}})

//blauw
.from(".blauw", 0, {css:{display: "none"}})
.to(".blauw", 1, {ease: Power2.easeOut, x: 435})

// rood=visible
.from(".rood", 0, {css:{display: "none"}})
.to(".blauw", 0.2, {css:{opacity: 0}})
.to(".blauw", 0, {css:{display: "none"}})

//rood
.to(".rood", 1, {ease: Power2.easeOut, x: 350})
.to(".rood", 0, {css:{display: "none"}})


//Tekst 2 different colors
.from("#colors", 0, {css:{display: "none"}})
.from("#colors", 1.5, {autoAlpha:0,})
.from("#colors", 1.5, {scale:0.5, autoAlpha:0.5, ease:Back.easeOut})
.to("#colors", 0, {css:{display: "none"}})


//7 deel 1
.from(".deel-1", 0, {css:{display: "none"}})
.to(".deel-1", 0.75, {ease: Power2.easeOut, x: 430})

//7 deel 2
.from(".deel-2", 0, {css:{display: "none"}})
.to(".deel-2", 0.75, {ease: Power2.easeOut, x: 430})
.to(".deel-2", 0, {css:{display: "none"}})
.to(".deel-1", 0, {css:{display: "none"}})

//7 deel 3
.from(".deel-3", 0, {css:{display: "none"}})
.to(".deel-3", 1, {scale: 1.25})
.to(".deel-3", 0, {css:{display: "none"}})


//Go beyond speed
.from("#beyond", 0, {css:{display: "none"}})
.to("#beyond", 1, {scale: 1.25})
.to("#beyond", 0.5, {scale: 1.75})
.to("#beyond", 0.5, {css:{display: "none"}})

//launch
.from("#launch", 0, {css:{display: "none"}})
.to("#launch", 1, {scale: 1.25})

//may 14
.from("#may", 0, {css:{display: "none"}})
.to("#may", 1, {scale: 1, autoAlpha: 2, ease: Power2.easeIn})

//order now
.from("#panel3", 0, {css:{display: "none"}})
.from("#info", 0.1, {top:250}, "final")
.from("#orderNow", 0.5, {scale:0, autoAlpha:0, ease:Back.easeOut})
.to("#may", 0, {css:{display: "visible"}})
.to("#launch", 0, {css:{display: "visible"}})