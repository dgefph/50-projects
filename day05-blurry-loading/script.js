//creating these early variables allows them to be accessed.
//ask yourself 'what needs to be grabbed?' and 'what am going to need to manipulate the dom'
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

//the 30 is MILISECONDS not seconds 
let int = setInterval(blurring, 30)

function blurring() {
    load++

        if(load > 99) {
            //built in function?
            clearInterval(int)
        }

    loadText.innerText = `${load}%`
    //opacity goes from 0 => 1 but we need from 1 => 0
    //reference stack overflow in order to remap
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers 
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

