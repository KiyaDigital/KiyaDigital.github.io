(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,a,t){e.exports=t(87)},72:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(15),r=t.n(c),o=t(35),s=t(16),i=t(46),m=t(36),u=t(47),d=t(37),E=t.n(d),g=t(105),h=t(109),p=t(108),f=t(106),N=t(107),w=t(110),b=(t(72),"".concat("0f7e5c9167768f6bb0a6e09e335ce464da7cb5e7008b989f0057266c26342424a4d8d3e5")),v=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={data:[],error:null,isLoaded:!1},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),E.a.get("https://cors-anywhere.herokuapp.com/https://lamppoststudios.api-us1.com/api/3/contacts",{headers:{"Api-Token":b}}).then(function(a){200===a.status&&null!=a?e.setState({data:a.data.contacts}):console.log("problem")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.data;return l.a.createElement("div",{className:"wrapper"},l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement(N.a,null,l.a.createElement(p.a,{align:"left",className:"name"},"Full Name"),l.a.createElement(p.a,{align:"left",className:"email"},"Email"),l.a.createElement(p.a,{align:"center",className:"phone"},"Phone"),l.a.createElement(p.a,{align:"center",className:"org"},"Organization"),l.a.createElement(p.a,{align:"center",className:"dateCreated"},"Date Ceated"),l.a.createElement(p.a,{align:"center",className:"sendEmail"}))),l.a.createElement(h.a,null,e.map(function(e){return l.a.createElement(N.a,{key:e.id},l.a.createElement(p.a,{align:"left",className:"name"},e.firstName," ",e.lastName),l.a.createElement(p.a,{align:"left",className:"email"},e.email),l.a.createElement(p.a,{align:"center",className:"phone"},e.phone),l.a.createElement(p.a,{align:"center",className:"org"},e.orgname),l.a.createElement(p.a,{align:"center",className:"dateCreated"},e.cdate),l.a.createElement(p.a,{align:"center",className:"sendEmail"},l.a.createElement(w.a,{variant:"outlined",className:"button"}," Email")))}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.0c44cf0a.chunk.js.map