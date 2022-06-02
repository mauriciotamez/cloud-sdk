"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4356],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},73390:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",title:"Migrate to our Open Source Version",sidebar_label:"Migrate to Open Source",description:"We open-sourced the SAP Cloud SDK for JS/TS in the beginning of 2020. This guide will help you with migration to the open source version.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},l=void 0,u={unversionedId:"js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",id:"js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",title:"Migrate to our Open Source Version",description:"We open-sourced the SAP Cloud SDK for JS/TS in the beginning of 2020. This guide will help you with migration to the open source version.",source:"@site/docs/js/guides/migrate-to-os.mdx",sourceDirName:"js/guides",slug:"/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",permalink:"/cloud-sdk/docs/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/guides/migrate-to-os.mdx",tags:[],version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1654156473,formattedLastUpdatedAt:"6/2/2022",frontMatter:{id:"migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",title:"Migrate to our Open Source Version",sidebar_label:"Migrate to Open Source",description:"We open-sourced the SAP Cloud SDK for JS/TS in the beginning of 2020. This guide will help you with migration to the open source version.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"someSidebar",previous:{title:"Migrate to Kubernetes",permalink:"/cloud-sdk/docs/js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes"},next:{title:"Upgrade to version 2.0",permalink:"/cloud-sdk/docs/js/guides/upgrade-to-version-2"}},p={},d=[{value:"Switch To the Open Source Version",id:"switch-to-the-open-source-version",level:2},{value:"How To Use the Open Source Version",id:"how-to-use-the-open-source-version",level:5},{value:"What About Support and Future Development?",id:"what-about-support-and-future-development",level:2},{value:"How Can I Report an Issue or Make a Feature Request?",id:"how-can-i-report-an-issue-or-make-a-feature-request",level:2},{value:"Can I Contribute?",id:"can-i-contribute",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"switch-to-the-open-source-version"},"Switch To the Open Source Version"),(0,a.kt)("p",null,"Some packages of the SAP Cloud SDK for JavaScript have been migrated to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"github.com"),".\nAs a result, the packages were renamed as shown in the table below.\nNo Breaking changes were made.\nPlease use the new packages from now on."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"old package name"),(0,a.kt)("th",{parentName:"tr",align:null},"new package name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-util")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/util"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-analytics")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/analytics"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-core")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/core"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-generator")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/generator"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-test-util")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/test-util"))))),(0,a.kt)("p",null,"This mapping applies to the move to open source version 1.X.Y..\nSince version 2.0.0, the ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," package has been split into smaller packages and the ",(0,a.kt)("inlineCode",{parentName:"p"},"analytics")," package has been removed.\nWe recommend first migrating to version 1.52.0 of the open-source version.\nOnce this is done, follow the ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/guides/upgrade-to-version-2"},"upgrade guide")," to do the transition to version 2.0.0."),(0,a.kt)("h5",{id:"how-to-use-the-open-source-version"},"How To Use the Open Source Version"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Search for all your ",(0,a.kt)("inlineCode",{parentName:"li"},"dependencies"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"devDependencies"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"peerDependencies")," in your ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,a.kt)("li",{parentName:"ol"},"Replace the old package name e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"@sap/cloud-sdk-core")," with the new one e.g.",(0,a.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/core"),"."),(0,a.kt)("li",{parentName:"ol"},"Use a stable version of the SAP Cloud SDK e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"^1.18.0"),"."),(0,a.kt)("li",{parentName:"ol"},"Delete your ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," and the ",(0,a.kt)("inlineCode",{parentName:"li"},"package-lock.json"),"."),(0,a.kt)("li",{parentName:"ol"},"Install your dependencies, run: ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i"),"."),(0,a.kt)("li",{parentName:"ol"},"Search your source code for references to the old packages (e.g. in import statements) and replace them with the new names.")),(0,a.kt)("h2",{id:"what-about-support-and-future-development"},"What About Support and Future Development?"),(0,a.kt)("p",null,"SAP Cloud SDK team fully maintains the Open Source version which is the only one existing.\nWe continue developing and releasing new functionality as well as supporting developers and fixing found bugs."),(0,a.kt)("h2",{id:"how-can-i-report-an-issue-or-make-a-feature-request"},"How Can I Report an Issue or Make a Feature Request?"),(0,a.kt)("p",null,"Please, create an issue in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/issues/new/choose"},"GitHub repository"),"."),(0,a.kt)("h2",{id:"can-i-contribute"},"Can I Contribute?"),(0,a.kt)("p",null,"We are happily accepting contributions via pull requests on our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"GitHub repository"),"."))}m.isMDXComponent=!0}}]);