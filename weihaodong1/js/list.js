class list{
			constructor(){
				this.cont = document.querySelector(".cont");
				// this.he = 0;
				// $(".num").html(this.he);
	            this.url = "http://localhost/1906/weihaodong1/data/goods.json";
	            
	            
	            this.load();
	            this.addEvent();
			}
			addEvent(){
				var that = this;
				this.cont.addEventListener("click",function(eve){
					if(eve.target.className == "btn"){
						that.id = eve.target.parentNode.getAttribute("qwe");
						// location.search = that.id
						that.setCookie()
						console.log(that.id)
					}
				})
			}
			setCookie(){
				this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
				if(this.goods.length == 0){
					this.goods.push({
						id : this.id,
						num : 1
					})
				}else{
					var i = 0;
					var onoff = this.goods.some((val,index)=>{
						i = index;
                    	return val.id == this.id;
					})
					if(onoff){
						this.goods[i].num++
					}else{
							this.goods.push({
							id : this.id,
							num : 1
						})
					}
				}
				setCookie("goods",JSON.stringify(this.goods));
				
				for(var i in this.goods){
					this.he += parseFloat(this.goods[i].num);
					
				}
				// console.log(this.goodsId);
				$(".num").html(this.he);
			}
			load(){
	            var that = this;
	            ajaxGet(this.url,function(res){
	                that.res = JSON.parse(res);
	                that.display();
	            })
	        }
			display(){
					var str = "";
					this.res.forEach((val)=>{
	                str += `<div class="box" qwe = "${val.goodsId}">
	                            <a href="details.html?${val.goodsId}"><img src="${val.url}" alt=""></a>
	                            <span>${val.name}</span>
	                            <p>${val.price}</p>
	                            <em>${val.tip}</em>
	                            <i class="btn" href="car.html">加入购物车</i>
	                        </div>`
	            })
					this.cont.innerHTML = str;
			}
		}
		new list;