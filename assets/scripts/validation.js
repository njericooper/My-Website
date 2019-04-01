var booking_email = $('input[name=booking_email]').val();

if( /(.+)@(.+){2,}\.(.+){2,}/.test(booking_email) ){
  // valid email
} else {
  // invalid email
}