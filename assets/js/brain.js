let startTime, endTime;

const startBtn = document.querySelector(".btn-get-started")
const ptag = document.querySelector("p")
const result = document.querySelector("h1")

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    const randomTime = Math.floor(Math.random() * 5000) + 1000;
    ptag.style.display = 'none'
    result.innerHTML = 'Wait for green...'
    setTimeout(()=>{
        document.body.style.backgroundColor = '#4BDB6A';
        startTime = performance.now();
        result.innerHTML = 'Click'
    }, randomTime)
});

document.body.addEventListener('click', () => {
    if (startTime) {
        endTime = performance.now();
        const reactionTime = endTime - startTime;
        result.innerHTML = `your reaction time: ${reactionTime.toFixed(2)}`;
        document.body.style.backgroundColor = 'white';

        startBtn.style.display = 'block';
        startTime = null
    } else {
        console.log("try again");
        
    }
})