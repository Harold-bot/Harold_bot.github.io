function react() {
  isHidden = document.querySelector('input[name="time"]:checked').value;
  if (isHidden) {
    document.getElementById("time_choise").style.display = 'block';    
    document.getElementById("time_choise").style.transition = 'all 2s ease-in-out 2s';
  }
}

$('.questions_card').on('click', (e) => {
  $(e.currentTarget).children('.questions_card-text').toggle('fast')
  console.log($(e.currentTarget).find('.questions_card-img').css('transform'))
  if ($(e.currentTarget).find('.questions_card-img').css('transform')!=='none') {
      $(e.currentTarget).find('.questions_card-img').css('transform', 'none')
  } else {
      $(e.currentTarget).find('.questions_card-img').css({
          'transform': 'rotate(180deg)',
          'transition': 'all 400ms'
      })
  }

})
