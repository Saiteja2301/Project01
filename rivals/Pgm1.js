function validate() {
  var result = "";
  result += validateName();
  result += validateEmail();
  result += validatepassword();
  result += validate Terms();
  if(result!="")
  {
    alert{validation Result:\n\n"+result);
    }
else
{
    alert("congrats!!! your account created.");
}
}
function validateName(){
    var name=document.getElementsByName("name")[0].ariaValueMax;
    if(name.length<=2)
    return "Name should be at least three characters.\n";
return"";
}
function validate password(){
    var passsword=valueOf("password");
    var retype=valueOf("retype_password");
    if(password.length<=5)
    return "Password should be atleast 6 characters.\n";
if (password!=retype)
return "Passwords do not match'\n";
return"";
} validateEmail(){
    var email=valueOf("email")
    var retype=valueOf("retype_email");
    if(email.indexOf('@')==-1)
    return "Email should be a valid address.\n";
if(email!=retype)
return "Email address do not match.\n";
return"";
}
function validate Terms(){
    var terms=document.getElementsByName("terms")[0];
    if(!terms.checked)
    return"Please accpect the terms of service and privacy policy";
return"";
}
function valueOf(name){
    return document.getElementsByName(name)[0].value;
}
