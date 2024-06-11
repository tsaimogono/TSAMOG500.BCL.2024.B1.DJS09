(()=>{"use strict";var e={1:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,r){this.src=e,this.title=t,this.reviews=r}},375:(e,t)=>{var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.LoyaltyUser=t.Permissions=void 0,function(e){e.ADMIN="ADMIN",e.READ_ONLY="READ_ONLY"}(r||(t.Permissions=r={})),function(e){e.GOLD_USER="GOLD_USER",e.SILVER_USER="SILVER_USER",e.BRONZE_USER="BRONZE_USER"}(o||(t.LoyaltyUser=o={}))},73:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(488),a=r(375),n=o(r(1)),s=document.querySelector(".properties"),l=document.querySelector(".footer"),c=document.querySelector(".reviews"),u=document.querySelector(".container"),d=document.querySelector("button"),m=[{name:"Sheia",stars:5,loyaltyUser:a.LoyaltyUser.GOLD_USER,date:"01-04-2021"},{name:"Andrzej",stars:3,loyaltyUser:a.LoyaltyUser.BRONZE_USER,date:"28-03-2021"},{name:"Omar",stars:4,loyaltyUser:a.LoyaltyUser.SILVER_USER,date:"27-03-2021"}],y={firstName:"Bobby",lastName:"Brown",Permissions:a.Permissions.ADMIN,isReturning:!0,age:35,stayedAt:["florida-home","oman-flat","tokyo-bungalow"]},p=[{image:"./images/colombia-property.jpg",title:"Colombian Shack",price:45,location:{firstLine:"shack 37",city:"Bogota",code:45632,country:"Colombia"},contact:[0x662d15b891a9,"marywinkle@gmail.com"],isAvailable:!0},{image:"./images/poland-property.jpg",title:"Polish Cottage",price:30,location:{firstLine:"no 23",city:"Gdansk",code:343903,country:"Poland"},contact:[0x49cbdd420724e,"garydavis@hotmail.com"],isAvailable:!1},{image:"./images/london-property.jpg",title:"London Flat",price:25,location:{firstLine:"flat 15",city:"London",code:35433,country:"United Kingdom"},contact:[34829374892553,"andyluger@aol.com"],isAvailable:!0},{image:"images/malaysian-hotel.jpeg",title:"Malia Hotel",price:35,location:{firstLine:"Room 4",city:"Malia",code:45334,country:"Malaysia"},contact:[60349822083,"lee34@gmail.com"],isAvailable:!1}];(0,i.showReviewTotal)(m.length,m[0].name,m[0].loyaltyUser),(0,i.populateUser)(y.isReturning,y.firstName);for(var v=0;v<p.length;v++){var g=document.createElement("div");g.classList.add("card"),g.innerHTML=p[v].title;var f=document.createElement("img");f.setAttribute("src",p[v].image),g.appendChild(f),(0,i.showDetails)(y.Permissions,g,p[v].price),s.appendChild(g)}var L=0;d.addEventListener("click",(function(){return function(e){if(!L){L++;for(var t=(0,i.getTopTwoReviews)(e),r=0;r<t.length;r++){var o=document.createElement("div");o.classList.add("review-card"),o.innerHTML=t[r].stars+" stars from "+t[r].name,c.appendChild(o)}u.removeChild(d)}}(m)}));var R=["Rustenburg","15:30",19];l.innerHTML=R[0]+" "+R[1]+" "+R[2]+"°";var h=new n.default("images/italian-property.jpg","Italian House",[{name:"Olive",stars:5,loyaltyUser:a.LoyaltyUser.GOLD_USER,date:"12-04-2021"}]),S=document.querySelector(".main-image"),U=document.createElement("img");U.setAttribute("src",h.src),S.appendChild(U)},488:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTopTwoReviews=t.makeMultiple=t.showDetails=t.populateUser=t.showReviewTotal=void 0;var o=document.querySelector("#reviews"),i=document.querySelector("#returning-user"),a=document.querySelector("#user"),n=r(375);function s(e){return e>1||0==e?"s":""}t.showReviewTotal=function(e,t,r){var i=n.LoyaltyUser.GOLD_USER?"⭐":"";o.innerHTML=e.toString()+" Review"+s(e)+" | last review by"+t+" "+i},t.populateUser=function(e,t){1==e&&(i.innerHTML="back"),a.innerHTML=t},t.showDetails=function(e,t,r){if(e){var o=document.createElement("div");o.innerHTML=r.toString()+"/night",t.appendChild(o)}},t.makeMultiple=s,t.getTopTwoReviews=function(e){return e.sort((function(e,t){return t.stars-e.stars})).slice(0,2)}}},t={};!function r(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}(73)})();
//# sourceMappingURL=index.pack.js.map