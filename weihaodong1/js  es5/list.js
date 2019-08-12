"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var list = function () {
	function list() {
		_classCallCheck(this, list);

		this.cont = document.querySelector(".cont");
		// this.he = 0;
		// $(".num").html(this.he);
		this.url = "http://localhost/1906/weihaodong1/data/goods.json";

		this.load();
		this.addEvent();
	}

	_createClass(list, [{
		key: "addEvent",
		value: function addEvent() {
			var that = this;
			this.cont.addEventListener("click", function (eve) {
				if (eve.target.className == "btn") {
					that.id = eve.target.parentNode.getAttribute("qwe");
					// location.search = that.id
					that.setCookie();
					console.log(that.id);
				}
			});
		}
	}, {
		key: "setCookie",
		value: function (_setCookie) {
			function setCookie() {
				return _setCookie.apply(this, arguments);
			}

			setCookie.toString = function () {
				return _setCookie.toString();
			};

			return setCookie;
		}(function () {
			var _this = this;

			this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
			if (this.goods.length == 0) {
				this.goods.push({
					id: this.id,
					num: 1
				});
			} else {
				var i = 0;
				var onoff = this.goods.some(function (val, index) {
					i = index;
					return val.id == _this.id;
				});
				if (onoff) {
					this.goods[i].num++;
				} else {
					this.goods.push({
						id: this.id,
						num: 1
					});
				}
			}
			setCookie("goods", JSON.stringify(this.goods));

			for (var i in this.goods) {
				this.he += parseFloat(this.goods[i].num);
			}
			// console.log(this.goodsId);
			$(".num").html(this.he);
		})
	}, {
		key: "load",
		value: function load() {
			var that = this;
			ajaxGet(this.url, function (res) {
				that.res = JSON.parse(res);
				that.display();
			});
		}
	}, {
		key: "display",
		value: function display() {
			var str = "";
			this.res.forEach(function (val) {
				str += "<div class=\"box\" qwe = \"" + val.goodsId + "\">\n\t                            <a href=\"details.html?" + val.goodsId + "\"><img src=\"" + val.url + "\" alt=\"\"></a>\n\t                            <span>" + val.name + "</span>\n\t                            <p>" + val.price + "</p>\n\t                            <em>" + val.tip + "</em>\n\t                            <i class=\"btn\" href=\"car.html\">\u52A0\u5165\u8D2D\u7269\u8F66</i>\n\t                        </div>";
			});
			this.cont.innerHTML = str;
		}
	}]);

	return list;
}();

new list();