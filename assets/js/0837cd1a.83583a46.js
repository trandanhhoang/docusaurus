"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7400],{3946:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(5893),a=r(1151);const o={},s="Garbage collector",l={id:"book/Garbage collector",title:"Garbage collector",description:"1. Object Creation:",source:"@site/docs/book/Garbage collector.md",sourceDirName:"book",slug:"/book/Garbage collector",permalink:"/docs/book/Garbage collector",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Effective java",permalink:"/docs/book/effective-java"},next:{title:"Set up debezium with postgres",permalink:"/docs/debezium/setup-debezium-with-postgres"}},i={},c=[];function h(e){const n={h1:"h1",li:"li",ol:"ol",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"garbage-collector",children:"Garbage collector"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Object Creation:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When you create an object using the new keyword, memory is allocated on the heap to store the object's data and fields.\nThe constructor is then called to initialize the object."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Reference Tracking:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Objects are accessible through references. References are variables or fields that store the memory address of an object."}),"\n",(0,t.jsx)(n.li,{children:"As long as there are references pointing to an object, it is considered reachable and won't be collected by the garbage collector."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Reachability Analysis:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Periodically, the garbage collector performs a reachability analysis to identify which objects are still reachable from the root of the object graph. The root can be:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Local variables in currently executing methods."}),"\n",(0,t.jsx)(n.li,{children:"Active threads."}),"\n",(0,t.jsx)(n.li,{children:"Static variables."}),"\n",(0,t.jsx)(n.li,{children:"JNI (Java Native Interface) references."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"The garbage collector starts from the root set, which includes local variables, active threads, static variables, and JNI references."}),"\n",(0,t.jsx)(n.li,{children:"It follows references from the root set to other objects, marking each encountered object as reachable."}),"\n",(0,t.jsx)(n.li,{children:"Objects that are not marked as reachable during this traversal are considered unreachable."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Mark Phase:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The garbage collector marks objects that are reachable, starting from the roots and following references.\nUnreachable objects are marked as candidates for removal."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Sweep Phase:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In this phase, the garbage collector sweeps through the heap and removes the objects that were marked as unreachable.\nThe memory occupied by these unreachable objects is then freed up."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Compact Phase (Optional):"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In some garbage collection algorithms, there might be a compaction phase where the remaining live objects are moved to a contiguous block of memory to reduce fragmentation."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:"Finalization (Optional):"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If an object has a finalize method, it might go through a finalization process before being reclaimed. However, relying on finalize is discouraged as it can lead to unpredictable behavior."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsx)(n.li,{children:"Memory Reclaimed:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"After the sweep phase, the memory occupied by the unreachable objects is reclaimed and made available for new allocations."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var t=r(7294);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);