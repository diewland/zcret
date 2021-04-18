// main
$('#btn_encode').click(_ => {
  let input = $('#msg_input').val();
  let pwd = $('#password').val();
  let out = algo_encode(input, pwd);
  $('#msg_output').val(out);
});
$('#btn_decode').click(_ => {
  let input = $('#msg_input').val();
  let pwd = $('#password').val();
  let out = algo_decode(input, pwd);
  if (out) {
    $('#msg_output').val(out);
    $('#msg_output').addClass('is-valid');
    $('#msg_output').removeClass('is-invalid');
  }
  else {
    $('#msg_output').val('Sorry, Invalid secret :/');
    $('#msg_output').removeClass('is-valid');
    $('#msg_output').addClass('is-invalid');
  }
});

// algorithm
function algo_encode(msg, pwd) {
  return Base64.encode(`${pwd.repeat(3)}${msg}`);
}
function algo_decode(msg, pwd) {
  if (!pwd) return null;
  let plain = Base64.decode(msg);
  let header = pwd.repeat(3);
  if (plain.startsWith(header))
    return plain.replace(header, '');
  return null;
}
