(this["webpackJsonpreact-disaster-tracker"]=this["webpackJsonpreact-disaster-tracker"]||[]).push([[0],{20:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(2),s=n.n(r),i=n(3),a=n.n(i),o=(n(20),n(9)),j=n.n(o),l=n(11),d=n(5),u=n(14),b=n(6),f=n(7),O=n.n(f),h=(n(24),n(13)),x=n.n(h),v=(n(25),function(e){e.lat,e.lng;var t=e.eventId,n=e.onClick,r={8:O.a,10:x.a};return Object(c.jsx)("div",{className:"location-marker",onClick:n,children:Object(c.jsx)(b.Icon,{icon:r[t],className:{8:"fire-icon",10:"storm-icon"}[t]})})}),g=function(e){var t=e.info;return Object(c.jsxs)("div",{className:"location-info",children:[Object(c.jsx)("h2",{children:" Event Location Info "}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["ID: ",Object(c.jsxs)("strong",{children:[" ",t.id," "]})]}),Object(c.jsxs)("li",{children:[" Title: ",Object(c.jsxs)("strong",{children:[t.title," "]})," "]})]})]})},m=function(e){var t=e.eventData,n=e.center,s=e.zoom,i=Object(r.useState)(null),a=Object(d.a)(i,2),o=a[0],j=a[1],l=t.map((function(e){return 8===e.categories[0].id||10===e.categories[0].id?Object(c.jsx)(v,{lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],eventId:e.categories[0].id,onClick:function(){return j({id:e.id,title:e.title,link:e.link})}}):null}));return Object(c.jsxs)("div",{className:"map",children:[Object(c.jsx)(u.a,{bootstrapURLKeys:{key:"AIzaSyCaJ4Jk9HqYmob_fRGXZpL6_BoO_-9yl1o"},defaultCenter:n,defaultZoom:s,children:l}),o&&Object(c.jsx)(g,{info:o})]})};m.defaultProps={center:{lat:42.3265,lng:-122.8756,eventID:2},zoom:6};var p=m,k=n.p+"static/media/spinner.223e1344.gif",I=function(){return Object(c.jsxs)("div",{className:"loader",children:[Object(c.jsx)("img",{src:k}),Object(c.jsx)("h1",{children:"Fetching Data"})]})},C=function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsxs)("h1",{children:[" ",Object(c.jsx)(b.Icon,{icon:O.a})," Disaster Tracker (Powered By NASA) "]})})};var y=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(!1),a=Object(d.a)(i,2),o=a[0],u=a[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.events,s(c),u(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(C,{}),o?Object(c.jsx)(I,{}):Object(c.jsx)(p,{eventData:n})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};n(26).config(),a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),D()}},[[29,1,2]]]);
//# sourceMappingURL=main.d65b23e3.chunk.js.map