
/*---- Start Bootstrap.js -----*/
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=d1ee763203c6a1d683fc4ec6047eda3d)
 * Config saved to config.json and https://gist.github.com/d1ee763203c6a1d683fc4ec6047eda3d
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery latest version")}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),r=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,r)),"string"==typeof e?s[e](o):r.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="latest version",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var r=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):r()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),r=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,r,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="latest version",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),r=this.getUID(this.type);this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(a);h&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var d=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(h){var f=a,u=this.getPosition(this.$viewport);a="bottom"==a&&d.bottom+c>u.bottom?"top":"top"==a&&d.top-c<u.top?"bottom":"right"==a&&d.right+p>u.width?"left":"left"==a&&d.left-p<u.left?"right":a,s.removeClass(f).addClass(a)}var g=this.getCalculatedOffset(a,d,p,c);this.applyPlacement(g,a);var m=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,r=parseInt(o.css("margin-top"),10),a=parseInt(o.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top+=r,e.left+=a,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=s&&(e.top=e.top+s-h);var d=this.getViewportAdjustedDelta(i,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var p=/top|bottom/.test(i),c=p?2*d.left-n+l:2*d.top-s+h,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),r=t.Event("hide.bs."+this.type);return this.$element.trigger(r),r.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),r={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,r,a,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+o;a<r.top?n.top=r.top-a:l>r.top+r.height&&(n.top=r.top+r.height-l)}else{var h=e.left-s,d=e.left+s+i;h<r.left?n.left=r.left-h:d>r.right&&(n.left=r.left+r.width-d)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="latest version",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="latest version",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),r=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(r),!r.isDefaultPrevented()&&!s.isDefaultPrevented()){var a=t(o);this.activate(e.closest("li"),i),this.activate(a,a.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var r=o.find("> .active"),a=n&&t.support.transition&&(r.length&&r.hasClass("fade")||!!o.find("> .fade").length);r.length&&a?r.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),r.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="latest version",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var r=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return a.call(this);var l=t.camelCase(["scroll",r].join("-"));this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[r](this.$element[0][l])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),r=s.data("bs.collapse"),a=r?"toggle":n.data();i.call(s,a)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);

/*---- End Bootstrap.js -----*/

/*---- Start Custom.js -----*/
function blockArea(id){
        jQuery('#' + id).block({
                message: '<img src="images/ajax-loader.gif"/>', centerY: false, centerX: false, overlayCSS:  {backgroundColor: '#fff', opacity: 0.8},
                css: {border: 'none', background: 'none', top: '40%'}
    });
}		
function unblockArea(id){
	jQuery('#' + id).unblock();
	if(focusOnFirstFieldError == 'Y'){
		focusOnFirstErrorField();
	}
}

function focusOnFirstErrorField(){
	var firstElementWithError = jQuery('span.error-text:first');
	if(jQuery(firstElementWithError) && jQuery(firstElementWithError) != null && jQuery(firstElementWithError).length >= 1){
		var parentDivOfFirstElementWithError = jQuery(firstElementWithError).parent();
		if(jQuery(parentDivOfFirstElementWithError) && jQuery(parentDivOfFirstElementWithError) != null && jQuery(parentDivOfFirstElementWithError).length >= 1){
			var firstInputElementInParentDiv = jQuery(parentDivOfFirstElementWithError).find('input');
			if(jQuery(firstInputElementInParentDiv) && jQuery(firstInputElementInParentDiv) != null && jQuery(firstInputElementInParentDiv).length >= 1){
				if(jQuery(parentDivOfFirstElementWithError).find('.chosen-container').length >= 1){
					jQuery(firstInputElementInParentDiv).attr('aria-describedby',jQuery(firstElementWithError).attr('id'));
				}
				if(jQuery(firstInputElementInParentDiv).length > 1){
					jQuery(firstInputElementInParentDiv).first().focus();
				}else{
					jQuery(firstInputElementInParentDiv).focus();
				}
			}




		}
	}
}

function makeContainerScrollable(selectorToGetElement){
	jQuery(selectorToGetElement).mCustomScrollbar({scrollInertia:250});
}
function makeContainerXYScrollable(selectorToGetElement){
	jQuery(selectorToGetElement).mCustomScrollbar({scrollInertia:250, axis:"yx" });

}

