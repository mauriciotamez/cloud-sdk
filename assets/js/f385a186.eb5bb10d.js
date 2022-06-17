"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4722],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51673:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"introduction",title:"Create Your First Application with the SAP Cloud SDK for JavaScript",sidebar_label:"Introduction",description:"Create your first NestJS based application on Cloud Foundry enviroment using the SAP Cloud SDK for JavaScript.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},u=void 0,l={unversionedId:"js/tutorials/getting-started/introduction",id:"js/tutorials/getting-started/introduction",title:"Create Your First Application with the SAP Cloud SDK for JavaScript",description:"Create your first NestJS based application on Cloud Foundry enviroment using the SAP Cloud SDK for JavaScript.",source:"@site/docs/js/tutorials/getting-started/introduction.mdx",sourceDirName:"js/tutorials/getting-started",slug:"/js/tutorials/getting-started/introduction",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/introduction",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/tutorials/getting-started/introduction.mdx",tags:[],version:"current",lastUpdatedBy:"Johannes Schneider",lastUpdatedAt:1655505560,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"introduction",title:"Create Your First Application with the SAP Cloud SDK for JavaScript",sidebar_label:"Introduction",description:"Create your first NestJS based application on Cloud Foundry enviroment using the SAP Cloud SDK for JavaScript.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},sidebar:"someSidebar",previous:{title:"How to retrieve JWTs",permalink:"/cloud-sdk/docs/js/guides/how-to-retrieve-jwt"},next:{title:"Set up Development Environment",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/set-up-dev-enviroment"}},c={},p=[{value:"About This Tutorial",id:"about-this-tutorial",level:2},{value:"About the Application",id:"about-the-application",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Learning Outcomes",id:"learning-outcomes",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about-this-tutorial"},"About This Tutorial"),(0,o.kt)("p",null,"This tutorial is divided into multiple sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./set-up-dev-enviroment"},"Setup")," tells you about tools you need, setting up a NestJS application, and its project structure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./execute-an-odata-request"},"Execute an OData Request")," will give you a deeper insight into using a pregenerated client to execute requests against an OData service."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./deploy-app-to-cf"},"Deploy Application to Cloud Foundry")," informs you about managing destinations in Cloud Foundry in SAP BTP.")),(0,o.kt)("h2",{id:"about-the-application"},"About the Application"),(0,o.kt)("p",null,"In this tutorial, you will build your own application from scratch, using the SAP Cloud SDK for JavaScript and NestJS.\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/"},"NestJS")," is a framework for building server-side Node.js applications."),(0,o.kt)("p",null,"The application will use the ",(0,o.kt)("a",{parentName:"p",href:"https://api.sap.com/api/API_BUSINESS_PARTNER/cloud-sdk/JavaScript"},"business partner client library")," and connect to an SAP S/4HANA Cloud system.\nIt will fetch a list of business partners and provide the result to a service endpoint that users can consume.\nYou will leverage several of the SAP Cloud SDK features such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../features/odata/use-odata-v2-type-safe-client-for-javascript-typescript#getall-request-builder"},"request builders")," to build OData requests for available request types."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../features/connectivity/destination#creating-destinations-manually"},"destination lookup")," for destinations created manually or referenced by name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../features/odata/execute-odata-request#general-request-structure"},"execute")," method to construct request URL and headers, execute the request, and return a typed response")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This tutorial assumes you have a basic knowledge about the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript")," - programming concepts like functions, arrays, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cloudfoundry.org/concepts/overview.html"},"Cloud Foundry")," - spaces, cf CLI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/daca64dacc6148fcb5c70ed86082ef91.html"},"SAP Business Technology Platform")," concepts such as destinations, UAA services.")),(0,o.kt)("p",null,"For deploying your application to Cloud Foundry in SAP Business Technology Platform, you will need an account.\nYou can get a trial account ",(0,o.kt)("a",{parentName:"p",href:"https://www.sap.com/products/business-technology-platform/trial.html"},"here")," or use an existing account, if you already have one."),(0,o.kt)("p",null,"You also need to have access to an SAP S/4HANA Cloud system with a technical user.\nIf no SAP S/4HANA Cloud system is available, you can set up a mock server or use a sandbox API as described below."),(0,o.kt)("p",null,"You can setup a local mock server by following the instructions ",(0,o.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-s4-sdk-book/pages/mock-odata.html"},"here"),".\nThis server hosts an OData v2 mock service that mimics the business partner API.\nIt does not support all the features of the actual OData services, but it suffices to try it out locally.\nOnce it is up and running you should see the list of services at http://localhost:3000."),(0,o.kt)("p",null,"Alternatively, many APIs can also be tested using the sandbox of the SAP API Business Hub.\nTo use the sandbox, you need an ",(0,o.kt)("em",{parentName:"p"},"API key"),".\nGo to ",(0,o.kt)("a",{parentName:"p",href:"https://api.sap.com"},"SAP API Business Hub")," and click ",(0,o.kt)("em",{parentName:"p"},"Login")," in the top right corner.\nIf you do not have an account, you will need to register first.\nWhen you are logged in, click on ",(0,o.kt)("em",{parentName:"p"},"Hi name")," in the top right corner and then click on ",(0,o.kt)("em",{parentName:"p"},"Settings")," in the dropdown menu.\nOn the settings page, click ",(0,o.kt)("em",{parentName:"p"},"Show API Key"),"."),(0,o.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,o.kt)("p",null,"After reading the tutorial, you will learn how to do the following tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Consume a pregenerated client in your application."),(0,o.kt)("li",{parentName:"ul"},"Use the SAP Cloud SDK to perform basic GET requests against a SAP S/4HANA Cloud system."),(0,o.kt)("li",{parentName:"ul"},"Create and configure a destination and use it in your application."),(0,o.kt)("li",{parentName:"ul"},"Deploy your application to a Cloud Foundry space.")))}m.isMDXComponent=!0}}]);