!function(t){"use strict";var i,e,n={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return n.Android()||n.BlackBerry()||n.iOS()||n.Opera()||n.Windows()}},a={iOS:function(){return navigator.userAgent.match(/iPad/i)},any:function(){return a.iOS()}},o=function(){t(".slides-container .slide-item").addClass("sliderFix"),setTimeout(function(){t(".slides-container .slide-item").removeClass("sliderFix")},200)},s=function(){!function(){t("#slideshow").length&&t("#slideshow").superslides({play:t("#slideshow").data("speed"),animation:"fade",pagination:!1})}(),function(){t(".text-slider").length&&t(".text-slider").flexslider({animation:"slide",selector:".slide-text li",controlNav:!1,directionNav:!1,slideshowSpeed:t(".text-slider").data("speed"),animationSpeed:700,slideshow:t(".text-slider").data("slideshow"),touch:!0,useCSS:!1})}(),t(function(){t('a[href*="#"]:not([href="#"],[class*="tab"] a,.wc-tabs a, .activity-content a)').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var i=t(this.hash);if(i=i.length?i:t("[name="+this.hash.slice(1)+"]"),i.length)return t("html,body").animate({scrollTop:i.offset().top-70},1e3),t("#mainnav-mobi").length&&t("#mainnav-mobi").hide(),!1}})})},r=function(){var i="desktop";t(window).on("load resize",function(){var e="desktop";if(matchMedia("only screen and (max-width: 1024px)").matches&&(e="mobile"),e!==i)if(i=e,"mobile"===e){var n=t("#mainnav").attr("id","mainnav-mobi").hide(),a=t("#mainnav-mobi").find("li:has(ul)");t("#header").find(".").after(n),a.children("ul").hide(),a.children("a").after('<span class="btn-submenu"></span>'),t(".btn-menu").removeClass("active")}else{var o=t("#mainnav-mobi").attr("id","mainnav").removeAttr("style");o.find(".submenu").removeAttr("style"),t("#header").find(".col-md-10").append(o),t(".btn-submenu").remove()}}),t(".btn-menu").on("click",function(){t("#mainnav-mobi").slideToggle(300),t(this).toggleClass("active")}),t(document).on("click","#mainnav-mobi li .btn-submenu",function(i){t(this).toggleClass("active").next("ul").slideToggle(300),i.stopImmediatePropagation()})},l=function(){t(".panel-row-style").each(function(){t(this).data("hascolor")&&t(this).find("h1,h2,h3,h4,h5,h6,a,.fa, div, span").css("color","inherit"),t(this).data("hasbg")&&t(this).append('<div class="overlay"></div>')})},c=function(){i=n.any(),null==i&&t(".panel-row-style, .slide-item").parallax("50%",.3)},d=function(){e=a.any(),null!=e&&t(".slides-container .slide-item").css("background-attachment","scroll")},u=function(){t(".orches-animation").each(function(){var i=t(this),e=i.data("animation"),n=i.data("animation-delay"),a=i.data("animation-offset");i.css({"-webkit-animation-delay":n,"-moz-animation-delay":n,"animation-delay":n}),i.waypoint(function(){i.addClass("animated").addClass(e)},{triggerOnce:!0,offset:a})})},m=function(){t(window).scroll(function(){t(this).scrollTop()>800?t(".go-top").addClass("show"):t(".go-top").removeClass("show")}),t(".go-top").on("click",function(){return t("html, body").animate({scrollTop:0},1e3),!1})},f=function(){t().owlCarousel&&t(".roll-testimonials").owlCarousel({navigation:!1,pagination:!0,responsive:!0,items:1,itemsDesktop:[3e3,1],itemsDesktopSmall:[1400,1],itemsTablet:[970,1],itemsTabletSmall:[600,1],itemsMobile:[360,1],touchDrag:!0,mouseDrag:!0,autoHeight:!0,autoPlay:t(".roll-testimonials").data("autoplay")})},h=function(){t(".progress-bar").on("on-appear",function(){t(this).each(function(){var i=t(this).data("percent");t(this).find(".progress-animate").animate({width:i+"%"},3e3),t(this).parent(".roll-progress").find(".perc").addClass("show").animate({width:i+"%"},3e3)})})},p=function(){var i=t(".site-header").offset().top;t(window).on("load scroll",function(){var e=t(this).scrollTop();e>=i?t(".site-header").addClass("fixed"):t(".site-header").removeClass("fixed"),e>=107?t(".site-header").addClass("float-header"):t(".site-header").removeClass("float-header")})},g=function(){t(".roll-counter").on("on-appear",function(){t(this).find(".numb-count").each(function(){var i=parseInt(t(this).attr("data-to")),e=parseInt(t(this).attr("data-speed"));t(this).countTo({to:i,speed:e})})})},v=function(){t('[data-waypoint-active="yes"]').waypoint(function(){t(this).trigger("on-appear")},{offset:"90%",triggerOnce:!0}),t(window).on("load",function(){setTimeout(function(){t.waypoints("refresh")},100)})},w=function(){t().owlCarousel&&t(".panel-grid-cell .roll-team").owlCarousel({navigation:!1,pagination:!0,responsive:!0,items:3,itemsDesktopSmall:[1400,3],itemsTablet:[970,2],itemsTabletSmall:[600,1],itemsMobile:[360,1],touchDrag:!0,mouseDrag:!0,autoHeight:!1,autoPlay:!1})},b=function(){t(document).ready(function(){t("body").fitVids()})},y=function(){var i=t(".project-wrap").data("portfolio-effect");t(".project-item").children(".item-wrap").addClass("orches-animation"),t(".project-wrap").waypoint(function(e){t(".project-item").children(".item-wrap").each(function(e,n){setTimeout(function(){t(n).addClass("animated "+i)},150*e)})},{offset:"75%"})},C=function(){t(".widget_fp_social a").attr("target","_blank")},k=function(){t(".preloader").css("opacity",0),setTimeout(function(){t(".preloader").hide()},600)},T=function(){t(".project-wrap").length&&t(".project-wrap").each(function(){var i=t(this),e=i.find(".project-filter").find("a"),n=function(t){t.isotope({filter:"*",itemSelector:".project-item",percentPosition:!0,animationOptions:{duration:750,easing:"liniar",queue:!1}})};i.children().find(".isotope-container").imagesLoaded(function(){n(i.children().find(".isotope-container"))}),t(window).load(function(){n(i.children().find(".isotope-container"))}),e.click(function(){var n=t(this).attr("data-filter");return e.removeClass("active"),t(this).addClass("active"),i.find(".isotope-container").isotope({filter:n,animationOptions:{duration:750,easing:"liniar",queue:!1}}),!1})})};t(function(){o(),s(),p(),f(),w(),g(),h(),v(),r(),b(),u(),d(),l(),c(),y(),C(),m(),T(),k()})}(jQuery);