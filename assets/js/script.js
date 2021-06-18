const listtags = document.querySelectorAll('.slider li')
const controltags = document.querySelectorAll('.controls li')

let counter = -1 // This counter is for image that we want to show in slider.
let moveRight = (e) => {    
    if (counter === 1) {
        return false
    } else {
        counter++
    }
    listtags[counter].style.cssText = "flex-basis: 0px; transition: 1s" // Set width to 0.
    listtags[counter + 1].style.cssText = "flex-basis: 100%; transition: 1s" // Set width to 100%.
    console.log(counter)
}

let moveLeft = (e) => {
    console.log(counter)
    if (counter === -1) {
        return false 
    } else {
        listtags[counter + 1].style.cssText = "flex-basis: 0px; transition: 1s"
        listtags[counter].style.cssText = "flex-basis: 100%; transition: 1s"
        counter--
    }
    
}

controltags[0].addEventListener('click', moveLeft)
controltags[1].addEventListener('click', moveRight)
