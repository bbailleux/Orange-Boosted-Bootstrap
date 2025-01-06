(() => {
  'use strict'
  // Indeterminate loading time
  const loadingButton1 = document.querySelector('#loading-btn-1')
  const statusMessage1 = document.querySelector('#loading-btn-msg-1')
  const loadingAnimation1 = document.querySelector('#loading-btn-1 svg')
  let updateStatusMessageCall1
  loadingButton1.addEventListener('click', () => {
    // Change button's look by adding a loading icon and disable it
    loadingButton1.classList.add('loading-indeterminate')
    loadingAnimation1.classList.remove('d-none')
    loadingButton1.setAttribute('disabled', '')
    // Update indeterminate loading status every 3 seconds
    statusMessage1.innerHTML = 'Downloading file 1'
    updateStatusMessageCall1 = setInterval(() => {
      statusMessage1.innerHTML = `${statusMessage1.innerHTML}.`
    }, 1000)
    // stop loading after 10 secondes for this demo
    setTimeout(() => {
      clearTimeout(updateStatusMessageCall1)
      statusMessage1.innerHTML = 'Downloading file 1 is complete'
      loadingButton1.classList.remove('loading-indeterminate')
      loadingAnimation1.classList.add('d-none')
      loadingButton1.removeAttribute('disabled')
    }, 5000)
  })

  /* // Bootstrap compatibility for indeterminate loading time
  const statusMessage3 = document.querySelector('#update3')
  const loadingButton3 = document.querySelector('#load3')
  let updateStatusMessageCall3
  loadingButton3.addEventListener('click', () => {
    // Change button's look by adding a loading icon and disable it
    loadingButton3.setAttribute('disabled', '')
    loadingButton3.innerHTML += '<span class="loader-indeterminate-span" id="loader3" aria-hidden="true"></span>'
    // Update indeterminate loading status every 3 seconds
    statusMessage3.innerHTML = 'Downloading file 3'
    updateStatusMessageCall3 = setInterval(() => {
      statusMessage3.innerHTML = `${statusMessage3.innerHTML}.`
    }, 3000)
    // stop loading after 10 secondes for this demo
    setTimeout(() => {
      clearTimeout(updateStatusMessageCall3)
      statusMessage3.innerHTML = 'End of downloading file 3'
      const span3 = document.querySelector('#loader3')
      span3.remove()
      loadingButton3.removeAttribute('disabled')
    }, 10000)
  }) */

  // Determinate loading time
  const loadingButton2 = document.querySelector('#loading-btn-2')
  const statusMessage2 = document.querySelector('#loading-btn-msg-2')
  const loadingAnimation2 = document.querySelector('#loading-btn-2 svg')
  const loadingTime = getComputedStyle(loadingButton2).getPropertyValue('--bs-btn-loading-time')
  let updateStatusMessageCall2
  const interval = 1000
  loadingButton2.addEventListener('click', () => {
    let counter = 0
    // Change button's look by adding a loading icon and disable it
    loadingButton2.classList.add('loading-determinate')
    loadingAnimation2.classList.remove('d-none')
    loadingButton2.setAttribute('disabled', '')
    // Update indeterminate loading status every 3 seconds
    statusMessage2.innerHTML = 'Downloading file 2: 0%'
    updateStatusMessageCall2 = setInterval(() => {
      counter++
      const percentTime = counter * interval / (loadingTime.slice(0, -1) * 10)
      statusMessage2.innerHTML = `Downloading file 2: ${percentTime}%`
    }, interval)
    // stop loading after 10 secondes for this demo
    setTimeout(() => {
      clearTimeout(updateStatusMessageCall2)
      statusMessage2.innerHTML = 'Downloading file 2 is complete'
      loadingButton2.classList.remove('loading-determinate')
      loadingAnimation2.classList.add('d-none')
      loadingButton2.removeAttribute('disabled')
    }, (loadingTime.slice(0, -1) * 1000))
  })
})()