/** Menu Hover Toggle Fix **/

jQuery(document).ready(function() {
 
/** Menu Toggle State Fix **/
    /*
    jQuery('#navbar > .nav > li .dropdown-menu > li:last-of-type a').on('keydown',function(e) {
       if(e.keyCode == 9 && !e.shiftKey){
            jQuery('#navbar > .nav > li').removeClass('open');
        }       
    });

    jQuery('#navbar > .nav > li .dropdown-menu > li:first-of-type a').on('keydown',function(e) {
       if(e.keyCode == 9 && e.shiftKey){
            jQuery('#navbar > .nav > li').removeClass('open');
        }       
    });
*/

        jQuery(function(){
                initRemoveOpen();
        });
        function initRemoveOpen() {
                var		btnLast		=		'#navbar > .nav > li .dropdown-menu > li:last-of-type a, .uAcnt_links .dropdown-menu li:last-of-type a';
                var		btnFirst	=		'#navbar > .nav > li .dropdown-menu > li:first-of-type a, .uAcnt_links .dropdown-menu li:first-of-type a, .uAcnt_links .dropdown-menu li:only-of-type a';
                var		dropParent	=		'#navbar > .nav > li, .uAcnt_links > .dropdown';

                jQuery(btnLast).on('keydown',function(e) {
                   if(e.keyCode == 9 && !e.shiftKey){
                                jQuery(dropParent).removeClass('open');
                        }       
                });

                jQuery(btnFirst).on('keydown',function(e) {
                   if(e.keyCode == 9 && e.shiftKey){
                                jQuery(dropParent).removeClass('open');
                        }       
                });
        }
		
    /**jQuery('#navbar > ul [data-toggle="dropdown"]').hover(function(){
        jQuery('#navbar > ul > li.open a').blur();
        jQuery(this).parent('li').siblings().removeClass('open');
        jQuery(this).hover();
    });**/

/** Menu Toggle State Fix **/
});
/** Menu Hover Toggle Fix **/
/*---- End Custom.js -----*/

jQuery(document).ready(function() {
	jQuery('.featuresList').addClass('clearfix sameHeight').css('min-height', '50px');
});
jQuery('.featuresList img').load(function() {
	equalheight('.sameHeight > div');
});

/* same height script */
equalheight = function(container){
var currentTallest = 0,
	 currentRowStart = 0,
	 rowDivs = new Array(),
	 el,
	 topPosition = 0;
jQuery(container).each(function() {

   el = jQuery(this);
   jQuery(el).height('auto')
   topPostion = el.position().top;

   if (currentRowStart != topPostion) {
	 for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	   rowDivs[currentDiv].height(currentTallest);
	 }
	 rowDivs.length = 0; // empty the array
	 currentRowStart = topPostion;
	 currentTallest = el.height();
	 rowDivs.push(el);
   } else {
	 rowDivs.push(el);
	 currentTallest = (currentTallest < el.height()) ? (el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	 rowDivs[currentDiv].height(currentTallest);
   }
 });
}

jQuery(document).ready(function(){
	equalheight('.sameHeight > div');
	initChosenInputValue();
	
	jQuery(document).on('change', 'select', function(){
		var selectID = jQuery(this).attr("id");
		localStorage.setItem("prevFocus", selectID+'_chosen a'); 
	});	
	jQuery(document).on('ifChecked', 'input:radio', function(){
		 var selectID = jQuery(this).attr("id");
		 localStorage.setItem("prevFocus", selectID);
	});
});

jQuery(document).ajaxComplete(function(event, request, settings) {
	var isValidateRequestPosted = isValidateRequestPostedFunc(settings.url);
	if(isValidateRequestPosted == false){
		changeLabelValOfChosenInputEvent();
		if(localStorage.getItem("prevFocus") != ""){
			var prevFocusElement = '#'+localStorage.getItem("prevFocus");
			if(jQuery(prevFocusElement).length > 0){
				jQuery(prevFocusElement).focus();
			}
			localStorage.setItem("prevFocus", "");
		}
		populateChoosenInput();
		initTooltipAccessibity();
		initChosenInputValue();
		addRemoveTabIndexesFromGridNavButtons();
	}
});

