(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{2956:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return D}});var n=i(4942),a=i(9748),r=i(5697),o=i.n(r);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=(0,a.forwardRef)((function(e,t){var i=e.color,n=void 0===i?"currentColor":i,r=e.size,o=void 0===r?24:r,c=l(e,["color","size"]);return a.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),a.default.createElement("polyline",{points:"6 9 6 2 18 2 18 9"}),a.default.createElement("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),a.default.createElement("rect",{x:"6",y:"14",width:"12",height:"8"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="Printer";var d=c,h=i(8813),m=i(8098),p=i(2462),u=i(8311);function g(e){var t=e.data;return(0,u.BX)("div",{className:"header",style:{display:"flex"},children:[(0,u.BX)("div",{className:"left",children:[(0,u.tZ)("h1",{style:{marginTop:0,marginBottom:0,lineHeight:1},children:t.name}),(0,u.tZ)("h2",{style:{marginTop:"0.625em"},children:t.label})]}),(0,u.BX)("div",{className:"right",style:{marginLeft:"auto"},children:[(0,u.BX)("div",{children:["Email: ",(0,u.tZ)("a",{href:"mailto:".concat(t.email),children:t.email})]}),(0,u.BX)("div",{children:["Phone: ",(0,u.tZ)("a",{href:"tel:".concat(t.phone),children:t.phone})]}),(0,u.BX)("div",{children:["Website: ",(0,u.tZ)("a",{href:"".concat(t.website),children:t.website})]}),t.profiles&&t.profiles.map((function(e){return(0,u.BX)("div",{children:[e.network,": ",(0,u.tZ)("a",{href:"".concat(e.url),children:e.url})]},e.network)}))]})]})}var f=i(584);function w(e){var t=e.data,i=t.name||t.title||t.organization||t.institution||t.company,n=t.url||t.website,a=t.highlights||t.keywords,r="MMMM y";return(0,u.BX)("div",{className:"dateItem",style:{paddingTop:"1.125em"},children:[(0,u.BX)("div",{style:{display:"flex",fontWeight:"normal"},children:[n?(0,u.tZ)("a",{href:n,children:i}):(0,u.tZ)("div",{children:i}),(0,u.tZ)("div",{style:{flex:1}}),t.position&&(0,u.tZ)("div",{children:t.position})]}),t.startDate&&(0,u.BX)("div",{style:{color:m.wL.Charcoal,fontSize:"0.9em",padding:"0.125em 0 .375em"},children:[(0,f.Z)(new Date(t.startDate),r)," - ",t.endDate?(0,f.Z)(new Date(t.endDate),r):"Present"]}),a&&(0,u.tZ)("ul",{className:t.keywords&&"commas",style:{margin:0,paddingLeft:"1.25em",listStyle:"circle"},children:a.map((function(e){return(0,u.tZ)("li",{children:e},e)}))})]})}function b(e){return(0,u.BX)("div",{className:"section",children:[(0,u.tZ)("h3",{style:{marginBottom:0,fontSize:"1.4em",fontWeight:"normal",borderBottom:"1px solid #ccc",paddingBottom:4},children:e.title}),e.data.map((function(e){var t=e.name||e.title||e.organization||e.institution||e.company;return(0,u.tZ)(w,{data:e},t)}))]})}function y(e){return(0,u.BX)("div",{className:"resume",style:{fontFamily:"'Open Sans', Arial, sans-serif",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,u.tZ)("div",{className:"buttons",style:{display:"flex",justifyContent:"flex-end",width:"100%",maxWidth:1080,marginBottom:20},children:(0,u.tZ)(p.z,{onClick:function(){return window.print()},title:"Print Resume",children:(0,u.tZ)(d,{})})}),(0,u.BX)("div",{className:"inner",style:{display:"flex",flexDirection:"column",width:"100%",maxWidth:1080,background:m.wL.White,color:m.wL.Black,textShadow:"none",margin:10,padding:40,boxSizing:"border-box",border:"1px solid ".concat(m.wL.Black),borderRadius:8},children:[(0,u.tZ)(g,{data:e.basics}),(0,u.BX)("div",{className:"main",style:{display:"flex"},children:[(0,u.BX)("div",{className:"left",style:{width:"35%"},children:[(0,u.tZ)(b,{title:"Education",data:e.education}),(0,u.tZ)(b,{title:"Projects",data:e.projects}),(0,u.tZ)(b,{title:"Technical Skills",data:e.skills})]}),(0,u.BX)("div",{className:"right",style:{width:"65%",paddingLeft:"3.125em"},children:[(0,u.tZ)(b,{title:"Employment",data:e.work}),(0,u.tZ)(b,{title:"Volunteering",data:e.volunteer})]})]})]})]})}(0,h.Gk)(".dateItem .commas",{paddingLeft:"0 !important",$nest:{li:{display:"inline",$nest:{"&::after":{content:'", "'},"&:last-child::after":{content:"''"}}}}}),(0,h.Om)("@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');"),(0,h.Gk)(".resume h1, .resume h2, .resume h3, .resume",{fontWeight:300}),(0,h.Gk)("@media print",{".resume .inner":{padding:"0 !important",border:"none !important",background:"none !important",fontSize:"0.8rem"},".resume .buttons":{display:"none !important"}}),(0,h.Gk)("@media screen and (max-width: 800px)",{".resume .main, .resume .header":{flexWrap:"wrap"},".resume .left, .resume .right":{width:"100% !important"},".resume .right":{paddingLeft:"0 !important"}});var v=JSON.parse('{"basics":{"name":"Andrew McOlash","label":"Software Engineer","picture":"","email":"amcolash@gmail.com","phone":"(414) 745-2657","website":"https://amcolash.com","summary":"Curious, creative and passionate software engineer. Seeking to leverage skills by solving problems with code.","location":{"address":"","postalCode":"","city":"Seattle","countryCode":"US","region":"Washington"},"profiles":[{"network":"Github","username":"amcolash","url":"https://github.com/amcolash"}]},"work":[{"company":"Tableau Software","position":"Senior Software Engineer","website":"https://tableau.com","startDate":"2018-05-21","endDate":"","summary":"","highlights":[]},{"company":"PerBlue","position":"Software Engineer II","website":"https://perblue.com","startDate":"2015-06-01","endDate":"2018-04-23","summary":"","highlights":["Collaborate with a small team to develop software infrastructure for the mobile games \\"Disney Heroes: Battle Mode\\", \\"Portal Quest\\" and \\"DragonSoul\\"","Implement new content, combat logic, mechanics, asset management system and rendering pipline","Create tooling for both the art and quality assurance teams to improve their workflows","Refactor large sections of the codebase to make development of new characters and mechanics easier and faster"]},{"company":"Survey of the Heath of Wisconsin (SHOW)","position":"Web Developer","website":"http://www.med.wisc.edu/show/survey-of-the-health-of-wisconsin/35828","startDate":"2014-11-01","endDate":"2015-05-01","summary":"Drafting and development for a new website/webapp that displays health statistics and public health information. This portal provides a simple way to quickly see public health information collected from SHOW.","highlights":["Developed a public health statistics web portal from scratch","Used web frameworks including Handlebars and HighCharts to deliver fast, reusable and mobile responsive pages","Provided quick iterations of the website to tailor specifically to feature requests"]},{"company":"Liberty Mutual","position":"Web Development Internship","website":"http://lmig.com","startDate":"2014-05-01","endDate":"2014-08-01","summary":"Development of mobile responsive internal web applications. Worked on creating a simplified process for engaging the Mobile team using external APIs.","highlights":["Developed mobile responsive internal web applications","Utilized web technologies including EmberJS, Angular, NodeJS and Grunt","Closely worked with MVC patterns and architeched internal APIs"]}],"volunteer":[{"organization":"TEALS","position":"High School Coding Instructor","website":"https://www.microsoft.com/en-us/teals","startDate":"2019-08-01","endDate":"2020-03-01","summary":"","highlights":["Teach high school students about coding in 2 different sections: block based coding and python","Co-taught with 4 other volunteers for 1st semester and a portion of the 2nd semester before COVID-19"]},{"organization":"Literacy Network","position":"Math Tutoring","website":"http://www.litnetwork.org/","startDate":"2017-08-01","endDate":"2018-04-01","summary":"","highlights":["Provide 1:1 tutoring sessions for GED students in the subjects of algebra, geometry and statistics","Personalize individual learning plans for each student","Utilize different teaching techniques based on student needs"]},{"organization":"Kids Get IT","position":"Teaching Assistant","website":"","startDate":"2016-05-01","endDate":"2016-11-01","summary":"","highlights":["Instruct and mentor children to teach them about technology","Assist children in making music with SonicPi - an open souce live coding music synthesizer","Help kids learn and write real code with the service Bitsbox"]}],"education":[{"institution":"UW Madison","area":"Computer Science","studyType":"Bachelor of Science","startDate":"2011-09-01","endDate":"2015-05-01","gpa":"3.1","courses":[],"highlights":["Favorite Class: Computer Graphics","Computer Engineering Project: Built an Android Spotify app for gatherings with a Reddit-like voting system for choosing upcoming songs"]}],"projects":[{"title":"What\'s Up","startDate":"2017-11-01","endDate":"2018-01-01","url":"https://github.com/amcolash/WhatsUp","highlights":["Leverage multiple event apis including Facebook, EventBrite and Meetup to aggregate information about upcoming local events","Implemented using Ionic (Angluar) and Firebase to provide real time updates to new events"]},{"title":"Giffing Awesome","startDate":"2016-04-01","endDate":"2017-06-01","url":"https://github.com/amcolash/GiffingAwesome","highlights":["Mobile web app that allows users to search image sites, save, and share their favorite GIFs","Devloped with the Ionic Framework and Firebase, and the APIs from Giphy, GifMe and Riffsy"]}],"awards":[],"publications":[],"skills":[{"name":"Web Development","level":"","keywords":["HTML","CSS","Javascript","Typescript","React","Webpack","NodeJS"]},{"name":"Sotware Development","level":"","keywords":["Java","Python","C","C++","Bash","CI / CD Pipelines"]}],"languages":[],"interests":[{"name":"Software Development Experience","keywords":["Video Games","Web Applications","Mobile Applications","Microcontrollers","Wearable Technology"]},{"name":"Hobbies","keywords":["Biking","Cooking","Learning","Running","Photography","Video Games"]}],"references":[{"name":"Colin Juillard","phone":"608-448-6074","email":"colin.juillard@gmail.com","company":"PerBlue","title":"Game Engine Team Lead"},{"name":"Caleb Strobel","phone":"414-702-5767","email":"calebstrob@gmail.com","company":"PerBlue","title":"QA Engineer"},{"name":"Michael Radloff","phone":"608-408-0373","email":"mradloff@gmail.com","company":"Badgerland Counseling","title":"Private Business Owner"}]}');function k(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function D(){return(0,u.tZ)(y,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?k(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):k(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},v))}},8195:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return i(2956)}])}},function(e){e.O(0,[584,774,888,179],(function(){return t=8195,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=resume-21fb80fcbdcbd21ee741.js.map