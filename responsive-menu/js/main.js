"use strict";!function(e,t){function i(e){this.container=e,this.init()}var n,m,c,s=null,o=1920,a=1080,u=140,r=103;i.prototype.init=function(){function i(){var t=e(".menuItem__title"),i=e(".menu__item--active .menuItem__title"),m=e(".menuItem__item"),c=e(".menu__container"),s=e(".menuItem__img");n={itemTitle:{marginTop:t.css("margin-top"),fontSize:t.css("font-size")},itemTitleActive:{marginTop:i.css("margin-top"),fontSize:i.css("font-size")},menuItem:{fontSize:m.css("font-size")},logo:{backgroundSize:c.css("background-size")},dotted_circle:{backgroundSize:e(".dotted_circle").css("background-size")},ball:{backgroundSize:s.css("background-size"),width:s.css("width"),shadow:"25"}}}var m=this;e(t).resize(function(){m.refresh()}),i(),this.refresh()},i.prototype.refresh=function(){function i(){s(),f(),g(),_(),h(),l(),p(),d()}function s(){var i,n=e(t).height();console.log(n),i=n>800?n/3+"px":800/3+"px",e(".menu__item").css("height",i),c=e(".menu").height()/a,m=Math.min(m,c)}function _(){var t,i;e(".menuItem__title").each(function(){t=parseInt(n.itemTitle.marginTop)*c+"px",i=parseInt(n.itemTitle.fontSize)*m+"px",e(this).css({"margin-top":t,"font-size":i})})}function l(){var t;e(".menuItem__item").each(function(){t=parseInt(n.menuItem.fontSize)*m+"px",e(this).css({"font-size":t})})}function h(){var t,i;t=parseInt(n.itemTitleActive.marginTop)*c+"px",i=parseInt(n.itemTitleActive.fontSize)*m+"px",e(".menu__item--active .menuItem__title").css({"margin-top":t,"font-size":i})}function g(){for(var t=e(".menu__item--active .menuItem__item"),i=t.length,n=0,c=0,s=0,o=0,a=0,r=u*m,_=e(".menu__item--active").width()/2,l=e(".menu__item--active").height()/2,h=0;h<t.length;h++)n=2/i*(h+3)*Math.PI,c=r*Math.sin(n)+_,s=l+r*Math.cos(n),c<=_-50&&(c-=e(t[h]).width()),c>_-50&&c<_+50&&(c=-e(t[h]).width()/2+c),a=100*c/(2*_)+"%",o=100*s/(2*l)+"%",e(t[h]).css({top:o,left:a}),e(t[h]).css({top:s,left:c})}function f(){for(var t=e(".menu__item--active .menuItem__circle"),i=t.length,n=0,c=0,s=0,o=0,a=0,u=r*m,_=e(".menu__item--active").width()/2,l=e(".menu__item--active").height()/2,h=0;h<t.length;h++)n=2/i*h*Math.PI,c=_+u*Math.sin(n)-e(t[h]).width()/2,s=l+u*Math.cos(n)-e(t[h]).height()/2,a=100*c/(2*_)+"%",o=100*s/(2*l)+"%",e(t[h]).css({top:o,left:a})}function p(){for(var t=[e(".menuItem__circle")],i=0;i<t.length;i++)t[i].css("background-size",100*m+"%")}function d(){var t=parseInt(n.ball.width)*m;"transform"in document.createElement("div").style&&(e(".menuItem__img").css({"background-image":'url("../img/ball.png")'}),e(".menu__item--active .menuItem__img").css({"background-image":'url("../img/ball_light.png")'})),e(".menuItem__img").css({width:t+"px",height:t+"px","margin-top":-t/2+"px","margin-left":-t/2+"px"})}m=e(".menu").width()/o,m=m<.8?1.2*m:m,i(),console.log(c),console.log(m),e(".menuItem__img").click("click",function(){e(".menu__item").removeClass("menu__item--active"),e(this).parent().parent().addClass("menu__item--active"),i()}),e(".menuItem__img").bind("click",function(){e(".menu__item").removeClass("menu__item--active"),e(this).parent().parent().addClass("menu__item--active"),i()})},e.fn.circleMenu=function(){s=new i(this)}}(jQuery,window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsIkNpcmNsZU1lbnUiLCJjb250YWluZXIiLCJ0aGlzIiwiaW5pdCIsImJvb3RzdHJhcFBhcmFtcyIsImNvZWZmIiwiY29lZmZIZWlnaHQiLCJvIiwibWF4aW11bV93aWR0aCIsIm1heGltdW1faGVpZ2h0IiwicmFkaXVzSXRlbXNNZW51IiwicmFkaXVzSXRlbXNDaXJjbGVzIiwicHJvdG90eXBlIiwicmVhZFBhcmFtc0Zyb21DU1MiLCJpdGVtVGl0bGUiLCJpdGVtVGl0bGVBY3RpdmUiLCJtZW51SXRlbSIsImxvZ28iLCJiYWxsIiwibWFyZ2luVG9wIiwiY3NzIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kU2l6ZSIsImRvdHRlZF9jaXJjbGUiLCJ3aWR0aCIsInNoYWRvdyIsInNlbGYiLCJyZXNpemUiLCJyZWZyZXNoIiwicmVzcG9uc2l2ZSIsIml0ZW1zSGVpZ2h0TWVudSIsImNpcmNsZXNBcm91bmRJdGVtTWVudSIsImVsZW1lbnRzQXJvdW5kSXRlbU1lbnUiLCJpdGVtVGl0bGVzIiwibWVudUl0ZW1zIiwicmVzcG9uc2l2ZUJnSW1hZ2VzIiwicmVzcG9uc2l2ZUJhbGwiLCJoZWlnaHRJdGVtIiwibmV3SGVpZ2h0TWVudSIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwibWluIiwidGl0bGVNYXJnaW5Ub3AiLCJ0aXRsZUZvbnRTaXplIiwiZWFjaCIsInBhcnNlSW50IiwibWFyZ2luLXRvcCIsImZvbnQtc2l6ZSIsImRpdnMiLCJudW0iLCJsZW5ndGgiLCJhbmdsZSIsImxlZnQiLCJ0b3AiLCJ5IiwieCIsInJhZGl1cyIsImkiLCJQSSIsInNpbiIsImNvcyIsImFycmF5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kLWltYWdlIiwibWFyZ2luLWxlZnQiLCJjbGljayIsInJlbW92ZUNsYXNzIiwicGFyZW50IiwiYWRkQ2xhc3MiLCJiaW5kIiwiZm4i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LElBQUl2QyxLQUNQbUMsSUFBT0MsRUFDUEYsS0FBUUcsSUFLcEIsUUFBU3RCLEtBRUwsSUFBSyxHQURENEIsSUFBU2pFLEVBQUUsc0JBQ042RCxFQUFJLEVBQUdBLEVBQUlJLEVBQU1YLE9BQVFPLElBQzlCSSxFQUFNSixHQUFHdkMsSUFDTCxrQkFDQSxJQUFNZixFQUFRLEtBSzFCLFFBQVMrQixLQUNMLEdBQUlaLEdBQVF1QixTQUFTM0MsRUFBZ0JjLEtBQUtNLE9BQVNuQixDQUMvQyxjQUFlMkQsVUFBU0MsY0FBYyxPQUFPQyxRQUM3Q3BFLEVBQUUsa0JBQWtCc0IsS0FDaEIrQyxtQkFBb0IsMkJBRXhCckUsRUFBRSxzQ0FBc0NzQixLQUNwQytDLG1CQUFvQixrQ0FHNUJyRSxFQUFFLGtCQUFrQnNCLEtBQ2hCSSxNQUFTQSxFQUFRLEtBQ2pCZSxPQUFVZixFQUFRLEtBQ2xCd0IsY0FBZXhCLEVBQVEsRUFBSSxLQUMzQjRDLGVBQWdCNUMsRUFBUSxFQUFJLE9BeEpwQ25CLEVBQVFQLEVBQUUsU0FBUzBCLFFBQVVoQixFQUM3QkgsRUFBUUEsRUFBUSxHQUFjLElBQVJBLEVBQWNBLEVBSXBDd0IsSUFFQVcsUUFBUUMsSUFBSW5DLEdBQ1prQyxRQUFRQyxJQUFJcEMsR0FZWlAsRUFBRSxrQkFBa0J1RSxNQUFNLFFBQVMsV0FDL0J2RSxFQUFFLGVBQWV3RSxZQUFZLHNCQUM3QnhFLEVBQUVJLE1BQU1xRSxTQUFTQSxTQUFTQyxTQUFTLHNCQUNuQzNDLE1BR0ovQixFQUFFLGtCQUFrQjJFLEtBQUssUUFBUyxXQUM5QjNFLEVBQUUsZUFBZXdFLFlBQVksc0JBQzdCeEUsRUFBRUksTUFBTXFFLFNBQVNBLFNBQVNDLFNBQVMsc0JBQ25DM0MsT0FnSVIvQixFQUFFNEUsR0FBR0MsV0FBYSxXQUNkcEUsRUFBSSxHQUFJUCxHQUFXRSxRQUV6QjBFLE9BQVE3RSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuOyhmdW5jdGlvbiAoJCwgd2luZG93KSB7XHJcbiAgICB2YXIgbyA9IG51bGw7XHJcbiAgICB2YXIgbWF4aW11bV93aWR0aCA9IDE5MjA7XHJcbiAgICB2YXIgbWF4aW11bV9oZWlnaHQgPSAxMDgwO1xyXG4gICAgdmFyIGJvb3RzdHJhcFBhcmFtcztcclxuICAgIHZhciBjb2VmZjtcclxuICAgIHZhciBjb2VmZkhlaWdodDtcclxuICAgIHZhciByYWRpdXNJdGVtc01lbnUgPSAxNDA7XHJcbiAgICB2YXIgcmFkaXVzSXRlbXNDaXJjbGVzID0gMTAzO1xyXG4gICAgdmFyIGRlY3JlYXNlQ29lZmYgPSAwLjg7XHJcblxyXG4gICAgZnVuY3Rpb24gQ2lyY2xlTWVudShjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBDaXJjbGVNZW51LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVmcmVzaCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZWFkUGFyYW1zRnJvbUNTUygpO1xyXG5cclxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVhZFBhcmFtc0Zyb21DU1MoKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtVGl0bGUgPSAkKCcubWVudUl0ZW1fX3RpdGxlJyk7XHJcbiAgICAgICAgICAgIHZhciBpdGVtVGl0bGVBY3RpdmUgPSAkKCcubWVudV9faXRlbS0tYWN0aXZlIC5tZW51SXRlbV9fdGl0bGUnKTtcclxuICAgICAgICAgICAgdmFyIG1lbnVJdGVtID0gJCgnLm1lbnVJdGVtX19pdGVtJyk7XHJcbiAgICAgICAgICAgIHZhciBsb2dvID0gJCgnLm1lbnVfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICB2YXIgYmFsbCA9ICQoJy5tZW51SXRlbV9faW1nJyk7XHJcbiAgICAgICAgICAgIGJvb3RzdHJhcFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICdpdGVtVGl0bGUnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ21hcmdpblRvcCc6IGl0ZW1UaXRsZS5jc3MoJ21hcmdpbi10b3AnKSxcclxuICAgICAgICAgICAgICAgICAgICAnZm9udFNpemUnOiBpdGVtVGl0bGUuY3NzKCdmb250LXNpemUnKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdpdGVtVGl0bGVBY3RpdmUnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ21hcmdpblRvcCc6IGl0ZW1UaXRsZUFjdGl2ZS5jc3MoJ21hcmdpbi10b3AnKSxcclxuICAgICAgICAgICAgICAgICAgICAnZm9udFNpemUnOiBpdGVtVGl0bGVBY3RpdmUuY3NzKCdmb250LXNpemUnKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdtZW51SXRlbSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnZm9udFNpemUnOiBtZW51SXRlbS5jc3MoJ2ZvbnQtc2l6ZScpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmRTaXplJzogbG9nby5jc3MoJ2JhY2tncm91bmQtc2l6ZScpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ2RvdHRlZF9jaXJjbGUnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmRTaXplJzogJCgnLmRvdHRlZF9jaXJjbGUnKS5jc3MoJ2JhY2tncm91bmQtc2l6ZScpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ2JhbGwnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmRTaXplJzogYmFsbC5jc3MoJ2JhY2tncm91bmQtc2l6ZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IGJhbGwuY3NzKFwid2lkdGhcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NoYWRvdyc6IFwiMjVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgQ2lyY2xlTWVudS5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvZWZmID0gJCgnLm1lbnUnKS53aWR0aCgpIC8gbWF4aW11bV93aWR0aDtcclxuICAgICAgICBjb2VmZiA9IGNvZWZmIDwgMC44ID8gY29lZmYgKiAxLjIgOiBjb2VmZjtcclxuXHJcblxyXG5cclxuICAgICAgICByZXNwb25zaXZlKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvZWZmSGVpZ2h0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb2VmZik7XHJcbiAgICAgICAgZnVuY3Rpb24gcmVzcG9uc2l2ZSgpIHtcclxuICAgICAgICAgICAgaXRlbXNIZWlnaHRNZW51KCk7XHJcbiAgICAgICAgICAgIGNpcmNsZXNBcm91bmRJdGVtTWVudSgpO1xyXG4gICAgICAgICAgICBlbGVtZW50c0Fyb3VuZEl0ZW1NZW51KCk7XHJcbiAgICAgICAgICAgIGl0ZW1UaXRsZXMoKTtcclxuICAgICAgICAgICAgaXRlbVRpdGxlQWN0aXZlKCk7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtcygpO1xyXG4gICAgICAgICAgICByZXNwb25zaXZlQmdJbWFnZXMoKTtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZUJhbGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5tZW51SXRlbV9faW1nJykuY2xpY2soXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5tZW51X19pdGVtJykucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCdtZW51X19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcubWVudUl0ZW1fX2ltZycpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5tZW51X19pdGVtJykucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCdtZW51X19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBpdGVtc0hlaWdodE1lbnUoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0SXRlbTtcclxuICAgICAgICAgICAgdmFyIG5ld0hlaWdodE1lbnUgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0hlaWdodE1lbnUpO1xyXG4gICAgICAgICAgICBoZWlnaHRJdGVtID0gbmV3SGVpZ2h0TWVudSA+IDgwMCA/IG5ld0hlaWdodE1lbnUgLyAzICsgXCJweFwiIDogODAwIC8gMyArIFwicHhcIjtcclxuICAgICAgICAgICAgJCgnLm1lbnVfX2l0ZW0nKS5jc3MoJ2hlaWdodCcsIGhlaWdodEl0ZW0pO1xyXG4gICAgICAgICAgICBjb2VmZkhlaWdodCA9ICQoJy5tZW51JykuaGVpZ2h0KCkgLyBtYXhpbXVtX2hlaWdodDtcclxuICAgICAgICAgICAgY29lZmYgPSBNYXRoLm1pbihjb2VmZiwgY29lZmZIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaXRlbVRpdGxlcygpIHtcclxuICAgICAgICAgICAgdmFyIHRpdGxlTWFyZ2luVG9wO1xyXG4gICAgICAgICAgICB2YXIgdGl0bGVGb250U2l6ZTtcclxuICAgICAgICAgICAgJCgnLm1lbnVJdGVtX190aXRsZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVNYXJnaW5Ub3AgPSBwYXJzZUludChib290c3RyYXBQYXJhbXMuaXRlbVRpdGxlLm1hcmdpblRvcCkgKiBjb2VmZkhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIHRpdGxlRm9udFNpemUgPSBwYXJzZUludChib290c3RyYXBQYXJhbXMuaXRlbVRpdGxlLmZvbnRTaXplKSAqIGNvZWZmICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICdtYXJnaW4tdG9wJzogdGl0bGVNYXJnaW5Ub3AsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IHRpdGxlRm9udFNpemVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1lbnVJdGVtcygpIHtcclxuICAgICAgICAgICAgdmFyIGZvbnRTaXplO1xyXG4gICAgICAgICAgICAkKCcubWVudUl0ZW1fX2l0ZW0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplID0gcGFyc2VJbnQoYm9vdHN0cmFwUGFyYW1zLm1lbnVJdGVtLmZvbnRTaXplKSAqIGNvZWZmICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICdmb250LXNpemUnOiBmb250U2l6ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaXRlbVRpdGxlQWN0aXZlKCkge1xyXG4gICAgICAgICAgICB2YXIgdGl0bGVNYXJnaW5Ub3A7XHJcbiAgICAgICAgICAgIHZhciB0aXRsZUZvbnRTaXplO1xyXG4gICAgICAgICAgICB0aXRsZU1hcmdpblRvcCA9IHBhcnNlSW50KGJvb3RzdHJhcFBhcmFtcy5pdGVtVGl0bGVBY3RpdmUubWFyZ2luVG9wKSAqIGNvZWZmSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICB0aXRsZUZvbnRTaXplID0gcGFyc2VJbnQoYm9vdHN0cmFwUGFyYW1zLml0ZW1UaXRsZUFjdGl2ZS5mb250U2l6ZSkgKiBjb2VmZiArIFwicHhcIjtcclxuICAgICAgICAgICAgJCgnLm1lbnVfX2l0ZW0tLWFjdGl2ZSAubWVudUl0ZW1fX3RpdGxlJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICdtYXJnaW4tdG9wJzogdGl0bGVNYXJnaW5Ub3AsXHJcbiAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogdGl0bGVGb250U2l6ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGVsZW1lbnRzQXJvdW5kSXRlbU1lbnUoKSB7XHJcbiAgICAgICAgICAgIHZhciBkaXZzID0gJCgnLm1lbnVfX2l0ZW0tLWFjdGl2ZSAubWVudUl0ZW1fX2l0ZW0nKTtcclxuICAgICAgICAgICAgdmFyIG51bSA9IGRpdnMubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgYW5nbGUgPSAwLCBsZWZ0ID0gMCwgdG9wID0gMCwgeSA9IDAsIHggPSAwO1xyXG4gICAgICAgICAgICB2YXIgcmFkaXVzID0gcmFkaXVzSXRlbXNNZW51ICogY29lZmY7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aCA9ICQoJy5tZW51X19pdGVtLS1hY3RpdmUnKS53aWR0aCgpIC8gMjtcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9ICQoJy5tZW51X19pdGVtLS1hY3RpdmUnKS5oZWlnaHQoKSAvIDI7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpdnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gMiAvIG51bSAqIChpICsgMyApICogTWF0aC5QSTtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSkgKyB3aWR0aDtcclxuICAgICAgICAgICAgICAgIHRvcCA9IGhlaWdodCArIHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIGlmIChsZWZ0IDw9ICh3aWR0aCAtIDUwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0IC0gJChkaXZzW2ldKS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxlZnQgPiAod2lkdGggLSA1MCkgJiYgbGVmdCA8ICh3aWR0aCArIDUwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSAtJChkaXZzW2ldKS53aWR0aCgpIC8gMiArIGxlZnQ7IC8vIElmIGNlbnRyYWwgdGV4dCAtIFRleHQgdG8gdGhlIGNlbnRlciBvZiBibG9ja1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeCA9IChsZWZ0ICogMTAwKSAvICh3aWR0aCAqIDIpICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgeSA9ICh0b3AgKiAxMDApIC8gKGhlaWdodCAqIDIpICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgJChkaXZzW2ldKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiB5LFxyXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogeFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICdtYXJnaW4tdG9wJzogLSAkKGRpdnNbaV0pLmhlaWdodCgpIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAvLyAnbWFyZ2luLWxlZnQnOiAtICQoZGl2c1tpXSkuaGVpZ2h0KCkgLyAyXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoZGl2c1tpXSkuY3NzKHsndG9wJzogdG9wLCAnbGVmdCc6IGxlZnR9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2lyY2xlc0Fyb3VuZEl0ZW1NZW51KCkge1xyXG4gICAgICAgICAgICB2YXIgZGl2cyA9ICQoJy5tZW51X19pdGVtLS1hY3RpdmUgLm1lbnVJdGVtX19jaXJjbGUnKTtcclxuICAgICAgICAgICAgdmFyIG51bSA9IGRpdnMubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgYW5nbGUgPSAwLCBsZWZ0ID0gMCwgdG9wID0gMCwgeSA9IDAsIHggPSAwO1xyXG4gICAgICAgICAgICB2YXIgcmFkaXVzID0gcmFkaXVzSXRlbXNDaXJjbGVzICogY29lZmY7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aCA9ICQoJy5tZW51X19pdGVtLS1hY3RpdmUnKS53aWR0aCgpIC8gMjtcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9ICQoJy5tZW51X19pdGVtLS1hY3RpdmUnKS5oZWlnaHQoKSAvIDI7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpdnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gMiAvIG51bSAqIGkgKiBNYXRoLlBJO1xyXG4gICAgICAgICAgICAgICAgbGVmdCA9IHdpZHRoICsgcmFkaXVzICogTWF0aC5zaW4oYW5nbGUpIC0gJChkaXZzW2ldKS53aWR0aCgpIC8gMjtcclxuICAgICAgICAgICAgICAgIHRvcCA9IGhlaWdodCArIHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSAtICQoZGl2c1tpXSkuaGVpZ2h0KCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgeCA9IChsZWZ0ICogMTAwKSAvICh3aWR0aCAqIDIpICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgeSA9ICh0b3AgKiAxMDApIC8gKGhlaWdodCAqIDIpICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgJChkaXZzW2ldKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiB5LFxyXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogeFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc3BvbnNpdmVCZ0ltYWdlcygpIHtcclxuICAgICAgICAgICAgdmFyIGFycmF5ID0gWyQoJy5tZW51SXRlbV9fY2lyY2xlJyldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheVtpXS5jc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwICogY29lZmYgKyBcIiVcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzcG9uc2l2ZUJhbGwoKSB7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHBhcnNlSW50KGJvb3RzdHJhcFBhcmFtcy5iYWxsLndpZHRoKSAqIGNvZWZmO1xyXG4gICAgICAgICAgICBpZiAoXCJ0cmFuc2Zvcm1cIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lbnVJdGVtX19pbWcnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybChcIi4uL2ltZy9iYWxsLnBuZ1wiKSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lbnVfX2l0ZW0tLWFjdGl2ZSAubWVudUl0ZW1fX2ltZycpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKFwiLi4vaW1nL2JhbGxfbGlnaHQucG5nXCIpJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnLm1lbnVJdGVtX19pbWcnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogd2lkdGggKyBcInB4XCIsXHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0Jzogd2lkdGggKyBcInB4XCIsXHJcbiAgICAgICAgICAgICAgICAnbWFyZ2luLXRvcCc6IC13aWR0aCAvIDIgKyBcInB4XCIsXHJcbiAgICAgICAgICAgICAgICAnbWFyZ2luLWxlZnQnOiAtd2lkdGggLyAyICsgXCJweFwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJC5mbi5jaXJjbGVNZW51ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG8gPSBuZXcgQ2lyY2xlTWVudSh0aGlzKTtcclxuICAgIH1cclxufShqUXVlcnksIHdpbmRvdykpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
