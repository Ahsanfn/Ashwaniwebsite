(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"//0O":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var i=n("rePB"),o=n("iYmT"),a=n("wTIg"),r=n("q1tI"),c=n.n(r),l=n("FsMg"),s=n("cZi2"),u=n("qKvR");c.a.createElement;var d=Object(a.a)("h3",{target:"e646vrd0"})({fontSize:24,fontWeight:s.f.bold,marginBottom:16},""),b=Object(a.a)("div",{target:"e646vrd1"})({fontWeight:s.f.light,fontSize:14,lineHeight:"22px"},""),m={name:"1c5ij41",styles:"margin:16px;"},g=function(e){var t=e.onClose;return Object(u.e)("div",null,Object(u.e)("div",{css:Object(o.a)(Object(i.a)({padding:"16px 16px 32px 16px",maxWidth:668,borderTop:"1px solid ".concat(s.d.gray_medium_light),borderBottom:"1px solid ".concat(s.d.gray_medium_light)},s.i.lg,{borderTop:"none",padding:"0 32px 16px 32px"}),"")},Object(u.e)(d,null,"Your reservation has been cancelled"),Object(u.e)(b,null,"You will cancel this reservation for all guests")),Object(u.e)(l.a,{href:"/myaccount/online-escapes",onClick:t,css:m},"Close"))}},"13Ln":function(e,t,n){e.exports=function(){"use strict";var e,t,n=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,i={years:31536e6,months:2592e6,days:864e5,hours:36e5,minutes:6e4,seconds:1e3,milliseconds:1,weeks:6048e5},o=function(e){return e instanceof c},a=function(e,t,n){return new c(e,n,t.$l)},r=function(e){return t.p(e)+"s"},c=function(){function t(e,t,o){var c=this;if(this.$d={},this.$l=o,t)return a(e*i[r(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){c.$d[r(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var l=e.match(n);if(l)return this.$d.years=l[2],this.$d.months=l[3],this.$d.weeks=l[4],this.$d.days=l[5],this.$d.hours=l[6],this.$d.minutes=l[7],this.$d.seconds=l[8],this.calMilliseconds(),this}return this}var c=t.prototype;return c.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*(i[n]||1)}),0)},c.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=Math.floor(e/31536e6),e%=31536e6,this.$d.months=Math.floor(e/2592e6),e%=2592e6,this.$d.days=Math.floor(e/864e5),e%=864e5,this.$d.hours=Math.floor(e/36e5),e%=36e5,this.$d.minutes=Math.floor(e/6e4),e%=6e4,this.$d.seconds=Math.floor(e/1e3),e%=1e3,this.$d.milliseconds=e},c.toISOString=function(){var e=this.$d.years?this.$d.years+"Y":"",t=this.$d.months?this.$d.months+"M":"",n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=n?n+"D":"",o=this.$d.hours?this.$d.hours+"H":"",a=this.$d.minutes?this.$d.minutes+"M":"",r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3);var c=r?r+"S":"",l="P"+e+t+i+(o||a||c?"T":"")+o+a+c;return"P"===l?"P0D":l},c.toJSON=function(){return this.toISOString()},c.as=function(e){return this.$ms/(i[r(e)]||1)},c.get=function(e){var t=this.$ms,n=r(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?Math.floor(t/i[n]):this.$d[n],t},c.add=function(e,t,n){var c;return c=t?e*i[r(t)]:o(e)?e.$ms:a(e,this).$ms,a(this.$ms+c*(n?-1:1),this)},c.subtract=function(e,t){return this.add(e,t,!0)},c.locale=function(e){var t=this.clone();return t.$l=e,t},c.clone=function(){return a(this.$ms,this)},c.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},c.milliseconds=function(){return this.get("milliseconds")},c.asMilliseconds=function(){return this.as("milliseconds")},c.seconds=function(){return this.get("seconds")},c.asSeconds=function(){return this.as("seconds")},c.minutes=function(){return this.get("minutes")},c.asMinutes=function(){return this.as("minutes")},c.hours=function(){return this.get("hours")},c.asHours=function(){return this.as("hours")},c.days=function(){return this.get("days")},c.asDays=function(){return this.as("days")},c.weeks=function(){return this.get("weeks")},c.asWeeks=function(){return this.as("weeks")},c.months=function(){return this.get("months")},c.asMonths=function(){return this.as("months")},c.years=function(){return this.get("years")},c.asYears=function(){return this.as("years")},t}();return function(n,i,r){e=r,t=r().$utils(),r.duration=function(e,t){var n=r.locale();return a(e,{$l:n},t)},r.isDuration=o}}()},CzWU:function(e,t,n){"use strict";n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return $})),n.d(t,"d",(function(){return E})),n.d(t,"e",(function(){return I.a})),n.d(t,"c",(function(){return L})),n.d(t,"f",(function(){return J})),n.d(t,"g",(function(){return X})),n.d(t,"h",(function(){return oe})),n.d(t,"i",(function(){return se})),n.d(t,"m",(function(){return ue})),n.d(t,"n",(function(){return de})),n.d(t,"j",(function(){return be.a})),n.d(t,"l",(function(){return me.a})),n.d(t,"k",(function(){return ge.a}));var i=n("iYmT"),o=n("rePB"),a=n("wTIg"),r=n("q1tI"),c=n.n(r),l=n("hK8T"),s=n("cZi2"),u=n("uUrX"),d=n("Wgwc"),b=n.n(d),m=n("FsMg"),g=n("jqRE"),v=n("qKvR");c.a.createElement;var f=Object(a.a)("div",{target:"ee7r8g10"})(Object(o.a)({fontWeight:s.f.bold,fontSize:16,lineHeight:"24px",marginTop:8},s.i.sm,{fontSize:24,lineHeight:"32px",marginTop:0}),""),h=Object(a.a)("div",{target:"ee7r8g11"})({name:"zoser8",styles:"padding-top:8px;"}),p=Object(a.a)("div",{target:"ee7r8g12"})({fontWeight:s.f.book,fontSize:14,lineHeight:"22px"},""),j=Object(a.a)("div",{target:"ee7r8g13"})(Object(o.a)({fontWeight:s.f.bold,fontSize:21,lineHeight:"28px"},s.i.sm,{fontSize:24,lineHeight:"32px"}),""),O={name:"wmz062",styles:"margin-top:14px;"},x=function(e){var t=e.name,n=e.startTime,a=e.coverImage,r=e.minutes,c=e.nbParticipants,d=e.footer,x=e.slug;return Object(v.e)(l.a,{css:Object(i.a)({borderRadius:s.j.polished},"")},Object(v.e)("div",{css:Object(i.a)({borderBottom:d&&"1px solid rgba(25, 25, 25, 0.15)"},"")},Object(v.e)("div",{css:Object(i.a)(Object(o.a)({display:"flex",flexDirection:"column",borderBottom:"1px solid rgba(25, 25, 25, 0.15)",padding:16},s.i.sm,{flexDirection:"row",padding:32}),"")},(null===a||void 0===a?void 0:a.url)&&Object(v.e)(u.a,{src:Object(g.w)(null===a||void 0===a?void 0:a.url,{size:{width:800}}),css:Object(i.a)(Object(o.a)({height:179,width:"100%",objectFit:"cover"},s.i.sm,{width:140,height:98,marginRight:32}),"")}),Object(v.e)("div",null,Object(v.e)(f,null,t),Object(v.e)(m.a,{href:"/online-escapes/".concat(x),target:"_blank",variant:"flat",color:s.d.text_dark,css:O},"View listing"))),Object(v.e)("div",{css:Object(i.a)(Object(o.a)({display:"grid",gridRowGap:16,padding:16},s.i.sm,{display:"flex",justifyContent:"space-between",flexWrap:"wrap",padding:"24px 32px 32px 32px"}),"")},Object(v.e)(h,null,Object(v.e)(p,null,"Date"),Object(v.e)(j,null,b()(n).format("MMM DD, YYYY"))),Object(v.e)(h,null,Object(v.e)(p,null,"Time"),Object(v.e)(j,null,"".concat(b()(n).format("h:mma"),"\u2013").concat(b()(n).add(r,"m").format("h:mma")))),Object(v.e)(h,null,Object(v.e)(p,null,"Participants"),Object(v.e)(j,null,c)))),d)},y=n("ha4E"),w=n("XZL2"),k=n("pFCb");c.a.createElement;var C=Object(a.a)("div",{target:"e87x6ve0"})(Object(o.a)({display:"flex",justifyContent:"space-between",alignItems:"center"},s.i.lg,{display:"unset"}),""),T=Object(a.a)("div",{target:"e87x6ve1"})(Object(o.a)({fontWeight:s.f.book,fontSize:14,lineHeight:"22px"},s.i.lg,{marginBottom:8}),""),S=Object(a.a)("div",{target:"e87x6ve2"})({fontWeight:s.f.light,fontSize:14,lineHeight:"22px"},""),q={name:"1c5ij41",styles:"margin:16px;"},$=function(e){var t,n,a,l,u,d,m,g,f,h,p,j,O,x=e.booking,$=e.isPast,E=void 0!==$&&$,I=e.isCancelled,z=void 0!==I&&I,R=Object(k.c)().market,_=Object(r.useState)(!1),W=_[0],M=_[1];return Object(v.e)("div",null,Object(v.e)("div",{css:Object(i.a)((t={display:"grid",gridRowGap:16,padding:16,borderBottom:"1px solid rgba(25, 25, 25, 0.15)"},Object(o.a)(t,s.i.sm,{padding:32}),Object(o.a)(t,s.i.lg,{display:"flex",justifyContent:"space-between"}),t),"")},(null===x||void 0===x?void 0:x.transactions)&&Object(v.e)(C,null,Object(v.e)(T,null,"Payment date"),Object(v.e)(S,null,b()(null===x||void 0===x?void 0:null===(n=x.transactions)||void 0===n?void 0:null===(a=n.items[0])||void 0===a?void 0:a.createdDate).format("MMM DD, YYYY"))),Object(v.e)(C,null,Object(v.e)(T,null,"Quantity"),Object(v.e)(S,null,null===x||void 0===x?void 0:x.nbParticipants)),Object(v.e)(C,null,Object(v.e)(T,null,"Total amount"),Object(v.e)(S,null,null===x||void 0===x?void 0:null===(l=x.amount)||void 0===l?void 0:l.formatted," ","CA"===R&&"CAD")),(null===x||void 0===x?void 0:null===(u=x.transactions)||void 0===u?void 0:null===(d=u.items)||void 0===d?void 0:d.length)>0&&Object(v.e)(C,null,Object(v.e)(T,null,"Method"),Object(v.e)(S,null,null===x||void 0===x?void 0:null===(m=x.transactions)||void 0===m?void 0:null===(g=m.items[0])||void 0===g?void 0:null===(f=g.cardInfo)||void 0===f?void 0:f.cardType," ending in ",null===x||void 0===x?void 0:null===(h=x.transactions)||void 0===h?void 0:null===(p=h.items[0])||void 0===p?void 0:null===(j=p.cardInfo)||void 0===j?void 0:null===(O=j.cardNumber)||void 0===O?void 0:O.slice(-4)))),!E&&!z&&Object(v.e)(c.a.Fragment,null,Object(v.e)(y.a,{onClick:function(){return M(!0)},css:q,variant:"outline",color:s.d.text_dark},"Cancel reservation"),Object(v.e)(w.a,{open:W,setOpen:M,booking:x})))},E=(c.a.createElement,function(e){var t,n=e.technicalFaqLink,a=e.footer;return Object(v.e)(l.a,{css:Object(i.a)({borderRadius:s.j.polished},"")},Object(v.e)("div",{css:Object(i.a)((t={padding:16},Object(o.a)(t,s.i.sm,{padding:32}),Object(o.a)(t,"borderBottom",a&&"1px solid rgba(25, 25, 25, 0.15)"),t),"")},Object(v.e)("div",{css:Object(i.a)({fontWeight:s.f.light,fontSize:14,lineHeight:"22px"},"")},"Click the button below to join your Escape from your web browser or the Zoom app. We recommend joining 5 minutes before your start time to work out any issues that may arise. Please see our\xa0",Object(v.e)(m.a,{href:n,variant:"flat",color:s.d.text_dark},"Technical FAQ"),"\xa0for more details.")),a)}),I=n("JmX+"),z=n("h4VS"),R=n("yG/n"),_=n("BtEH"),W=n.n(_),M=n("Tgqd");c.a.createElement;var F={name:"atjyc2",styles:"display:grid;grid-template-columns:1fr auto 16px;cursor:pointer;padding:16px;"},D=function(e){var t=e.question,n=e.answer,o=e.isOpen,a=void 0!==o&&o,r=e.anchorId,c=function(e){var t=e.open,n=e.children;return Object(v.e)("div",{"data-gtm-label":"".concat(t?"collapse":"expand"),css:F},n,Object(v.e)("span",null,Object(v.e)(M.g,{css:Object(i.a)({transform:t?"rotate(0deg)":"rotate(-180deg)",transition:"transform 0.5s ease",width:16,height:16},"")})))};return Object(v.e)(v.a,null,(function(e){var o=e.css;return Object(v.e)(W.a,{transitionTime:200,css:Object(i.a)({borderBottom:"1px solid ".concat(s.d.gray_medium_light," ")},""),openedClassName:o({borderBottom:"1px solid ".concat(s.d.gray_medium_light," ")}),trigger:Object(v.e)(c,{open:!0},t),triggerWhenOpen:Object(v.e)(c,null,t),open:a},Object(v.e)("meta",{itemProp:"name",content:t}),r&&Object(v.e)("a",{id:r}),Object(v.e)(R.a,{css:Object(i.a)({lineHeight:s.h.body,fontWeight:s.f.light,paddingLeft:16},""),text:n}))}))},A=n("rZGM"),P=n("VX74");c.a.createElement;function B(){var e=Object(z.a)(["\n    query GetFaqs( $params: StoryInput!) {\n        story(params: $params) {\n            content\n        }\n    }\n"]);return B=function(){return e},e}var H=Object(P.gql)(B()),L=function(e){var t,n,o,a=e.uuid,r=Object(k.c)().version,c=Object(P.useQuery)(H,{variables:{uuid:a,params:{uuid:a,version:r}},skip:!a}).data,l=null===c||void 0===c?void 0:null===(t=c.story)||void 0===t?void 0:t.content;if(!l)return null;var u={"@context":"https://schema.org","@type":"FAQPage",name:"Escapes FAQ",mainEntity:null===(n=l.items)||void 0===n?void 0:n.map((function(e){return{"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}}}))};return Object(v.e)("div",{"data-gtm-action":"faq",css:Object(i.a)({borderTop:"1px solid ".concat(s.d.gray_medium_light)},"")},null===(o=l.items)||void 0===o?void 0:o.map((function(e,t){return Object(v.e)(D,{key:t,css:Object(i.a)({fontWeight:s.f.book},""),question:e.question,answer:e.answer,"data-gtm-label":"expand: ".concat(e.question)})})),Object(v.e)(A.a,{data:u}))},N=n("R0UF");c.a.createElement;var Y=Object(a.a)("h3",{target:"e1ycilkt0"})({fontSize:24,fontWeight:s.f.bold,marginBottom:16},""),G=Object(a.a)("div",{target:"e1ycilkt1"})(Object(o.a)({fontSize:16,lineHeight:1.5,fontWeight:s.f.bold,margin:"0 auto"},s.i.sm,{margin:0}),""),Q=Object(a.a)("p",{target:"e1ycilkt2"})({fontWeight:s.f.light,fontSize:16,lineHeight:1.5},""),K={name:"10klw3m",styles:"height:100%;"},U={name:"vjptpz",styles:"padding:0 32px 64px;max-width:400px;"},Z={name:"1yni2gr",styles:"margin-top:8px;white-space:pre-wrap;"},J=function(e){var t=e.host,n=Object(r.useState)(!1),a=n[0],c=n[1];return t&&t.displayName&&t.image?Object(v.e)("div",{css:Object(i.a)(Object(o.a)({paddingTop:32,display:"grid",textAlign:"center"},s.i.sm,{textAlign:"unset",display:"flex"}),"")},Object(v.e)(u.a,{css:Object(i.a)(Object(o.a)({width:100,height:100,borderRadius:s.j.circle,objectFit:"cover",margin:"0px auto 8px auto"},s.i.sm,{marginBottom:0}),""),src:Object(g.w)(t.image,{size:{width:200}})}),Object(v.e)("div",{css:Object(i.a)(Object(o.a)({display:"inline-grid",alignItems:"end",justifyItems:"start",height:100,verticalAlign:"top",gridTemplateRows:"40% 1fr 1fr",textAlign:"center",margin:"0 auto"},s.i.sm,{margin:"0 0 0 32px",textAlign:"unset"}),"")},Object(v.e)("div",{css:Object(i.a)(Object(o.a)({height:"100%",margin:"0 auto"},s.i.sm,{margin:0}),"")},t.signatureImage&&Object(v.e)(u.a,{src:Object(g.w)(t.signatureImage,{size:{height:150}}),css:K})),Object(v.e)(G,null,t.displayName),Object(v.e)(y.a,{variant:"flat",color:s.d.text_dark,onClick:function(){return c(!0)},"data-gtm-action":"host bio","data-gtm-label":t.displayName,css:Object(i.a)(Object(o.a)({margin:"0 auto"},s.i.sm,{margin:"0"}),"")},"Read bio"),Object(v.e)(N.a,{open:a,onCloseRequested:function(){return c(!1)}},Object(v.e)("div",{css:U},Object(v.e)(Y,null,"Meet your host"),Object(v.e)(G,null,t.displayName),t.title&&Object(v.e)(Q,null,t.title),t.location&&Object(v.e)(Q,null,t.location),Object(v.e)(Q,{css:Z},t.bio))))):null},X=(c.a.createElement,function(e){var t=e.location;return Object(v.e)("div",{css:Object(i.a)(Object(o.a)({display:"inline-block",color:s.d.white,fontSize:12,fontWeight:s.f.book,lineHeight:1.5,backgroundColor:s.d.green_dark,padding:"2px 8px",borderRadius:s.j.rounded,marginTop:8},s.i.lg,{marginTop:0}),"")},"Live from ",t)}),V=n("lGeo"),ee=n("nOHt");c.a.createElement;function te(){var e=Object(z.a)(["\n    query FindEscape($slug: String!, $statusFilter: StringFilter) {\n        escapes(filter: {\n            slug: {\n                EQ: $slug,\n            },\n            status: $statusFilter\n        }) {\n            items {\n                _id\n                name\n                slug\n                coverImage {\n                    url\n                }\n            }\n        }\n    }\n"]);return te=function(){return e},e}var ne=Object(P.gql)(te()),ie={name:"d0uhtl",styles:"margin-left:16px;"},oe=function(){var e,t,n,i,o=Object(r.useState)(!1),a=o[0],l=o[1],u=Object(ee.useRouter)().query,d=Object(P.useQuery)(ne,{variables:{slug:u.slug,statusFilter:(null===u||void 0===u?void 0:u.preview)?void 0:{EQ:"Active"}}}).data,b=null===d||void 0===d?void 0:null===(e=d.escapes)||void 0===e?void 0:null===(t=e.items)||void 0===t?void 0:t[0];return Object(v.e)(c.a.Fragment,null,Object(v.e)(y.a,{variant:"outline",shape:"circle",color:s.d.text_dark,css:ie,onClick:function(){return l(!0)},"data-gtm-action":"social share","data-gtm-label":"open"},Object(v.e)(M.D,null)),Object(v.e)(N.a,{open:a,onCloseRequested:function(){return l(!1)}},Object(v.e)(V.a,{url:window.location.href,title:null===b||void 0===b?void 0:b.name,mediaUrl:null===b||void 0===b?void 0:null===(n=b.coverImage)||void 0===n?void 0:n.url,emailBody:(i=null===b||void 0===b?void 0:b.name,"No suitcase needed for this live virtual experience with EF Go Ahead Tours! Check out this Online Escape, ".concat(i,", we can join together from home:\n")),emailSubject:"Check out this Online Escape from EF Go Ahead Tours",pinterestDescription:null===b||void 0===b?void 0:b.name,twitterTitle:"Dreaming of adventure? Check out this live Online Escape from @goaheadtours ",subHeaderText:"Share this Online Escape with a friend: "})))};c.a.createElement;function ae(){var e=Object(z.a)(["\n    query FindBookingEscape($bookingId: ObjectId!) {\n        escapeBooking(_id: $bookingId) {\n            _id\n            date {\n                _id\n                escape {\n                    _id\n                    name\n                    slug\n                    coverImage {\n                        url\n                    }\n                }\n            }\n        }\n    }\n"]);return ae=function(){return e},e}var re=Object(P.gql)(ae()),ce={name:"h53hcy",styles:"margin-top:16px;cursor:pointer;text-decoration:underline;"},le={name:"qlszoy",styles:"font-size:18px;margin-left:8px;"},se=function(){var e,t,n,i,o=Object(r.useState)(!1),a=o[0],c=o[1],l=Object(ee.useRouter)().query,u=Object(P.useQuery)(re,{variables:{bookingId:l.escapeBookingId}}).data,d=null===u||void 0===u?void 0:null===(e=u.escapeBooking)||void 0===e?void 0:null===(t=e.date)||void 0===t?void 0:t.escape;return Object(v.e)("div",null,Object(v.e)(m.a,{variant:"flat",color:s.d.indigo_dark,css:ce,onClick:function(){return c(!0)},"data-gtm-category":"online escapes","data-gtm-action":"checkout social share","data-gtm-label":"open"},"Share with a friend",Object(v.e)(M.D,{css:le})),Object(v.e)(N.a,{open:a,onCloseRequested:function(){return c(!1)}},Object(v.e)(V.a,{url:"https://".concat(window.location.origin,"/online-escapes/").concat(null===d||void 0===d?void 0:d.slug),title:null===d||void 0===d?void 0:d.name,mediaUrl:null===d||void 0===d?void 0:null===(n=d.coverImage)||void 0===n?void 0:n.url,emailBody:(i=null===d||void 0===d?void 0:d.name,"I just signed up for a live virtual experience with EF Go Ahead Tours! Want to join me? Check out this Online Escape, ".concat(i,", here:\n")),emailSubject:"Check out this Online Escape from EF Go Ahead Tours",pinterestDescription:null===d||void 0===d?void 0:d.name,twitterTitle:"I just signed up for this live Online Escape with @goaheadtours ",subHeaderText:"Share this Online Escape with a friend: "})))},ue=[{text:"Upcoming escapes",link:"/myaccount/online-escapes/host/upcoming-escapes"},{text:"Past escapes",link:"/myaccount/online-escapes/host/past-escapes"},{text:"Host guidelines",link:"/online-escapes-hosting"}],de=function(e){return[{text:"Online Escape overview",link:"/myaccount/online-escapes/".concat(e)},{text:"Technical FAQ",link:"/myaccount/online-escapes/".concat(e,"/technical-faq")}]},be=n("IW1l"),me=n("O73D"),ge=n("m/7i")},"GO+l":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var i=n("iYmT"),o=n("q1tI"),a=n.n(o),r=n("KQm4"),c=n("ma3e"),l=n("cZi2"),s=n("qKvR"),u=(a.a.createElement,function(e){var t=e.value,n=e.max,o=e.onStarClick,u=e.onStarHover,d=e.className,b=e.size,m=void 0===b?12:b,g=Math.floor(t),v=t-g>=.5;return Object(s.e)(a.a.Fragment,null,Object(r.a)(Array(n)).map((function(e,t){var n=t+1;return n<=g?Object(s.e)(c.k,{key:t,onTouchStart:function(){return null===o||void 0===o?void 0:o(n)},onClick:function(){return null===o||void 0===o?void 0:o(n)},onMouseEnter:function(){return null===u||void 0===u?void 0:u(n)},onMouseLeave:function(){return null===u||void 0===u?void 0:u(0)},css:Object(i.a)({color:l.d.gold_medium},""),className:d,size:m}):n===g+1&&v?Object(s.e)(c.l,{key:t,onTouchStart:function(){return null===o||void 0===o?void 0:o(n)},onClick:function(){return null===o||void 0===o?void 0:o(n)},onMouseEnter:function(){return null===u||void 0===u?void 0:u(n)},onMouseLeave:function(){return null===u||void 0===u?void 0:u(0)},css:Object(i.a)({color:l.d.gold_medium},""),className:d,size:m}):Object(s.e)(c.i,{key:t,onTouchStart:function(){return null===o||void 0===o?void 0:o(n)},onClick:function(){return null===o||void 0===o?void 0:o(n)},onMouseEnter:function(){return null===u||void 0===u?void 0:u(n)},onMouseLeave:function(){return null===u||void 0===u?void 0:u(0)},css:Object(i.a)({color:l.d.gold_medium},""),className:d,size:m})})))});a.a.createElement;var d={name:"70qvj9",styles:"display:flex;align-items:center;"},b=function(e){return Object(s.e)("span",{css:d},Object(s.e)(u,e),Object(s.e)(m,{total:e.total}))},m=function(e){var t=e.total;return Object(s.e)(a.a.Fragment,null,t?Object(s.e)("span",{css:Object(i.a)({marginLeft:"4px",fontSize:"14px",fontWeight:l.f.light},"")},t):null)}},IW1l:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var i=n("iYmT"),o=n("h4VS"),a=n("rePB"),r=n("wTIg"),c=n("VX74"),l=n("pFCb"),s=n("jqRE"),u=n("car3"),d=n("nOHt"),b=n("q1tI"),m=n.n(b),g=n("cZi2"),v=n("Uqrx"),f=n("JmX+"),h=n("O73D"),p=n("3n7N"),j=n("qKvR");m.a.createElement;function O(){var e=Object(o.a)(['\n    query Escapes {\n        escapes(filter: {\n            status: {\n                EQ: "Active"\n            }\n        }) {\n            items {\n                leadInPrice {\n                    USD {\n                        formatted(format:"$0.00")\n                        inCents\n                    }\n                    CAD {\n                        formatted(format:"$0.00")\n                        inCents\n                    }\n                }\n                _id\n                title\n                name\n                averageRating\n                nbReviews\n                host {\n                    _id\n                    location\n                }\n                images {\n                    url\n                }\n                coverImage {\n                    url\n                }\n                slug\n                minutes\n            }\n        }\n    }\n']);return O=function(){return e},e}var x=Object(r.a)("div",{target:"er4b81e0"})(Object(a.a)({width:"276px",whiteSpace:"normal",flex:"0 0 276px",padding:"0 0 0 16px",boxSizing:"content-box"},g.i.lg,{padding:"0 8px"}),""),y=Object(c.gql)(O()),w=function(e){var t,n,o,r,m=e.escapesToShow,O=e.children,w=Object(l.c)().market,k=Object(d.useRouter)().query,C="CA"===w?"CAD":"USD",T=Object(c.useQuery)(y).data,S=null===T||void 0===T?void 0:null===(t=T.escapes)||void 0===t?void 0:null===(n=t.items)||void 0===n?void 0:n.filter((function(e){return(null===e||void 0===e?void 0:e.slug)!==k.slug}));return S&&(null===m||void 0===m?void 0:m.length)&&(S=m.reduce((function(e,t){var n=S.find((function(e){return e.slug===t}));return n&&e.push(n),e}),[])),Object(b.useEffect)((function(){var e;if(null===(e=S)||void 0===e?void 0:e.length){var t=S.map((function(e,t){var n,i,o;return{list:"escapes-slider",name:e.name,id:e._id,price:null!==(n=null===(i=e.leadInPrice)||void 0===i?void 0:null===(o=i[C])||void 0===o?void 0:o.formatted)&&void 0!==n?n:0,position:t,category:e._id}}));Object(p.d)({event:"eeImpressions",ecommerce:{impressions:t}})}}),[S]),(null===(o=S)||void 0===o?void 0:o.length)?Object(j.e)("div",null,O,Object(j.e)(u.a,{css:Object(i.a)((r={},Object(a.a)(r,g.i.lg,{padding:"0 16px",width:u.b}),Object(a.a)(r,g.i.xl,{width:u.c}),r),"")},Object(j.e)(v.a,null,S.map((function(e,t){var n,i,o,a,r,c,l,u,d=Object(h.a)(e.minutes),b="CA"===w?"CAD":"",m=null===(n=e.leadInPrice)||void 0===n?void 0:null===(i=n[C])||void 0===i?void 0:i.formatted,g=0===(null===(o=e.leadInPrice)||void 0===o?void 0:null===(a=o[C])||void 0===a?void 0:a.inCents)||!(null===(r=e.leadInPrice)||void 0===r?void 0:null===(c=r[C])||void 0===c?void 0:c.inCents)?d:"".concat(d," from ").concat(m," ").concat(b);return Object(j.e)(x,{key:e._id},Object(j.e)(f.a,{image:Object(s.w)(null===(l=e.coverImage)||void 0===l?void 0:l.url,{size:{width:600}}),location:null===(u=e.host)||void 0===u?void 0:u.location,title:e.name,link:"/online-escapes/".concat(e.slug),description:g,nbReviews:e.nbReviews,averageRating:e.averageRating,onClick:function(){var n,i,o;Object(p.d)({event:"eeClick",ecommerce:{click:{actionField:{list:"escapes-slider"},products:[{position:t,name:e.name,id:e._id,price:null!==(n=null===(i=e.leadInPrice)||void 0===i?void 0:null===(o=i[C])||void 0===o?void 0:o.formatted)&&void 0!==n?n:0,variant:"escape"}]}}})}}))}))))):Object(j.e)("div",null)}},"JmX+":function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var i=n("iYmT"),o=n("wTIg"),a=n("q1tI"),r=n.n(a),c=n("FsMg"),l=n("4bJo"),s=n("GO+l"),u=n("I8JM"),d=n("cZi2"),b=n("qKvR");r.a.createElement;var m=Object(o.a)("div",{target:"e1kq9uja0"})({position:"absolute",bottom:0,left:0,backgroundColor:d.d.green_dark,padding:"8px 16px",color:d.d.white,borderTopRightRadius:d.j.rounded,fontWeight:d.f.medium,fontSize:12},""),g=Object(o.a)("p",{target:"e1kq9uja1"})({fontWeight:d.f.light,marginBottom:8},""),v=Object(o.a)("a",{target:"e1kq9uja2"})({"&:visited, &:hover, &:visited:hover":{textDecoration:"inherit",color:"inherit"},textDecoration:"none",color:"inherit",cursor:"pointer",display:"grid",height:"100%",width:"100%",grid:'\n        "image" 225px\n        "content" 1fr\n    '},""),f=Object(o.a)(c.a,{target:"e1kq9uja3"})({name:"1h8lg0t",styles:"margin-top:4px;display:block;text-decoration:underline;"}).withComponent("span",{target:"e1kq9uja4"}),h={name:"v2kfba",styles:"height:100%;width:100%;"},p={name:"16o9jev",styles:"position:absolute;left:0;right:0;top:0;bottom:0;object-fit:cover;width:100%;height:100%;object-position:50% 50%;"},j={name:"1ultvzu",styles:"padding:16px;grid-area:content;display:grid;"},O={name:"1qm1lh",styles:"margin-bottom:16px;"},x={name:"tjo8d1",styles:"align-self:end;font-size:14px;"},y=function(e){var t=e.image,n=e.title,o=e.link,a=e.nbReviews,r=e.averageRating,c=e.location,y=e.description,w=e.onClick;return Object(b.e)(l.c,{css:h},Object(b.e)(v,{href:o,onClick:w},Object(b.e)("div",{css:Object(i.a)({gridArea:"image",position:"relative",backgroundColor:d.d.gray_medium,width:"100%"},"")},t&&Object(b.e)("img",{src:t,css:p}),Object(b.e)(m,null,"Live from ",c)),Object(b.e)("div",{css:j},Object(b.e)("div",{css:O},Object(b.e)(u.a,{css:Object(i.a)({fontWeight:d.f.bold,marginBottom:8},"")},n),Object(b.e)(s.a,{value:r,max:5,total:a,css:Object(i.a)({textDecoration:"underline",color:d.d.text_dark,visibility:"".concat(a?"visible":"hidden")},"")})),Object(b.e)("div",{css:x},Object(b.e)(g,null,y),Object(b.e)(f,{variant:"flat",color:d.d.text_dark},"View Online Escape")))))}},O73D:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("Wgwc"),o=n.n(i),a=n("13Ln"),r=n.n(a),c=n("dhqo"),l=n.n(c);o.a.extend(r.a);var s=function(e){return+o.a.duration({minutes:e}).asHours().toFixed(2)},u=function(e){return e<60?"".concat(e," ").concat(l()("minute",e)):"".concat(s(e)," ").concat(l()("hour",s(e)))}},Uqrx:function(e,t,n){"use strict";n.d(t,"a",(function(){return x})),n.d(t,"d",(function(){return y})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return C}));var i=n("rePB"),o=n("iYmT"),a=n("q1tI"),r=n.n(a),c=n("sBL/"),l=n("3n7N"),s=n("ha4E"),u=n("FsMg"),d=n("p+FZ"),b=n("Tgqd"),m=n("Rnhc"),g=n("EEVn"),v=n("qKvR");r.a.createElement;var f=function(e,t,n){return p(t).map((function(t){return function(e,t,n){var i=function(e,t){var n=e.getBoundingClientRect(),i=t.getBoundingClientRect();return{left:i.left-n.left,right:i.right-n.right}}(e,t);return"right"===n?i.right<=0:"left"===n&&i.left>=0}(e.current,t,n)}))},h=function(e,t){return p(e)[t]},p=function(e){return e.current.reduce((function(e,t){return t.current?e.concat(t.current):e}),[])},j={name:"79elbk",styles:"position:relative;"},O={name:"6wb69j",styles:"overflow-x:auto;overflow-y:visible;white-space:nowrap;display:flex;align-items:stretch;scroll-behavior:smooth;position:relative;padding:16px 0;::-webkit-scrollbar{width:0;}scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;"},x=function(e){var t=e.children,n=e.renderNext,i=e.renderPrev,o=e.className,s=e.startPosition,u=Object(a.useState)(!1),d=u[0],b=u[1],m=Object(a.useState)(0),g=m[0],p=m[1],x=Object(a.useRef)(null),y=Object(a.useRef)(r.a.Children.map(t,(function(){return r.a.createRef()}))),w=Object(a.useState)({canGoPrev:!1,canGoNext:!1}),k=w[0],C=k.canGoNext,T=k.canGoPrev,S=w[1],q=Object(c.debounce)((function(e){var t=e.scrollLeft+e.clientWidth<e.scrollWidth,n=0!==e.scrollLeft;S({canGoNext:t,canGoPrev:n}),d?(p(e.scrollLeft),b(!1)):Math.abs(g-e.scrollLeft)>100&&(Object(l.d)({event:"track",gaTracking:{eventCategory:Object(l.b)(e)||"horizontal-scroll",eventAction:"scroll",eventLabel:e.scrollLeft>g?"scroll left":"scroll right"}}),p(e.scrollLeft))}),100);return Object(a.useEffect)((function(){if(s&&s<r.a.Children.count(t)){var e=h(y,s);x.current.scrollTo&&x.current.scrollTo(e.offsetLeft,0)}r.a.Children.count(t)>0&&q(x.current)}),[]),r.a.Children.count(t)<1?null:Object(v.e)("div",{css:j,className:o},i&&i((function(){var e=f(x,y,"left").indexOf(!0)-1,t=h(y,e);t&&!d&&(x.current.scrollTo(t.offsetLeft-x.current.clientWidth+t.clientWidth,0),b(!0))}),T),Object(v.e)("div",{ref:x,onScroll:function(e){return q(e.currentTarget)},css:O},r.a.Children.map(t,(function(e,t){return r.a.cloneElement(e,{ref:y.current[t]})}))),n&&n((function(){var e=f(x,y,"right").lastIndexOf(!0)+1,t=h(y,e);t&&!d&&(x.current.scrollTo(t.offsetLeft,0),b(!0))}),C))},y=function(e){var t,n=e.type,a=e.visible,r=e.onClick;return a?Object(v.e)(s.a,{onClick:r,color:"white",css:Object(o.a)((t={borderRadius:"100%",height:"56px",width:"56px",display:"none",boxShadow:d.g.light,position:"absolute",top:"50%",transform:"translateY(-50%)",left:"next"===n?"calc(100% - 32px)":"-32px",padding:0,minWidth:"auto",zIndex:10,backgroundColor:"white",color:"#000"},Object(i.a)(t,d.e.lg,{display:"flex"}),Object(i.a)(t,":focus",{outline:"none",boxShadow:d.g.light}),t),""),"data-gtm-label":n,"data-gtm-action":"button"},"next"===n?Object(v.e)(b.i,null):Object(v.e)(b.h,null)):null};x.defaultProps={renderNext:function(e,t){return Object(v.e)(y,{visible:t,type:"next",onClick:e})},renderPrev:function(e,t){return Object(v.e)(y,{visible:t,type:"prev",onClick:e})}};var w=function(e){var t=e.title,n=e.subtitle;return t&&""!==t||n&&""!==n?Object(v.e)(m.d,{alignItems:"flex-start",px:{xs:"16px",lg:"8px"}},Object(v.e)(m.b,{flex:"1 0 auto"},Object(v.e)(g.i,{fontWeight:d.c.bold,fontSize:"18px"},t),Object(v.e)(g.i,{fontSize:"14px",fontWeight:d.c.light,mt:2,css:Object(o.a)({color:d.b.text_light},""),display:n&&""!==n?"block":"none"},n))):null},k={name:"164r41r",styles:"margin-top:8px;"},C=function(e){var t=e.seeAllHref;return t?Object(v.e)(m.d,{alignItems:"center",justifyContent:"center",flexDirection:"column",px:6,"data-gtm-label":"see-all","data-gtm-action":"link"},Object(v.e)(u.a,{href:t,shape:"circle",icon:Object(v.e)(b.c,null)}),Object(v.e)(u.a,{css:k,color:d.b.text_medium_dark,variant:"flat",href:t},"See all")):null}},XZL2:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("q1tI"),o=n.n(i),a=n("z5Jz"),r=n("//0O"),c=n("R0UF"),l=n("qKvR"),s=(o.a.createElement,function(e){var t=e.booking,n=e.open,o=e.setOpen,s=Object(i.useState)(!1),u=s[0],d=s[1];return Object(l.e)(c.a,{open:n,onCloseRequested:function(){o(!1),u&&(window.location.href="/myaccount/online-escapes")}},u?Object(l.e)(r.a,{onClose:function(){o(!1),u&&(window.location.href="/myaccount/online-escapes")}}):Object(l.e)(a.a,{booking:t,setCancelled:d}))})},lGeo:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var i=n("iYmT"),o=n("wTIg"),a=n("q1tI"),r=n.n(a),c=n("p+FZ"),l=n("qKvR"),s=n("EEVn"),u=n("ma3e"),d=n("Tgqd"),b=n("aWbt"),m=n("J5mj"),g=n("QeUd"),v=n("XHDy"),f=n("nWDw"),h=n("P5Jw"),p=n.n(h);r.a.createElement;var j={name:"ruzqdw",styles:"height:60px;width:auto;"},O=Object(o.a)(f.c,{target:"e81va90"})("padding:16px 0px;border-bottom:1px solid ",c.b.gray_medium,";&:hover{color:",c.b.primary_dark,";cursor:pointer;}"),x=Object(o.a)(s.i,{target:"e81va91"})("margin:32px 0px;text-align:center;font-size:32px;font-weight:",c.c.bold,";"),y=Object(o.a)(s.i,{target:"e81va92"})("margin-bottom:4px;font-size:18px;text-align:center;font-weight:",c.c.medium,";"),w=Object(o.a)(s.i,{target:"e81va93"})("margin-bottom:40px;font-size:18px;text-align:center;font-weight:",c.c.medium,";"),k=Object(o.a)(s.i,{target:"e81va94"})("margin-bottom:16px;padding:24px 0px 0px 16px;font-size:20px;color:",c.b.text_dark,";font-weight:",c.c.medium,";"),C=Object(o.a)(d.r,{target:"e81va95"})({name:"vzgmrg",styles:"height:50px;width:auto;"}),T={name:"1v0cd8t",styles:"line-height:1;"},S=function(e){var t=e.title,n=e.emailBody,o=e.emailSubject,r=e.pinterestDescription,s=e.twitterTitle,d=e.mediaUrl,h=e.headerText,S=e.subHeaderText,q=e.url,$=q||window.location.href,E=Object(a.useState)("Copy link"),I=E[0],z=E[1];return Object(l.e)(f.b,{width:"400px","data-gtm-category":"social media share",css:T},Object(l.e)(x,null,h||"Share"),S&&Object(l.e)(y,null,S),Object(l.e)(w,null,t),Object(l.e)(O,null,Object(l.e)(f.a,{width:1},Object(l.e)(b.a,{url:$},Object(l.e)(f.c,{pl:5,"data-gtm-action":"share","data-gtm-label":"facebook"},Object(l.e)(f.a,{width:.25},Object(l.e)(u.c,{css:j})),Object(l.e)(f.a,{width:.75},Object(l.e)(k,null,"Facebook")))))),Object(l.e)(O,null,Object(l.e)(f.a,{width:1},Object(l.e)(m.a,{url:$,description:r,media:d,windowWidth:1e3,windowHeight:730},Object(l.e)(f.c,{pl:5,"data-gtm-action":"share","data-gtm-label":"pinterest"},Object(l.e)(f.a,{width:.25},Object(l.e)(u.e,{css:j})),Object(l.e)(f.a,{width:.75},Object(l.e)(k,null,"Pinterest")))))),Object(l.e)(O,null,Object(l.e)(f.a,{width:1},Object(l.e)(g.a,{url:$,title:s},Object(l.e)(f.c,{pl:5,"data-gtm-action":"share","data-gtm-label":"twitter"},Object(l.e)(f.a,{width:.25},Object(l.e)(u.m,{css:j})),Object(l.e)(f.a,{width:.75},Object(l.e)(k,null,"Twitter")))))),Object(l.e)(O,null,Object(l.e)(f.a,{width:1},Object(l.e)(v.a,{url:$,subject:o,body:n},Object(l.e)(f.c,{pl:5,"data-gtm-action":"share","data-gtm-label":"email"},Object(l.e)(f.a,{width:.25},Object(l.e)(u.g,{css:j})),Object(l.e)(f.a,{width:.75},Object(l.e)(k,null,"Email")))))),Object(l.e)(f.c,{pt:4,pb:5,css:Object(i.a)({"&:hover":{color:c.b.primary_dark,cursor:"pointer"}},"")},Object(l.e)(f.a,{width:1},Object(l.e)(p.a,{text:$,onCopy:function(){z("Copied to clipboard"),setTimeout((function(){z("Copy link")}),2e3)}},Object(l.e)(f.c,{pl:5,"data-gtm-action":"share","data-gtm-label":"copy"},Object(l.e)(f.a,{width:.25},Object(l.e)(C,null)),Object(l.e)(f.a,{width:.75},Object(l.e)(k,null,I)))))))}},"m/7i":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n("iYmT"),o=n("rePB"),a=n("wTIg"),r=n("q1tI"),c=n.n(r),l=n("cZi2"),s=n("qKvR");c.a.createElement;var u=Object(a.a)("h3",{target:"e1sczb7j0"})({fontSize:16,fontWeight:l.f.bold},""),d=Object(a.a)("li",{target:"e1sczb7j1"})(Object(o.a)({margin:"16px 16px 0",position:"relative",lineHeight:"24px",fontWeight:l.f.light},"&:before",{content:"''",borderRadius:l.j.circle,width:3,height:3,backgroundColor:l.d.text_dark,display:"inline-block",position:"absolute",top:12,left:-16}),""),b={name:"1bicovv",styles:"grid-area:needed;"},m=function(e){var t=e.whatToBring;return t&&0!==t.length?Object(s.e)("div",{css:Object(i.a)(Object(o.a)({display:"grid",gridTemplateAreas:'\n                    "needed"\n                    "recommended"\n                '},l.i.sm,{gridTemplateAreas:'"needed recommended"'}),"")},Object(s.e)("div",{css:b},Object(s.e)(u,null,"What you'll need to participate"),Object(s.e)("ul",null,Object(s.e)(d,null,"An internet connection"),Object(s.e)(d,null,"A device that can stream audio & video"))),Object(s.e)("div",{css:Object(i.a)(Object(o.a)({gridArea:"recommended",marginTop:16},l.i.sm,{marginTop:0}),"")},Object(s.e)(u,null,"We also recommend bringing"),Object(s.e)("ul",null,t.map((function(e,t){return Object(s.e)(d,{key:t},e)}))))):null}},rZGM:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("q1tI"),o=n.n(i),a=n("8Kt/"),r=n.n(a),c=n("qKvR"),l=(o.a.createElement,function(e){var t=e.data;return Object(c.e)(r.a,null,Object(c.e)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t)}}))})}}]);