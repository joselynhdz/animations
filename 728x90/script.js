var but = document.querySelector(".but");
TweenLite.set(but, {top:"0",opacity:0});
TweenLite.to(but, 1, {top:"0",opacity:1,delay:7.5, ease: Back.easeOut});

var pic = document.querySelector(".pic");
TweenLite.set(pic, {top:"-48px",opacity:0});
TweenLite.to(pic, 1, {top:"0",left:"-5px",opacity:1,delay:1, ease: Bounce.easeOut});

var text = document.querySelector(".text");
TweenLite.set(text, {top:"0",opacity:0});
TweenLite.to(text, 0.5, {top:"5px" ,left:"40px",opacity:1,delay:2, ease: Back.easeOut});
TweenLite.to(text,0.5,{opacity:0,delay:3.5});

var tex = document.querySelector(".tex");
TweenLite.set(tex, {top:"0", opacity: 0});
TweenLite.to(tex, 0.5, {top:"12px",left:"60px", opacity:1,delay:3.5, ease: Back.easeOut});
TweenLite.to(tex, 0.5, {opacity:0,delay:5.5});

var te = document.querySelector(".te");
TweenLite.set(te, {top:"0", opacity: 0});
TweenLite.to(te, 0.5, {top:"10px",left:"45px", opacity:1,delay:5.5, ease: Back.easeOut});
TweenLite.to(te, 0.5, {opacity:0,delay:6.5});

var t = document.querySelector(".t");
TweenLite.set(t,{top:"0", opacity: 0});
TweenLite.to(t, 0.5, {top:"0px",left:"19px", opacity:1,delay:6.5, ease: Back.easeOut});
TweenLite.to(t,0.5,{opacity:0,delay:0});