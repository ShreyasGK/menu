document.getElementById("b1").addEventListener("click",f1);
function f1()
{
  var a,b,c;
  a=Number(document.getElementById("t1").value);
  b=Number(document.getElementById("t2").value);
  c=a+b;
  alert("addition of two Numbers = "+ c);
  document.getElementById("p1").innerHTML="addition of two numbers"+" "+c;
}
