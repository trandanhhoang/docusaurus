"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4643],{7604:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(5893),c=t(1151);const r={sidebar_position:2},s="Side effect th\xfa v\u1ecb c\u1ee7a invokeAll trong ExecutorService (Interrupted exception)",a={id:"java-basic/side-effect-of-invokeAll-executor",title:"Side effect th\xfa v\u1ecb c\u1ee7a invokeAll trong ExecutorService (Interrupted exception)",description:"T\xf3m t\u1eaft",source:"@site/docs/java-basic/side-effect-of-invokeAll-executor.md",sourceDirName:"java-basic",slug:"/java-basic/side-effect-of-invokeAll-executor",permalink:"/docs/java-basic/side-effect-of-invokeAll-executor",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"DynamicProxy",permalink:"/docs/java-basic/DynamicProxy"},next:{title:"Kafka",permalink:"/docs/category/kafka"}},o={},l=[{value:"T\xf3m t\u1eaft",id:"t\xf3m-t\u1eaft",level:2},{value:"Code example",id:"code-example",level:2},{value:"Gi\u1ea3i th\xedch",id:"gi\u1ea3i-th\xedch",level:2},{value:"\u1ee8ng d\u1ee5ng.",id:"\u1ee9ng-d\u1ee5ng",level:2},{value:"References",id:"references",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"side-effect-th\xfa-v\u1ecb-c\u1ee7a-invokeall-trong-executorservice-interrupted-exception",children:"Side effect th\xfa v\u1ecb c\u1ee7a invokeAll trong ExecutorService (Interrupted exception)"}),"\n",(0,i.jsx)(n.h2,{id:"t\xf3m-t\u1eaft",children:"T\xf3m t\u1eaft"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ch\xfang ta s\u1ebd t\u1ea1o task \u0111\u1ec3 ch\u1ea1y trong executor service, m\u1eb7c d\xf9 task b\u1ecb cancelled v\xec executor b\u1ecb shutdown, nh\u01b0ng task v\u1eabn ch\u1ea1y ti\u1ebfp m\u1eb7c d\xf9 \u0111\xe3 b\u1ecb interrupt."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"code-example",children:"Code example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class ExecutorServiceTest {\n   public static void main(String[] args) throws InterruptedException, ExecutionException, TimeoutException {\n//Create an ExecutorService for 2 threads\n       java.util.concurrent.ExecutorService executorService = new ThreadPoolExecutor(2, 2, 60, TimeUnit.SECONDS, new ArrayBlockingQueue<>(10));\n// Create 5 tasks\n       MyRunnable task1 = new MyRunnable();\n       MyRunnable task2 = new MyRunnable();\n       MyRunnable task3 = new MyRunnable();\n       MyRunnable task4 = new MyRunnable();\n       MyRunnable task5 = new MyRunnable();\n\n       final List<MyRunnable> tasks = List.of(task1, task2, task3, task4, task5);\n// Pass a list that contains the 5 tasks we created\n       final List<Future<Void>> futures = executorService.invokeAll(tasks, 6, TimeUnit.SECONDS);\n       System.out.println("Futures received");\n\n// Stop the ExecutorService\n       executorService.shutdown();\n\n       try {\n           TimeUnit.SECONDS.sleep(3);\n       } catch (InterruptedException e) {\n           e.printStackTrace();\n       }\n\n       System.out.println(executorService.isShutdown());\n       System.out.println(executorService.isTerminated());\n   }\n\n   public static class MyRunnable implements Callable<Void> {\n\n       @Override\n       public void call() {\n// Add 2 delays. When the ExecutorService is stopped, we will see which delay is in progress when the attempt is made to stop execution of the task\n           try {\n               TimeUnit.SECONDS.sleep(3);\n           } catch (InterruptedException e) {\n               System.out.println("sleep 1: " + e.getMessage());\n           }\n           try {\n               TimeUnit.SECONDS.sleep(2);\n           } catch (InterruptedException e) {\n               System.out.println("sleep 2: " + e.getMessage());\n           }\n           System.out.println("done");\n           return null;\n       }\n   }\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Console-output"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"done\ndone\nFutures received\nsleep 1: sleep interrupted\nsleep 1: sleep interrupted\ndone\ndone\ntrue\ntrue\n"})}),"\n",(0,i.jsx)(n.h2,{id:"gi\u1ea3i-th\xedch",children:"Gi\u1ea3i th\xedch"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Executor nh\u1eadn v\xe0o t\u1ed1i \u0111a 2 task 1 l\xfac."}),"\n",(0,i.jsx)(n.li,{children:"M\u1ed7i task c\u1ee7a ch\xfang s\u1ebd b\u1ecb delay 2 l\u1ea7n, delay \u0111\u1ea7u trong 3s, delay hai trong 2s."}),"\n",(0,i.jsx)(n.li,{children:"Executor s\u1ebd terminate trong 6s."}),"\n",(0,i.jsx)(n.li,{children:"N\xean t\u1eeb log, ch\xfang ta s\u1ebd th\u1ea5y 2 task \u0111\u1ea7u ch\u1ea1y b\xecnh th\u01b0\u1eddng"}),"\n",(0,i.jsx)(n.li,{children:"2 task ti\u1ebfp theo s\u1ebd b\u1ecb interrupt do executor terminate, nh\u01b0ng vi\u1ebft ti\u1ebfp t\u1ee5c ho\xe0n th\xe0nh c\xf4ng vi\u1ec7c."}),"\n",(0,i.jsx)(n.li,{children:"task cu\u1ed1i c\xf9ng b\u1ecb cancelled ho\xe0n to\xe0n."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u1ee9ng-d\u1ee5ng",children:"\u1ee8ng d\u1ee5ng."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Proxy.html",children:"https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Proxy.html"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://viblo.asia/p/class-proxy-trong-java-va-cac-ung-dung-yMnKMYvgK7P",children:"https://viblo.asia/p/class-proxy-trong-java-va-cac-ung-dung-yMnKMYvgK7P"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://codegym.cc/groups/posts/208-dynamic-proxies",children:"https://codegym.cc/groups/posts/208-dynamic-proxies"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const c={},r=i.createContext(c);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);