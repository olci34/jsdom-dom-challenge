document.addEventListener("DOMContentLoaded", function (e) {
    let second = 0
    let timerID = false
    let counter = document.getElementById('counter')
    let pauseButton = document.getElementById('pause')
    let minus = document.getElementById('minus')
    let plus = document.getElementById('plus')
    let heart = document.getElementById('heart')
    let ul = document.getElementsByClassName('likes')[0]
    let submitButton = document.getElementById('submit')
    
    time()

    function time() {
        timerID = setInterval(incrementCounter, 1000)
    }

    function incrementCounter() {
        second++
        counter.innerText = `${second}`
    }

    function toggleButtons() {
        let buttonsArray = document.querySelectorAll('button:not(#pause)')
        buttonsArray.forEach(function(button) {
            if (pauseButton.innerText == "resume") {
                button.disabled = true
            } else {
                button.disabled = false
            }
        })
    }

    pauseButton.addEventListener("click", function(e) {
        e.preventDefault
        if (timerID != false) {
            clearInterval(timerID)
            timerID = false
            pauseButton.innerText = "resume"
            toggleButtons()
        } else {
            time()
            pauseButton.innerText = "pause"
            toggleButtons()
        }  
    })

    minus.addEventListener("click", function(e) {
        second--
        counter.innerText = `${second}`
    })

    plus.addEventListener("click", function(e) {
        incrementCounter()
    })

    heart.addEventListener("click", function(e) {
        let li = document.createElement('li')
        ul.appendChild(li).innerText = `you liked ${second} second`
    })

    submitButton.addEventListener('click', function(e) {
        e.preventDefault()
        let input = document.getElementById('comment-input')
        let p = document.createElement('p')
        let div = document.getElementById('list')
        p.innerText = input.value
        div.appendChild(p)
        input.value = ""
    })

})