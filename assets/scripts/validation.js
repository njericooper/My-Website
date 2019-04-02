var email = $('input[name=email]').val();

if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ){
  // valid email 
} else {
  // invalid email
}