
const gMaxSize = 400
const gMinSize = 100
var gCurrentSize = 100

function onBallClick(elBall,maxDiameter) {
    var ballGrow=''
    //const elBall = document.querySelector('.ball')
    if (gCurrentSize >= gMinSize && gCurrentSize < maxDiameter) {
        ballGrow=`${gCurrentSize += getRandomInt(20,60)}px`
    }    else{
        ballGrow=`${gMinSize}px`
        gCurrentSize=100
    }
    elBall.style.width = ballGrow
    elBall.style.height = ballGrow
    elBall.style.backgroundColor  = getRandomColor()
    elBall.innerText = gCurrentSize
    
}