function addRemoveTabIndexesFromGridNavButtons(){
	jQuery('.ui-pg-table .ui-icon').each(function(){
		if(jQuery(this).parent().hasClass('ui-state-disabled') == true){
		   jQuery(this).removeAttr('tabindex');
		}else{
		  jQuery(this).attr('tabindex','0');
		}
	});
	jQuery('.ui-pg-table .ui-icon').keyup(function(event){
	  if(event.keyCode == 13 || event.keyCode == 32){
		jQuery(this).parent().click();
	  }
	});
}

/* assign value to chosen input */
function initChosenInputValue() {
	jQuery(document).on('focus', '.chosen-container input', function(){
		var titleText = jQuery(this).parents('.chosen-container').find('a.chosen-single span').text();
		jQuery(this).val(titleText);
		jQuery(this).parents('.chosen-container').find('.chosen-results').attr('tabindex', '-1');
		if(jQuery(this).parents('.chosen-container').is('.chosen-with-drop')){
			jQuery(this).val('');
		}
		if(!jQuery(this).parents('.chosen-container').find('.chosen-search .label').hasClass('sr-only')){
			jQuery(this).parents('.chosen-container').find('.chosen-search .label').addClass('sr-only');
			jQuery(this).parents('.chosen-container').find('.chosen-search .label').show();
		}
	});
}

function isValidateRequestPostedFunc(url){
	var isValidateRequestPosted = false;
	var splitUrl = url.split('?');
	if(splitUrl.length == 2){
		var paramsList = splitUrl[1].split('&');
		if(paramsList.length > 0){
			var paramName = paramsList[0].split('=')[0];
			if(paramName == 'struts.enableJSONValidation'){
				isValidateRequestPosted = true;
			}
		}
	}
	return isValidateRequestPosted;
}

jQuery(window).on('resize orientationchange', function() {
	equalheight('.sameHeight > div');
});
/* end same height script */

/* target="_blank" function - added on Mar 16 2017 */
jQuery(function(){
    initTargetBlank();
});

function initTargetBlank() {
    jQuery('a[target="_blank"]').each(function() {
        jQuery(this).removeAttr('target').attr('data-target', '_blank');
    });
    var		targetLink		=		jQuery('[data-target="_blank"]');
    targetLink.on('mouseenter focus', function() {
        jQuery(this).attr('target', '_blank');
    }).on('mouseleave blur', function() {
        jQuery(this).removeAttr('target');
    });
}
/* end target="_blank" function - added on Mar 16 2017 */

 /** ---- Start WCGA 2.0 scripts ---- **/
function initDialogAAA() {
	var		mainDialog		=	'.ui-dialog';
	var		btnClose		=	'.ui-dialog.ui-widget .ui-dialog-titlebar-close';
	var		headings		=	'.ui-dialog.ui-widget .ui-dialog-title';
	var		dialogDocBox	=	'.ui-dialog-titlebar';
	
	var		dialogAttr		=	'dialog';
	var		dialogDoc		=	'document';
	var		btnAreaLabel	=	'Close dialog';
	var		headingRole		=	'heading';
	var		headingLevel	=	'2';
	
	jQuery(mainDialog).attr('role',dialogAttr);
	jQuery(dialogDocBox).attr('role', dialogDoc);
	jQuery(btnClose).attr('aria-label', btnAreaLabel);
	jQuery(headings).attr('role', headingRole).attr('aria-level', headingLevel);
}

jQuery(document).on('click keyup', function(){
	var	findDialog = jQuery('.ui-dialog').length;	
	if(findDialog > 0){
		setTimeout(function(){
			initDialogAAA();
		},100);
	}
	if(jQuery('.tootip-c3').parent().attr('tabindex') === '-1'){
		jQuery('.tootip-c3').parent().removeAttr('tabindex');
	}
});

function populateChoosenInput(){
	jQuery('.chosen-container').keydown(function(e){
		if(e.keyCode == 38 || e.keyCode == 40) {
			jQuery(this).find('input').first().val(jQuery(this).find('.chosen-results .active-result.highlighted').text());
		}
	});
}

jQuery(window).load(function(){
	populateChoosenInput();
	initTooltipAccessibity();
	changeLabelValOfChosenInputEvent();
});

