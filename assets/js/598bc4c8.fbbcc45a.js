"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5321],{9756:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=n(5893),s=n(1151);const l={sidebar_position:1},r="Bubble sort",o={id:"algorithm/bubble-sort",title:"Bubble sort",description:"- We will learn some keyword, notation, statement in english.",source:"@site/docs/algorithm/bubble-sort.md",sourceDirName:"algorithm",slug:"/algorithm/bubble-sort",permalink:"/docs/algorithm/bubble-sort",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DSA",permalink:"/docs/category/dsa"},next:{title:"Heap",permalink:"/docs/algorithm/heap"}},a={},c=[{value:"Code in java",id:"code-in-java",level:2},{value:"Analysis the algorithm",id:"analysis-the-algorithm",level:2},{value:"Complexity",id:"complexity",level:2},{value:"Analysis the time complexity of average case",id:"analysis-the-time-complexity-of-average-case",level:2}];function h(e){const i={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"bubble-sort",children:"Bubble sort"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"We will learn some keyword, notation, statement in english."}),"\n",(0,t.jsxs)(i.li,{children:["Let say we have the following array ",(0,t.jsx)(i.code,{children:"[2,7,4,1,5,3,6]"}),", and we want it sorted in increasing order."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"code-in-java",children:"Code in java"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"public static void main(String[] args) {\n        List<Integer> integers = Arrays.asList(2,7,4,1,5,3,6);\n\n        int size = integers.size();\n        \n        System.out.println(integers);\n        for (int i = size-1; i > 0; i--) {\n            for (int j = 0; j < i; j++) {\n                if(integers.get(j) > integers.get(j+1)){\n                    swap(integers,j,j+1);\n                }\n            }\n            System.out.println(integers);\n        }\n    }\n    private static void swap(List<Integer> integers, int left, int right){\n        int temp = integers.get(left);\n        integers.set(left, integers.get(right));\n        integers.set(right,temp);\n    }\n"})}),"\n",(0,t.jsx)(i.h2,{id:"analysis-the-algorithm",children:"Analysis the algorithm"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The outer loop is start at the end of the array, index I."}),"\n",(0,t.jsx)(i.li,{children:"The inner loop is start at the front of the array, index J."}),"\n",(0,t.jsx)(i.li,{children:"The purpose is moving the largest element into the last index I after each inner loop. In the inner loop,  we will compare the element at J with the right element of it, J plus 1. If the left is larger, we swap it. J will finish when J equal I."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"complexity",children:"Complexity"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Now, we will analyze the time complexity of all case (worst case, average case, best case)."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"we have two operation here, comparison and swap."}),"\n",(0,t.jsx)(i.li,{children:"if we choose the abstract operation is comparison, the time complexity is same at all case."}),"\n",(0,t.jsx)(i.li,{children:"so, we will choose the swap operation is the abstract operation."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"For the best case"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"is the sorted list [1,2,3,4,5], we do no swap"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"For the worst case"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"is the reverse sorted list [5,4,3,2,1], we do swap each time we do the comparison."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"For the average case"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"we do some, we don't some."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"The space complexity is Big O of one 'O(1)', because we do not require any additional memory space."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"analysis-the-time-complexity-of-average-case",children:"Analysis the time complexity of average case"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.img,{alt:"bubble sort time complexity",src:n(982).Z+"",width:"1536",height:"2048"})}),"\n",(0,t.jsxs)(i.li,{children:["Sigma i from 1 to n, Sigma j from 0 to i-1 of Expected value","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"with: Expected value = sum of possibilities times chance per possibilities"}),"\n",(0,t.jsxs)(i.li,{children:["possibilities = ",(0,t.jsx)(i.code,{children:"[0,1]"})," is we do the swap or not."]}),"\n",(0,t.jsxs)(i.li,{children:["chance per possibilities = 1/2 (example, 1/6 with dice) (we call 1/2 = one over two)","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Now we have ",(0,t.jsx)(i.code,{children:"E[x]"})," = 1 * (1/2) = 1/2 = (one times one over two)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"After do some calculation, we drop the weak factor, we will have the time complexity is Big O of n square = O(n^2) = Big O of n hat 2= Big O of n to the power of 2, where n is the size of array list."}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},982:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/bubble-f58c2096cc1c17e7f77ac29474811417.jpeg"},1151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>r});var t=n(7294);const s={},l=t.createContext(s);function r(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);