"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1414],{3738:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var a=i(5893),t=i(1151);const c={},r="Apply generic in java",s={id:"java-basic/generic-apply",title:"Apply generic in java",description:"T\xf3m t\u1eaft",source:"@site/docs/java-basic/generic-apply.md",sourceDirName:"java-basic",slug:"/java-basic/generic-apply",permalink:"/docs/java-basic/generic-apply",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u0110\u1ecdc file csv",permalink:"/docs/java-basic/csv"},next:{title:"T\u1ea1o 1 chain handler c\xf3 th\u1ee9 t\u1ef1 trong java",permalink:"/docs/java-basic/make-chain-handler"}},l={},d=[{value:"T\xf3m t\u1eaft",id:"t\xf3m-t\u1eaft",level:2},{value:"Code example",id:"code-example",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"apply-generic-in-java",children:"Apply generic in java"}),"\n",(0,a.jsx)(e.h2,{id:"t\xf3m-t\u1eaft",children:"T\xf3m t\u1eaft"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Apply generic \u0111\u1ec3 t\xe1i s\u1eed d\u1ee5ng class trong t\u01b0\u01a1ng lai."}),"\n",(0,a.jsxs)(e.li,{children:["Ch\xfang ta s\u1ebd vi\u1ebft 1 handler","\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"C\xf3 th\u1ec3 nh\u1eadn v\xe0o nhi\u1ec1u lo\u1ea1i data kh\xe1c nhau."}),"\n",(0,a.jsx)(e.li,{children:"Nh\u01b0ng c\xf9ng th\u1ef1c hi\u1ec7n 1 flow c\xf4ng vi\u1ec7c."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"code-example",children:"Code example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"public class SinhVien{\n\tprivate String name;\n    private int age;\n}\n"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"interface GenericSinhVienProvider<T> c\xf3 2 method"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"getData(T data): tr\u1ea3 v\u1ec1 \u0111\u1ed1i t\u01b0\u1ee3ng SinhVien t\u1eeb 1 ngu\u1ed3n data n\xe0o \u0111\xf3. (T)"}),"\n",(0,a.jsx)(e.li,{children:"apply(Sinhvien info): th\u1ef1c hi\u1ec7n vi\u1ec7c g\xec \u0111\xf3 v\u1edbi \u0111\u1ed1i t\u01b0\u1ee3ng SinhVien, v\xed d\u1ee5 nh\u01b0 l\u01b0u v\xe0o database, ..."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"public interface GenericSinhVienProvider<T>{\n\tSinhVien getData(T data);\n\tvoid apply(Sinhvien info);\n}\n"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"BaseSinhVienRegister s\u1ebd ho\u1ea1t \u0111\u1ed9ng d\u1ef1a v\xe0o 2 method tr\xean."}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"public abstract class BaseSinhVienRegister<T> implements GenericSinhVienProvider<T>{\n\t\tpublic void do(T data){\n            SinhVien sinhVien = getData(data);\n\t\t\tapply(sinhVien);\n\t\t}\n}\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"public class SinhVienFromInputStream extends BaseSinhVienRegister<InputStream>{\n\t\t@Override\n    public SinhVien getData(InputStream data) {\n\t\t\t// Read data from input stream, file, ...\n    }\n\n    @Override\n    @Transactional\n    public void apply(LosRegisterInfo losRegisterInfo) {\n\t\t\t// do Something, save database.\n    }\n}\n"})})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>s,a:()=>r});var a=i(7294);const t={},c=a.createContext(t);function r(n){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),a.createElement(c.Provider,{value:e},n.children)}}}]);