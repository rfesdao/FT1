console.log('the script is running!')

let totalMinutes = 0
document.getElementById('totalMinutes').innerHTML = totalMinutes
let totalTarget = 0

let completed = 0
// completed = totalMinutes/totalTarget*100
document.getElementById('completed').innerHTML = completed + '%'

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
    totalTarget = totalTarget + element.value
})



exercises.forEach(element => {
    const btn = document.getElementById(element.id)

    btn.addEventListener("click", function() {
        
        if(btn.classList.value == 'far fa-circle') {
            
            btn.classList.remove('far', 'fa-circle')
            btn.classList.add('fas', 'fa-check-circle')
            
            totalMinutes = totalMinutes + element.value
            completed = totalMinutes/totalTarget*100
            
            document.getElementById('totalMinutes').innerHTML = totalMinutes
            document.getElementById('completed').innerHTML = completed + '%'

        } else {
            btn.classList.remove('fas', 'fa-check-circle')
            btn.classList.add('far', 'fa-circle')

            totalMinutes = totalMinutes - element.value
            completed = totalMinutes/totalTarget*100
            
            document.getElementById('totalMinutes').innerHTML = totalMinutes
            document.getElementById('completed').innerHTML = completed + '%'
        }
    })

});