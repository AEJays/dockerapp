(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{CXuc:function(t,e,a){"use strict";a.r(e);var n=a("k16G"),i=a("q1tI"),c=a.n(i),o=a("Pm34"),l=a.n(o),s=a("cSAx"),r=a("1cYI"),u=(a("sHPV"),a("N4YQ"));e["default"]=function(){Object(s["a"])([{title:"\u9996\u9875",path:"/"},{title:"\u6d4b\u8bd5\u52a8\u6001\u9875\u9762\u52a0\u8f7d"}]);var t=Object(i["useState"])(""),e=Object(n["a"])(t,2),a=e[0],o=e[1],d=Object(i["useState"])(0),p=Object(n["a"])(d,2),f=(p[0],p[1],()=>{var t=window.location.href.split("?");if(parseInt(t.length)-parseInt(1)>0){var e=t[1].split("&");if(e.length>0)for(var a in e)console.log(e[a]),-1!==e[a].indexOf("id=")&&(console.log(e[a].split("id=")[1]),e[a].split("id=")[1])}});if(f(),Object(r["useDidMount"])(t=>{var e="http://192.168.3.239:8000/api/config",a={id:1};Object(u["a"])(e,a).then(t=>{if(console.log(t,111111),1===t.status){var e=t.data;o(e)}else console.error("\u83b7\u53d6\u9875\u9762\u914d\u7f6e\u4fe1\u606f\u5931\u8d25")})}),a){var b={layout:a.layout.table,title:a.pageName.table,items:[{component:"Search",config:{type:"default",fields:a.searchFields}},{component:"Table",config:{API:{listAPI:a.listAPI,deleteAPI:a.deleteAPI},actions:a.tableActions,fields:a.tableFields,operation:a.tableOperation}}]};return c.a.createElement(l.a,{namespace:"dynamic_page",config:b})}return null}},cSAx:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n=a("q1tI"),i=a("1cYI"),c=a("tONX");function o(t){var e=Object(n["useContext"])(c["a"]),a=e.OnBreadcrumb,o=e.OnBreadcrumbClear;Object(i["useDidMount"])(e=>{a(t)}),Object(i["useWillUnmount"])(t=>{o()})}},tONX:function(t,e,a){"use strict";var n=a("q1tI"),i=a.n(n),c=i.a.createContext({});e["a"]=c}}]);