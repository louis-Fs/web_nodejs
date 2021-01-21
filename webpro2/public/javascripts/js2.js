
function user() {
var username = document.from.lg.value;
var check=false;
var pp=/^[A-z]\w{6,18}$/;
if (pp.test(username))
	{
		var text=document.getElementsByClassName("text");
		text[0].innerHTML="OK*";
		check=true;
		return check;
	}else
	{
		var text=document.getElementsByClassName("text");
		text[0].innerHTML="用户名只能以字母开始，而不能以数字，_或$开始，字符长度大于6小于20";
		check=false;
		return check;
	}

}
/* http://www.regexlab.com/zh/regref.htm
揭开正则表达式的神秘面纱 */
function ps(){
var username = document.from.lg.value;
var pas = document.from.pass.value;
var check=false;
if(  (/^\w{6,20}$/).test(pas) && username!==pas)
	{
		var text=document.getElementsByClassName("text");
		text[1].innerHTML="OK*";
		check=true;
		return check;
	}else
	{
		var text=document.getElementsByClassName("text");
		text[1].innerHTML="密码不能和用户名相同，6<=长度<=20";
		check=false;
		return check;
	}
}

function check() {
	var check = user() && ps() 
	if (check){
	    
        //window.location.href="http://localhost:8000/index/";
    }
 	return check;
}