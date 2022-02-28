"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8487],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8325:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Generate an OData client for JavaScript",sidebar_label:"Generate an OData Client",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","generate"]},p=void 0,d={unversionedId:"js/features/odata/generate-odata-client",id:"js/features/odata/generate-odata-client",title:"Generate an OData client for JavaScript",description:"The OData client generator allows you to generate custom OData client libraries for OData services.",source:"@site/docs/js/features/odata/generate-odata-client.mdx",sourceDirName:"js/features/odata",slug:"/js/features/odata/generate-odata-client",permalink:"/cloud-sdk/docs/js/features/odata/generate-odata-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/generate-odata-client.mdx",tags:[],version:"current",lastUpdatedBy:"Henning Heitk\xf6tter",lastUpdatedAt:1646051247,formattedLastUpdatedAt:"2/28/2022",frontMatter:{title:"Generate an OData client for JavaScript",sidebar_label:"Generate an OData Client",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","generate"]},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/js/features/odata/overview"},next:{title:"Execute an OData request",permalink:"/cloud-sdk/docs/js/features/odata/execute-odata-request"}},s=[{value:"Installation",id:"installation",children:[],level:2},{value:"Generate a Client Using the Command Line Interface",id:"generate-a-client-using-the-command-line-interface",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Generate a Client Programmatically",id:"generate-a-client-programmatically",children:[],level:2},{value:"NPM Packages vs. Local clients",id:"npm-packages-vs-local-clients",children:[],level:2},{value:"Transpilation",id:"transpilation",children:[],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The OData client generator allows you to generate custom OData client libraries for OData services.\nYou can then access these services from your code using the client libraries."),(0,i.kt)("p",null,"You can use the SAP Cloud SDK generator both as a command-line interface (CLI) and programmatically."),(0,i.kt)("p",null,"All you need to use it, is a service metadata specification in the ",(0,i.kt)("inlineCode",{parentName:"p"},"EDMX")," format (file ending can be ",(0,i.kt)("inlineCode",{parentName:"p"},".edmx")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".xml"),")."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Run this command in your project's terminal to install the generator as a ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependency"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @sap-cloud-sdk/generator\n")),(0,i.kt)("p",null,"or globally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @sap-cloud-sdk/generator\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to generate JavaScript code and install the generator globally, you have to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/odata-v2")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/odata-v4")," package in your project.\nSee #transpilation for more details."))),(0,i.kt)("h2",{id:"generate-a-client-using-the-command-line-interface"},"Generate a Client Using the Command Line Interface"),(0,i.kt)("p",null,"The SAP Cloud SDK generator is primarily intended to be used on the command line."),(0,i.kt)("p",null,"Run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"generate-odata-client --inputDir path/to/your/service-specifications --outputDir path/to/store/generated/modules\n")),(0,i.kt)("p",null,"Adapt the ",(0,i.kt)("inlineCode",{parentName:"p"},"path/to/your/service-specifications")," to the directory containing your service specifications in ",(0,i.kt)("inlineCode",{parentName:"p"},"EDMX")," format, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"service-specifications/"),".\nAlso adapt ",(0,i.kt)("inlineCode",{parentName:"p"},"path/to/store/generated/modules")," to your OData client directory for example ",(0,i.kt)("inlineCode",{parentName:"p"},"odata-client"),"."),(0,i.kt)("p",null,"This will generate OData clients for all your service specifications and create a ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceMapping.json")," in your input directory.\nThis file is used for generation and contains a mapping from the original file name to the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"directoryName")," - the name of the subdirectory the client code will be generated into."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"servicePath")," - the URL path to be prepended before every request.\nThis is read from the EDMX file if available, otherwise, the value here will be ",(0,i.kt)("inlineCode",{parentName:"li"},"VALUE_IS_UNDEFINED"),". In that case, it should be adjusted manually."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npmPackageName")," - the name of the npm package, if a ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," is generated.\nThis information is optional.")),(0,i.kt)("p",null,"This information can be adjusted manually and ensure that every run of the generator produces the same names for the generation."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "MyService": {\n    "directoryName": "my-service",\n    "servicePath": "/odata/v2",\n    "npmPackageName": "my-service"\n  }\n}\n')),(0,i.kt)("p",null,"By default, the generated module contains the following sources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TypeScript code (",(0,i.kt)("inlineCode",{parentName:"li"},".ts"),") representing request builders, entity representations and if needed representations for complex types as well as function/action imports."),(0,i.kt)("li",{parentName:"ul"},"All of the above as transpiled sources, including JavaScript sources (",(0,i.kt)("inlineCode",{parentName:"li"},".js"),"), type definition files (",(0,i.kt)("inlineCode",{parentName:"li"},".d.ts"),") and sourcemap files (",(0,i.kt)("inlineCode",{parentName:"li"},".js.map")," and ",(0,i.kt)("inlineCode",{parentName:"li"},".d.ts.map"),")."),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("inlineCode",{parentName:"li"},".npmrc"),"."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"typedoc.json"),"."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),".")),(0,i.kt)("p",null,"The generation always includes the TypeScript sources.\nAll other files can be excluded from the generation - see the options below."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"generate-odata-client --help")," for additional options."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Option, Aliases ",(0,i.kt)("div",{style:{width:"225px"}})),(0,i.kt)("th",{parentName:"tr",align:"center"},"\xa0Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-i"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--inputDir")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0This directory will be recursively searched for ",(0,i.kt)("inlineCode",{parentName:"td"},".edmx"),"/",(0,i.kt)("inlineCode",{parentName:"td"},".xml")," files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-o"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--outputDir")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0Directory to save the generated code in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-s"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--serviceMapping"),","),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<inputDir>/service-mapping.json")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0Configuration file to ensure consistent names between multiple generation runs with updated / changed metadata files. Will be generated if not existent.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--forceOverwrite")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0Exit when encountering a file that already exists. When set to true, it will be overwritten instead. Please note that compared to the ",(0,i.kt)("inlineCode",{parentName:"td"},"--clearOutputDir")," option, this will not delete outdated files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--clearOutputDir")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0Deletes EVERYTHING in the specified output directory before generating code.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--generateNpmrc")," ",(0,i.kt)("em",{parentName:"td"},"(deprecated)")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0Generate a ",(0,i.kt)("inlineCode",{parentName:"td"},".npmrc")," file specifying a registry for ",(0,i.kt)("inlineCode",{parentName:"td"},"@sap")," scoped dependencies.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--generateTypedocJson")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0Generates a ",(0,i.kt)("inlineCode",{parentName:"td"},"typedoc.json"),' file for each package, used for the corresponding "doc" npm script.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--generatePackageJson")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0Generate a ",(0,i.kt)("inlineCode",{parentName:"td"},"package.json")," file, specifying dependencies and scripts for compiling and generating documentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--versionInPackageJson")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Version of the generator"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0By default, when generating ",(0,i.kt)("inlineCode",{parentName:"td"},"package.json")," file, the generator will set a version by using the generator version. It can also be set to a specific version.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--generateJs")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0Generates transpiled ",(0,i.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,i.kt)("inlineCode",{parentName:"td"},".js.map"),", ",(0,i.kt)("inlineCode",{parentName:"td"},".d.ts")," and ",(0,i.kt)("inlineCode",{parentName:"td"},".d.ts.map")," files. When set to false, the generator will only generate ",(0,i.kt)("inlineCode",{parentName:"td"},".ts")," files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--processesJsGeneration")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"16")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0Number of processes used for transpilation of JavaScript files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--generateCSN")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0A CSN file will be generated for each service definition in the output directory.")))),(0,i.kt)("h2",{id:"generate-a-client-programmatically"},"Generate a Client Programmatically"),(0,i.kt)("p",null,"You can also use the generator programmatically.\nYou will have to provide the options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { generate } from '@sap-cloud-sdk/generator';\n\n// Create your options, adapt the input & output directory as well as the package name according to your setup.\nconst inputDir = 'service-specifications';\nconst outputDir = 'odata-client';\n\n// Create your project datastructure with all sourcefiles based on your options\nconst generatorConfig = {\n  forceOverwrite: true,\n  generateJs: false,\n  useSwagger: false,\n  writeReadme: false,\n  clearOutputDir: true,\n  generateNpmrc: false,\n  generateTypedocJson: false,\n  generatePackageJson: false,\n  generateCSN: false,\n  sdkAfterVersionScript: false,\n  s4hanaCloud: false\n  /* optional:\n    serviceMapping: 'test/directory',\n    changelogFile: 'test/directory',\n    aggregatorNpmPackageName: 'test',\n    aggregatorDirectoryName: 'test',\n    versionInPackageJson: 'version'\n  */\n};\n\n// generate your project, you can also redefine options\ngenerate({\n  ...generatorConfig,\n  inputDir,\n  outputDir\n});\n")),(0,i.kt)("h2",{id:"npm-packages-vs-local-clients"},"NPM Packages vs. Local clients"),(0,i.kt)("p",null,"The SAP Cloud SDK OData client generator generates TypeScript code.\nBy default, the generator creates all sources needed for an npm package.\nIt transpiles the generated sources to JavaScript and provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," for the client.\nThis differs from the OpenAPI generator and will likely change in a future major version upgrade."),(0,i.kt)("p",null,"If you want to publish a generated client to an npm registry, you can work with the default configuration.\nPlease make sure to check intellectual property regulations before publishing to a public registry."),(0,i.kt)("p",null,"If you want to use the generated client in your code without sharing it, you can omit the generation of a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"generatePackageJson")," flag.\nAdditionally, if you work with TypeScript you can skip transpilation with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--generateJs")," flag.\nThe generated clients depend on the ",(0,i.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/odata-v2")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/odata-v4")," packages, depending on the OData version of the service.\nYou have to make sure, there is a local reference to these packages, by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @sap-cloud-sdk/odata-v2\n")),(0,i.kt)("p",null,"or:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @sap-cloud-sdk/odata-v4\n")),(0,i.kt)("p",null,"respectively."),(0,i.kt)("h2",{id:"transpilation"},"Transpilation"),(0,i.kt)("p",null,"If you installed the generator globally and want to transpile the generated code, you have to install the required dependency (or ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependency"),") for your client (",(0,i.kt)("inlineCode",{parentName:"p"},"sap-cloud-sdk/odata-v2")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"sap-cloud-sdk/odata-v4"),") prior to generation.\nYou do this by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @sap-cloud-sdk/odata-v2\n")),(0,i.kt)("p",null,"or:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @sap-cloud-sdk/odata-v4\n")),(0,i.kt)("p",null,"respectively."),(0,i.kt)("p",null,"If you installed the generator as a ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependency"),", transpilation will work without additional steps."))}m.isMDXComponent=!0}}]);