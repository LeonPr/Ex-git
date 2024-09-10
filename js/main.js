
const gMaxSize = 400
const gMinSize = 100
var gCurrentSize = 100

function onBallClick() {
    var ballGrow=''
    const elBall = document.querySelector('.ball')
    if (gCurrentSize >= gMinSize && gCurrentSize < gMaxSize) {
        ballGrow=`${gCurrentSize += getRandomInt(20,60)}px`
    }    else{
        ballGrow=`${gMinSize}px`
        gCurrentSize=100
    }
    elBall.style.width = ballGrow
    elBall.style.height = ballGrow
    elBall.innerText = gCurrentSize
}