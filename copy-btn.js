const btn = document.querySelector('.r-btn');
function bgcFunction(e){
    btn.style.backgroundColor = e.target.value;
}
function cFunction(e){
    btn.style.color = e.target.value;
}
function textFunction(e){
    btn.textContent = e.target.value;
}
function urlFunction(e){
    btn.href = e.target.value;
}
function fontSizeFunction(e){
    btn.style.fontSize = e.target.value + 'px';
}
function ptFunction(e){
    btn.style.paddingTop = e.target.value + 'px';
    btn.style.paddingBottom = e.target.value + 'px';
}
function plFunction(e){
    btn.style.paddingLeft = e.target.value + 'px';
    btn.style.paddingRight = e.target.value + 'px';
}