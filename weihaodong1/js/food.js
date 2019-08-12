		
		// 选项卡
		var bigUl = document.getElementById('bigUl')
		var list = bigUl.getElementsByTagName('li')
		var divBox = document.getElementById('nod');
		var divList = divBox.getElementsByClassName('grain-r-b')
		for(let i = 0; i < list.length; i++) {
			list[i].index = i;
			list[i].onmouseenter = function() {
				for(let j = 0; j < list.length; j++) {
					list[j].className = '';
                	divList[j].style.display = 'none';
                	
				}
				divList[i].style.display = 'block';
			}
		}
		var bigUl = document.getElementById('bigUl')
		var list = bigUl.getElementsByTagName('li')
		var divBox = document.getElementById('notice-con');
		var divList = divBox.getElementsByClassName('gratia-b1')
		for(let i = 0; i < list.length; i++) {
			list[i].index = i;
			list[i].onclick = function() {
				for(let j = 0; j < list.length; j++) {
					list[j].className = '';
		        	divList[j].style.display = 'none';
		        	
				}
				divList[i].style.display = 'block';
			}
		}
			
			
			// 轮播图
			$(".presale-b").banner({
			        items:$(".presale-b").find("ul"),       
			        left:$(".presale-b").find("#left"),       
			        right:$(".presale-b").find("#right"),
					list:false,
			        autoPlay:true                        
			        // delayTime:2000,                        
			        // moveTime:100,                          
			        // index:0                             
			    })
				
				
				
				// 购物车验证
				// console.log($(".t30"))
				$(".t30").on("click",function(){
					if(msg){
						location.href = "car.html";
					}else{
						if(alert("请先登录")){
							location.href = "landing.html";
						}
					}
				})
				
				
				
				// var aimg = document.querySelectorAll("img");
				// var arr = Array.from(aimg);
				// var t;
				// 
				// onload = onscroll = function(){
				//     // 函数节流：同一个时间单位内，如果多次执行同一个函数，拿到的结果一致的，利用计时器的方式，使得同一个时间单位内，只执行一次这个函数，达到节流的目的
				//     clearTimeout(t);
				//     t = setTimeout(function(){
				//         fn();
				//     },100)
				// }
				// 
				// function fn(){
				//     var scrollT = document.documentElement.scrollTop;
				//     var clientH = document.documentElement.clientHeight;
				//     
				//     for(var i=0;i<arr.length;i++){
				//         console.log(`i:${i}`);
				//         if(arr[i].offsetTop - scrollT < clientH){
				//             arr[i].ljz = arr[i].getAttribute("ljz");
				//             // 小心使用：在循环中修改了循环次数
				//             arr.splice(i,1)
				//         }
				//     }
				// }