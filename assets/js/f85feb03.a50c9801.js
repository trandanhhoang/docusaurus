"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3346],{2759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(5893),r=t(1151);const s={sidebar_position:4},a="Merge sort",l={id:"algorithm/merge-sort",title:"Merge sort",description:"- We will learn some keyword, notation, statement in english.",source:"@site/docs/algorithm/merge-sort.md",sourceDirName:"algorithm",slug:"/algorithm/merge-sort",permalink:"/docs/algorithm/merge-sort",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Selection sort",permalink:"/docs/algorithm/selection-sort"},next:{title:"Quick sort",permalink:"/docs/algorithm/quick-sort"}},o={},d=[{value:"Code in java",id:"code-in-java",level:2},{value:"Analysis the algorithm",id:"analysis-the-algorithm",level:2},{value:"Complexity and Analysis the time complexity of average case",id:"complexity-and-analysis-the-time-complexity-of-average-case",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"merge-sort",children:"Merge sort"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We will learn some keyword, notation, statement in english."}),"\n",(0,i.jsxs)(n.li,{children:["Let say we have the following array ",(0,i.jsx)(n.code,{children:"[2,7,4,1,5,3,6]"}),", and we want it sorted in increasing order.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"we will code recursively, using divide and conquer algorithm, that break problem into smaller piece."}),"\n",(0,i.jsx)(n.li,{children:"we will split the array in half until it just have only 1 element."}),"\n",(0,i.jsx)(n.li,{children:"Then we will merge it and sort it at the same time."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"code-in-java",children:"Code in java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public static void main(String[] args) {\n  List<Integer> integers = Arrays.asList(2, 8, 5, 3, 9, 4, 1, 7, 13);\n  int size = integers.size();\n  // TODO\n  int[] array = integers.stream().mapToInt(i -> i).toArray();\n\n  mergeSort(array, 0, size - 1);\n  System.out.println(Arrays.toString(array));\n}\n\nprivate static void mergeSort(int[] integers, int left, int right) {\n  if (right - left <= 0) return;\n\n  int middle = left + (right - left) / 2;\n\n  mergeSort(integers, left, middle);\n  mergeSort(integers, middle + 1, right);\n\n  merge(integers, left, middle, right);\n}\n\nprivate static void merge(int[] array, int left, int middle, int right) {\n  // left = 0, right = 1\n  int sizeLeft = middle - left + 1;\n  int sizeRight = right - middle;\n\n  int[] L = new int[sizeLeft];\n  int[] R = new int[sizeRight];\n\n  for (int i = 0; i < sizeLeft; i++) {\n    L[i] = array[left + i];\n  }\n\n  for (int j = 0; j < sizeRight; j++) {\n    R[j] = array[middle + 1 + j];\n  }\n\n  int l = 0;\n  int r = 0;\n  int k = left;\n\n  while (l < sizeLeft && r < sizeRight) {\n    if (L[l] <= R[r]) {\n      array[k] = L[l];\n      l++;\n    } else {\n      array[k] = R[r];\n      r++;\n    }\n    k++;\n  }\n  while (l < sizeLeft) {\n    array[k] = L[l];\n    l++;\n    k++;\n  }\n  while (r < sizeRight) {\n    array[k] = R[r];\n    r++;\n    k++;\n  }\n\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"analysis-the-algorithm",children:"Analysis the algorithm"}),"\n",(0,i.jsx)(n.h2,{id:"complexity-and-analysis-the-time-complexity-of-average-case",children:"Complexity and Analysis the time complexity of average case"})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var i=t(7294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);