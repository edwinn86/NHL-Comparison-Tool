(this["webpackJsonphockey-app"]=this["webpackJsonphockey-app"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var A=s(1),c=s.n(A),n=s(7),a=s.n(n),r=(s(13),s(2)),j=(s(14),s(15),s(0));var i=function(e){return console.log(e.formType),"playerCards"===e.formType||"teamCards"===e.formType?Object(j.jsx)("button",{id:"submitButton",onClick:function(){e.updateType("playerForms"),e.addCount(1),e.updateReset(e.resetCount+1)},children:"Reset"}):"playerForms"===e.formType?Object(j.jsx)("button",{id:"submitButton",onClick:function(){e.updateType("playerCards")},children:"Submit Players"}):Object(j.jsx)("button",{id:"submitButton",onClick:function(){e.updateType("teamCards")},children:"Submit Teams "})},l=s(6),d=s.n(l),o=s(8),h=s(4);var b=function(e){var t=Object(A.useState)({}),s=Object(r.a)(t,2),c=s[0],n=s[1];if(0===Object.keys(c).length){var a=e.season.replace(/-/g,"");fetch("https://statsapi.web.nhl.com/api/v1/people/".concat(e.selectedPlayer.person.id,"/stats?stats=statsSingleSeason&season=").concat(a),{method:"GET"}).then((function(e){return e.json()})).then((function(t){if("Goalie"===e.selectedPlayer.position.name){console.log(t);var s={playerID:e.selectedPlayer.person.id,gamesPlayed:t.stats[0].splits[0].stat.games,savePct:(Math.round(100*t.stats[0].splits[0].stat.evenStrengthSavePercentage)/100).toFixed(2),GAA:(Math.round(100*t.stats[0].splits[0].stat.goalAgainstAverage)/100).toFixed(2),shutouts:t.stats[0].splits[0].stat.shutouts,shotsAgainst:t.stats[0].splits[0].stat.shotsAgainst,wins:t.stats[0].splits[0].stat.wins};n(s)}else{var A={playerID:e.selectedPlayer.person.id,gamesPlayed:t.stats[0].splits[0].stat.games,points:t.stats[0].splits[0].stat.points,goals:t.stats[0].splits[0].stat.goals,assists:t.stats[0].splits[0].stat.assists,plusMinus:t.stats[0].splits[0].stat.plusMinus,PPG:t.stats[0].splits[0].stat.powerPlayGoals,PIM:t.stats[0].splits[0].stat.penaltyMinutes,shots:t.stats[0].splits[0].stat.shots,shotPct:t.stats[0].splits[0].stat.shotPct};n(A)}}))}return"Goalie"===e.selectedPlayer.position.name?Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{id:"card",children:[Object(j.jsx)("div",{id:"card_head",children:Object(j.jsxs)("div",{className:"centerHead",children:[Object(j.jsx)("h1",{className:"cardHead",children:e.selectedPlayer.person.fullName}),Object(j.jsx)(h.a,{className:"playerFace",src:"http://nhl.bamcontent.com/images/headshots/current/168x168/".concat(e.selectedPlayer.person.id,".jpg"),loader:"https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"}),Object(j.jsx)("h2",{children:e.selectedPlayer.position.name})]})}),Object(j.jsxs)("table",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"goalieData",children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:"Games Played:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.gamesPlayed})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"goalieData",children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:"Save%:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.savePct})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"goalieData",children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:"GAA: "})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.GAA})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"goalieData",children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsxs)("strong",{className:"right",children:[" ",Object(j.jsx)("p",{children:"Shutouts: "})]})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.shutouts})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"goalieData",children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:"Shots Against:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.shotsAgainst})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"goalieData",children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:"Wins:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.wins})})})]})]})]})}):Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{id:"card",children:[Object(j.jsx)("div",{id:"card_head",children:Object(j.jsxs)("div",{className:"centerHead",children:[Object(j.jsx)("h1",{className:"cardHead",children:e.selectedPlayer.person.fullName}),Object(j.jsx)(h.a,{className:"playerFace",src:"http://nhl.bamcontent.com/images/headshots/current/168x168/".concat(e.selectedPlayer.person.id,".jpg"),loader:"https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"}),Object(j.jsx)("h2",{children:e.selectedPlayer.position.name})]})}),Object(j.jsxs)("table",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:"Games Played:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.gamesPlayed})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:" Points:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.points})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:" Goals: "})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.goals})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsxs)("strong",{className:"right",children:[" ",Object(j.jsx)("p",{children:"Assists: "})]})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.assists})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:" +/-"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.plusMinus})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:" PPG:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.PPG})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:" PIM:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.PIM})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:" Shots:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.shots})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:" Shot%:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.shotPct})})})]})]})]})})};var O=function(e){var t=Object(A.useState)(""),s=Object(r.a)(t,2),c=s[0],n=s[1],a=Object(A.useState)([]),i=Object(r.a)(a,2),l=i[0],h=i[1],O=Object(A.useState)(null),x=Object(r.a)(O,2),m=x[0],p=x[1],u=Object(A.useState)([]),g=Object(r.a)(u,2),N=g[0],f=g[1],v=Object(A.useState)(null),C=Object(r.a)(v,2),P=C[0],y=C[1],S=Object(A.useState)(e.resetCount),F=Object(r.a)(S,2),T=F[0],L=F[1],w=e.formid;return e.resetCount>T&&(p(null),y(null),f([]),h([]),n(""),L(e.resetCount)),0===c.length&&n("2021-2022"),Object(A.useEffect)((function(){var e=c.replace(/-/g,"");fetch("https://statsapi.web.nhl.com/api/v1/teams?season=".concat(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){h(e.teams.sort((function(e,t){var s=e.name.toLowerCase(),A=t.name.toLowerCase();return s<A?-1:s>A?1:0})))}))}),[c]),Object(A.useEffect)((function(){if("teamForms"!==e.formType){var t=l.find((function(e){return e.name===m}));void 0===t&&(t={id:24});var s=c.replace(/-/g,"");!function(){A.apply(this,arguments)}()}function A(){return(A=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://statsapi.web.nhl.com/api/v1/teams/".concat(t.id,"?expand=team.roster&season=").concat(s),{method:"GET"}).then((function(e){return e.json()})).then((function(e){var t=e.teams[0].roster.roster.sort((function(e,t){var s=e.person.fullName.toLowerCase(),A=t.person.fullName.toLowerCase();return s<A?-1:s>A?1:0}));f(t),y(t[0])}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}),[m,c,l]),w>e.formCount?Object(j.jsx)("div",{className:"column is-3",children:Object(j.jsx)("p",{className:"addClick",onClick:function(){e.addCount(e.formCount+1)},children:"+"})}):"playerForms"===e.formType?Object(j.jsx)("div",{className:"column is-3",children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("h2",{children:["Player ",w]}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Season: "}),Object(j.jsxs)("select",{value:c,onChange:function(e){return n(e.target.value)},name:"selectList",id:"selectList",children:[Object(j.jsx)("option",{value:"2021-2022",children:"2021-2022"}),Object(j.jsx)("option",{value:"2020-2021",children:"2020-2021"}),Object(j.jsx)("option",{value:"2019-2020",children:"2019-2020"}),Object(j.jsx)("option",{value:"2018-2019",children:"2018-2019"}),Object(j.jsx)("option",{value:"2017-2018",children:"2017-2018"}),Object(j.jsx)("option",{value:"2016-2017",children:"2016-2017"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Team: "}),Object(j.jsx)("select",{value:m,onChange:function(e){return p(e.target.value)},name:"selectList",id:"selectList",children:l.map((function(e){return Object(j.jsx)("option",{children:e.name})}))}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Player: "}),Object(j.jsx)("select",{value:null===P?"None":P.person.fullName,onChange:function(e){return y(N.find((function(t){return t.person.fullName===e.target.value})))},name:"selectList",id:"selectList",children:N.map((function(e){return Object(j.jsx)("option",{children:e.person.fullName})}))})]})}):Object(j.jsx)(b,{season:c,selectedPlayer:P,formid:w})};var x=function(e){var t=Object(A.useState)({}),s=Object(r.a)(t,2),c=s[0],n=s[1];if(0===Object.keys(c).length||c.id!==e.selectedTeam.id){var a=e.season.replace(/-/g,"");fetch("https://statsapi.web.nhl.com/api/v1/teams/".concat(e.selectedTeam.id,"/stats?stats=statsSingleSeason&season=").concat(a),{method:"GET"}).then((function(e){return e.json()})).then((function(t){var s={id:e.selectedTeam.id,points:t.stats[0].splits[0].stat.pts,wins:t.stats[0].splits[0].stat.wins,losses:t.stats[0].splits[0].stat.losses,OTL:t.stats[0].splits[0].stat.ot,PP:(Math.round(100*t.stats[0].splits[0].stat.powerPlayPercentage)/100).toFixed(2),PK:(Math.round(100*t.stats[0].splits[0].stat.penaltyKillPercentage)/100).toFixed(2),shots:(Math.round(100*t.stats[0].splits[0].stat.shotsPerGame)/100).toFixed(2),shotsAgainst:(Math.round(100*t.stats[0].splits[0].stat.shotsAllowed)/100).toFixed(2)};n(s)}))}return Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{id:"card",children:[Object(j.jsxs)("div",{className:"card_head_team",children:[Object(j.jsx)("h1",{className:"cardHead",children:e.selectedTeam.name}),Object(j.jsx)(h.a,{className:"teamLogo",src:"\n                https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/".concat(e.selectedTeam.id,".svg"),loader:"https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"})]}),Object(j.jsxs)("table",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:"Points:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.points})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:"Wins:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.wins})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:"Losses:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.losses})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:"OTL:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.OTL})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:"PP%:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.PP})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:"PK%:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.PK})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:"Shots:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.shots})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:"statName",children:Object(j.jsx)("strong",{className:"right",children:Object(j.jsx)("p",{children:"Shots Against:"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:c.shotsAgainst})})})]})]})]})})};var m=function(e){var t=Object(A.useState)(""),s=Object(r.a)(t,2),c=s[0],n=s[1],a=Object(A.useState)([]),i=Object(r.a)(a,2),l=i[0],d=i[1],o=Object(A.useState)(null),h=Object(r.a)(o,2),b=h[0],O=h[1],m=e.formid;return 0===c.length&&n("2021-2022"),Object(A.useEffect)((function(){var e=c.replace(/-/g,"");fetch("https://statsapi.web.nhl.com/api/v1/teams?season=".concat(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e),d(e.teams.sort((function(e,t){var s=e.name.toLowerCase(),A=t.name.toLowerCase();return s<A?-1:s>A?1:0})))}))}),[c]),l.length>0&&null===b&&O(l[0]),e.formid>e.formCount?Object(j.jsx)("div",{className:"column is-3",children:Object(j.jsx)("p",{className:"addClick",onClick:function(){e.addCount(e.formCount+1)},children:"+"})}):"teamForms"===e.formType?Object(j.jsx)("div",{className:"column is-3",children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("h2",{children:["Team ",m]}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Season: "}),Object(j.jsxs)("select",{value:c,onChange:function(e){return n(e.target.value)},name:"selectList",id:"selectList",children:[Object(j.jsx)("option",{value:"2021-2022",children:"2021-2022"}),Object(j.jsx)("option",{value:"2020-2021",children:"2020-2021"}),Object(j.jsx)("option",{value:"2019-2020",children:"2019-2020"}),Object(j.jsx)("option",{value:"2018-2019",children:"2018-2019"}),Object(j.jsx)("option",{value:"2017-2018",children:"2017-2018"}),Object(j.jsx)("option",{value:"2016-2017",children:"2016-2017"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Team: "}),Object(j.jsx)("select",{value:null===b?"None":b.name,onChange:function(e){return O(l.find((function(t){return t.name===e.target.value})))},name:"selectList",id:"selectList",children:l.map((function(e){return Object(j.jsx)("option",{children:e.name})}))})]})}):"teamCards"===e.formType?Object(j.jsx)(x,{season:c,selectedTeam:b}):void 0};var p=function(e){var t=Object(A.useState)(e.type),s=Object(r.a)(t,2),c=s[0],n=s[1];if(c!==e.type&&n(e.type),"playerForms"===c){for(var a=[],i=0;i<=e.formCount&&!(i>3);i++)a.push(Object(j.jsx)(O,{formType:c,formCount:e.formCount,formid:i+1,addCount:e.addCount,resetCount:e.resetCount}));return Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"columns is-variable",children:a})})})}if("playerCards"===c){for(var l=[],d=0;d<e.formCount;d++)l.push(Object(j.jsx)(O,{formType:c,formCount:e.formCount,formid:d+1,addCount:e.addCount}));return Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"columns is-variable",children:l})})})}if("teamForms"===c){for(var o=[],h=0;h<=e.formCount&&!(h>3);h++)o.push(Object(j.jsx)(m,{formType:c,formCount:e.formCount,formid:h+1,addCount:e.addCount}));return Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"columns is-variable",children:o})})})}for(var b=[],x=0;x<e.formCount;x++)b.push(Object(j.jsx)(m,{formType:c,formCount:e.formCount,formid:x+1,addCount:e.addCount}));return Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"columns is-variable",children:b})})})};var u=function(){var e=Object(A.useState)("playerForms"),t=Object(r.a)(e,2),s=t[0],c=t[1],n=Object(A.useState)("selected"),a=Object(r.a)(n,2),l=a[0],d=a[1],o=Object(A.useState)("notSelected"),h=Object(r.a)(o,2),b=h[0],O=h[1],x=Object(A.useState)(1),m=Object(r.a)(x,2),u=m[0],g=m[1],N=Object(A.useState)(0),f=Object(r.a)(N,2),v=f[0],C=f[1],P=Object(A.useRef)();return Object(A.useEffect)((function(){P.current&&P.current.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})})),"playerForms"===s&&"selected"!==l?(d("selected"),O("notSelected")):"teamForms"===s&&"selected"!==b&&(O("selected"),d("notSelected")),Object(j.jsxs)("div",{ref:P,id:"mainDiv",children:[Object(j.jsx)("div",{className:"section headerSection",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("h1",{id:"title",children:["NHL Comparison Tool",Object(j.jsx)("img",{className:"headPic",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACyCAMAAADRVGVaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAALoUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxZ0oYAAAD3dFJOUwD5Cu8C/fv+AQbn/PcDBEj2sDXr1RgOoPEh+hCPOiLdC1DhFBmm4PMHBT4NiwlwGvXLE37lK9DetEkpG9Ot7PhEd1LWNLMW7SfPgDHJZ9/kRiPwIJrDDB847rzovp8SxvQvqr/ygso2UcIVKmaejrZ6x5mMDwgcsS2kW3TpZX+TQFxjTjLBMBHMl7JVYj0siqwuXZXU2YVBaMR2mGklS5ZTvXid0a5z45FF3IdqXj+p0iSBwJDISmR9a22vksV7F2EeV3xUWKWit1+7dahPtaGJTG+I17p5WZxyPNpsM5tuKB2nlIRD2CZHhqNgzTfiVo24O+pag6v4lAWyAAAJFUlEQVR42u1cd1wURxQe4Lg7OogICAiigIAUlV4EFRHsAhZKxIoao4kx9t6NvcXeezTN2GN6MV3Te++9J/Nv5OYN3HFb73Zvh99vv7/gdt573+3tm/K9mUVIhw4dOnTo0KFDhw4dOnTo0KGDFwf8XBMnz18hR/5LjG+4hPGmsLV5ijhaU4cxPuwCxt1jMU7oqISnnFuM8YRM1Rl73WgMZMx13lM+tmDw7WpTvkAC3aaAq7uJqyOJ6jJeZrKEKXBX4gcbTjjPVJVxiZslSPAwRbyVxhLOL6jIOD/bEsJzhUL+RhVZ/AWOVY2x/xRyVxYr5nE5ec6iu6tFeTthfKeCQ9a9yru0xh3QK7VTss8cSJyeVoXxxnSL84QBinpNyyCcH1SBcWdv4vt5hf22IZ1Q4ADFGbvXE8bTFfe8mzjOVjwFj6k3VB0irmu8lHWbStwO6azCI9dlBnF+QVGvS40Wp25tVElsmiYvK+izMpj4fEClDn9pe4t730nKpV4WYXxMtXF1PwmQEaKUwzjisJu7apRRKAkxQ6EUfJW4Cx6p4oQrBUbBuxXxFkBSzxSg6rQ2rSfhfFUBXx36EV9HVV7ufAud0i6nPY0oIIznmNVeop0kgRaGO+uokDhq2w6pjusk1NoY59z0IG4S8tRnjNwfIcHinPLS0ZN4edYlog5Nm15O+Jjqodb0jRtvknWV5/0Oe4hoC3MsfxdRRv1JQI8ODtob5sD0LcRVjJE5CLJ9hGP2E4m5MQm5Dvd8R4JeMzhi3Zs8WHg/ciWmTiBR+ztgm5mgnPomB89DCsoXVyPuI4zLu7iYMppJAofJVXH9c4hh7UhXM0aGP0noPhHy7HZiV0zfuNE9GiQkWSk4H1LvSaQFPg0k0TfLsNk6htiMM2tCGS2D37i3ZIvR8cSkoB3SCJGEQPpcqan3CjHoF64VY5QIsnD8Gmntp5Pmnq8j7XD7EELiXUnq1DZNU48C1EXcVULb1ZCuOWZNKaNBhAZeJtoyJNZ1Kydh7CNEAsVEtcQaWDmd05ox6gLSRrZILRNqF6bDSHvk1xIy5wVT8GdIvR8RCwB1EW8XSlNSh8N9DUxQptIG3sDbovMQVlKPYh6kYBTf8w41ZY9hrDBGXg2E0qmnuK9/BqNeLmIHVNrYw6nigiyN70IsYRekYBXHtSgYIQvNTFFGe+FOLrK7MnshpF4MYgyQgm5/tfjcvRtzqUeRApUa79m2n99kMPUoKkHgHzjL+tO3mEw9igAfe0ml2KjtWk8Md8EdTW365Bzc+R0xiFGcAHmQFlLagSbrEc4qYxQBAv9CogQZHobUG4rYRYcK0Nss5VIohzgl96sPWgK5fuvvySa2U4+iF9zZV9HcMNZTD2CGmoLPCyDZVYcj1pEM8jHAJxexj7wx1pSPotaA9aZmxoXmVkGZqouNevk9rYMxShwPjD3KWglj5F9DKU9tLZSbH4zo0a2D8YNW6ZdjaA2MS4qsO7murYBxabzNUILnM8/YaxUonMthFFRwI6BKqIKb+zbKgzJ3bCe2GV+G1Bvvh9BBWAtO8WKZMdVth1juLOw0wV8zzHj239h6a68Z9pXhp5llHJPVQuWKOU7+L2rDKGPza8B4WvNaEFYm3mlsUr4CjLvNspdjujGZgm8Cu2qbvSF0lT2PQcarYbOe50Hbp2ULcF7AHONOUDvFz7VcC/YBCamYtXG6DvNVyYZBUaIijy3Kp4FxPMfofAke8o+ZWlVtgHHarYTr6gL4PjcYmjyP8gVSu7mvxzE3eaZnZHj3F9J6Cf6HEcbuUDvFF3mPhzwDh3R8S9gap4WOhyTBFC8+hAXKtNxgEtyB/Tm0amBg5M4FRVnsdC+cQMeHNGdM52qiy3+vJ3jrr67FiF+w1NOWadCvuI3SlLHhGjBOl3CmdZQbC5PniVStWC6lNd2g1jBLO8Z0Uz3eJ6097OLCL2qmOm+FTfW4XmLP5VWvcVmtNBsIhM2WPLTDCXTPAE0Yex2hY4iMIwRRMIHy+F4Lykto6j0qxwreeIDbRrieMY0td7ceHQVf8nM14yQ3gXWI4PM0Q6PJcyVs9MS+K+Wadh+sifLsvhYLr0OEsDIdRkyXyl50ZeTYMXU6CsY6PnnOP32i62E5jySVgHBWjEMBqSIq5wh6SvGVm0F0Sh5g0XlMxzdPkpj7dNMFrnBwF0Bphp3gKJI6C+pIh77E0s8Ut28qxcT/kSSB9VQ6RXb8LUPFIG3gtyQ0zuxR3lyWazzkG+FtU0DyrkoS6TCTz9C2Zx1Phq7gwjhUpOHcndG2Fa7JCD2AW6LnvPnJ/D7819F24504K9uFygTVAvsqzZPe6GPHbhVCt2EO+AYt4pmH+z9M25wqdabPyaS7NqJ53piSEnDIm4tae4T+w9wwlUeusJ8HrOlLrxd95Fw/eZU6Gmy/sDJs/fBOXx5eRoT+xfzwLJ82KKpp+7w5JCAyuOnaY87KH01f3vPEy5VNWW8om7x4TrAAp3cQWo3FMOGd8zVBOU/0SbD+MA45i5AMK3eBsQV71gW9NPw3oxibxpx/FzuAHYKvOkn5Imlox4MPrT4gOD4NNTkQuKhxKBhrlG9YIbCdJWr7cZ/mu1e3M4q3q5/pAOW3bZfJkiFwjnLueLvWZ/hWTSkFsiOfId2v33C5ht/wMn66Pdc3vMzTelOgzMBNU93Re+QZBvH+1D9wP2QefId2lskLnN48Vo5YJ8cwiz/1BvKY5CryOAdvtO4kU6X/RMEC0zcPHhve91XRd0BIwSv5LebMoRI7Dp9LAv1WTx6jVH4dUmoKtl1vLzGFfLJKQkdp2ibU1Q6WTRk9ky0l7QqLeTSxL+8Yd0rEuIfgiBbNYyU0upf1FPlZsyJfF64Yli1fctGN117kfRg/8ZgJrgUGVPCG8w7a2yZZ2mx248ktGVwuxIShA2GckeuEX4XxazWHzZhV058Nl6mQPpXU66v6Wpt5n3i1/6GFHPPBaWLvXltpMzOunvLi4vfHOl4GSi7pPei5yNDQ0Kqjk6W8z3j0ew22j1Xtvk3iVn4DNpz9IDT08Ymp66M0EOvQrLG/7938eGhc0Jaq/tsy/ZAOHTp06NChQ4cOHTp06NChg0H8D//phOW2tHSPAAAAAElFTkSuQmCC",alt:"headPic"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"headerOptions",children:[Object(j.jsxs)("h2",{children:["Compare: ",Object(j.jsx)("button",{className:l,onClick:function(){c("playerForms"),g(1)},children:Object(j.jsx)("h2",{children:"Players"})})," ",Object(j.jsx)("button",{className:b,onClick:function(){c("teamForms"),g(1)},children:Object(j.jsx)("h2",{children:"Teams"})})]}),Object(j.jsx)(i,{formType:s,updateType:c,resetCount:v,updateReset:C,addCount:g})]})]})}),Object(j.jsx)(p,{type:s,formCount:u,addCount:g,resetCount:v})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(t){var s=t.getCLS,A=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),A(e),c(e),n(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),g()}},[[20,1,2]]]);
//# sourceMappingURL=main.c05c238d.chunk.js.map