function changeLabelValOfChosenInputEvent(){
	jQuery("input[id^='chosensearchfield']").focus(function(){
	  var inputLabel = jQuery(this).prev().first().find('label');
	  if(jQuery(this).attr("id") === jQuery(inputLabel).attr("for")){
		var selectId = jQuery(this).closest('.chosen-container').prev('select').attr("id");
		var selectLabelVal = jQuery('label[for='+selectId+']').text();
		if(selectLabelVal != undefined){
		  jQuery(inputLabel).text(selectLabelVal );
		}  
	  }
	});
}
/** ---- End WCGA 2.0 scripts ---- **/ 


/** ---- Aria-Expanded Toggle  ---- **/ 
	function initAriaExpand() {
		jQuery('[aria-expanded]').on('click', function(event) {
			if(jQuery(this).is('[aria-expanded="true"]')) {
				jQuery(this).attr('aria-expanded', 'false');
				jQuery(this).parent('.dropdown').removeClass('open');
			}
			else if(jQuery(this).is('[aria-expanded="false"]')) {
				jQuery(this).attr('aria-expanded', 'true');
				jQuery(this).parent('.dropdown').addClass('open');
			}
		});
		
		var lastAriaExpandedLink = jQuery('.uAcnt_links .dropdown-menu > li:last-of-type a, .dropdown-menu > li:only-of-type a');
		var firstAriaExpandedLink = jQuery('.uAcnt_links .dropdown-menu > li:first-of-type a');
		
		jQuery(lastAriaExpandedLink).on('keydown',function(e) {
			   if(e.keyCode == 9 && !e.shiftKey){
					jQuery('.uAcnt_links .dropdown [data-toggle]').attr('aria-expanded', 'false');
				}		
		});
		jQuery(firstAriaExpandedLink).on('keydown',function(e) {
			if(e.keyCode == 9 && e.shiftKey){
				jQuery('.uAcnt_links .dropdown [data-toggle]').attr('aria-expanded', 'false');
			}		
		});
	}

	jQuery(window).load(function() { initAriaExpand(); });

	jQuery(document).click(function() {
		jQuery('.uAcnt_links .dropdown .dropdown-toggle').attr('aria-expanded', 'false');
		jQuery('.uAcnt_links .dropdown.open .dropdown-toggle').attr('aria-expanded', 'true');
	});
/** ---- End of Aria-Expanded Toggle  ---- **/ 

function initTooltipAccessibity() {
	
	jQuery('.helpBtn, .helpBtn-002, .tooltipPR').hover(function(){
		var srOnly = jQuery(this).attr('data-original-title');
		var toolTipID = jQuery(this).attr('aria-describedby');
		jQuery(this).attr('role', 'tooltip');
		jQuery(this).find('.sr-only').remove();
		var spanTag = '<span class="sr-only">'+srOnly+'</span>';
		jQuery(spanTag).appendTo(jQuery(this));
		setTimeout(function(){
			jQuery('div[id="'+toolTipID+'"] .tooltip-inner').attr('tabindex', '0').focus().removeAttr('tabindex');
		});
	}).mouseleave(function(){
		jQuery(this).find('.sr-only').remove();
	});
	
	/*
	jQuery('.helpBtn, .tooltipPR').on('mouseover', function(){
		jQuery(this).attr('role', 'tooltip');
		var findTip = jQuery(this).attr('aria-describedby');
		jQuery('div[id="'+findTip+'"] .tooltip-inner').wrapInner('<a href="#" role="tooltip" class="tooltip-link" style="text-decoration: none; color:#fff;"></a>');
		jQuery('div[id="'+findTip+'"]').find('a').focus();
	});	
	*/

        jQuery(".skip-content").click(function() {
            jQuery('html,body').animate({
                scrollTop: jQuery("#content").offset().top}, 'slow');
                jQuery("#content").attr('tabindex', '0').focus().removeAttr('tabindex'); 
        });
		
	var		logOutLink		=		jQuery('.logout-link');
	var		logOutSummary	=		jQuery('.summarywidget');
	if(logOutLink.length > 0 && logOutSummary.length > 0) {
		logOutLink.attr('aria-describedby', 'login-summarywidget');
		logOutSummary.attr('id', 'login-summarywidget');
	}
	
}

