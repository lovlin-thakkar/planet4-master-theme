"use strict";function createCookie(t,e,o){var n=new Date;n.setTime(n.getTime()+24*o*60*60*1e3),document.cookie=encodeURI(t)+"="+encodeURI(e)+";domain=."+document.domain+";path=/;; expires="+n.toGMTString()}function readCookie(t){for(var e,o=t+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(e=n[a];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(o))return e.substring(o.length,e.length)}return null}$=$||jQuery,$(document).ready(function(){$(".search-result-item-image").hover(function(){$(".search-result-item-headline",$(this).parent()).addClass("search-hover")},function(){$(".search-result-item-headline",$(this).parent()).removeClass("search-hover")})}),$(document).ready(function(){$("#comments-link").click(function(){$("html, body").animate({scrollTop:$("#comments").offset().top-100},2e3)})}),$(document).ready(function(){var t=readCookie("greenpeace"),e=$("body").data("nro");if(null==t){$(".cookie-notice").show();var o=$(".cookie-notice").height();$("footer").css("margin-bottom",o+"px")}else createCookie("gp_nro",e,365);$("#hidecookie").click(function(){$(".cookie-notice").slideUp("slow"),$("footer").css("margin-bottom","0"),createCookie("greenpeace","2",365),createCookie("no_track","0",-1),createCookie("gp_nro",e,365),window.dataLayer=window.dataLayer||[],dataLayer.push({event:"cookiesConsent"})})}),$(document).ready(function(){$(".country-select-dropdown").click(function(){$(this).parent().toggleClass("active-li"),$(".country-select-box").toggle()}),$(".country-select-box .country-list li").click(function(){$(this).parents(".country-select-box").find("li").removeClass("active"),$(this).addClass("active")}),$(".country-selectbox").click(function(){$(this).toggleClass("active"),$(this).parent().find(".option-contry").toggleClass("active")});var t=$("#countries_script");if(t.length>0){var e=JSON.parse(t.text()),o=$('<div id="country-list" class="country-list"><a class="international" href=""></a><ul class="countries_list"></ul></div>');$.each(e,function(t,e){if("0"===t)$(".international",o).attr("href",e[0].url).text(e[0].name);else{var n=$('<li><h3 class="country-group-letter">'+t+'</h3><ul class="countries_sublist"></ul></li>');$(".countries_list",o).append(n),$.each(e,function(t,e){$.each(e.lang,function(t,o){$(".countries_sublist",n).append('<li><a href="'+o.url+'">'+e.name+" | "+o.name+"</a></li>")})})}}),$("#navbar-dropdown #country-select").append(o)}}),$(document).ready(function(){$(".page-template img, .post-content img").each(function(){$(this).attr("title",$(this).attr("alt"))})}),$(document).ready(function(){if($(document).on("click",[".navbar-dropdown-toggle",".country-dropdown-toggle",".navbar-search-toggle"].join(),function(t){t.preventDefault(),t.stopPropagation();var e=$(this),o=e.data("target");if(!o)throw new Error("Missing `data-target` attribute: specify the container to be toggled");var n=e.data("toggle");if(!n)throw new Error("Missing `data-toggle` attribute: specify the class to toggle");$(o).toggleClass(n),$(this).toggleClass(n),e.attr("aria-expanded",function(t,e){return"false"===e?"true":"false"})}),$(document).on("click",function(t){var e=t.target;$('button[aria-expanded="true"]').each(function(t,o){var n=$(o),a=$(n.data("target")).get(0);a&&!$.contains(a,e)&&n.trigger("click")})}),$(document).bind("keyup",function(t){27===t.which&&$(document).trigger("click")}),$(document).on("click",".close-navbar-dropdown",function(t){t.preventDefault(),$(".navbar-dropdown-toggle").trigger("click")}),$(window).width()<=768){var t,e=$(".top-navigation").outerHeight();$(window).scroll(function(){t=!0}),setInterval(function(){t&&(!function(t,e,o){var n=$(this).scrollTop();Math.abs(t-n)<=e||(n>t&&n>o?$(".top-navigation").removeClass("nav-down").addClass("nav-up"):n+$(window).height()<$(document).height()&&$(".top-navigation").removeClass("nav-up").addClass("nav-down"),t=n)}(0,5,e),t=!1)},250);var o=$(".mobile-menus");$(document).click(function(){$(".menu").hasClass("active")&&(o.animate({left:0==parseInt(o.css("left"),10)?-320:0}),$(".menu").removeClass("active")),$(".search-box").hasClass("active")&&n.slideToggle().toggleClass("active")}),$(".menu").click(function(){event.stopPropagation(),$(this).toggleClass("active"),o.animate({left:-320==parseInt(o.css("left"),10)?0:-320})});var n=$("#search .search-box");$("#search-trigger").on("click",function(t){t.stopPropagation(),n.slideToggle().toggleClass("active")})}}),$(document).ready(function(){$('div.wp-caption[class*="align"]').each(function(){var t=$(this).find("img").attr("width");$(this).css("cssText","width: "+t+"px !important;")})});var load_more=$("button.load-more-mt");load_more.off("mousedown touchstart").on("mousedown touchstart",function(t){t.preventDefault();var e=$(this.dataset.content),o=parseInt(this.dataset.page)+1,n=parseInt(this.dataset.total),a=this.dataset.url+"?page=".concat(o);this.dataset.page=o,$.ajax({url:a,type:"GET",dataType:"html"}).done(function(t){e.append(t),o===n&&load_more.fadeOut()}).fail(function(t,e,o){console.log(o)})}),$(document).ready(function(){$('a[href$=".pdf"]').each(function(){var t=$(this);t.parent("h1, h2, h3, h4, h5, h6").length||t.has("img").length||t.addClass("icon-link pdf-link")})}),$(document).on("ready",function(){function t(){$(".image-zoomer").fadeOut(500,function(){$(".image-zoomer-content").html("")})}$(".post-content img").each(function(){$(this).parents(".block").length||$(this).off("click").on("click",function(){var e;e=$(this).clone(),$(".image-zoomer-content").html(""),$(e).appendTo(".image-zoomer-content"),$(".image-zoomer").fadeIn(),$(".image-zoomer").off("click").on("click",t)})})});
//# sourceMappingURL=main.js.map
