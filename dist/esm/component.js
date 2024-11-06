function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
export var VWOScript = function VWOScript(_ref) {
  var accountId = _ref.accountId,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'ASYNC' : _ref$type,
    _ref$settingsTimeout = _ref.settingsTimeout,
    settingsTimeout = _ref$settingsTimeout === void 0 ? 2000 : _ref$settingsTimeout,
    _ref$hideElement = _ref.hideElement,
    hideElement = _ref$hideElement === void 0 ? 'body' : _ref$hideElement,
    _ref$hideElementStyle = _ref.hideElementStyle,
    hideElementStyle = _ref$hideElementStyle === void 0 ? 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important' : _ref$hideElementStyle,
    _ref$scriptAttributes = _ref.scriptAttributes,
    scriptAttributes = _ref$scriptAttributes === void 0 ? {} : _ref$scriptAttributes;
  var isAppDir = process.env.NEXT_RUNTIME === 'edge' || Boolean(process.env.NEXT_IS_APP_DIR);

  // Direct smartcode implementation with configurable parameters
  var smartCode = "\n    window._vwo_code=window._vwo_code || (function() {\n      var account_id=".concat(accountId, ",\n      version=2.1,\n      settings_tolerance=").concat(settingsTimeout, ",\n      hide_element='").concat(hideElement, "',\n      hide_element_style='").concat(hideElementStyle, "',\n      /* DO NOT EDIT BELOW THIS LINE */\n       f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){if(performance.getEntriesByName('first-contentful-paint')[0]){return''}return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(e){if(!f){f=true;var t=d.getElementById('_vis_opt_path_hides');if(t)t.parentNode.removeChild(t);if(e)(new Image).src='https://dev.visualwebsiteoptimizer.com/ee.gif?a='+account_id+e}},finished:function(){return f},addScript:function(e){var t=d.createElement('script');t.type='text/javascript';if(e.src){t.src=e.src}else{t.text=e.text}d.getElementsByTagName('head')[0].appendChild(t)},load:function(e,t){var i=this.getSettings(),n=d.createElement('script'),r=this;t=t||{};if(i){n.textContent=i;d.getElementsByTagName('head')[0].appendChild(n);if(!w.VWO||VWO.caE){stT.removeItem(cK);r.load(e)}}else{var o=new XMLHttpRequest;o.open('GET',e,true);o.withCredentials=!t.dSC;o.responseType=t.responseType||'text';o.onload=function(){if(t.onloadCb){return t.onloadCb(o,e)}if(o.status===200){w._vwo_code.addScript({text:o.responseText})}else{w._vwo_code.finish('&e=loading_failure:'+e)}};o.onerror=function(){if(t.onerrorCb){return t.onerrorCb(e)}w._vwo_code.finish('&e=loading_failure:'+e)};o.send()}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){w._vwo_code.finish();stT.removeItem(cK)},e);var t;if(this.hide_element()!=='body'){t=d.createElement('style');var i=this.hide_element(),n=i?i+this.hide_element_style():'',r=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');v&&t.setAttribute('nonce',v.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=n;else t.appendChild(d.createTextNode(n));r.appendChild(t)}else{t=d.getElementsByTagName('head')[0];var n=d.createElement('div');n.style.cssText='z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;';n.setAttribute('id','_vis_opt_path_hides');n.classList.add('_vis_hide_layer');t.parentNode.insertBefore(n,t.nextSibling)}var o='https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&vn='+version;if(w.location.search.indexOf('_vwo_xhr')!==-1){this.addScript({src:o})}else{this.load(o+'&x=true')}}};w._vwo_code=code;code.init();})();\n  ");

  // Input validation
  if (!accountId) {
    console.error('VWO: Account ID is required');
    return null;
  }
  if (type !== 'ASYNC' && type !== 'OSC') {
    console.error('VWO: Invalid type. Must be either "ASYNC" or "OSC"');
    return null;
  }
  if (type === 'OSC') {
    return /*#__PURE__*/React.createElement("script", _extends({
      id: "vwoCode",
      strategy: "beforeInteractive",
      src: "https://dev.visualwebsiteoptimizer.com/lib/".concat(accountId, ".js")
    }, scriptAttributes));
  }

  // For Page Router, we need to dynamically import Script from next/script
  if (!isAppDir) {
    var _Script = require('next/script')["default"];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("link", {
      rel: "preconnect",
      href: "https://dev.visualwebsiteoptimizer.com"
    }), /*#__PURE__*/React.createElement(_Script, _extends({
      id: "vwoCode",
      strategy: "beforeInteractive",
      dangerouslySetInnerHTML: {
        __html: smartCode
      }
    }, scriptAttributes)));
  }

  // App Router implementation
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("link", {
    rel: "preconnect",
    href: "https://dev.visualwebsiteoptimizer.com"
  }), /*#__PURE__*/React.createElement("script", _extends({
    type: "text/javascript",
    id: "vwoCode",
    dangerouslySetInnerHTML: {
      __html: smartCode
    }
  }, scriptAttributes)));
};