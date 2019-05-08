(function($) {
    "use strict";
  
    var $navbar = $(".nav"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();
  
    //scroll top 0 sticky
    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 0) {
          $navbar.addClass("sticky");
        } else {
          $navbar.removeClass("sticky");  
        }
    });
  
  })(jQuery, undefined);
  
  $(".menu").click(function(){
  $("#nav").toggleClass("open");
  });

  const yo = {};

yo.email_container = document.querySelector('.email_container');
yo.form = document.querySelector('.email_container > #singular-form');
yo.trigger = document.querySelector('.email_container > #singular-form > button#trigger');
yo.input = document.querySelector('.email_container>#singular-form>#input-container>input');
yo.submitButton = document.querySelector('.email_container > #singular-form > #input-container > button');
yo.successMessage = document.querySelector('.email_container > #singular-form > #success');

yo.submitDelay = 1500;

yo.clickHandler = (e) => {
    switch (e.target) {
        case yo.trigger:
            console.log('case trigger');
            yo.email_container.style.width = '37rem'
            e.target.classList.remove('shown');
            yo.input.classList.add('shown');
            yo.submitButton.classList.add('shown');
            yo.input.focus();
            break;
        case yo.submitButton:
            yo.submitForm();
            break;
    }
}

yo.handleInputKeypress = (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        yo.submitForm();
    }
}

yo.submitForm = () => {
    yo.input.style.transition = 'all .4s ease';
    yo.submitButton.style.transition = 'all .4s ease';
    yo.input.classList.remove('shown');
    yo.submitButton.classList.remove('shown');
    yo.email_container.style.transition = 'all .4s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s';
    yo.email_container.style.width = '';
    yo.successMessage.classList.add('shown');
    let submission = setTimeout(() => yo.form.submit(), yo.submitDelay);
}

yo.input.addEventListener('keypress', (e) => yo.handleInputKeypress(e));
document.addEventListener('click', (e) => yo.clickHandler(e));