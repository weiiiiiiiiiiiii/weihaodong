"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = function () {
    function Login() {
        _classCallCheck(this, Login);

        this.url = "http://api.icodeilife.cn:81/user";
        this.user = $(".txt");
        this.pass = $(".pass");
        this.btn = $(".btn");
        this.state = $(".te span");
        this.addEvent();
    }

    _createClass(Login, [{
        key: "addEvent",
        value: function addEvent() {
            var that = this;
            this.btn.click(function () {
                that.load();
            });
        }
    }, {
        key: "load",
        value: function load() {
            var _this = this;

            if (!this.user.val() && !this.pass.val()) {
                alert("" + "\n" + "");
            } else if (!this.user.val()) {
                alert("");
            } else if (!this.pass.val()) {
                alert("");
            } else {
                $.ajax({
                    url: this.url,
                    data: {
                        type: "login",
                        user: this.user.val(),
                        pass: this.pass.val()
                    },
                    success: function success(res) {
                        _this.res = JSON.parse(res);
                        // console.log(res);
                        if (_this.res.code == 2) {
                            _this.state.html("帐号密码不符，请<a href='landing.html'>重新登录</a>");
                        } else if (_this.res.code == 1) {
                            _this.setState();

                            _this.state.html("登录成功,5秒后跳转到<a href='home.html'>首页</a>");
                            setTimeout(function () {
                                location.href = "home.html";
                            }, 5000);
                            console.log(res);
                        } else if (_this.res.code == 0) {
                            _this.state.html("不存在该用户信息，请<a href='registered.html'>注册</a>");
                        }
                    }
                });
            }
        }
    }, {
        key: "setState",
        value: function setState() {
            localStorage.setItem("loginUser", JSON.stringify(this.res.msg));
        }
    }]);

    return Login;
}();

new Login();