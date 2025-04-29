let homeCount = 0
let guestCount = 0
let scoreElHome = document.getElementById("home-score")
let scoreElGuest = document.getElementById("guest-score")

function addHome1() {
    homeCount += 1
    scoreElHome.textContent = homeCount
}
function addHome2() {
    homeCount += 2
    scoreElHome.textContent = homeCount 
}
function addHome3() {
    homeCount += 3
    scoreElHome.textContent = homeCount 
}

function addGuest1() {
    guestCount += 1
    scoreElGuest.textContent = guestCount
}
function addGuest2() {
    guestCount += 2
    scoreElGuest.textContent = guestCount 
}
function addGuest3() {
    guestCount += 3
    scoreElGuest.textContent = guestCount 
}


