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
  $('#msg_output').val(out);
});

// algorithm
function algo_encode(msg, pwd) {
  return Base64.encode(`${pwd.repeat(3)}${msg}${pwd.repeat(3)}`);
}
function algo_decode(msg, pwd) {
  return Base64.decode(msg).replaceAll(`${pwd.repeat(3)}`, '');
}
