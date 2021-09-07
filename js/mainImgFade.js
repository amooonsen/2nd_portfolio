$(function(){
							
							let i=0;

							function slide(){
								i++;
								if(i > $('#contents1 > .box1 > .rightbox ul li:last').index()){
									i=0;
								}
								$('#contents1 > .box1 > .rightbox ul li').eq(i).stop().fadeIn(1000);
								$('#contents1 > .box1 > .rightbox ul li').eq(i-1).stop().fadeOut(1000);
							}

							
							setInterval(slide,3000);
						});