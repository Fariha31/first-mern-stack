var btn = (document.getElementById("todobtn").onclick = function () {
  var input = document.getElementById("myinput").value;
  var list = document.createElement("li");
  var todo = document.createTextNode(input.value);
  list.appendChild(todo);
});
