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

$(function(){
  $('#form1 .form_social input').change(function(){
      $('#form1 .form_socials-choised span').html($(this).val());
  });
});

$(function(){
  $('#form2 .form_social input').change(function(){
      $('#form2 .form_socials-choised span').html($(this).val());
  });
});

$(function(){
  $('#form3 .form_social input').change(function(){
      $('#form3 .form_socials-choised span').html($(this).val());
  });
});

$(function(){
  $('#form4 .form_social input').change(function(){
      $('#form4 .form_socials-choised span').html($(this).val());
  });
});

$(function(){
  $('#form5 .form_social input').change(function(){
      $('#form5 .form_socials-choised span').html($(this).val());
  });
});

$(function(){
  $('#form6 .form_social input').change(function(){
      $('#form6 .form_socials-choised span').html($(this).val());
  });
});

let menuState = false;

$('.menu_btn').click(function () {
  menuState = !menuState;
  if (menuState) {
    $('.map_wrapper').animate({left: '0px'}, 500, function () {
      $('.substrate').animate({opacity: '0.7'}, 200)
    })
  }
})

$('.map_close').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.substrate').animate({opacity: '0'}, 200, function () {
      $('.map_wrapper').animate({left: '-3000px'}, 500)
    })
  }
})

$('.substrate').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.substrate').animate({opacity: '0'}, 200, function () {
      $('.map_wrapper').animate({left: '-3000px'}, 500)
    })
  }
})

$('.map_item').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.substrate').animate({opacity: '0'}, 200, function () {
      $('.map_wrapper').animate({left: '-3000px'}, 500)
    })  
  }
})

$('.popover_pluce-container').click(function () {
  menuState = !menuState;
  if (menuState) {
    $(this).toggleClass('active')
  } else {
    $(this).removeClass('active')
  }
})

$('#1').click(function () {
  $('.services').css({'backgroundImage':'url(./assets/img/services/bg1.png)'});
})

$('#2').click(function () {
  $('.services').css({'backgroundImage':'url(./assets/img/services/bg2.png)'});
})

$('#3').click(function () {
  $('.services').css({'backgroundImage':'url(./assets/img/services/bg3.png)'});
})

$('#4').click(function () {
  $('.services').css({'backgroundImage':'url(./assets/img/services/bg4.png)'});
})

var $root = $('html, body');

$(window).scroll(function(){
	scroll = $(window).scrollTop();
	if (scroll >= 108) {
		$('.sticky_nav').removeClass('fixed');

	}
	else {
		$('.sticky_nav').addClass('fixed');

	}
});

$('.map_item').click(function () {
  $root.animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top - 200
  }, 500);

  return false;
});

$('.brick_types-btn').click(function () {
  $root.animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top - 200
  }, 500);

  return false;
});

$('form').submit(function(event) {
  event.preventDefault();
  form_data = $(this).serialize();
  console.log(form_data);
  $('.modal').modal('hide');
   $.ajax({
        url: 'mailer/send.php', // point to server-side PHP script 
        contentType: false,
        processData: false,
        data: form_data,                         
        type: 'post',
        success: function(php_script_response){
        //   formElement.find('.submit-btn').removeAttr('disabled');
          $('#submit').modal('show');
        }
     })
});

// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
var alertwin = getCookie("alertwin");
if (alertwin != "no") { 
  let n = 0;
  $(document).mouseleave(function(e){
      if (e.clientY < 10) {
        if ( n < 2 ) {
          $('#exit').modal('show'); 
          n++; 
        }
          // записываем cookie на 1 день, с которой мы не показываем окно
          var date = new Date;
          date.setDate(date.getDate() + 1);    
          document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();       
      }    
  });
}