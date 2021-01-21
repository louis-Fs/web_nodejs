
function use() {
	var username = document.login.user.value;
	var check = false;
	var pp = /^[A-z]\w{6,18}$/;
	if (pp.test(username)) {
		var text = document.getElementsByClassName("text");
		text[0].innerHTML = "OK*";
		check = true;
		return check;
	} else {
		var text = document.getElementsByClassName("text");
		text[0].innerHTML = "用户名只能以字母开始，而不能以数字，_或$开始，字符长度大于6小于20";
		check = false;
		return check;
	}

}
function ps() {
	var username = document.login.user.value;
	var pas = document.login.pass.value;
	var check = false;
	
	if ((/^\w{6,20}$/).test(pas) && username !== pas) {
		var text = document.getElementsByClassName("text");
		text[1].innerHTML = "OK*";
		check = true;
		cal();
		return check;
	} else {
		var text = document.getElementsByClassName("text");
		text[1].innerHTML = "密码不能和用户名相同，6<=长度<=20";
		check = false;
		return check;
	}
}
/* if(use() && ps()){
	cal();
} */
var fc=false;
function validateLogin() {
	var check = use() && ps();
	
	if (check ) {
		alert("登录成功");
		return true;
	}else{
		return false;
	}
}

/* var xhr = new XMLHttpRequest();
//从服务器获取数据，显示在页面
xhr.onreadystatechange = function () {
	if ((xhr.readyState == 4) && (xhr.status == 200)) {
		if (xhr.responseText == 'wrong') {
			var text = document.getElementsByClassName("text");
			text[1].innerHTML = "密码有误";
			fc=false;
		} if (xhr.responseText == 'empty') {
			var text = document.getElementsByClassName("text");
			text[0].innerHTML = "'账号不存在";
			fc=false;
		} else{
			fc=true;
	}

	}
}
//请求
function cal() {
	var username = document.login.user.value;
	var pas = document.login.pass.value;
	xhr.open("POST", "/", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//A
	//如果一直返回0就是差A
	xhr.send("user=" + username + "&" + "pass=" + pas);
}
 */