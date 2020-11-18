console.log('Client side javascript ...')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit', (e) => {
    //This is to prevent automatic refresh of page
    //e refers to event not error
    e.preventDefault()

    const location = search.value

    if (!location) {
        return messageOne.textContent = 'Enter your location'
    }
    fetch('http://localhost:3000/weather?address=' + encodeURIComponent(location)).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast.temperature
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})