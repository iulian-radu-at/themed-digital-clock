(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(module,__webpack_exports__,__webpack_require__){"use strict";var slicedToArray=__webpack_require__(112),objectSpread2=__webpack_require__(49),moment_timezone=__webpack_require__(398),react=__webpack_require__(2),objectWithoutProperties=__webpack_require__(400),styles={container:{display:"flex",justifyContent:"center"},halfLower:{height:"50%",whiteSpace:"nowrap"},halfUpper:{height:"45%",whiteSpace:"nowrap"},rightSide:{marginLeft:"1%"},space:{width:"5%"}},src_DigitalClockLayout=react.memo((function(_ref){var amPm=_ref.amPm,hl=_ref.hl,hu=_ref.hu,ml=_ref.ml,mu=_ref.mu,sl=_ref.sl,style=_ref.style,su=_ref.su;return react.createElement("div",{style:Object(objectSpread2.a)({},style,{},styles.container)},hu,hl,react.createElement("div",{style:styles.space}),mu,ml,react.createElement("div",{style:styles.rightSide},react.createElement("div",{style:styles.halfUpper},amPm||react.createElement("div",null)),react.createElement("div",{style:styles.halfLower},su,sl)))})),lib=__webpack_require__(399),lib_default=__webpack_require__.n(lib),DisplayAmPm_style={fontFamily:"monospace"},src_DisplayAmPm=function DisplayAmPm(_ref){var color=_ref.color,displayAm=_ref.displayAm;return react.createElement("svg",{style:Object(objectSpread2.a)({},DisplayAmPm_style,{fill:color,height:"100%"}),viewBox:"0 0 20 15"},react.createElement("text",{x:"2",y:"13",fontSize:13,fontWeight:"bold"},displayAm?"AM":"PM"))},DigitalClock_styles={darkTheme:{backgroundColor:"#222222",digitColor:"#00ff7f"},lightTheme:{backgroundColor:"#ffffff",digitColor:"#444444"}},getHourInAmPm=function getHourInAmPm(hours){var newHours=hours%12;return 0===newHours?12:newHours},DigitalClock_renderDigit=function renderDigit(digit,color){return react.createElement(lib_default.a,{digit:digit,color:color,opacitySegment:.1})},src_DigitalClock=function DigitalClock(_ref){var height=_ref.height,hours=_ref.hours,minutes=_ref.minutes,seconds=_ref.seconds,useDarkTheme=_ref.useDarkTheme,use24h=_ref.use24h,width=_ref.width,theme=useDarkTheme?DigitalClock_styles.darkTheme:DigitalClock_styles.lightTheme,style=(theme.digitColor,Object(objectWithoutProperties.a)(theme,["digitColor"])),isAm=hours<12;!1===use24h&&(hours=getHourInAmPm(hours));var hu=Math.floor(hours/10),hl=hours%10,mu=Math.floor(minutes/10),ml=minutes%10,su=Math.floor(seconds/10),sl=seconds%10;return react.createElement(src_DigitalClockLayout,{hu:DigitalClock_renderDigit(hu,theme.digitColor),hl:DigitalClock_renderDigit(hl,theme.digitColor),mu:DigitalClock_renderDigit(mu,theme.digitColor),ml:DigitalClock_renderDigit(ml,theme.digitColor),su:DigitalClock_renderDigit(su,theme.digitColor),sl:DigitalClock_renderDigit(sl,theme.digitColor),amPm:use24h?void 0:react.createElement(src_DisplayAmPm,{displayAm:isAm,color:theme.digitColor}),style:Object(objectSpread2.a)({},style,{width:width,height:height})})},ThemedDigitalClock_styles={container:{height:"100%",width:"100%",textAlign:"center"},darkTheme:{backgroundColor:"#222222",color:"#7fffd4"},lightTheme:{backgroundColor:"#ffffff",color:"#000000"}},ThemedDigitalClock_getTheme=function getTheme(useDarkTheme){var style=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(objectSpread2.a)({},ThemedDigitalClock_styles.container,{},useDarkTheme?ThemedDigitalClock_styles.darkTheme:ThemedDigitalClock_styles.lightTheme,{},style)},getHeight=function getHeight(size,hasDescription){return void 0===size?!1===hasDescription?"100%":"calc(100% - 1.3em)":!1===hasDescription?size:"calc(".concat(size,"number"==typeof size?"px - 1.3em)":" - 1.3em)")};__webpack_exports__.a=function ThemedDigitalClock(_ref){var timeoutCall,date=_ref.date,description=_ref.description,size=_ref.size,style=_ref.style,timezoneName=_ref.timezoneName,useDarkTheme=_ref.useDarkTheme,_ref$use24h=_ref.use24h,use24h=void 0!==_ref$use24h&&_ref$use24h,_React$useState=react.useState(date?date.getHours():-1),_React$useState2=Object(slicedToArray.a)(_React$useState,2),hours=_React$useState2[0],setHours=_React$useState2[1],_React$useState3=react.useState(date?date.getMinutes():-1),_React$useState4=Object(slicedToArray.a)(_React$useState3,2),minutes=_React$useState4[0],setMinutes=_React$useState4[1],_React$useState5=react.useState(date?date.getSeconds():-1),_React$useState6=Object(slicedToArray.a)(_React$useState5,2),seconds=_React$useState6[0],setSeconds=_React$useState6[1],resolvedTimezoneName=timezoneName||Intl.DateTimeFormat().resolvedOptions().timeZone;if(date){var atEachSecond=react.useCallback((function(crtHours,crtMinutes,crtSeconds){var newSeconds=(crtSeconds+1)%60,newMinutes=0==newSeconds?(crtMinutes+1)%60:crtMinutes,newHours=0==newSeconds&&0==newMinutes?(crtHours+1)%24:crtHours;setHours(newHours),setMinutes(newMinutes),setSeconds(newSeconds),timeoutCall&&clearTimeout(timeoutCall),timeoutCall=setTimeout((function(){atEachSecond(newHours,newMinutes,newSeconds)}),1e3)}),[setHours,setMinutes,setSeconds]);react.useEffect((function(){return atEachSecond(hours,minutes,seconds),function(){timeoutCall&&clearTimeout(timeoutCall)}}),[atEachSecond])}else{var _atEachSecond=react.useCallback((function(){var timeInTimezone=moment_timezone().tz(resolvedTimezoneName),newSeconds=timeInTimezone.get("seconds"),newMinutes=timeInTimezone.get("minutes"),newHours=timeInTimezone.get("hours");setHours(newHours),setMinutes(newMinutes),setSeconds(newSeconds);var now=new Date,wait=new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours(),now.getMinutes(),now.getSeconds()+1,0).getTime()-now.getTime();wait<=0?_atEachSecond():(timeoutCall&&clearTimeout(timeoutCall),timeoutCall=setTimeout((function(){_atEachSecond()}),wait))}),[resolvedTimezoneName,setHours,setMinutes,setSeconds]);react.useEffect((function(){return _atEachSecond(),function(){timeoutCall&&clearTimeout(timeoutCall)}}),[_atEachSecond])}return useDarkTheme=!0===useDarkTheme,description=description?description.replace("{}",resolvedTimezoneName):void 0,react.createElement("div",{style:ThemedDigitalClock_getTheme(useDarkTheme,style)},react.createElement(src_DigitalClock,{hours:hours,minutes:minutes,seconds:seconds,useDarkTheme:useDarkTheme,use24h:use24h,width:size,height:getHeight(size,void 0!==description)}),react.createElement("div",null,description))}},401:function(module,exports,__webpack_require__){__webpack_require__(402),__webpack_require__(548),module.exports=__webpack_require__(549)},466:function(module,exports){},549:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(111);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(738)}),module)}.call(this,__webpack_require__(211)(module))},738:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_src_ThemedDigitalClock__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(111),style={height:200};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("ThemedDigitalClock",module).addParameters({options:{showPanel:!1}}).add("using the light theme",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedDigitalClock__WEBPACK_IMPORTED_MODULE_1__.a,{description:"light theme",useDarkTheme:!1}))})).add("using the dark theme",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedDigitalClock__WEBPACK_IMPORTED_MODULE_1__.a,{description:"dark theme",useDarkTheme:!0}))})).add("without a description",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedDigitalClock__WEBPACK_IMPORTED_MODULE_1__.a,null))})).add("with a description using a placeholder for used timezone",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedDigitalClock__WEBPACK_IMPORTED_MODULE_1__.a,{description:'The time in timezone "{}"'}))})).add("using the browser's timezone",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedDigitalClock__WEBPACK_IMPORTED_MODULE_1__.a,{description:"Your browser's time ({})"}))})).add("using a specified timezone",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedDigitalClock__WEBPACK_IMPORTED_MODULE_1__.a,{timezoneName:"America/New_York",description:"The time now in New York"}))})).add("using 24h",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedDigitalClock__WEBPACK_IMPORTED_MODULE_1__.a,{description:"Using 0 to 23 for hours",use24h:!0}))})).add("change AM to PM at noon",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedDigitalClock__WEBPACK_IMPORTED_MODULE_1__.a,{description:"Change AM to PM at noon",date:new Date(2019,6,1,11,59,58)}))})).add("change PM to AM at midnight",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedDigitalClock__WEBPACK_IMPORTED_MODULE_1__.a,{description:"Change PM to AM at midnight",date:new Date(2019,6,1,23,59,58)}))}))}.call(this,__webpack_require__(211)(module))},740:function(module,exports,__webpack_require__){var map={"./af":269,"./af.js":269,"./ar":270,"./ar-dz":271,"./ar-dz.js":271,"./ar-kw":272,"./ar-kw.js":272,"./ar-ly":273,"./ar-ly.js":273,"./ar-ma":274,"./ar-ma.js":274,"./ar-sa":275,"./ar-sa.js":275,"./ar-tn":276,"./ar-tn.js":276,"./ar.js":270,"./az":277,"./az.js":277,"./be":278,"./be.js":278,"./bg":279,"./bg.js":279,"./bm":280,"./bm.js":280,"./bn":281,"./bn.js":281,"./bo":282,"./bo.js":282,"./br":283,"./br.js":283,"./bs":284,"./bs.js":284,"./ca":285,"./ca.js":285,"./cs":286,"./cs.js":286,"./cv":287,"./cv.js":287,"./cy":288,"./cy.js":288,"./da":289,"./da.js":289,"./de":290,"./de-at":291,"./de-at.js":291,"./de-ch":292,"./de-ch.js":292,"./de.js":290,"./dv":293,"./dv.js":293,"./el":294,"./el.js":294,"./en-SG":295,"./en-SG.js":295,"./en-au":296,"./en-au.js":296,"./en-ca":297,"./en-ca.js":297,"./en-gb":298,"./en-gb.js":298,"./en-ie":299,"./en-ie.js":299,"./en-il":300,"./en-il.js":300,"./en-nz":301,"./en-nz.js":301,"./eo":302,"./eo.js":302,"./es":303,"./es-do":304,"./es-do.js":304,"./es-us":305,"./es-us.js":305,"./es.js":303,"./et":306,"./et.js":306,"./eu":307,"./eu.js":307,"./fa":308,"./fa.js":308,"./fi":309,"./fi.js":309,"./fo":310,"./fo.js":310,"./fr":311,"./fr-ca":312,"./fr-ca.js":312,"./fr-ch":313,"./fr-ch.js":313,"./fr.js":311,"./fy":314,"./fy.js":314,"./ga":315,"./ga.js":315,"./gd":316,"./gd.js":316,"./gl":317,"./gl.js":317,"./gom-latn":318,"./gom-latn.js":318,"./gu":319,"./gu.js":319,"./he":320,"./he.js":320,"./hi":321,"./hi.js":321,"./hr":322,"./hr.js":322,"./hu":323,"./hu.js":323,"./hy-am":324,"./hy-am.js":324,"./id":325,"./id.js":325,"./is":326,"./is.js":326,"./it":327,"./it-ch":328,"./it-ch.js":328,"./it.js":327,"./ja":329,"./ja.js":329,"./jv":330,"./jv.js":330,"./ka":331,"./ka.js":331,"./kk":332,"./kk.js":332,"./km":333,"./km.js":333,"./kn":334,"./kn.js":334,"./ko":335,"./ko.js":335,"./ku":336,"./ku.js":336,"./ky":337,"./ky.js":337,"./lb":338,"./lb.js":338,"./lo":339,"./lo.js":339,"./lt":340,"./lt.js":340,"./lv":341,"./lv.js":341,"./me":342,"./me.js":342,"./mi":343,"./mi.js":343,"./mk":344,"./mk.js":344,"./ml":345,"./ml.js":345,"./mn":346,"./mn.js":346,"./mr":347,"./mr.js":347,"./ms":348,"./ms-my":349,"./ms-my.js":349,"./ms.js":348,"./mt":350,"./mt.js":350,"./my":351,"./my.js":351,"./nb":352,"./nb.js":352,"./ne":353,"./ne.js":353,"./nl":354,"./nl-be":355,"./nl-be.js":355,"./nl.js":354,"./nn":356,"./nn.js":356,"./pa-in":357,"./pa-in.js":357,"./pl":358,"./pl.js":358,"./pt":359,"./pt-br":360,"./pt-br.js":360,"./pt.js":359,"./ro":361,"./ro.js":361,"./ru":362,"./ru.js":362,"./sd":363,"./sd.js":363,"./se":364,"./se.js":364,"./si":365,"./si.js":365,"./sk":366,"./sk.js":366,"./sl":367,"./sl.js":367,"./sq":368,"./sq.js":368,"./sr":369,"./sr-cyrl":370,"./sr-cyrl.js":370,"./sr.js":369,"./ss":371,"./ss.js":371,"./sv":372,"./sv.js":372,"./sw":373,"./sw.js":373,"./ta":374,"./ta.js":374,"./te":375,"./te.js":375,"./tet":376,"./tet.js":376,"./tg":377,"./tg.js":377,"./th":378,"./th.js":378,"./tl-ph":379,"./tl-ph.js":379,"./tlh":380,"./tlh.js":380,"./tr":381,"./tr.js":381,"./tzl":382,"./tzl.js":382,"./tzm":383,"./tzm-latn":384,"./tzm-latn.js":384,"./tzm.js":383,"./ug-cn":385,"./ug-cn.js":385,"./uk":386,"./uk.js":386,"./ur":387,"./ur.js":387,"./uz":388,"./uz-latn":389,"./uz-latn.js":389,"./uz.js":388,"./vi":390,"./vi.js":390,"./x-pseudo":391,"./x-pseudo.js":391,"./yo":392,"./yo.js":392,"./zh-cn":393,"./zh-cn.js":393,"./zh-hk":394,"./zh-hk.js":394,"./zh-tw":395,"./zh-tw.js":395};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=740}},[[401,1,2]]]);
//# sourceMappingURL=main.8defc40a86e5d30b0912.bundle.js.map