jQuery(window).load(function(){ initChosenFixes(); });
jQuery(document).ajaxComplete(function(event, request, settings) {
	initChosenFixes();
});

function initChosenFixes() {
	jQuery('input[type="radio"]').each(function() {
		jQuery(this).parent().addClass('radio-parent');
	});
	
	var		iCheck		=		jQuery('[class*="icheckbox_flat"], .radio-parent');
	
	iCheck.each(function() {
		var		findIns		=		jQuery(this).find('ins');
		findIns.attr('role', 'checkbox');
		
		if(jQuery(this).is('.checked')) {
			findIns.attr('aria-checked', 'true');
		} else {
			findIns.attr('aria-checked', 'false');
		}
	});
	
	jQuery('ins').each(function() {
		jQuery('<span class="hidden">checkbox</span>').appendTo(jQuery(this));
		jQuery(this).children('span').nextAll('span').remove();
		jQuery(this).css({
			'font-size': '0',
			'line-height': '0'
		});
	});
	
	jQuery('.radio-parent').each(function() {
		jQuery('<span class="hidden">checkbox</span>').appendTo(jQuery(this).find('ins'));
		jQuery(this).find('ins').children('span').nextAll('span').remove();
	});
	
	jQuery('input[type="checkbox"], input[type="radio"]').each(function() {
		var		id		=		jQuery(this).attr('id');
		var		label	=		'<label for="'+id+'" class="sr-only">&nbsp;</label>';
		jQuery(label).insertBefore(jQuery(this));
		
		jQuery(this).siblings('label').nextAll('label').remove();
	});
	
	var		i		=		0;
	jQuery('.radio-parent input[type="radio"], [class*="icheckbox_flat"] input[type="checkbox"]').each(function() {
		var		id		=		jQuery(this).attr('id');
		jQuery('[for="'+id+'"]').attr('role', 'button');
		jQuery(this).siblings('label').removeAttr('role');
		
		var		newText		=		'<span class="hidden">0'+i+++'</span>';
		jQuery(newText).appendTo(jQuery(this).siblings('label'));
		jQuery(this).siblings('label').find('span').nextAll('span').remove();
	});
	
	// assign aria-label to chosen search
	jQuery('select').each(function(index, element) {
		var		id			=		jQuery(this).attr('id');
		var		labelTxt	=		jQuery('[for="'+id+'"]');
		jQuery(this).siblings('.chosen-container').find('input[type="text"]').attr('aria-label', labelTxt.text()+' chosen search');
		labelTxt.attr('role', 'button');
		if(jQuery(this).is('[onblur=""]')) {
			jQuery(this).removeAttr('onblur');
		}
	});
	
	// chosen link
	jQuery('.chosen-single').each(function() {
		jQuery(this).attr('href', 'javascript:void(0'+i+++')');
	});
	
	//jQuery('.chosen-search').find('.label label').addClass('sr-only').unwrap('.label');
	jQuery('.chosen-search').find('.label').remove();
	
	jQuery('.chosen-container').find('ul').addClass('list-unstyled').attr('role', 'list');
	jQuery('<li role="button" class="temp-item">list item</li>').appendTo(jQuery('.chosen-container ul'));
	jQuery('.search-field').next('.temp-item').remove();
	jQuery('.chosen-container').attr('role', 'button');
}

/* add role button on ins in icheck */
jQuery(document).ajaxComplete(function(event, request, settings) {
	addAriaCheckedAttribute();
});

jQuery(window).on('load', function(){
	addAriaCheckedAttribute();
});

function addAriaCheckedAttribute(){
	jQuery('input[type="checkbox"], input[type="radio"]').on('ifChecked', function(event){
		jQuery(this).siblings('ins').attr('aria-checked', 'true');
	});

	jQuery('input[type="checkbox"], input[type="radio"]').on('ifUnchecked', function(event){
		jQuery(this).siblings('ins').attr('aria-checked', 'false');
	});
}


