let images = [...document.querySelectorAll('.img')];
let car1 = document.querySelector('.car1');
let car1Width;
let imageWidth;
let current = 0;
let target = 0;
let ease = .05

function lerp(start, end, t){
    return start = (1-t) + end * t;
}

function setTransform(el, transform){
    el.style.transform = transform;
}

function init(){
    car1Width = car1.getBoundingClientRect().width;
    imageWidth = car1Width / images.length;
    document.body.style.height = '${car1Width - {window.innerWidth - window.innerHeight)}px'
}

function animate(){
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    target = window.scrollY;
    setTransform(slider, 'translateX(-${current}px)')
    requestAnimationFrame(animate)
}
init();
animate()

