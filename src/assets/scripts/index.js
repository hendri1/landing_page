$(function() {
  var intervalVar = null

  function addTime() {
    var timeNewsletter = localStorage.getItem('timeNewsletter')
    var addTime = (parseInt(timeNewsletter) ? parseInt(timeNewsletter) : 0) + 1000
    localStorage.setItem('timeNewsletter', addTime)
  }

  var startInterval = function () {
    intervalVar = setInterval(function() {
      if (localStorage.getItem('timeNewsletter') > 600000) {
        clearData()
      }
      addTime()
    }, 1000)
  }

  function clearData() {
    clearInterval(intervalVar)
    var resetlocalStorage = confirm('Do you want to clear local storage?')

    if(resetlocalStorage) {
      localStorage.clear()
      alert('Please refresh your browser')
    } else {
      alert('If you want to reset website, please paste it in your console browser localstorage.clear() and then refresh your browser')
    }
  }

  if (localStorage.getItem('timeNewsletterHide') !== 'true') {
    $('#newslatter-wrapper').slideDown() 
  } else {
    $('#footer-wrapper').addClass('remove-margin')
    startInterval()
  }

  $('#btn-got-it').click(function(){
    $('#header-notification-wrapper').slideUp()
    $('#header-wrapper').addClass('remove-margin')
  })

  $('.close').click(function(){
    localStorage.setItem('timeNewsletterHide', 'true')
    startInterval()
    $('#newslatter-wrapper').slideUp()
    $('#footer-wrapper').addClass('remove-margin')
  })

  $('#form').submit(function(e){
    e.preventDefault()
    var form = $(this).serialize()

    $.ajax({
      method: 'POST',
      data: form,
      url: '#', // this section for url
      success: function(response) {
        console.log(response)
      },
      error: function(error) {
        console.log(error)
      }
    })
    
    alert('Thank you for subscription')
    $('#email').val('')
  })
})