/* new function for extra nav links */
/* resize orientationchange */
function setCMSMenu(){
		MoreWidth = jQuery('#navbar .nav .add-dropdown');
		MoreWidth.addClass('invisible');
		var getMoreWidth = MoreWidth.width() + 20;
		MoreWidth.removeClass('invisible');
		var ParentWidth = jQuery('#navbar .nav').width() - getMoreWidth;
		function isTouchDevice() {    return 'ontouchstart' in document.documentElement; }
		var	functionWidth = 750;
		
		if (isTouchDevice()) {
			functionWidth = 767;
		}

		
		if (  jQuery(window).width() >  functionWidth ){
			var countWidth = 0;
			var elemWidts = 0;			
			var showMore = false;
			jQuery('#navbar .nav > li').each(function(){				
				var currentElemWidth = jQuery(this).outerWidth(true);
				jQuery(this).attr('data-width', currentElemWidth+1);				
				countWidth += jQuery(this).data('width') ;				
				if ( countWidth >= ParentWidth && !jQuery(this).hasClass('add-dropdown') ) {
					var cloned = jQuery(this).clone();
					cloned.appendTo('.add-dropdown > .dropdown-menu').removeClass('visible-xs');
					cloned.find("div").remove().find("script").remove().find("input").remove();
					jQuery(this).addClass('hidden-md').addClass('hidden-sm').addClass('hidden-lg');
					showMore = true;					
					jQuery('#navigation #navbar ul.nav .add-dropdown').removeClass('hidden'); 
				}else if(countWidth < ParentWidth && !jQuery(this).hasClass('add-dropdown')){
					jQuery(this).removeClass('hidden-md').removeClass('hidden-sm').removeClass('hidden-lg');
					showMore = false;
					elemWidts = countWidth;
				}				
				if (showMore == false ){
					jQuery('#navigation #navbar ul.nav .add-dropdown').addClass('hidden'); 
				}
			});						
			jQuery('.navbar-nav').css('overflow','visible');					
		}		
		setTimeout(function(){
			changeToggleMenu();
			initTargetBlank();
		}, 5);
	}
	
jQuery(document).on('click', function (e) {
        
	jQuery('#navigation .open a[aria-expanded]').attr('aria-expanded','false');
	jQuery('#navigation .open').removeClass('open');
	
	jQuery('#navigation .dropdown > a').on('click',function(e){
		e.stopPropagation();

	});
	
	
});
	
jQuery( document ).ready(function() {
	setCMSMenu();
	jQuery('#navigation .dropdown-menu').parent('li').addClass('dropdown');
});
	
jQuery(window).on('resize orientationchange', function(){
			
			jQuery('.add-dropdown > .dropdown-menu').empty();
			setCMSMenu();
		
});
	 
function changeToggleMenu(){
	jQuery('#navigation .dropdown > a').on('click', function(e) {		
		jQuery(this).parent('li').siblings().removeClass('open');
		e.stopPropagation();
		e.preventDefault();		
	});
}
/* resize orientationchange */

/* custom function for accessability */
function initJQGrid() {
	var jqGrid		=		jQuery('.ui-jqgrid');
	var	table		=		jqGrid.find('table');
	var	thead		=		jqGrid.find('.ui-jqgrid-htable thead');
	var	tbody		=		jqGrid.find('.ui-jqgrid-bdiv table');
	var	nestedTable	=		jqGrid.find('.ui-state-default');
	var	caption		=		'<caption class="sr-only" role="presentation">table caption</caption>';
	var	select		=		jqGrid.find('[role="listbox"]');
	var	text		=		jqGrid.find('[role="textbox"]');
	
	jqGrid.find('[role]').removeAttr('role');
	select.removeAttr('role');
	text.removeAttr('role');
	//jQuery(caption).prependTo(table);
	jQuery('.ui-jqgrid-bdiv').find('thead th').removeAttr('id');
	jqGrid.find('table, tbody, tr, td, th, thead, caption').attr('role', 'presentation');
	//thead.clone().addClass('sr-only fake-thead').appendTo(tbody);
	//jQuery('.fake-thead').css('width', '100%');
	
	jqGrid.find('table').each(function() {
		var		cap		=		jQuery(this).children('caption');
		if(cap.length < 1) {
			jQuery(caption).appendTo(jQuery(this));
		}
	});
	jQuery('.ui-pg-table').find('caption').addClass('hidden');
	jQuery('.ui-jqgrid-bdiv').find('#transactionsGrid .ui-jqgrid-labels').remove();
}
/* end custom function for accessability */
