const date = document.querySelector('.date'),
  time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  target = document.querySelector('.target'),
  body = document.querySelector('body'),
  btnBg = document.querySelector('#bg')

function setTime() {
  const daysWeekString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const monthOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const today = new Date(),
    dayWeek = today.getDay(),
    day = today.getDate(),
    month = today.getMonth(),
    hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds()

  if (minutes === 0 && seconds === 0 ) setBgGreet()

  const addZero = num => parseInt(num) < 10 ? '0' + num : num
  date.innerHTML = `${daysWeekString[dayWeek]}, ${monthOfYear[month]} ${day}`
  time.innerHTML = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`

  setTimeout(setTime, 1000)
}

let arrBg = []

function createArr(folders) {
  folders.forEach( folder => {
    for (let i = 0; i < 6; i++) {
      let randomNum = +(Math.ceil(Math.random() * 20))
      randomNum < 10
        ? arrBg.push(`assets/images/${folder}/${'0' + randomNum}.jpg`)
        : arrBg.push(`assets/images/${folder}/${randomNum.toString()}.jpg`)
    }
  })
}

createArr(['night', 'morning', 'day', 'evening'])

const today = new Date()
let hour = today.getHours()
let counterBg = 0

// Change Bg
btnBg.addEventListener('click', () => {
  counterBg++
  body.style.backgroundImage = `url(${arrBg[((hour + counterBg) >= 24) ? (hour + counterBg) % 24 : hour + counterBg]})`;
  btnBg.setAttribute('disabled', 'true')
  setTimeout(() => { btnBg.removeAttribute('disabled')}, 1000)
})

function setBgGreet() {
  const hour = today.getHours()
  switch(true) {
    case hour >= 6 && hour < 12:
      document.body.style.backgroundImage = `url(${arrBg[hour]})`
      greeting.innerHTML = 'Good morning, '
      break
    case hour >= 12 && hour < 18:
      document.body.style.backgroundImage = `url(${arrBg[hour]})`
      greeting.innerHTML = 'Good day, '
      break
    case hour >= 18 && hour < 24:
      document.body.style.backgroundImage = `url(${arrBg[hour]})`
      greeting.innerHTML = 'Good evening, '
      break
    default:
      document.body.style.backgroundImage = `url(${arrBg[hour]})`
      greeting.innerHTML = 'Good night, '
  }
}


// Change Name And Target
const placeholderName = document.querySelector('.name').dataset.placeholder

function getName() {
  if(localStorage.getItem('name') === null) {
    name.textContent = placeholderName
  } else {
    name.textContent = localStorage.getItem('name')
  }
}

function setName(e) {
  if (e.type === 'click') {
    e.target.innerText = ''
  }

  if (e.type === 'keypress') {
    if (e.keyCode === 13) {
      if (e.target.innerText.trim() !== '' && e.target.innerText !== placeholderName) {
        localStorage.setItem('name', e.target.innerText.trim())
        name.blur()
      } else {
        e.target.textContent = localStorage.getItem('name') || placeholderName
        name.blur()
      }
    }
  }

  if (e.type === 'blur') {
    if (e.target.innerText.trim() === '') {
      e.target.innerText = localStorage.getItem('name') || placeholderName
    } else {
      localStorage.setItem('name', e.target.innerText.trim());
    }
  }
}

const placeholderTarget = document.querySelector('.target').dataset.placeholder

function getTarget() {
  if(localStorage.getItem('target') === null) {
    target.textContent = placeholderTarget
  } else {
    target.textContent = localStorage.getItem('target')
  }
}

function setTarget(e) {
  if (e.type === 'click') {
    e.target.innerText = ''
  }

  if (e.type === 'keypress') {
    if (e.keyCode === 13) {
      if (e.target.innerText.trim() !== '' && e.target.innerText !== placeholderTarget) {
        localStorage.setItem('target', e.target.innerText.trim())
        target.blur()
      } else {
        e.target.textContent = localStorage.getItem('target') || placeholderTarget
        target.blur()
      }
    }
  }

  if (e.type === 'blur') {
    if (e.target.innerText.trim() === '') {
      e.target.innerText = localStorage.getItem('target') || placeholderTarget
    } else {
      localStorage.setItem('target', e.target.innerText.trim());
    }
  }
}

setTime()
setBgGreet()
getName()
getTarget()

name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
name.addEventListener('click', setName)
target.addEventListener('keypress', setTarget)
target.addEventListener('blur', setTarget)
target.addEventListener('click', setTarget)

// Quote
const quote = document.querySelector('#quote')
const quoteWrap = document.querySelector('#quote-wrap')
const quoteBtn = document.querySelector('#quote-btn')

async function getQuote() {
  const url = 'https://api.chucknorris.io/jokes/random'
  const res = await fetch(url);
  const data = await res.json();
  quote.innerHTML = data.value
}

document.addEventListener('DOMContentLoaded', getQuote)
quoteBtn.addEventListener('click', getQuote)


// weather

const city = document.querySelector('.city')
const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const error = document.querySelector('.js-weather-error')
const placeholderCity = document.querySelector('.city').dataset.placeholder

const getWeather = async (city) => {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=8fda2357ce3e945bec23c3b6e281004e&units=metric`
  );
  let json = await result.json();
  return json;
};

const updateWeather = async () => {
  const citySearch = localStorage.getItem('city') || ''
  const weather = await getWeather(citySearch)

  if (weather.cod === '404') {
    error.innerText = 'City Is Not found'
    temperature.textContent = ''
    humidity.textContent = ''
    wind.textContent = ''
    weatherIcon.className = 'weather-icon owf'
    document.querySelector('.js-weather-main').style.display = 'none'
    return
  } else {
    document.querySelector('.js-weather-main').style.display = 'flex'
    error.innerText = ''
  }

  if (citySearch && citySearch !== placeholderCity) {
    temperature.textContent = `Temperature: ${weather.main.temp}°C`
    humidity.textContent = `Humidity: ${weather.main.humidity}g/m³`
    wind.textContent = `Wind: ${weather.wind.speed}m/s`
    weatherIcon.classList.add(`owf-${weather.weather[0].id}`)
  } else {
    temperature.textContent = ''
    humidity.textContent = ''
    wind.textContent = ''
    weatherIcon.className = 'weather-icon owf'
  }
}

const getCity = () => {
  if(localStorage.getItem('city') === null) {
    city.textContent = placeholderCity
  } else {
    city.textContent = localStorage.getItem('city')
  }
}

function setCity(e) {
  if (e.type === 'click') {
    e.target.textContent = ''
  }

  if (e.type === 'keypress') {
    if (e.code === 'Enter') {
      if (e.target.textContent.trim() !== '' && e.target.textContent !== placeholderCity) {
        localStorage.setItem('city', e.target.textContent.trim())
        city.blur()
        try {
          updateWeather()
        } catch {
          error.innerHTML = 'Connection To Server Is Failed'
        }
      } else {
        e.target.textContent = localStorage.getItem('city') || placeholderCity
        city.blur()
      }
    }
  }

  if (e.type === 'blur') {
    if (e.target.textContent.trim() === '' || e.target.textContent === placeholderCity) {
      e.target.textContent = localStorage.getItem('city') || placeholderCity
    } else {
      localStorage.setItem('city', e.target.textContent.trim())
      try {
        updateWeather()
      } catch {
        error.innerHTML = 'Connection To Server Is Failed'
      }
    }
  }
}

getCity()

document.addEventListener('DOMContentLoaded', updateWeather)
city.addEventListener('keypress', setCity)
city.addEventListener('blur', setCity)
city.addEventListener('click', setCity)
