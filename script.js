console.log('the script is running!')

let totalMinutes = 0
document.getElementById('totalMinutes').innerHTML = totalMinutes
let totalTarget = 0

const exercises = [
    {
        id: 'exercise-1',
        value: 30
    },
    {
        id: 'exercise-2',
        value: 45
    },
    {
        id: 'exercise-3',
        value: 30
    },
    {
        id: 'exercise-4',
        value: 20
    },

]


exercises.forEach(element => {
    console.log(element.value)
    totalTarget = totalTarget + element.value
})
console.log(totalTarget)

let completed = totalMinutes/totalTarget*100
document.getElementById('completed').innerHTML = completed + '%'

exercises.forEach(element => {
    const btn = document.getElementById(element.id)
console.log(btn, "btn")

    btn.addEventListener("click", function() {
        console.log("i've been clicked", btn.classList)
        
        if(btn.classList.value == 'far fa-circle') {
            
            btn.classList.remove('far', 'fa-circle')
            btn.classList.add('fas', 'fa-check-circle')
            
            totalMinutes = totalMinutes + element.value
            let completed = totalMinutes/totalTarget*100
            console.log(totalMinutes)
            document.getElementById('totalMinutes').innerHTML = totalMinutes
            document.getElementById('completed').innerHTML = completed + '%'

        } else {
            btn.classList.remove('fas', 'fa-check-circle')
            btn.classList.add('far', 'fa-circle')

            totalMinutes = totalMinutes - element.value
            document.getElementById('totalMinutes').innerHTML = totalMinutes
            document.getElementById('completed').innerHTML = completed + '%'
        }
    })

});