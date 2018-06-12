var botom = document.querySelector(".botom");
TweenLite.set(botom, {top:"0",opacity:0});
TweenLite.to(botom, 1, {top:"0",opacity:1,delay:7.5, ease: Back.easeOut});

var piece = document.querySelector(".piece");
TweenLite.set(piece, {top:"-48",opacity:0});
TweenLite.to(piece, 1, {top:"0",left:"-5px",opacity:1,delay:1, ease: Bounce.easeOut});

var tex = document.querySelector(".tex");
TweenLite.set(tex, {top:"0",opacity:0});
TweenLite.to(tex, 0.5, {top:"19px" ,left:"-15px",opacity:1,delay:2, ease: Back.easeOut});
TweenLite.to(tex,0.5,{opacity:0,delay:3.5});

var text = document.querySelector(".text");
TweenLite.set(text, {top:"0", opacity: 0});
TweenLite.to(text, 0.5, {top:"49px",left:"30px", opacity:1,delay:3.5, ease: Back.easeOut});
TweenLite.to(text, 0.5, {opacity:0,delay:5.5});

var texte = document.querySelector(".texte");
TweenLite.set(texte, {top:"0", opacity: 0});
TweenLite.to(texte, 0.5, {top:"40px",left:"10px", opacity:1,delay:5.5, ease: Back.easeOut});
TweenLite.to(texte, 0.5, {opacity:0,delay:6.5});

var textes = document.querySelector(".textes");
TweenLite.set(textes,{top:"0", opacity: 0});
TweenLite.to(textes, 0.5, {top:"8px",left:"-3px", opacity:1,delay:6.5, ease: Back.easeOut});
TweenLite.to(textes,0.5,{opacity:0,delay:0});
