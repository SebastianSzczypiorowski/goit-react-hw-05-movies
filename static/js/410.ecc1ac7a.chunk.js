"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[410,548],{548:function(e,t,n){n.r(t),n.d(t,{idContext:function(){return v}});var r=n(861),a=n(439),i=n(757),s=n.n(i),c=n(791),o=n(243),l=n(689),u=n(87),d=n(815),p=n(184),v=(0,c.createContext)(null);t.default=function(){var e,t=(0,l.UO)().movieId,n=(0,c.useState)([]),i=(0,a.Z)(n,2),h=i[0],f=i[1],m="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("7bfaca5914dfe808eee9ce7ecac1ff40");return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get(m);case 3:t=e.sent,f(t.data),console.log(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,p.jsx)(v.Provider,{value:t,children:(0,p.jsxs)("main",{className:d.Z.main,children:[h.poster_path?(0,p.jsx)("img",{className:d.Z.poster,src:"https://image.tmdb.org/t/p/w300".concat(h.poster_path),alt:"Movie poster"}):(0,p.jsx)("p",{children:"Image not available"}),(0,p.jsxs)("div",{className:d.Z.info,children:[(0,p.jsx)("h1",{children:h.title}),(0,p.jsxs)("p",{children:["User Score: ",h.vote_average]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:h.overview}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:null===(e=h.genres)||void 0===e?void 0:e.map((function(e){return(0,p.jsxs)("span",{children:[e.name," "]},e.name)}))})]}),(0,p.jsxs)("div",{className:d.Z.additionalInfo,children:[(0,p.jsx)("p",{children:"additional information"}),(0,p.jsx)(u.rU,{to:"cast",children:"Cast"}),(0,p.jsx)(u.rU,{to:"reviews",children:"Reviews"})]}),(0,p.jsx)("div",{className:d.Z.outlet,children:(0,p.jsx)(l.j3,{})})]})})}},410:function(e,t,n){n.r(t);var r=n(861),a=n(439),i=n(757),s=n.n(i),c=n(791),o=n(548),l=n(243),u=n(184);t.default=function(){var e=(0,c.useContext)(o.idContext),t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat("7bfaca5914dfe808eee9ce7ecac1ff40","&language=en-US&page=1"),n=(0,c.useState)([]),i=(0,a.Z)(n,2),d=i[0],p=i[1];function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.replace(/<[^>]+>/g,""));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get(t);case 2:n=e.sent,r=n.data,p(r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,u.jsx)(u.Fragment,{children:0!==d.length?d.map((function(e){return(0,u.jsxs)("article",{children:[(0,u.jsxs)("h2",{children:["Author: ",e.author]}),(0,u.jsx)("p",{children:v(e.content)})]},e.id)})):"There are no reviews"})}},815:function(e,t){t.Z={main:"movie-details_main__XdGgG",poster:"movie-details_poster__YzoTv",info:"movie-details_info__avR+w",additionalInfo:"movie-details_additionalInfo__8Ud7N",outlet:"movie-details_outlet__QnIyV",actor:"movie-details_actor__3-6nN",details:"movie-details_details__hMk1F"}}}]);
//# sourceMappingURL=410.ecc1ac7a.chunk.js.map