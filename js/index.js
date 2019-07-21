	
$(function(){
	var liNum = 5*5*5; // 暂且认为li个数为 5*5*5 个
	/* var dT = [
	'<li ><p class="title"><img src="img/8.jpg"/></p><p class="author">若一</p><p class="time">2019.7.25</p></li>',
		]; */
	var data = [];
	
	for(var i=1;i<=125;i++){
		/* for(var j=0;j<dT.length;j++){
			//data.push(dT[j]);
		}; */
		var img ={'img':'<li ><p class="title"><img src="img/'+i+'.jpg"/></p><p class="author">若一</p><p class="time">2019.7.25</p></li>','data':'愿你是风，鼓起白色的帆；愿你是船，劈开蓝色的波澜。生活正在你的前方微笑，勇敢地走上前去，将彩色的人生拥抱</br>'+i+''}
			data.push(img)
	};
	
	// 拖拽 滚轮
	(function(){
		

if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端
   var nowX , lastX , minusX = 0, nowY , lastY , minusY = 0;
   var roY = 0 , roX = 0 , tZ = -12000;
   var timer1 , timer2;
  
}else{
	var nowX , lastX , minusX = 0, nowY , lastY , minusY = 0;
	var roY = 0 , roX = 0 , tZ = -2000;
	var timer1 , timer2;
}		
		
	 	document.addEventListener("touchstart",function(ev){//触碰
		console.log('触碰')
			//ev = ev || window.event;
			lastX = ev.targetTouches[0].pageX;
			lastY = ev.targetTouches[0].pageY;
			clearInterval( timer1 );
			/* $(this).on('touchmove',function(ev){
			//	ev = ev || window.event; //ev 事件对象 存放事件的相关信息
				nowX = ev.targetTouches[0].pageX;  // ev.clientX  clientX属性存放鼠标x坐标
				nowY = ev.targetTouches[0].pageY;
				minusX = nowX - lastX;  // 两者差值
				minusY = nowY - lastY;
				roY += minusX*0.2;
				roX -= minusY*0.2;
				$('#main').css({
					'transform' : 'translateZ('+ tZ +'px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)'
				});
				lastX = nowX; // 存放前一点的x坐标
				lastY = nowY;
			}); */
			return false;
		}); 
		//监听 touchmove 事件 手指 移动时 做的事情
	document.addEventListener("touchmove", function (ev) {
	 		nowX = ev.targetTouches[0].pageX;  // ev.clientX  clientX属性存放鼠标x坐标
				nowY = ev.targetTouches[0].pageY;
				minusX = nowX - lastX;  // 两者差值
				minusY = nowY - lastY;
				roY += minusX*0.2;
				roX -= minusY*0.2;
				$('#main').css({
					'transform' : 'translateZ('+ tZ +'px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)'
				});
				lastX = nowX; // 存放前一点的x坐标
				lastY = nowY;
        }, false);
		document.addEventListener("touchend",function(e){//松开
		console.log('松开')
			$(this).off('touchmove');
			timer1 = setInterval(function(){
				minusX *= 0.95;
				minusY *= 0.95;
				if ( Math.abs(minusX) < 0.5 && Math.abs(minusY) < 0.5 )
				clearInterval( timer1 );
				roY += minusX*0.2;
				roX -= minusY*0.2;
				$('#main').css({
					'transform' : 'translateZ('+ tZ +'px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)'
				});
			} , 13);
		});
		$(document).mousedown(function(ev){
			ev = ev || window.event;
			lastX = ev.clientX;
			lastY = ev.clientY;
			clearInterval( timer1 );
			$(this).on('mousemove',function(ev){
				ev = ev || window.event; //ev 事件对象 存放事件的相关信息
				nowX = ev.clientX;  // ev.clientX  clientX属性存放鼠标x坐标
				nowY = ev.clientY;
				minusX = nowX - lastX;  // 两者差值
				minusY = nowY - lastY;
				roY += minusX*0.2;
				roX -= minusY*0.2;
				$('#main').css({
					'transform' : 'translateZ('+ tZ +'px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)'
				});
				lastX = nowX; // 存放前一点的x坐标
				lastY = nowY;
			});
			return false;
		}).mouseup(function(){
			$(this).off('mousemove');
			timer1 = setInterval(function(){
				minusX *= 0.95;
				minusY *= 0.95;
				if ( Math.abs(minusX) < 0.5 && Math.abs(minusY) < 0.5 )
				clearInterval( timer1 );
				roY += minusX*0.2;
				roX -= minusY*0.2;
				$('#main').css({
					'transform' : 'translateZ('+ tZ +'px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)'
				});
			} , 13);
		}).mousewheel(function(e,d){ //滚轮事件
			//var d = arguments[1]   arguments 不定参   实参的集合
			clearInterval( timer2 );
			tZ += d*80;
			tZ = Math.min(0,tZ); // Math.min()  取参数里面最小的
			tZ = Math.max(-8000,tZ); // Math.max()  …… 最大
			// -8000 < tZ < 0
			$('#main').css({
				'transform' : 'translateZ('+ tZ +'px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)'
			});

			timer2 = setInterval(function(){
				d *= 0.85;
				if ( Math.abs(d) < 0.01 )
				{
					clearInterval( timer2 );
				}
				tZ += d*80;
				tZ = Math.min(0,tZ); // Math.min()  取参数里面最小的
				tZ = Math.max(-8000,tZ); // Math.max()  …… 最大
				// -8000 < tZ < 0
				$('#main').css({
					'transform' : 'translateZ('+ tZ +'px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)'
				});
			} , 13);
		});
	})()

	init();
	function init(){
		
		//给#main里面添加 liNum个 li标签
		for ( var i=0 ; i<liNum ; i++ )
		{
			var $li = $(data[i].img);
			var x = (Math.random()-0.5)*5000;
			var y = (Math.random()-0.5)*5000;
			var z = (Math.random()-0.5)*5000;
			// Math.random()   [0,1)*2000  [0,2000) ->  [-1000 , 1000)
			$li.css({
				'transform' : 'translate3d('+x+'px,'+y+'px,'+z+'px)'
			});
			$('#main').append($li);
		}
		setTimeout(function(){
			Table();
			$('#styleBtn').css({
				transform : 'scale(1)',
				opacity : 1
			});
		},300);
		//图形切换
		$('#styleBtn li').on('click',function(){
			var index = $(this).index();
			switch ( index )
			{
				case 0:
					Table();
					break;
				case 1:
					Sphere();
					break;
				case 2:
					Helix();
					break;
				case 3:
					Grid();
					break;
			}
		});

	}

	function Grid(){
		var tX = 400 , tY = 400 , tZ = 800;  // 水平 垂直间隔
		var firstX = - 2*tX; //第一个li水平偏移量
		var firstY = - 2*tY; //第一个li垂直偏移量
		var firstZ = - 2*tZ; //第一个li Z轴偏移量
		$('#main li').each(function(i){
			var iX = (i % 25) % 5; // x方向，要增加的倍数
			var iY = parseInt((i % 25) / 5); //y方向，要增加的倍数
			var iZ = parseInt(i / 25); //z方向，要增加的倍数
			$(this).css({
				'transform' : 'translate3d('+ ( firstX + iX*tX ) +'px,'+ ( firstY + iY*tY ) +'px,'+ (firstZ + iZ*tZ) +'px)'
			});
		});
	}

	function Helix(){
		var roY = 10 , tY = 10;
		var mIndex = Math.floor($('#main li').length / 2);
		var firsttY = -tY*mIndex;
		$('#main li').each(function(i){
			$(this).css({
				'transform' : 'rotateY('+ 10*i +'deg) translateY('+ (firsttY+tY*i) +'px) translateZ(1000px)'
			});
		})
	}

	function Sphere(){
		var arr = [1,4,8,10,12,17,22,16,14,9,6,5,1];
		var roX = 180/arr.length;
		var fisrtRoX = 90;
		$('#main li').each(function(j){
			var sum = 0;
			var index , num;
			for ( var i=0;i<arr.length;i++ )
			{
				sum += arr[i];
				if ( sum >= j+1 )
				{
					index = i;
					num = arr[i] - (sum-j);
					break;
				}
			}
			var roY = 360/arr[index];
			var x = index%2?fisrtRoX+index*roX:fisrtRoX-index*roX;
			var y = num*roY;
			var z = 0;
			if ( x > 90 && x < 270 )
			{
				z = 180;
			}
			$(this).css({
				transform : 'rotateY('+y+'deg) rotateX('+x+'deg) rotateZ('+z+'deg) translateZ(800px)'
			});
		});
	}

	function Table(){
		
		var tX = 160 , tY = 200;
		var firstX = -16*tX + 60;
		var firstY = -4*tY;
		//var firstY1 = -7*tY;
		var arr = [
			// 左上边角
			{x:firstX+-1*tX,y:firstY+-2*tY},
			{x:firstX+0*tX,y:firstY+-2*tY},
			{x:firstX+1*tX,y:firstY+-2*tY},
			{x:firstX+-1*tX,y:firstY+-1*tY},
			{x:firstX+-1*tX,y:firstY+0*tY},
			{x:firstX+0*tX,y:firstY+-1*tY},
			// 左下边角
			{x:firstX+-1*tX,y:firstY+9*tY},
			{x:firstX+-1*tX,y:firstY+8*tY},
			{x:firstX+-1*tX,y:firstY+7*tY},
			{x:firstX+0*tX,y:firstY+9*tY},
			{x:firstX+1*tX,y:firstY+9*tY},
			{x:firstX+0*tX,y:firstY+8*tY},
			// 右上边角
			{x:firstX+32*tX,y:firstY+-2*tY},
			{x:firstX+31*tX,y:firstY+-2*tY},
			{x:firstX+30*tX,y:firstY+-2*tY},
			{x:firstX+32*tX,y:firstY+-1*tY},
			{x:firstX+32*tX,y:firstY+0*tY},
			{x:firstX+31*tX,y:firstY+-1*tY},
			// 左下边角
			{x:firstX+32*tX,y:firstY+9*tY},
			{x:firstX+32*tX,y:firstY+8*tY},
			{x:firstX+32*tX,y:firstY+7*tY},
			{x:firstX+31*tX,y:firstY+9*tY},
			{x:firstX+30*tX,y:firstY+9*tY},
			{x:firstX+31*tX,y:firstY+8*tY},
			
			//若一   一横
			{x:firstX+1*tX,y:firstY+1*tY},
			{x:firstX+2*tX,y:firstY+1*tY},
			{x:firstX+3*tX,y:firstY+1*tY},
			{x:firstX+4*tX,y:firstY+1*tY},
			{x:firstX+5*tX,y:firstY+1*tY},
			{x:firstX+6*tX,y:firstY+1*tY},
			{x:firstX+7*tX,y:firstY+1*tY},
			//两树
			{x:firstX+3*tX,y:firstY+0*tY},
			{x:firstX+3*tX,y:firstY+2*tY},
			//两树
			{x:firstX+5*tX,y:firstY+0*tY},
			{x:firstX+5*tX,y:firstY+2*tY},
			// 一横
			{x:firstX+1*tX,y:firstY+4*tY},
			{x:firstX+2*tX,y:firstY+4*tY},
			{x:firstX+3*tX,y:firstY+4*tY},
			{x:firstX+4*tX,y:firstY+4*tY},
			{x:firstX+5*tX,y:firstY+4*tY},
			{x:firstX+6*tX,y:firstY+4*tY},
			{x:firstX+7*tX,y:firstY+4*tY},
			//一纳
			{x:firstX+4*tX,y:firstY+3*tY},
			{x:firstX+3*tX,y:firstY+5*tY},
			{x:firstX+2*tX,y:firstY+6*tY},
			{x:firstX+1*tX,y:firstY+7*tY},
			//口
			{x:firstX+4*tX,y:firstY+5*tY},
			{x:firstX+5*tX,y:firstY+5*tY},
			{x:firstX+6*tX,y:firstY+5*tY},
			{x:firstX+4*tX,y:firstY+6*tY},
			{x:firstX+6*tX,y:firstY+6*tY},
			{x:firstX+4*tX,y:firstY+7*tY},
			{x:firstX+5*tX,y:firstY+7*tY},
			{x:firstX+6*tX,y:firstY+7*tY},
			//💗
			{x:firstX+13*tX,y:firstY+-2*tY},
			{x:firstX+14*tX,y:firstY+-1*tY},
			{x:firstX+15*tX,y:firstY+-2*tY},
			//💗
			{x:firstX+7*tX,y:firstY+-2*tY},
			{x:firstX+8*tX,y:firstY+-1*tY},
			{x:firstX+9*tX,y:firstY+-2*tY},
			//爱心
			{x:firstX+10*tX,y:firstY+1*tY},
			{x:firstX+11*tX,y:firstY+2*tY},
			{x:firstX+12*tX,y:firstY+1*tY},
			{x:firstX+10*tX,y:firstY+-1*tY},
			{x:firstX+11*tX,y:firstY+0*tY},
			{x:firstX+12*tX,y:firstY+-1*tY},
			{x:firstX+9*tX,y:firstY+0*tY},
			{x:firstX+13*tX,y:firstY+0*tY},
			//一
			{x:firstX+9*tX,y:firstY+4*tY},
			{x:firstX+10*tX,y:firstY+4*tY},
			{x:firstX+11*tX,y:firstY+4*tY},
			{x:firstX+12*tX,y:firstY+4*tY},
			{x:firstX+13*tX,y:firstY+4*tY},
			{x:firstX+14*tX,y:firstY+4*tY},
			
			//100天  1
			/* {x:firstX+16*tX,y:firstY+0*tY}, */
			{x:firstX+16*tX,y:firstY+1*tY},
			{x:firstX+16*tX,y:firstY+2*tY},
			{x:firstX+16*tX,y:firstY+3*tY},
			{x:firstX+16*tX,y:firstY+4*tY},
			{x:firstX+16*tX,y:firstY+5*tY},
			{x:firstX+16*tX,y:firstY+6*tY},
			/* {x:firstX+16*tX,y:firstY+7*tY}, */
			// 0
			/* {x:firstX+18*tX,y:firstY+0*tY}, */
			{x:firstX+18*tX,y:firstY+1*tY},
			{x:firstX+18*tX,y:firstY+2*tY},
			{x:firstX+18*tX,y:firstY+3*tY},
			{x:firstX+18*tX,y:firstY+4*tY},
			{x:firstX+18*tX,y:firstY+5*tY},
			{x:firstX+18*tX,y:firstY+6*tY},
			/* {x:firstX+18*tX,y:firstY+7*tY}, */
			
			//0
			{x:firstX+19*tX,y:firstY+1*tY},
			{x:firstX+19*tX,y:firstY+6*tY},
			//0
			/* {x:firstX+20*tX,y:firstY+0*tY}, */
			{x:firstX+20*tX,y:firstY+1*tY},
			{x:firstX+20*tX,y:firstY+2*tY},
			{x:firstX+20*tX,y:firstY+3*tY},
			{x:firstX+20*tX,y:firstY+4*tY},
			{x:firstX+20*tX,y:firstY+5*tY},
			{x:firstX+20*tX,y:firstY+6*tY},
			/* {x:firstX+20*tX,y:firstY+7*tY}, */
			
			// 0
			/* {x:firstX+22*tX,y:firstY+0*tY}, */
			{x:firstX+22*tX,y:firstY+1*tY},
			{x:firstX+22*tX,y:firstY+2*tY},
			{x:firstX+22*tX,y:firstY+3*tY},
			{x:firstX+22*tX,y:firstY+4*tY},
			{x:firstX+22*tX,y:firstY+5*tY},
			{x:firstX+22*tX,y:firstY+6*tY},
			/* {x:firstX+22*tX,y:firstY+7*tY}, */
			//
			{x:firstX+23*tX,y:firstY+1*tY},
			{x:firstX+23*tX,y:firstY+6*tY},
			//0
			/* {x:firstX+24*tX,y:firstY+0*tY}, */
			{x:firstX+24*tX,y:firstY+1*tY},
			{x:firstX+24*tX,y:firstY+2*tY},
			{x:firstX+24*tX,y:firstY+3*tY},
			{x:firstX+24*tX,y:firstY+4*tY},
			{x:firstX+24*tX,y:firstY+5*tY},
			{x:firstX+24*tX,y:firstY+6*tY},
			/* {x:firstX+24*tX,y:firstY+7*tY}, */
			
			//一横
			{x:firstX+26*tX,y:firstY+1*tY},
			{x:firstX+27*tX,y:firstY+1*tY},
			{x:firstX+28*tX,y:firstY+1*tY},
			{x:firstX+29*tX,y:firstY+1*tY},
			{x:firstX+30*tX,y:firstY+1*tY},
			
			{x:firstX+28*tX,y:firstY+2*tY},
			//一横
			{x:firstX+26*tX,y:firstY+3*tY},
			{x:firstX+27*tX,y:firstY+3*tY},
			{x:firstX+28*tX,y:firstY+3*tY},
			{x:firstX+29*tX,y:firstY+3*tY},
			{x:firstX+30*tX,y:firstY+3*tY},
			
			
			{x:firstX+27*tX,y:firstY+4*tY},
			{x:firstX+29*tX,y:firstY+4*tY},
			
			{x:firstX+26*tX,y:firstY+5*tY},
			{x:firstX+30*tX,y:firstY+5*tY},
			
			{x:firstX+26*tX,y:firstY+6*tY},
			{x:firstX+30*tX,y:firstY+6*tY},
			
		];
		for(var i = 1; i<= 51; i++){
			arr.push({x:firstX+170*tX , y:firstY+tY*20 });
		}
		$('#main li').each(function(i){
			var x , y;
			if ( i < 500 )
			{
				x = arr[i].x;
				y = arr[i].y;
			}else
			{
				var iX = (i+500) % 500;
				var iY = parseInt((i+500)/500) + 1;
				x = firstX+iX*tX;
				y = firstY+iY*tY;
			}
			$(this).css({
				transform : 'translate('+x+'px,'+y+'px)'
			});
		});
	}
	
	(function(){
		var $mainLi = $('#main li');
		var $show = $('#show');
		$mainLi.click(function(ev){//点击图片事件
			var dd = "<img src=\""+ev.target.currentSrc.split('3D/')[1].replace('%20','')+"\"/>";
			console.log(dd)
			console.log(dd.split('.jpg')[0].split('img/')[1])
			
			document.getElementById("tata").innerHTML = dd;
			document.getElementById("img_data").innerHTML = data[dd.split('.jpg')[0].split('img/')[1]-1].data;
			//document.getElementById("tata").innerHTML = dd;
			ev = ev || window.event;
			$show.fadeIn(1000).css({
				'transform' : 'rotateY(0deg)scale(1)'
			});
			ev.stopPropagation();
		});
		$(document).click(function(){
			$show.fadeOut(1000,function(){
				$(this).css({
					'transform' : 'rotateY(0deg) scale(1.5)'
				});
			}).css({
				'transform' : 'rotateY(180deg) scale(0.1)'
			});
		});
		//嵌套页面
		/* $show.click(function(ev){
			
			
			$('#wrap').animate({
				'marginLeft' : '-100%'
			},1000,function(){
				$show.css({
					'transform' : 'rotateY(0deg) scale(1.5)',
					display : 'none'
				});
			});
			$('#frame').show().animate({
				left : 0
			},1000).find('iframe').attr('src' , 'demo/3D drag/index.html');
			ev.stopPropagation();
		}); */
		$('#back').click(function(ev){
			$('#wrap').animate({
				'marginLeft' : 0
			},1000);
			$('#frame').show().animate({
				left :'100%'
			},1000);
			ev.stopPropagation();
		});
	})();

});
