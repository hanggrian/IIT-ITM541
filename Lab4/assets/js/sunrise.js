// static fields
const MILLIS_SECOND = 1000
const MILLIS_MINUTE = 60 * MILLIS_SECOND
const MILLIS_HOUR = 60 * MILLIS_MINUTE
const MILLIS_DAY = 24 * MILLIS_HOUR
const DEFAULT_POSITION = {
  coords: {
    latitude: 37.7749,
    longitude: -122.4194,
  },
}

// main
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    process,
    error => {
      var message
      if (error.code === error.PERMISSION_DENIED) {
        message = 'Permission denied'
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        message = 'Position unavailable'
      } else if (error.code === error.TIMEOUT) {
        message = 'Timeout'
      }
      alert(`${message}, using default (San Francisco).`)
      process(DEFAULT_POSITION)
    },
  )
} else {
  alert('Geolocation is not supported, using default (San Francisco).')
  process(DEFAULT_POSITION)
}

/**
 * Call multiple REST APIs to obtain information according to the given
 * position.
 *
 * @param {Object} position a parameter of Geolocation API.
 */
function process(position) {
  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  fetchSunriseSunset('next', position.coords, today)
  fetchSunriseSunset('tomorrow', position.coords, tomorrow)
  fetchGeocode(position.coords)
  fetchWhereTheIss(position.coords)
}

/**
 * A REST call to obtain time events.
 *
 * @param {String} prefix HTML element ID start value.
 * @param {Object} coords latitude and longitude.
 * @param {Date} date target date.
 */
function fetchSunriseSunset(prefix, coords, date) {
  const yyyyMMdd =
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  quickFetch(
    'https://api.sunrisesunset.io/json?' +
    `lat=${coords.latitude}&` +
    `lng=${coords.longitude}&` +
    `date=${yyyyMMdd}`,
    response => {
      // basic information
      document.getElementById(`${prefix}-day`).innerText = yyyyMMdd
      const dayLength = response.results.day_length.split(':')
      document.getElementById(`${prefix}-daylength`).innerText =
        `${dayLength[0]} hours ${dayLength[1]} minutes ${dayLength[2]} seconds`
      document.getElementById(`${prefix}-sunrise`).innerText =
        response.results.sunrise
      document.getElementById(`${prefix}-sunset`).innerText =
        response.results.sunset
      document.getElementById(`${prefix}-dawn`).innerText =
        response.results.dawn
      document.getElementById(`${prefix}-dusk`).innerText =
        response.results.dusk
      document.getElementById(`${prefix}-solarnoon`).innerText =
        response.results.solar_noon

      // remaining time
      const remainingSunrise = date.subtract(response.results.sunrise)
      const remainingSunset = date.subtract(response.results.sunset)
      const remainingDawn = date.subtract(response.results.dawn)
      const remainingDusk = date.subtract(response.results.dusk)
      const remainingSolarnoon = date.subtract(response.results.solar_noon)
      document.getElementById(`${prefix}-sunrise-remaining`).innerText =
        remainingSunrise.millisToString()
      document.getElementById(`${prefix}-sunset-remaining`).innerText =
        remainingSunset.millisToString()
      document.getElementById(`${prefix}-dawn-remaining`).innerText =
        remainingDawn.millisToString()
      document.getElementById(`${prefix}-dusk-remaining`).innerText =
        remainingDusk.millisToString()
      document.getElementById(`${prefix}-solarnoon-remaining`).innerText =
        remainingSolarnoon.millisToString()

      // update progress
      document.getElementById(`${prefix}-sunrise-progress`)
        .setProgress(remainingSunrise)
      document.getElementById(`${prefix}-sunset-progress`)
        .setProgress(remainingSunset)
      document.getElementById(`${prefix}-dawn-progress`)
        .setProgress(remainingDawn)
      document.getElementById(`${prefix}-dusk-progress`)
        .setProgress(remainingDusk)
      document.getElementById(`${prefix}-solarnoon-progress`)
        .setProgress(remainingSolarnoon)
    },
  )
}

/**
 * A REST call to obtain location.
 *
 * @param {Object} coords latitude and longitude.
 */
function fetchGeocode(coords) {
  quickFetch(
    'https://geocode.maps.co/reverse?' +
    `lat=${coords.latitude}&` +
    `lon=${coords.longitude}`,
    response => {
      document.getElementById('area-location').innerText =
        response.display_name
    },
  )
}

/**
 * A REST call to obtain timezone.
 *
 * @param {Object} coords latitude and longitude.
 */
function fetchWhereTheIss(coords) {
  quickFetch(
    'https://api.wheretheiss.at/v1/coordinates/' +
      `${coords.latitude},${coords.longitude}`,
    response => {
      document.getElementById('area-timezone').innerText =
        response.timezone_id
    },
  )
}

/**
 * A wrapper of `fetch` function in default GET method.
 *
 * @param {String} url ampersand-separated key-value pairs.
 * @param {Function} listener callback to handle the response.
 */
function quickFetch(url, listener) {
  fetch(url)
    .then(result => result.json())
    .then(listener)
    .catch(error => console.error('Error:', error))
}

/**
 * Updates progress bar current value.
 *
 * @param {Number} value no more than `MILLIS_DAY`.
 */
HTMLElement.prototype.setProgress = function(value) {
  const percentage = value / MILLIS_DAY * 100

  this.style = `width: ${percentage}%`
  this.setAttribute('aria-valuenow', percentage)
  this.setAttribute('aria-valuemax', percentage)
}

/**
 * Calculates the difference between the current date and tomorrow at the given
 * time.
 *
 * @param {String} s the time in `HH:mm:ss` format.
 * @returns {Number}
 */
Date.prototype.subtract = function(s) {
  const i = s.indexOf(' ')
  const time = s.substring(0, i).split(':')
  const amOrPm = s.substring(i + 1)

  const target = new Date(this.valueOf())
  target.setDate(target.getDate() + 1)
  target.setHours(time[0], time[1], time[2])
  if (amOrPm === 'PM') {
    target.setTime(target.getTime() + (12 * 60 * 60 * 1000));
  }

  return Math.floor(target - this)
}

/**
 * Converts milliseconds to `HH:mm:ss`.
 *
 * @returns {String}
 */
Number.prototype.millisToString = function() {
  var seconds = Math.floor(this / MILLIS_SECOND % 60)
  var minutes = Math.floor(this / MILLIS_MINUTE % 60)
  var hours = Math.floor(this / MILLIS_HOUR % 24)
  return `${hours < 10 ? `0${hours}` : hours}:` +
    `${minutes < 10 ? `0${minutes}` : minutes}:` +
    `${seconds < 10 ? `0${seconds}` : seconds}`
}
