const LoadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
const bluring = () => {
    load++;
    if (load > 99) {
        clearInterval(int)
    }
    // console.log(load);
    LoadText.innerText = `${load}%`
    LoadText.style.opacity = scale(load, 0, 100, 30, 0)
    bg.style.filter=`blur(${scale(load, 0, 100, 30, 0)}px)`

}
let int = setInterval(bluring, 30)
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
