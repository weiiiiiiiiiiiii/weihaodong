		var oCont = document.getElementById("cont");
		var oBtn1 = document.getElementById("btn1");
		var oBtn2 = document.getElementById("btn2");
		var oBtn3 = document.getElementById("btn3");
		var oBtn4 = document.getElementById("btn4");
		var oBtn5 = document.getElementById("btn5");
		var oBtn6 = document.getElementById("btn6");
		var oYan = document.getElementById("yan");
		var oButn = document.getElementById("butn");
		
		
		var oP = document.querySelector("p");
		var oL = document.querySelector(".qd .left");
		var oC = document.querySelector(".qd .center");
		var oR = document.querySelector(".qd .right");
		var oDiv = document.querySelector(".yz .ma");
		


		var useronOff = passonOff = pass2onOff = emailonOff = nameonOff = telonOff = yzonOff = checkonOff = false; 
		
		
		
		oBtn1.value="请输入用户名";
		oBtn2.value="请输入密码";
		oBtn3.value="再次输入密码";
		oBtn4.value="请输入您的电子邮箱";
		oBtn5.value="请输入您的真实姓名";
		oBtn6.value="请输入您的手机号码";
		
		
		oBtn1.onfocus = function(){
//			console.log(this);
			if(this.value == "请输入用户名"){	
				this.value = "";
				this.style.color = "#000";
			}else{
				this.value=this.value;
				this.style.color = "#000";
			}
//			this.value="";
			this.onblur=function(){
				if(this.value == ""){
					this.value="请输入用户名";
					this.style.color = "#000";
				}
				var userReg=/^\w{6,18}$/;
				if(userReg.test(this.value)){
					oP.style.display = "block";
					oP.innerHTML = "用户名格式正确";
					useronOff = true;
				}else{
					oP.style.display = "block";
					oP.innerHTML = "用户名不合法，请重新输入";
					useronOff = false;
				}
			}
		}
		oBtn2.onfocus = function(){
//			console.log(this);
			if(this.value == "请输入密码"){	
				this.value = "";
				this.style.color = "#000";
			}else{
				this.value=this.value;
				this.style.color = "#000";
			}
			this.onblur = function(){
				
				if(this.value == ""){
					this.value="请输入密码";
					this.style.color = "#000";
				}
			}
			this.oninput=function(){
//				if(this.value == ""){
//					this.value="请输入密码";
//					this.style.color = "#999";
//				}
				var a=0;
				var b=0;
				var c=0;
				var lengthReg=/^.{6,16}$/;
				
				if(!lengthReg.test(this.value)){
					oP.style.display = "block";
					oP.innerHTML = "密码长度不符";
					oL.style.background = "#FFFFFF";
					oC.style.background = "#FFFFFF";
					oR.style.background = "#FFFFFF";
					passonOff=false;
					return;
				}else{
					oP.style.display = "none";
					passonOff=true;
				}
				reg1=/\d/;
				if(reg1.test(this.value)){
					a=1;
				}
				var reg2=/[a-zA-Z]/;
				if(reg2.test(this.value)){
					b=1;
				}
				var reg3=/[\W_]/;
				if(reg3.test(this.value)){
					c=1;
				}
				switch(a+b+c){
					case 1:
						oL.innerHTML = "弱";
						oL.style.background = "red";break;
					case 2:
						oC.innerHTML = "中";
						oC.style.background = "orange";break;
					case 3:
						oR.innerHTML = "高";
						oR.style.background = "green";break;
				}
				passonOff=true;
				
				if(oBtn3.value!="") return;
				if(this.value === oBtn3.value){
					oP.style.display = "block";
					oP.innerHTML = "密码一致";
					pass2onOff=true;
				}else{
					oP.style.display = "block";
					oP.innerHTML = "密码不一致，请重新输入";
					pass2onOff=false;
				}
			}
		}
		oBtn3.onfocus = function(){
//			console.log(this);
			if(this.value == "再次输入密码"){	
				this.value = "";
				this.style.color = "#000";
			}else{
				this.value=this.value;
				this.style.color = "#000";
			}
//			this.value="";
			this.onblur = function(){
				
				if(this.value == ""){
					this.value="再次输入密码";
					this.style.color = "#999";
				}
			}
			this.oninput=function(){
				if(this.value == ""){
					this.value="请输入密码";
					this.style.color = "#999";
				}
				
				var a=0;
				var b=0;
				var c=0;
				
				reg1=/\d/;
				if(reg1.test(this.value)){
					a=1;
				}
				var reg2=/[a-zA-Z]/;
				if(reg2.test(this.value)){
					b=1;
				}
				var reg3=/[\W_]/;
				if(reg3.test(this.value)){
					c=1;
				}
				switch(a+b+c){
					case 1:
						oL.innerHTML = "弱";
						oL.style.background = "red";
						oC.style.background = "#FFFFFF";
						oR.style.background = "#FFFFFF";
						break;
					case 2:
						
						oL.style.background = "#FFFFFF";
						oC.innerHTML = "中";
						oR.style.background = "#FFFFFF";
						oC.style.background = "orange";break;
					case 3:
						oL.style.background = "#FFFFFF";
						oC.style.background = "#FFFFFF";
						oR.innerHTML = "高";
						oR.style.background = "green";break;
				}
				pass2onOff=true;
				if(this.value === oBtn2.value){
						oP.style.display = "block";
						oP.innerHTML = "密码一致";
						passonOff=true;
					}else{
						oP.style.display = "block";
						oP.innerHTML = "密码不一致，请重新输入";
						passonOff=false;
				}
			}
		}
		
		
		oBtn4.onfocus = function(){
//			console.log(this);
			if(this.value == "请输入您的电子邮箱"){	
				this.value = "";
				this.style.color = "#000";
			}else{
				this.value=this.value;
				this.style.color = "#000";
			}
//			this.value="";
			this.onblur=function(){
				if(this.value == ""){
					this.value="请输入您的电子邮箱";
					this.style.color = "#999";
				}
				var emailReg = /^\w+\@[0-9a-z]+\.(com|cn)$/i;
				if(emailReg.test(this.value)){
					oP.style.display = "block";
					oP.innerHTML = "电子邮箱格式正确";
					emailonOff = true;
				}else{
					oP.style.display = "block";
					oP.innerHTML = "电子邮箱不合法，请重新输入";
					emailonOff = false;
				}
			}
		}
		
		oBtn5.onfocus = function(){
//			console.log(this);
			if(this.value == "请输入您的真实姓名"){	
				this.value = "";
				this.style.color = "#000";
			}else{
				this.value=this.value;
				this.style.color = "#000";
			}
//			this.value="";
			this.onblur=function(){
				if(this.value == ""){
					this.value="请输入您的真实姓名";
					this.style.color = "#999";
				}
				var nameReg = /^[\u2E80-\u9FFF]{2,4}$/;
				if(nameReg.test(this.value)){
					oP.style.display = "block";
					oP.innerHTML = "姓名格式正确";
					nameonOff = true;
				}else{
					oP.style.display = "block";
					oP.innerHTML = "姓名不合法，请重新输入";
					nameonOff = false;
				}
			}
		}
		
		oBtn6.onfocus = function(){
			if(this.value == "请输入您的手机号码"){	
				this.value = "";
				this.style.color = "#000";
			}else{
				this.value=this.value;
				this.style.color = "#000";
			}
			this.onblur=function(){
				if(this.value == ""){
					this.value="请输入您的手机号码";
					this.style.color = "#999";
				}
				var telReg = /^1[3-9]\d{9}$/;
				if(telReg.test(this.value)){
					oP.style.display = "block";
					oP.innerHTML = "手机号码格式正确";
					telonOff = true;
				}else{
					oP.style.display = "block";
					oP.innerHTML = "手机号码不合法，请重新输入";
					telonOff = false;
				}
			}
		}
		
		oDiv.onclick = function(){
			oDiv.innerHTML = random(1000,9999)
		}
		oYan.onblur = function(){
			if(this.value === oDiv.innerHTML){
				oP.style.display = "block";
				oP.innerHTML = "验证码正确";
				yzonOff = true;
			}else{
				oP.style.display = "block";
				oP.innerHTML = "验证码错误，请重新输入";
				yzonOff = false;
//				this.value="";
			}
		}
		
		
		oButn.onclick = function(){
			if(useronOff && passonOff && pass2onOff && emailonOff && nameonOff && telonOff && yzonOff){
				alert("注册成功")
			}else{
				this.onclick = null;
			}
		}
		
		 
		
		function random(a,b){
			return Math.round(Math.random()*(a-b)+b);
		}