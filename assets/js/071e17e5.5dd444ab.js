"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9683],{7320:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>g});var r=e(5893),i=e(1151);const s={},a="Longest Substring Without Repeating Character",o={id:"algorithm/lsswprc",title:"Longest Substring Without Repeating Character",description:"Code in java",source:"@site/docs/algorithm/lsswprc.md",sourceDirName:"algorithm",slug:"/algorithm/lsswprc",permalink:"/docs/algorithm/lsswprc",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Longest Increasing Subsequence.",permalink:"/docs/algorithm/lis"},next:{title:"Max Sum Distinct Sub Array",permalink:"/docs/algorithm/msdsa"}},l={},g=[{value:"Code in java",id:"code-in-java",level:2},{value:"Analysis complexity of algorithm.",id:"analysis-complexity-of-algorithm",level:2}];function c(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"longest-substring-without-repeating-character",children:"Longest Substring Without Repeating Character"}),"\n",(0,r.jsx)(n.h2,{id:"code-in-java",children:"Code in java"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public static void main(String[] args) {\n        System.out.println(lengthOfLongestSubstring("abcabcbb")==3);\n        System.out.println(lengthOfLongestSubstring("bbbbb")==1);\n        System.out.println(lengthOfLongestSubstring("pwwkew")==3);\n        System.out.println(lengthOfLongestSubstring("")==0);\n        System.out.println(lengthOfLongestSubstring(" ")==1);\n        System.out.println(lengthOfLongestSubstring("au")==2);\n        System.out.println(lengthOfLongestSubstring("dvdf")==3);\n        System.out.println(lengthOfLongestSubstring("tmmzuxt")==5);\n        System.out.println(lengthOfLongestSubstring("aabaab!bb")==3);\n    }\n\n    public static int lengthOfLongestSubstring(String s) {\n        int left = 0;\n        Map<Character, Integer> map = new HashMap<>();\n\n        int max = 0;\n        int res = 0;\n\n        for (int right = 0; right < s.length(); right++) {\n            if (!map.containsKey(s.charAt(right))) {\n                map.put(s.charAt(right), right);\n                res++;\n            } else {\n                int oldIndex = map.get(s.charAt(right));\n                if (left <= oldIndex && oldIndex <= right) {\n                    left = map.get(s.charAt(right)) + 1;\n                    map.put(s.charAt(right),right);\n                    max = Math.max(max, res);\n                    res = right-left+1;\n                }else{\n                    map.put(s.charAt(right),right);\n                    res++;\n                }\n            }\n        }\n        max = Math.max(max,res);\n        return max;\n    }\n'})}),"\n",(0,r.jsx)(n.h2,{id:"analysis-complexity-of-algorithm",children:"Analysis complexity of algorithm."}),"\n",(0,r.jsx)(n.p,{children:"Time: O(n)"})]})}function h(t={}){const{wrapper:n}={...(0,i.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}},1151:(t,n,e)=>{e.d(n,{Z:()=>o,a:()=>a});var r=e(7294);const i={},s=r.createContext(i);function a(t){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function o(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),r.createElement(s.Provider,{value:n},t.children)}}}]);