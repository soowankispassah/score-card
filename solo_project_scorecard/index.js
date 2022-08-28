let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
let leadEl = document.getElementById("lead-el")
let homeLead = document.querySelector(".home-btn")
let guestLead = document.querySelector(".guest-btn")
let homeScore = 0
let guestScore = 0

function home1Score(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function home2Score(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function home3Score(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function guest1Score(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guest2Score(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function guest3Score(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function newGame(){
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    leadEl.innerHTML = "Current leader"
}

homeLead.addEventListener("click", function(){
    if(homeScore > guestScore){
        lead = `<span class="lead-des">Home</span> is leading`
        leadEl.innerHTML = lead 
    }
})
guestLead.addEventListener("click", function(){
    if(guestScore > homeScore){
        lead = `<span class="lead-des">Guest</span> is leading`
        leadEl.innerHTML = lead 
    }
})