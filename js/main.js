//functions this is only used once to keep it simple
var tl = new TimelineMax({});

//This function is start and pause the animation
tl.pause();

//The first animation about the logo
tl.to(".logo", 1.5, {scale: 1.75})
.to(".logo", 0.5, {css:{display: "none"}})


//The image of the red OnePlus 7 going from left to the middle
.from(".blue", 0, {css:{display: "none"}})
.to(".blue", 1, {ease: Power2.easeOut, x: 435})

//The blue image is fading out and the red image is becoming visible
.from(".red", 0, {css:{display: "none"}})
.to(".blue", 0.5, {css:{opacity: 0}})
.to(".blue", 0, {css:{display: "none"}})

//The image of the red OnePlus 7 going from the middle to the right
.to(".red", 1, {ease: Power2.easeOut, x: 350})
.to(".red", 0, {css:{display: "none"}})


//Text: "2 different colors" with fading effect
.from("#colors", 0, {css:{display: "none"}})
.from("#colors", 1.5, {autoAlpha:0,})
.from("#colors", 1.5, {scale:0.5, autoAlpha:0.5, ease:Back.easeOut})
.to("#colors", 0, {css:{display: "none"}})


//Part 1 of the "7" image
.from(".Part-1", 0, {css:{display: "none"}})
.to(".Part-1", 0.75, {ease: Power2.easeOut, x: 430})

//Part 2 of the "7" image
.from(".Part-2", 0, {css:{display: "none"}})
.to(".Part-2", 0.75, {ease: Power2.easeOut, x: 430})
.to(".Part-2", 0, {css:{display: "none"}})
.to(".Part-1", 0, {css:{display: "none"}})

//The final "7" image 
.from(".Part-3", 0, {css:{display: "none"}})
.to(".Part-3", 1, {scale: 1.25})
.to(".Part-3", 0, {css:{display: "none"}})


//Text: "Go beyond speed", with scaling
.from("#beyond", 0, {css:{display: "none"}})
.to("#beyond", 1, {scale: 1.25})
.to("#beyond", 0.5, {scale: 1.75})
.to("#beyond", 0.5, {css:{display: "none"}})

//Endslide part 1
.from(".endslide-1", 0.5, {css:{display: "none"}})
.from(".endslide-1", 1.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut})

.from(".never-settle", 0.5, {css:{display: "none"}})
.from(".never-settle", 1, {scale:0.5, autoAlpha:0, ease:Back.easeOut})

//This is the WhatsApp message with the same animation as the other 2 popups.
.from(".popup", 0.5, {css:{display: "none"}})
.from(".popup", 1, {scale:0.5, autoAlpha:0, ease:Back.easeOut})

//Button with "order now!"
.from("#panel3", 0, {css:{display: "none"}})
.from("#info", 0.5, {top:250}, "final")
.from("#orderNow", 1, {scale:0, autoAlpha:0, ease:Back.easeOut})
.to(".popup", 0, {css:{display: "visible"}})