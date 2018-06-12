var boton = document.querySelector(".boton");
TweenLite.set(boton, {top:"0",opacity:0});
TweenLite.to(boton, 1, {top:"0",opacity:1,delay:7.5, ease: Back.easeOut});

var piece = document.querySelector(".piece");
TweenLite.set(piece, {top:"-50",opacity:0});
TweenLite.to(piece, 1, {top:"0",left:"-5px",opacity:1,delay:1, ease: Bounce.easeOut});

var text1 = document.querySelector(".text1");
TweenLite.set(text1, {top:"0",opacity:0});
TweenLite.to(text1, 0.5, {top:"19px" ,left:"-15px",opacity:1,delay:2, ease: Back.easeOut});
TweenLite.to(text1,0.5,{opacity:0,delay:3.5});

var text2 = document.querySelector(".text2");
TweenLite.set(text2, {top:"0", opacity: 0});
TweenLite.to(text2, 0.5, {top:"49px",left:"30px", opacity:1,delay:3.5, ease: Back.easeOut});
TweenLite.to(text2, 0.5, {opacity:0,delay:5.5});

var text3 = document.querySelector(".text3");
TweenLite.set(text3, {top:"0", opacity: 0});
TweenLite.to(text3, 0.5, {top:"40px",left:"10px", opacity:1,delay:5.5, ease: Back.easeOut});
TweenLite.to(text3, 0.5, {opacity:0,delay:6.5});

var text4 = document.querySelector(".text4");
TweenLite.set(text4,{top:"0", opacity: 0});
TweenLite.to(text4, 0.5, {top:"8px",left:"-3px", opacity:1,delay:6.5, ease: Back.easeOut});
TweenLite.to(text4,0.5,{opacity:0,delay:0});