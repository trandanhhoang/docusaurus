"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8419],{9069:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>o,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var t=i(5893),h=i(1151);const c={},l="T\xecm hi\u1ec3u database management system c\u01a1 b\u1ea3n (part 1)",s={id:"blog/24-09-10-Database",title:"T\xecm hi\u1ec3u database management system c\u01a1 b\u1ea3n (part 1)",description:"Gi\u1edbi thi\u1ec7u",source:"@site/docs/blog/24-09-10-Database.md",sourceDirName:"blog",slug:"/blog/24-09-10-Database",permalink:"/docs/blog/24-09-10-Database",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blog",permalink:"/docs/category/blog"},next:{title:"Getting Started",permalink:"/docs/intro"}},r={},a=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"Ch\xfang ta s\u1ebd c\u1ed1 g\u1eafng h\u1ecdc theo h\u01b0\u1edbng bottom-up.",id:"ch\xfang-ta-s\u1ebd-c\u1ed1-g\u1eafng-h\u1ecdc-theo-h\u01b0\u1edbng-bottom-up",level:2},{value:"Nh\u01b0ng ban ban \u0111\u1ea7u h\xe3y c\xf3 1 c\xe1i nh\xecn t\u1ed5ng quan, khi tr\u1ea3 l\u1eddi c\xe1c c\xe2u h\u1ecfi, ch\xfang ta c\xf3 th\u1ec3 tham chi\u1ebfu l\u1ea1i h\xecnh n\xe0y.",id:"nh\u01b0ng-ban-ban-\u0111\u1ea7u-h\xe3y-c\xf3-1-c\xe1i-nh\xecn-t\u1ed5ng-quan-khi-tr\u1ea3-l\u1eddi-c\xe1c-c\xe2u-h\u1ecfi-ch\xfang-ta-c\xf3-th\u1ec3-tham-chi\u1ebfu-l\u1ea1i-h\xecnh-n\xe0y",level:2},{value:"Ch\xfang ta s\u1ebd b\u1eaft \u0111\u1ea7u c\xe1c c\xe2u h\u1ecfi \u0111\u1ec3 x\xe2y d\u1ef1ng ki\u1ebfn th\u1ee9c.",id:"ch\xfang-ta-s\u1ebd-b\u1eaft-\u0111\u1ea7u-c\xe1c-c\xe2u-h\u1ecfi-\u0111\u1ec3-x\xe2y-d\u1ef1ng-ki\u1ebfn-th\u1ee9c",level:2},{value:"T\u1ea1i sao ch\xfang ta kh\xf4ng l\u01b0u d\u1eef li\u1ec7u d\u01b0\u1edbi file txt, hay excel, m\xe0 ph\u1ea3i d\xf9ng database ?",id:"t\u1ea1i-sao-ch\xfang-ta-kh\xf4ng-l\u01b0u-d\u1eef-li\u1ec7u-d\u01b0\u1edbi-file-txt-hay-excel-m\xe0-ph\u1ea3i-d\xf9ng-database-",level:3},{value:"D\u1eef li\u1ec7u b\xean d\u01b0\u1edbi th\u1ef1c s\u1ef1 \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef nh\u01b0 th\u1ebf n\xe0o ?",id:"d\u1eef-li\u1ec7u-b\xean-d\u01b0\u1edbi-th\u1ef1c-s\u1ef1-\u0111\u01b0\u1ee3c-l\u01b0u-tr\u1eef-nh\u01b0-th\u1ebf-n\xe0o-",level:3},{value:"Access Method l\xe0 g\xec ?",id:"access-method-l\xe0-g\xec-",level:3},{value:"V\u1eady khi 1 File l\xean t\u1edbi h\xe0ng terabyte, ch\xfang ta c\xf3 load to\xe0n b\u1ed9 file t\u1eeb disk v\xe0o memory kh\xf4ng ?",id:"v\u1eady-khi-1-file-l\xean-t\u1edbi-h\xe0ng-terabyte-ch\xfang-ta-c\xf3-load-to\xe0n-b\u1ed9-file-t\u1eeb-disk-v\xe0o-memory-kh\xf4ng-",level:3},{value:"V\u1eady n\u1ebfu client y\xeau c\u1ea7u 1 l\u1ec7nh order by tr\xean to\xe0n b\u1ed9 record, sau \u0111\xf3 l\u1ea5y ra 100 record \u0111\u1ea7u ti\xean th\xec ch\xfang ta x\u1eed l\xfd nh\u01b0 th\u1ebf n\xe0o ?",id:"v\u1eady-n\u1ebfu-client-y\xeau-c\u1ea7u-1-l\u1ec7nh-order-by-tr\xean-to\xe0n-b\u1ed9-record-sau-\u0111\xf3-l\u1ea5y-ra-100-record-\u0111\u1ea7u-ti\xean-th\xec-ch\xfang-ta-x\u1eed-l\xfd-nh\u01b0-th\u1ebf-n\xe0o-",level:3},{value:"Nghi\xean c\u1ee9u s\xe2u h\u01a1n v\u1ec1 SQL, SQL h\u1ed7 tr\u1ee3 c\xe1c Operator n\xe0o ?",id:"nghi\xean-c\u1ee9u-s\xe2u-h\u01a1n-v\u1ec1-sql-sql-h\u1ed7-tr\u1ee3-c\xe1c-operator-n\xe0o-",level:3},{value:"OPTIMIZE QUERY",id:"optimize-query",level:3},{value:"Ph\xe9p Join \u1edf tr\xean \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n nh\u01b0 th\u1ebf n\xe0o ?",id:"ph\xe9p-join-\u1edf-tr\xean-\u0111\u01b0\u1ee3c-th\u1ef1c-hi\u1ec7n-nh\u01b0-th\u1ebf-n\xe0o-",level:3}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,h.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"t\xecm-hi\u1ec3u-database-management-system-c\u01a1-b\u1ea3n-part-1",children:"T\xecm hi\u1ec3u database management system c\u01a1 b\u1ea3n (part 1)"}),"\n",(0,t.jsx)(e.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"T\xf3m t\u1eaft l\u1ea1i \u0111\xe3 h\u1ecdc \u0111\u01b0\u1ee3c g\xec t\u1eeb kho\xe1 h\u1ecdc MIT 6.830"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["M\xecnh b\u1eaft \u0111\u1ea7u kho\xe1 h\u1ecdc MIT ",(0,t.jsx)(e.a,{href:"https://dsg.csail.mit.edu/6.5830/",children:"https://dsg.csail.mit.edu/6.5830/"})," v\xe0 ho\xe0n th\xe0nh c\xe1c lab c\u1ee7a kho\xe1 h\u1ecdc (3\nlab), l\xe0 ho\xe0n thi\u1ec7n 1 database management system c\u01a1 b\u1ea3n."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Git repo g\u1ed1c: ",(0,t.jsx)(e.a,{href:"https://github.com/MIT-DB-Class/go-db-hw-2023",children:"https://github.com/MIT-DB-Class/go-db-hw-2023"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Repo c\u1ee7a m\xecnh: ",(0,t.jsx)(e.a,{href:"https://github.com/trandanhhoang/database-go",children:"https://github.com/trandanhhoang/database-go"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"ch\xfang-ta-s\u1ebd-c\u1ed1-g\u1eafng-h\u1ecdc-theo-h\u01b0\u1edbng-bottom-up",children:"Ch\xfang ta s\u1ebd c\u1ed1 g\u1eafng h\u1ecdc theo h\u01b0\u1edbng bottom-up."}),"\n",(0,t.jsx)(e.h2,{id:"nh\u01b0ng-ban-ban-\u0111\u1ea7u-h\xe3y-c\xf3-1-c\xe1i-nh\xecn-t\u1ed5ng-quan-khi-tr\u1ea3-l\u1eddi-c\xe1c-c\xe2u-h\u1ecfi-ch\xfang-ta-c\xf3-th\u1ec3-tham-chi\u1ebfu-l\u1ea1i-h\xecnh-n\xe0y",children:"Nh\u01b0ng ban ban \u0111\u1ea7u h\xe3y c\xf3 1 c\xe1i nh\xecn t\u1ed5ng quan, khi tr\u1ea3 l\u1eddi c\xe1c c\xe2u h\u1ecfi, ch\xfang ta c\xf3 th\u1ec3 tham chi\u1ebfu l\u1ea1i h\xecnh n\xe0y."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"C\xe1c th\xe0nh ph\u1ea7n ch\xednh c\u1ee7a Database"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.img,{alt:"db-components",src:i(6518).Z+"",width:"1101",height:"763"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Trong \u0111\xf3,"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Client Communication Manager: thi\u1ebft l\u1eadp k\u1ebft n\u1ed7i gi\u1eefa client v\xe0 database server."}),"\n",(0,t.jsx)(e.li,{children:'Process Manager: DB c\u1ea7n "admission control", c\xe2u query n\xe0o \u0111\u1ee7 resource, th\xec m\u1edbi \u0111\u01b0\u1ee3c th\u1ef1c\nhi\u1ec7n.'}),"\n",(0,t.jsx)(e.li,{children:"Relational Query Processor: parse c\xe2u query, optimize query."}),"\n",(0,t.jsxs)(e.li,{children:["Transactional Storage Manager:","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Access Methods: N\u01a1i t\u1ed5 ch\u1ee9c, truy c\u1eadp d\u1eef li\u1ec7u tr\xean disk (v\xed d\u1ee5: heap_file, Btree)"}),"\n",(0,t.jsx)(e.li,{children:"Buffer Manager: Quy\u1ebft \u0111\u1ecbnh d\u1eef li\u1ec7u khi n\xe0o \u0111\u01b0\u1ee3c l\u01b0u tr\xean memory, disk."}),"\n",(0,t.jsx)(e.li,{children:"Lock Manager, Log Manager: \u0110\u1ea3m b\u1ea3o ACID"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"Share component & Utilities:"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Ch\xfang ta s\u1ebd t\u1eadp trung v\xe0o Transaction Storage Manager."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"ch\xfang-ta-s\u1ebd-b\u1eaft-\u0111\u1ea7u-c\xe1c-c\xe2u-h\u1ecfi-\u0111\u1ec3-x\xe2y-d\u1ef1ng-ki\u1ebfn-th\u1ee9c",children:"Ch\xfang ta s\u1ebd b\u1eaft \u0111\u1ea7u c\xe1c c\xe2u h\u1ecfi \u0111\u1ec3 x\xe2y d\u1ef1ng ki\u1ebfn th\u1ee9c."}),"\n",(0,t.jsx)(e.h3,{id:"t\u1ea1i-sao-ch\xfang-ta-kh\xf4ng-l\u01b0u-d\u1eef-li\u1ec7u-d\u01b0\u1edbi-file-txt-hay-excel-m\xe0-ph\u1ea3i-d\xf9ng-database-",children:"T\u1ea1i sao ch\xfang ta kh\xf4ng l\u01b0u d\u1eef li\u1ec7u d\u01b0\u1edbi file txt, hay excel, m\xe0 ph\u1ea3i d\xf9ng database ?"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"DB gi\xfap ch\xfang ta truy v\u1ea5n d\u1eef li\u1ec7u v\u1edbi SQL, file th\xec kh\xf4ng."}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"d\u1eef-li\u1ec7u-b\xean-d\u01b0\u1edbi-th\u1ef1c-s\u1ef1-\u0111\u01b0\u1ee3c-l\u01b0u-tr\u1eef-nh\u01b0-th\u1ebf-n\xe0o-",children:"D\u1eef li\u1ec7u b\xean d\u01b0\u1edbi th\u1ef1c s\u1ef1 \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef nh\u01b0 th\u1ebf n\xe0o ?"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Cho schema sau:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE student\n(\n    id   INT,\n    name VARCHAR(32),\n);\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["C\xe1c ",(0,t.jsx)(e.code,{children:"TUPLE"}),"( h\xe0ng d\u1eef li\u1ec7u, record, row) l\xe0 n\u01a1i l\u01b0u gi\xe1 tr\u1ecb, t\u01b0\u01a1ng \u1ee9ng v\u1edbi ki\u1ec3u d\u1eef li\u1ec7u (string,\nint, ...) \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a trong schema.","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"gi\u1ea3 s\u1eed ki\u1ec3u int 8B, string 32B, th\xec h\xe0ng tr\xean s\u1ebd c\xf3 size = 8 + 32 = 40 Byte (T\u1ea5t nhi\xean l\xe0 DB s\u1ebd h\u1ed7 tr\u1ee3 dynamic size cho c\xe1c ki\u1ec3u d\u1eef li\u1ec7u, nh\u01b0ng m\xecnh s\u1ebd b\u1ecf qua \u0111\u1ec3 \u0111\u01a1n gi\u1ea3n cho c\xe1c t\xednh to\xe1n sau n\xe0y)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"PAGE"})," th\u01b0\u1eddng c\xf3 size = 4096B. Tu\u1ef3 thu\u1ed9c v\xe0o c\u1ea5u tr\xfac d\u1eef li\u1ec7u c\u1ee7a AccessMethod (heapfile ho\u1eb7c\nBtree), m\xe0 c\xe1ch ch\xfang ta l\u01b0u tr\u1eef d\u1eef li\u1ec7u c\u0169ng kh\xe1c nhau. V\xed d\u1ee5 v\u1edbi heap-file","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["M\u1ed7i PAGE s\u1ebd \u0111\u1ec3 d\xe0nh 8 Byte \u0111\u1ec3 l\u01b0u tr\u1eef ",(0,t.jsx)(e.code,{children:"metadata"}),", v\xed d\u1ee5: s\u1ed1 tuples hi\u1ec7n t\u1ea1i, v\xe0 s\u1ed1 tuples t\u1ed1i\n\u0111a c\xf3 th\u1ec3 l\u01b0u tr\u1eef."]}),"\n",(0,t.jsx)(e.li,{children:"C\xe1c tuple \u0111\u01b0\u1ee3c l\u01b0u li\xean ti\u1ebfp v\u1edbi nhau."}),"\n",(0,t.jsx)(e.li,{children:"V\u1edbi TUPLE c\xf3 size l\xe0 40 Byte, th\xec 1 PAGE s\u1ebd l\u01b0u \u0111\u01b0\u1ee3c (4096 - 8) / 40 = 102 tuple. v\u1edbi 8 Byte\ncho metadata."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"FILE"})," th\xec bao g\u1ed3m nhi\u1ec1u PAGE."]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.img,{alt:"heapfile",src:i(1576).Z+"",width:"962",height:"521"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"access-method-l\xe0-g\xec-",children:"Access Method l\xe0 g\xec ?"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["L\xe0 c\xe1ch m\xe0 ch\xfang ta read, write d\u1eef li\u1ec7u t\u1eeb disk l\xean memory.","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"HeapFile: L\u01b0u tr\u1eef d\u1eef li\u1ec7u li\xean ti\u1ebfp nhau, \u0111\u01a1n gi\u1ea3n."}),"\n",(0,t.jsxs)(e.li,{children:["Btree: H\u1ed7 tr\u1ee3 range query.","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["B\u1ea1n c\xf3 th\u1ec3 \u0111\u1eb7t c\xe2u h\u1ecfi t\u1ea1i sao ko d\xf9ng Binary search tree, m\xe0 ph\u1ea3i d\xf9ng Btree, th\xec m\xecnh c\xf3 th\u1ec3 gi\u1ea3i th\xedch ng\u1eafn g\u1ecdn, tr\u1ecdng t\xe2m l\xe0:","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"C\xe2y BST th\xec cao h\u01a1n c\xe2y BTree, d\u1eabn t\u1edbi Btree gi\xfap ch\xfang ta gi\u1ea3m s\u1ed1 l\u1ea7n truy c\u1eadp disk, v\xec m\u1ed7i l\u1ea7n truy c\u1eadp disk l\xe0 r\u1ea5t t\u1ed1n k\xe9m."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"HashIndex: H\u1ed7 tr\u1ee3 equal query, kh\xf4ng h\u1ed7 tr\u1ee3 range query."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"v\u1eady-khi-1-file-l\xean-t\u1edbi-h\xe0ng-terabyte-ch\xfang-ta-c\xf3-load-to\xe0n-b\u1ed9-file-t\u1eeb-disk-v\xe0o-memory-kh\xf4ng-",children:"V\u1eady khi 1 File l\xean t\u1edbi h\xe0ng terabyte, ch\xfang ta c\xf3 load to\xe0n b\u1ed9 file t\u1eeb disk v\xe0o memory kh\xf4ng ?"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["R\xf5 r\xe0ng l\xe0 kh\xf4ng th\u1ec3, v\u1eady n\xean ch\xfang ta s\u1ebd d\xf9ng ",(0,t.jsx)(e.code,{children:"BUFFER_POOL"}),". BUFFER_POOL kh\xf4ng ch\u1ec9 qu\u1ea3n l\xfd PAGE\ncho 1 FILE duy nh\u1ea5t."]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.img,{alt:"bufferpool",src:i(2569).Z+"",width:"550",height:"686"})}),"\n",(0,t.jsxs)(e.li,{children:["B\u1ea1n c\xf3 th\u1ec3 th\u1ea5y bufferpool \u0111\u1ec3 l\u01b0u c\xe1c page \u0111ang \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng, n\u1ebfu PAGE \u0111\u01b0\u1ee3c ch\u1ec9nh s\u1eeda, ta g\u1ecdi \u0111\xf3\nl\xe0 ",(0,t.jsx)(e.code,{children:"DIRTY PAGE"}),".","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Khi bufferpool \u0111\u1ea7y, m\xe0 l\u1ea1i mu\u1ed1n load c\xe1c PAGE m\u1edbi l\xean, PAGE kh\xf4ng ph\u1ea3i l\xe0 DirtyPage s\u1ebd \u0111\u01b0\u1ee3c \u01b0u\nti\xean xo\xe1 tr\u01b0\u1edbc."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"v\u1eady-n\u1ebfu-client-y\xeau-c\u1ea7u-1-l\u1ec7nh-order-by-tr\xean-to\xe0n-b\u1ed9-record-sau-\u0111\xf3-l\u1ea5y-ra-100-record-\u0111\u1ea7u-ti\xean-th\xec-ch\xfang-ta-x\u1eed-l\xfd-nh\u01b0-th\u1ebf-n\xe0o-",children:"V\u1eady n\u1ebfu client y\xeau c\u1ea7u 1 l\u1ec7nh order by tr\xean to\xe0n b\u1ed9 record, sau \u0111\xf3 l\u1ea5y ra 100 record \u0111\u1ea7u ti\xean th\xec ch\xfang ta x\u1eed l\xfd nh\u01b0 th\u1ebf n\xe0o ?"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"    SELECT *\n    FROM student\n    ORDER BY id LIMIT 100;\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Ch\xfang ta s\u1ebd s\u1eed d\u1ee5ng ",(0,t.jsx)(e.code,{children:"MERGE-SORT"}),".","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["b\u1ea1n c\xf3 th\u1ec3 xem r\xf5 h\u01a1n \u1edf \u0111\xe2y: ",(0,t.jsx)(e.a,{href:"https://www.youtube.com/watch?v=F9XmmS8rL4c",children:"https://www.youtube.com/watch?v=F9XmmS8rL4c"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"nghi\xean-c\u1ee9u-s\xe2u-h\u01a1n-v\u1ec1-sql-sql-h\u1ed7-tr\u1ee3-c\xe1c-operator-n\xe0o-",children:"Nghi\xean c\u1ee9u s\xe2u h\u01a1n v\u1ec1 SQL, SQL h\u1ed7 tr\u1ee3 c\xe1c Operator n\xe0o ?"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Operators","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Insert, Delete"}),"\n",(0,t.jsx)(e.li,{children:"Filter, Join"}),"\n",(0,t.jsx)(e.li,{children:"Aggregate (min, max, sum, avg, count)"}),"\n",(0,t.jsx)(e.li,{children:"Project, Order by, Limit"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"\u201cIterator\u201d model \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng tr\xean operators \u0111\u1ec3 ho\u1ea1t \u0111\u1ed9ng c\xf9ng v\u1edbi SQL."}),"\n",(0,t.jsx)(e.li,{children:"\xdd t\u01b0\u1edfng \u1edf \u0111\xe2y l\xe0, ch\xfang ta s\u1ebd so\u1ea1n 1 query b\u1eb1ng c\xe1ch \u0111\u01b0a Operator con v\xe0o Operator cha, v\xed d\u1ee5:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SELECT COUNT(name) FROM t1, t2 WHERE t.name = t2.name AND t.age > 30.\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"(1) fileT1 = NewFile(t)"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"(2) fileT2 = NewFile(t2)"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"(3) join = NewIntJoin(fileT1, fileT2, t.name = t2.name)"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"(4) filter = NewFilter(join, t.age > 30)"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"(5) count = NewAggregate(filter, COUNT)"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"(6) project = NewProject(count, t.name)"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"B\u1ea1n c\xf3 th\u1ec3 t\u01b0\u1edfng t\u01b0\u1ee3ng, 2 file \u0111\u1ea7u ti\xean, v\xed d\u1ee5 file 1 c\xf3 100 records, file 2 c\xf3 50 records, sau khi \u0111i qua operator join"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"t\u1ea1i b\u01b0\u1edbc (3), s\u1ebd c\xf3 5000 records \u0111\u01b0\u1ee3c join v\u1edbi \u0111i\u1ec1u ki\u1ec7n t.name = t2.name, v\xed d\u1ee5 c\xf2n l\u1ea1i 2500 records."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"t\u1ea1i b\u01b0\u1edbc (4), sau khi qua filter1, c\xf3 th\u1ec3 c\xf2n 1000 records"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"t\u1ea1i b\u01b0\u1edbc (5), B\u01b0\u1edbc Aggregate s\u1ebd duy\u1ec7t qua to\xe0n b\u1ed9 record c\xf2n l\u1ea1i (500 record \u1edf b\u01b0\u1edbc 5)"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"N\u1ebfu l\xe0 count th\xec t\u1ea1o 1 bi\u1ebfn \u0111\u1ebfm, m\u1ed7i l\u1ea7n \u0111i qua 1 record th c\u1ed9ng 1 v\xe0o bi\u1ebfn \u0111\u1ebfm"}),"\n",(0,t.jsx)(e.li,{children:"N\u1ebfu l\xe0 sum th\xec t\u1ea1o 1 bi\u1ebfn sum, m\u1ed7i l\u1ea7n \u0111i qua 1 record th\xec c\u1ed9ng th\xeam gi\xe1 tr\u1ecb c\u1ee7a record \u0111\xf3 v\xe0o bi\u1ebfn sum"}),"\n",(0,t.jsx)(e.li,{children:"N\u1ebfu l\xe0 max th\xec lu\xf4n gi\u1eef gi\xe1 tr\u1ecb l\u1edbn nh\u1ea5t, ..."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"T\u1ea1i b\u01b0\u1edbc 6, Operator Aggregate s\u1ebd cho ch\xfang ta th\xeam 1 column v\xe0o record, v\xed d\u1ee5: count(name) = 500, v\xe0 ch\xfang ta s\u1ebd l\u1ea5y \u0111\u01b0\u1ee3c gi\xe1 tr\u1ecb \u0111\xf3 ra."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"C\xe1c b\u01b0\u1edbc tr\xean n\u1ea3y sinh ra 2 b\xe0i to\xe1n m\u1edbi"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["B\u1ea1n c\xf3 th\u1ec3 th\u1ea5y c\xe1c b\u01b0\u1edbc \u1edf tr\xean \u0111ang ch\u01b0a \u0111\u01b0\u1ee3c ",(0,t.jsx)(e.code,{children:"OPTIMIZE"})," ?"]}),"\n",(0,t.jsx)(e.li,{children:"Ph\xe9p Join \u1edf tr\xean \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n nh\u01b0 th\u1ebf n\xe0o ?"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"optimize-query",children:"OPTIMIZE QUERY"}),"\n",(0,t.jsx)(e.h3,{id:"ph\xe9p-join-\u1edf-tr\xean-\u0111\u01b0\u1ee3c-th\u1ef1c-hi\u1ec7n-nh\u01b0-th\u1ebf-n\xe0o-",children:"Ph\xe9p Join \u1edf tr\xean \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n nh\u01b0 th\u1ebf n\xe0o ?"})]})}function o(n={}){const{wrapper:e}={...(0,h.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},2569:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/bufferpool-350deb074faed56f05aaf64e152ef492.png"},6518:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/db-components-ff2baa356e286e89af5728338fcd86d1.png"},1576:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/heapfile-c9baa4f4f5a15645d6e0e10640c9a8a6.png"},1151:(n,e,i)=>{i.d(e,{Z:()=>s,a:()=>l});var t=i(7294);const h={},c=t.createContext(h);function l(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(h):n.components||h:l(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);