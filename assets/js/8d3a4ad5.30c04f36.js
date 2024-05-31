"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2276],{6767:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>r});var n=s(5893),c=s(1151);const a={},l="Set up local stack with docker-compose",i={id:"java-basic/aws-local-stack",title:"Set up local stack with docker-compose",description:"T\xf3m t\u1eaft",source:"@site/docs/java-basic/aws-local-stack.md",sourceDirName:"java-basic",slug:"/java-basic/aws-local-stack",permalink:"/docs/java-basic/aws-local-stack",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u0110\u1ecdc file csv",permalink:"/docs/java-basic/csv"},next:{title:"Get dto class from jpa after join table.",permalink:"/docs/java-basic/get-dto-from-join-database"}},o={},r=[{value:"T\xf3m t\u1eaft",id:"t\xf3m-t\u1eaft",level:2},{value:"ref",id:"ref",level:2},{value:"Github",id:"github",level:2},{value:"How to run",id:"how-to-run",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"set-up-local-stack-with-docker-compose",children:"Set up local stack with docker-compose"}),"\n",(0,n.jsx)(t.h2,{id:"t\xf3m-t\u1eaft",children:"T\xf3m t\u1eaft"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"localstack aws s3"}),"\n",(0,n.jsx)(t.li,{children:"springboot java"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"ref",children:"ref"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/localstack/localstack",children:"https://github.com/localstack/localstack"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://mmarcosab.medium.com/how-about-s3-bucket-and-localstack-b0816bab452a",children:"https://mmarcosab.medium.com/how-about-s3-bucket-and-localstack-b0816bab452a"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/mmarcosab/s3-example",children:"https://github.com/mmarcosab/s3-example"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"github",children:"Github"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/trandanhhoang/aws-local-stack",children:"https://github.com/trandanhhoang/aws-local-stack"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-run",children:"How to run"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Download aws cli"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://aws.amazon.com/vi/cli/",children:"https://aws.amazon.com/vi/cli/"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Set up config"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ aws configure\n$ accesskey\n$ secretkey\n$ us-east-1\n$ None\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Add bucket","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["aws --endpoint-url=",(0,n.jsx)(t.a,{href:"http://127.0.0.1:4566",children:"http://127.0.0.1:4566"})," s3api create-bucket --bucket bucket-example"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Upload file","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["aws --endpoint-url=",(0,n.jsx)(t.a,{href:"http://localhost:4566",children:"http://localhost:4566"})," s3 cp hoang.jpg s3://bucket-example"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Check list file in bucket","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["aws --endpoint-url=",(0,n.jsx)(t.a,{href:"http://localhost:4566",children:"http://localhost:4566"})," s3 ls s3://bucket-example/"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>l});var n=s(7294);const c={},a=n.createContext(c);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);