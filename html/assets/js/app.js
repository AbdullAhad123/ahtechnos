const cursor=document.querySelector(".cursor");document.addEventListener("mousemove",e=>{cursor.setAttribute("style","top: "+(e.pageY-10)+"px; left: "+(e.pageX-10)+"px;")}),document.addEventListener("click",e=>{cursor.classList.add("expand"),setTimeout(()=>{cursor.classList.remove("expand")},500)}),$("#seeMoreServices").click(function(){$(".hiddenCards").fadeToggle();let e=$(this).find("span");"Load more"===e.text()?e.text("Load less"):e.text("Load more")}),$(".btn_back_to_top").click(function(){$(window).scrollTop(0)}),$(window).scroll(function(){let e=$(window).scrollTop();e>150?$("#backTop").fadeIn():$("#backTop").fadeOut()});