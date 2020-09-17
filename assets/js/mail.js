document.getElementById("emailSubmit").addEventListener("click", function (e) {
  e.preventDefault();
  const name = $("input#nameInput").val();
  const body = document.getElementById("msgInput").value;
  const msg = `${body}%0d%0a%0d%0aRegards, ${name}`;
  window.open(`mailto:tiana.husted@gmail.com?body=${msg}`);
});