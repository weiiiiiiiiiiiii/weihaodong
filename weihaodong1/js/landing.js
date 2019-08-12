class Login{
        constructor(){
            this.url = "http://api.icodeilife.cn:81/user";
            this.user = $(".txt");
            this.pass = $(".pass");
            this.btn = $(".btn");
            this.state = $(".te span");
            this.addEvent();
        }
        addEvent(){
            var that = this;
            this.btn.click(function(){
                that.load()
            })
        }
        load(){
			if(!this.user.val() && !this.pass.val()){
				alert(""+"\n"+"")
			}else if(!this.user.val()){
				alert("")
			}else if(!this.pass.val()){
				alert("")
			}else{
            $.ajax({
                url:this.url,
                data:{
                    type:"login",
                    user:this.user.val(),
                    pass:this.pass.val(),
                },
                success:(res)=>{
                    this.res = JSON.parse(res);
                    // console.log(res);
                    if(this.res.code == 2){
                        this.state.html("帐号密码不符，请<a href='landing.html'>重新登录</a>")
                    }else if(this.res.code == 1){
                        this.setState()

                        this.state.html("登录成功,5秒后跳转到<a href='home.html'>首页</a>");
                        setTimeout(() => {
                            location.href="home.html";
                        }, 5000);
                        console.log(res)
                    }else if(this.res.code == 0){
                        this.state.html("不存在该用户信息，请<a href='registered.html'>注册</a>")
                    }
                }
            })
        }
	}
        setState(){
            localStorage.setItem("loginUser",JSON.stringify(this.res.msg));
        }
    }
    
    new Login();