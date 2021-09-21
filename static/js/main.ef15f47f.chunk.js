(this["webpackJsonphockey-app"]=this["webpackJsonphockey-app"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(7),r=s.n(a),j=(s(13),s(2)),l=(s.p,s(14),s(15),s.p,s(4)),i=s(0);var d=function(e){return console.log(e.formType),"PlayerCards"===e.formType||"TeamCards"===e.formType?Object(i.jsx)("button",{onClick:function(){e.updateType("Players"),e.addCount(1),e.updateReset(e.resetCount+1)},children:"Reset"}):"Players"===e.formType?Object(i.jsx)("button",{onClick:function(){e.updateType("PlayerCards")},children:"Submit"}):Object(i.jsx)("button",{onClick:function(){e.updateType("TeamCards")},children:"Submit"})};var o=s(6),h=s.n(o),b=s(8);var O=function(e){var t=Object(c.useState)({}),s=Object(j.a)(t,2),n=s[0],a=s[1];if(0===Object.keys(n).length){var r=e.season.replace(/-/g,"");fetch("https://statsapi.web.nhl.com/api/v1/people/".concat(e.selectedPlayer.person.id,"/stats?stats=statsSingleSeason&season=").concat(r),{method:"GET"}).then((function(e){return e.json()})).then((function(t){if("Goalie"===e.selectedPlayer.position.name){console.log(t);var s={playerID:e.selectedPlayer.person.id,gamesPlayed:t.stats[0].splits[0].stat.games,savePct:(Math.round(100*t.stats[0].splits[0].stat.evenStrengthSavePercentage)/100).toFixed(2),GAA:(Math.round(100*t.stats[0].splits[0].stat.goalAgainstAverage)/100).toFixed(2),shutouts:t.stats[0].splits[0].stat.shutouts,shotsAgainst:t.stats[0].splits[0].stat.shotsAgainst,wins:t.stats[0].splits[0].stat.wins};a(s)}else{var c={playerID:e.selectedPlayer.person.id,gamesPlayed:t.stats[0].splits[0].stat.games,points:t.stats[0].splits[0].stat.points,goals:t.stats[0].splits[0].stat.goals,assists:t.stats[0].splits[0].stat.assists,plusMinus:t.stats[0].splits[0].stat.plusMinus,PPG:t.stats[0].splits[0].stat.powerPlayGoals,PIM:t.stats[0].splits[0].stat.penaltyMinutes,shots:t.stats[0].splits[0].stat.shots,shotPct:t.stats[0].splits[0].stat.shotPct};a(c)}}))}return"Goalie"===e.selectedPlayer.position.name?Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{id:"card",children:[Object(i.jsx)("div",{id:"card_head",children:Object(i.jsxs)("div",{className:"centerHead",children:[Object(i.jsx)("h1",{className:"cardHead",children:e.selectedPlayer.person.fullName}),Object(i.jsx)(l.a,{className:"playerFace",src:"http://nhl.bamcontent.com/images/headshots/current/168x168/".concat(e.selectedPlayer.person.id,".jpg"),loader:"https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"}),Object(i.jsx)("h2",{children:e.selectedPlayer.position.name})]})}),Object(i.jsxs)("table",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"goalieData",children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Games Played:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.gamesPlayed})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"goalieData",children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Save%:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.savePct})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"goalieData",children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"GAA: "})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.GAA})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"goalieData",children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsxs)("strong",{className:"right",children:[" ",Object(i.jsx)("p",{children:"Shutouts: "})]})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.shutouts})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"goalieData",children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Shots Against:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.shotsAgainst})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"goalieData",children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Wins:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.wins})})})]})]})]})}):Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{id:"card",children:[Object(i.jsx)("div",{id:"card_head",children:Object(i.jsxs)("div",{className:"centerHead",children:[Object(i.jsx)("h1",{className:"cardHead",children:e.selectedPlayer.person.fullName}),Object(i.jsx)(l.a,{className:"playerFace",src:"http://nhl.bamcontent.com/images/headshots/current/168x168/".concat(e.selectedPlayer.person.id,".jpg"),loader:"https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"}),Object(i.jsx)("h2",{children:e.selectedPlayer.position.name})]})}),Object(i.jsxs)("table",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Games Played:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.gamesPlayed})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:" Points:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.points})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:" Goals: "})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.goals})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsxs)("strong",{className:"right",children:[" ",Object(i.jsx)("p",{children:"Assists: "})]})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.assists})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:" +/-"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.plusMinus})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:" PPG:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.PPG})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:" PIM:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.PIM})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:" Shots:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.shots})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:" Shot%:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.shotPct})})})]})]})]})})};var x=function(e){var t=Object(c.useState)(""),s=Object(j.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)([]),l=Object(j.a)(r,2),d=l[0],o=l[1],x=Object(c.useState)(null),m=Object(j.a)(x,2),u=m[0],p=m[1],g=Object(c.useState)([]),f=Object(j.a)(g,2),N=f[0],v=f[1],y=Object(c.useState)(null),P=Object(j.a)(y,2),C=P[0],S=P[1],T=Object(c.useState)(e.formid),A=Object(j.a)(T,2),B=A[0],k=(A[1],Object(c.useState)(e.resetCount)),w=Object(j.a)(k,2),F=w[0],L=w[1];return e.resetCount>F&&(p(null),S(null),v([]),o([]),a(""),L(e.resetCount)),0===n.length&&a("2020-2021"),Object(c.useEffect)((function(){console.log("in");var e=n.replace(/-/g,"");fetch("https://statsapi.web.nhl.com/api/v1/teams?season=".concat(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){o(e.teams.sort((function(e,t){var s=e.name.toLowerCase(),c=t.name.toLowerCase();return s<c?-1:s>c?1:0})))}))}),[n]),Object(c.useEffect)((function(){if("Teams"!==e.formType){var t=d.find((function(e){return e.name===u}));void 0===t&&(t={id:24});var s=n.replace(/-/g,"");!function(){c.apply(this,arguments)}()}function c(){return(c=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://statsapi.web.nhl.com/api/v1/teams/".concat(t.id,"?expand=team.roster&season=").concat(s),{method:"GET"}).then((function(e){return e.json()})).then((function(e){var t=e.teams[0].roster.roster.sort((function(e,t){var s=e.person.fullName.toLowerCase(),c=t.person.fullName.toLowerCase();return s<c?-1:s>c?1:0}));v(t),S(t[0])}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}),[u,n,d]),B>e.formCount?Object(i.jsx)("div",{className:"column is-3",children:Object(i.jsx)("p",{className:"addClick",onClick:function(){e.addCount(e.formCount+1)},children:"+"})}):"Players"===e.formType?Object(i.jsx)("div",{className:"column is-3",children:Object(i.jsxs)("form",{children:[Object(i.jsxs)("h2",{children:["Player ",B]}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"Season: "}),Object(i.jsxs)("select",{value:n,onChange:function(e){return a(e.target.value)},name:"selectList",id:"selectList",children:[Object(i.jsx)("option",{value:"2020-2021",children:"2020-2021"}),Object(i.jsx)("option",{value:"2019-2020",children:"2019-2020"}),Object(i.jsx)("option",{value:"2018-2019",children:"2018-2019"}),Object(i.jsx)("option",{value:"2017-2018",children:"2017-2018"}),Object(i.jsx)("option",{value:"2016-2017",children:"2016-2017"})]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"Team: "}),Object(i.jsx)("select",{value:u,onChange:function(e){return p(e.target.value)},name:"selectList",id:"selectList",children:d.map((function(e){return Object(i.jsx)("option",{children:e.name})}))}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"Player: "}),Object(i.jsx)("select",{value:null===C?"None":C.person.fullName,onChange:function(e){return S(N.find((function(t){return t.person.fullName===e.target.value})))},name:"selectList",id:"selectList",children:N.map((function(e){return Object(i.jsx)("option",{children:e.person.fullName})}))})]})}):Object(i.jsx)(O,{season:n,selectedPlayer:C,formid:B})};var m=function(e){console.log("i");var t=Object(c.useState)({}),s=Object(j.a)(t,2),n=s[0],a=s[1];if(0===Object.keys(n).length||n.id!==e.selectedTeam.id){var r=e.season.replace(/-/g,"");fetch("https://statsapi.web.nhl.com/api/v1/teams/".concat(e.selectedTeam.id,"/stats?stats=statsSingleSeason&season=").concat(r),{method:"GET"}).then((function(e){return e.json()})).then((function(t){var s={id:e.selectedTeam.id,points:t.stats[0].splits[0].stat.pts,wins:t.stats[0].splits[0].stat.wins,losses:t.stats[0].splits[0].stat.losses,OTL:t.stats[0].splits[0].stat.ot,PP:(Math.round(100*t.stats[0].splits[0].stat.powerPlayPercentage)/100).toFixed(2),PK:(Math.round(100*t.stats[0].splits[0].stat.penaltyKillPercentage)/100).toFixed(2),shots:(Math.round(100*t.stats[0].splits[0].stat.shotsPerGame)/100).toFixed(2),shotsAgainst:(Math.round(100*t.stats[0].splits[0].stat.shotsAllowed)/100).toFixed(2)};a(s)}))}return Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{id:"card",children:[Object(i.jsxs)("div",{className:"card_head_team",children:[Object(i.jsx)("h1",{className:"cardHead",children:e.selectedTeam.name}),Object(i.jsx)(l.a,{className:"teamLogo",src:"\n                https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/".concat(e.selectedTeam.id,".svg"),loader:"https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"})]}),Object(i.jsxs)("table",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Points:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.points})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Wins:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.wins})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Losses:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.losses})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"OTL:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.OTL})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"PP%:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.PP})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"PK%:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.PK})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Shots:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.shots})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Shots Against:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:n.shotsAgainst})})})]})]})]})})};var u=function(e){var t=Object(c.useState)(""),s=Object(j.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)([]),l=Object(j.a)(r,2),d=l[0],o=l[1],h=Object(c.useState)(null),b=Object(j.a)(h,2),O=b[0],x=b[1],u=Object(c.useState)(e.formid),p=Object(j.a)(u,2),g=p[0];return p[1],0===n.length&&a("2020-2021"),Object(c.useEffect)((function(){var e=n.replace(/-/g,"");fetch("https://statsapi.web.nhl.com/api/v1/teams?season=".concat(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.teams.sort((function(e,t){var s=e.name.toLowerCase(),c=t.name.toLowerCase();return s<c?-1:s>c?1:0})))}))}),[n]),d.length>0&&null===O&&x(d[0]),e.formid>e.formCount?Object(i.jsx)("div",{className:"column is-3",children:Object(i.jsx)("p",{className:"addClick",onClick:function(){e.addCount(e.formCount+1)},children:"+"})}):"Teams"===e.formType?Object(i.jsx)("div",{className:"column is-3",children:Object(i.jsxs)("form",{children:[Object(i.jsxs)("h2",{children:["Team ",g]}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"Season: "}),Object(i.jsxs)("select",{value:n,onChange:function(e){return a(e.target.value)},name:"selectList",id:"selectList",children:[Object(i.jsx)("option",{value:"2020-2021",children:"2020-2021"}),Object(i.jsx)("option",{value:"2019-2020",children:"2019-2020"}),Object(i.jsx)("option",{value:"2018-2019",children:"2018-2019"}),Object(i.jsx)("option",{value:"2017-2018",children:"2017-2018"}),Object(i.jsx)("option",{value:"2016-2017",children:"2016-2017"})]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"Team: "}),Object(i.jsx)("select",{value:null===O?"None":O.name,onChange:function(e){return x(d.find((function(t){return t.name===e.target.value})))},name:"selectList",id:"selectList",children:d.map((function(e){return Object(i.jsx)("option",{children:e.name})}))})]})}):"TeamCards"===e.formType?Object(i.jsx)(m,{season:n,selectedTeam:O}):void 0};function p(e){console.log(e.resetCount);var t=Object(c.useState)(e.type),s=Object(j.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)([{prop1:"1",prop2:"2"},{prop3:"3",prop4:"4"}]),l=Object(j.a)(r,2);l[0],l[1];if(n!==e.type&&a(e.type),"Players"===n){for(var d=[],o=0;o<=e.formCount&&!(o>3);o++)d.push(Object(i.jsx)(x,{formType:n,formCount:e.formCount,formid:o+1,addCount:e.addCount,resetCount:e.resetCount}));return Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"columns is-variable",children:d})})})}if("PlayerCards"===n){for(var h=[],b=0;b<e.formCount;b++)h.push(Object(i.jsx)(x,{formType:n,formCount:e.formCount,formid:b+1,addCount:e.addCount}));return Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"columns is-variable",children:h})})})}if("Teams"===n){for(var O=[],m=0;m<=e.formCount&&!(m>3);m++)O.push(Object(i.jsx)(u,{formType:n,formCount:e.formCount,formid:m+1,addCount:e.addCount}));return Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"columns is-variable",children:O})})})}for(var p=[],g=0;g<e.formCount;g++)p.push(Object(i.jsx)(u,{formType:n,formCount:e.formCount,formid:g+1,addCount:e.addCount}));return Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"columns is-variable",children:p})})})}var g=function(){var e=Object(c.useState)("Players"),t=Object(j.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)("typeButton2"),r=Object(j.a)(a,2),l=r[0],o=r[1],h=Object(c.useState)("typeButton"),b=Object(j.a)(h,2),O=b[0],x=b[1],m=Object(c.useState)(1),u=Object(j.a)(m,2),g=u[0],f=u[1],N=Object(c.useState)(0),v=Object(j.a)(N,2),y=v[0],P=v[1],C=Object(c.useRef)();return Object(c.useEffect)((function(){C.current&&C.current.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})})),"Players"===s&&"typeButton2"!==l?(o("typeButton2"),x("typeButton")):"Teams"===s&&"typeButton2"!==O&&(x("typeButton2"),o("typeButton")),Object(i.jsxs)("div",{ref:C,children:[Object(i.jsx)("div",{className:"section headerSection",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("h1",{children:["NHL Comparison Tool",Object(i.jsx)("img",{className:"headPic",src:"data:image/png;base64,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",alt:"headPic"})]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("h2",{children:["Compare: ",Object(i.jsx)("button",{className:l,onClick:function(){n("Players"),f(1)},children:Object(i.jsx)("h2",{children:"Players"})})," ",Object(i.jsx)("button",{className:O,onClick:function(){n("Teams"),f(1)},children:Object(i.jsx)("h2",{children:"Teams"})})]}),Object(i.jsx)(d,{formType:s,updateType:n,resetCount:y,updateReset:P,addCount:f})]})}),Object(i.jsx)(p,{type:s,formCount:g,addCount:f,resetCount:y})]})},f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),f()}},[[20,1,2]]]);
//# sourceMappingURL=main.ef15f47f.chunk.js.map