window.onload = function () {
  var btn = document.getElementById("todobtn");
  btn.onclick = handleBtn;
  var dbtn = document.getElementById("deletebtn");
  dbtn.onclick = DeleteBtn;
};
var handleBtn = function () {
  var input1 = document.getElementById("myinput").value;
  var ulist1 = document.getElementById("ulist");
  var list = document.createElement("li");
  var delbtn = document.createElement("button");
  var btnvalue = document.createTextNode("Delete Todo");
  delbtn.appendChild(btnvalue);
  var att = document.createAttribute("id");
  att.value = "deletebtn";
  delbtn.setAttributeNode(att);
  delbtn.onclick = DeleteBtn;
  var to = document.createTextNode(input1 + " ");
  list.appendChild(to);
  var input2 = (document.getElementById("myinput").value = " ");
  list.appendChild(delbtn);
  ulist1.appendChild(list);

  //ulist is already in body ,if not then document.body.append(ulist)
};
var DeleteBtn = function (e) {
  var eve = e.target;
  var list2 = eve.parentNode;
  list2.parentNode.removeChild(list2);
};
