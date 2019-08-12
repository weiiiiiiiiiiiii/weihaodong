		
		
		class Detail{
			constructor(){
				this.url = "http://localhost/1906/weihaodong1/data/goods.json";
			    this.a = location.search
				this.b = this.a.slice(1)
				// console.log(this.b)
				this.box = document.querySelector(".main-b")
				this.losd()
			}
			losd(){
				var that = this
				ajaxGet(this.url,function(res){
				    that.res = JSON.parse(res);
					// console.log(res)
				    that.display();
				})
			}
			display(){
				var str = ""
				for(var i=0;i<this.res.length;i++){
					if(this.res[i].goodsId == this.b){
						str += `<div class="main-b-l">
									<div class="s_box">
										<img src="${this.res[i].url}" >
									</div>
									<div class="zhong">
										<img src="${this.res[i].url}">
										<img src="img2/f2.jpg">
										<img src="img2/f3.jpg">
										<img src="img2/f4.jpg">
									</div>
									<div class="b_box">
										<img src="${this.res[i].url}">
									</div>
								</div>
								
								<div class="main-b-r">
									<div class="title">
										<h2>${this.res[i].name}</h2>
										<p>
											宝妮意大利面，100%杜兰小麦制成，意大利杜兰小麦制成的意大利面耐煮劲道口感好。面体通透，富有质感，
											煮熟后呈金色光泽。入口爽滑劲道，香味丰富有层次。整箱购买价格更实惠！
										</p>
									</div>
									<form>
										<div class="price">
											<ul>
												<li>美鲜价：</li>
												<li><span>${this.res[i].price}</span></li>
												<li><a href="##">（登陆查看会员价）</a></li>
												<li>| 查看价格变化</li>
											</ul>
										</div>
										<div class="integral">
											<ol>
												<li>商品规格：3kg/包,四包/箱</li>
												<li>积分：15   积分</li>
												<li>商品货号：14108</li>
											</ol>
										</div>
										<div class="pice">
											<div class="dan">
												<span>购买单位:</span>
												<i>单包</i>
												<i>整箱</i>
											</div>
											<div class="gui">
												<span>商品规格:</span>
												<u>宝妮 意大利面 3kg/包 4包/箱</u>
											</div>
											<div class="num">
												<b>选择数量:</b>
												<input type="button" id="left" value="-">
												<s class="shu">1</s>
												<input type="button" id="right" value="+">
												<strong>30</strong>
												<i>*</i><em>购物虽好  可不要贪杯哦！！！</em>
											</div>
											<div class="jie">
												<input type="button" name="" id="liji" value="立即购买" />
												<input type="button" name="" id="jiaru" value="加入购物车" />
											</div>
										</div>
									</form>
								</div>`
						}
						this.box.innerHTML = str;
						// console.log(this.box.innerHTML)
					}
					this.sBox=document.querySelector(".s_box");
					this.sImg=this.sBox.children[0];
					this.bBox=document.querySelector(".b_box");
					
					this.bImg=this.bBox.children[0];
					this.oImg=document.querySelectorAll(".zhong img");
						this.addEvent();
						this.addEvent2();
				}
				addEvent(){
// 					this.sBox=document.querySelector(".s_box");
// 					this.sImg=this.sBox.children[0];
// 					this.bBox=document.querySelector(".b_box");
// 
// 					this.bImg=this.bBox.children[0];
// 					this.oImg=document.querySelectorAll(".zhong img");
					// 放大镜
					var that = this;
					this.sBox.onmouseenter = function(){
						that.show()
					}
					this.sBox.onmouseleave = function(){
						that.hide()	
					}
					this.sBox.onmousemove = function(eve){
						var e = eve || window.event
						that.move(e);
					}
					
					for(var i=0;i<this.oImg.length;i++){
						var that = this;
						this.oImg[i].onclick = function(){
							that.sImg.src = this.src;
							that.bImg.src = this.src;
						}
					}
					
				}
				show(){
					this.bBox.style.display = "block";
					
					if(!this.span){
						this.span = document.createElement("span");
						var w = this.bBox.offsetWidth / this.bImg.offsetWidth * this.sBox.offsetWidth;
						var h = this.bBox.offsetHeight / this.bImg.offsetHeight * this.sBox.offsetHeight;
						
						this.span.style.cssText = `width:${w}px;height:${h}px;background:rgba(200,200,200,0.2);position:absolute;left:0;top:0;`;
						this.sBox.appendChild(this.span);
					}
					
					this.span.style.display = "block";
				}
				hide(){
					this.span.style.display = "none";
					this.bBox.style.display = "none";
				}
				move(e){
					var l = e.pageX - this.sBox.offsetLeft - this.span.offsetWidth/2;
					var t = e.pageY - this.sBox.offsetTop - this.span.offsetHeight/2;
					
					if(l < 0) l=0;
					if(t < 0) t=0;
					
					if(l > this.sBox.offsetWidth - this.span.offsetWidth){
						l = this.sBox.offsetWidth - this.span.offsetWidth
					}
					if(t > this.sBox.offsetHeight - this.span.offsetHeight){
						t = this.sBox.offsetHeight - this.span.offsetHeight
					}
					this.span.style.left = l + "px";
					this.span.style.top = t + "px";
					
					var x = l / (this.sBox.offsetWidth - this.span.offsetWidth);
					var y = t / (this.sBox.offsetHeight - this.span.offsetHeight);
					
					this.bImg.style.left = -x * (this.bImg.offsetWidth - this.bBox.offsetWidth) + "px";
					this.bImg.style.top = -y * (this.bImg.offsetHeight - this.bBox.offsetHeight) + "px";
				}
				addEvent2(){
					// 数量增加   钱数相加
					var oStr = document.querySelector(".shu");//数量
					// console.log(oStr)
					var left = document.getElementById("left");
					var right = document.getElementById("right");
					// console.log(right)
					var prce = document.querySelector("strong");
					// console.log(prce)
					var jiaru = document.getElementById("jiaru");
					var num = parseFloat(oStr.innerHTML);
					var sum = parseFloat(prce.innerHTML);
					
					left.onclick=function(){
						if(num <= 1) {
							
						} else {
							num--;
					        oStr.innerHTML = num
					        prce.innerHTML = sum * num 
						}
					    
					}
					right.onclick = function() {
						num++;
						oStr.innerHTML = num
						prce.innerHTML = sum * num
					}
				}
			}
				
			
		
		new Detail();
		