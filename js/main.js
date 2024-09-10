
function onBallClick() {

    const elBall = document.querySelector('.ball')
    console.log('elBall.style.height', elBall.style.height);
    ///elBall.style.height = elBall.style.height + 50px
    elBall.style.width = '150%'
    elBall.innerText = '150'
}