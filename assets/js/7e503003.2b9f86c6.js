"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[410],{8377:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(5893),a=t(1151);const o={sidebar_position:2},r="Vi\u1ebft library v\u1edbi annotation, reflection, aop, springboot",l={id:"java/how-to-write-library-with-java-springboot",title:"Vi\u1ebft library v\u1edbi annotation, reflection, aop, springboot",description:"T\xf3m t\u1eaft",source:"@site/docs/java/how-to-write-library-with-java-springboot.md",sourceDirName:"java",slug:"/java/how-to-write-library-with-java-springboot",permalink:"/docs/java/how-to-write-library-with-java-springboot",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"V\xed d\u1ee5 kafka + java springboot",permalink:"/docs/java/kafka-with-java-springboot-example"},next:{title:"Kafka",permalink:"/docs/kafka/kafka-basic"}},s={},d=[{value:"T\xf3m t\u1eaft",id:"t\xf3m-t\u1eaft",level:2},{value:"Prequisites",id:"prequisites",level:2},{value:"Project structure",id:"project-structure",level:2},{value:"Hi\u1ec7n th\u1ef1c",id:"hi\u1ec7n-th\u1ef1c",level:2},{value:"T\u1ea1o spi",id:"t\u1ea1o-spi",level:3},{value:"T\u1ea1o c\xe1c interface t\u01b0\u01a1ng \u1ee9ng b\xean tr\xean",id:"t\u1ea1o-c\xe1c-interface-t\u01b0\u01a1ng-\u1ee9ng-b\xean-tr\xean",level:4},{value:"T\u1ea1o annotation",id:"t\u1ea1o-annotation",level:3},{value:"T\u1ea1o bean spring",id:"t\u1ea1o-bean-spring",level:3},{value:"c\xe1c implement default",id:"c\xe1c-implement-default",level:4},{value:"T\u1ea1o AOP",id:"t\u1ea1o-aop",level:3},{value:"How to run",id:"how-to-run",level:2},{value:"Improve th\u01b0 vi\u1ec7n tr\xean",id:"improve-th\u01b0-vi\u1ec7n-tr\xean",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"vi\u1ebft-library-v\u1edbi-annotation-reflection-aop-springboot",children:"Vi\u1ebft library v\u1edbi annotation, reflection, aop, springboot"}),"\n",(0,i.jsx)(e.h2,{id:"t\xf3m-t\u1eaft",children:"T\xf3m t\u1eaft"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"H\u01b0\u1edbng d\u1eabn vi\u1ebft 1 th\u01b0 vi\u1ec7n c\u01a1 b\u1ea3n d\xf9ng annotation, reflection, aop, springboot."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"M\u1ee5c \u0111\xedch: check idempotent c\u1ee7a 1 api controller d\u1ef1a tr\xean request param"}),"\n",(0,i.jsx)(e.li,{children:"C\xe1ch ho\u1ea1t \u0111\u1ed9ng: T\u1eeb request \u0111\u1ea7u ti\xean, ch\xfang ta s\u1ebd l\u01b0u key v\xe0o redis, t\u1eeb nh\u1eefng field c\u1ea7n thi\u1ebft, request ti\u1ebfp theo s\u1ebd \u0111\u01b0\u1ee3c ki\u1ec1m tra, n\u1ebfu key \u0111\xe3 t\u1ed3n t\u1ea1i th\xec tr\u1ea3 v\u1ec1 l\u1ed7i."}),"\n",(0,i.jsx)(e.li,{children:"C\xe1ch d\xf9ng: \u0111\xe1nh annotation tr\xean c\xe1c method c\u1ee7a Controller, \u1ee9ng v\u1edbi m\u1ed7i method s\u1ebd c\xf3 1 bean ri\xeang bi\u1ec7t (g\u1ecdi l\xe0 IdempotantEngine- \u0111\u01b0\u1ee3c t\u1ea1o ra t\u1eeb l\xfac kh\u1edfi ch\u1ea1y project), \u0111\u1ec3 l\u1ea5y key, l\u01b0u key, handle exception (ch\xfang ta c\xf3 th\u1ec3 tu\u1ef3 bi\u1ebfn 3 task n\xe0y d\u1ef1a v\xe0o annotation)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'    @Idempotent(\n        id = "abc",\n        index = 1,\n        clazz = Request.class,\n        field = "name",\n        handleIdempotent = @Handle(\n            handlerClass = CustomIdempotentHandler.class)\n        )\n    public void foo(String arg1, Request arg2) {\n        // do some controller thing.\n    }\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\xdd ngh\u0129a c\u1ee7a Annotation tr\xean:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["id: v\xec m\u1ed7i method s\u1ebd c\xf3 1 IdempotantEngine kh\xe1c nhau, ch\xfang ta s\u1ebd t\u1ea1o ra 1 ",(0,i.jsx)(e.code,{children:"Map<String,IdempotantEngine>"}),"v\u1edbi key l\xe0 id \u0111\u1ec3 l\u1ea5y ra engine c\u1ea7n thi\u1ebft."]}),"\n",(0,i.jsxs)(e.li,{children:['index = 1, clazz = Request.class, field = "name"',"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:'Trong request c\xf3 2 field, index = 1 \u0111\u1ec3 x\xe1c \u0111\u1ecbnh ch\xfang ta s\u1ebd l\u1ea5y field th\u1ee9 2, clazz = Request.class + field="name", ch\xfang ta s\u1ebd d\xf9ng reflection \u0111\u1ec3 l\u1ea5y field name l\xe0m key.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["@Handle(handlerClass = CustomIdempotentHandler.class))","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"l\xe0 1 class implement IdempotentHandler, ch\xfang ta c\xf3 th\u1ec3 tu\u1ef3 bi\u1ebfn logic handle exception \u1edf \u0111\xe2y, c\xf3 th\u1ec3 throw, log, kh\xf4ng ph\u1ee5 thu\u1ed9c v\xe0o th\u01b0 vi\u1ec7n"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"C\xe1c class b\u1ed5 sung context b\xean tr\xean"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class Request {\n    String name;\n    Integer age;\n}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'public class CustomIdempotentHandler implements IdempotentHandler {\n    public CustomIdempotentHandler() {\n    }\n\n    public Object handle(Object[] args) {\n        System.out.println("hoang is here");\n        throw new RuntimeException("idempotent detected");\n    }\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"prequisites",children:"Prequisites"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Annotation"}),"\n",(0,i.jsx)(e.li,{children:"Reflection"}),"\n",(0,i.jsx)(e.li,{children:"Bean trong Springboot"}),"\n",(0,i.jsx)(e.li,{children:"Aspect Oriented Programming"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"project-structure",children:"Project structure"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["spi: logic ch\xednh c\u1ee7a th\u01b0 vi\u1ec7n","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"implementation logic code c\u01a1 b\u1ea3n \u0111\u1ec3 l\u01b0u key, check idempotent, tr\u1ea3 l\u1ed7i."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["annotation: ch\u1ee9a annotation (Idempotent) \u0111\u1ec3 \u0111\xe1nh d\u1ea5u tr\xean method c\u1ee7a controller, v\xe0 annotation con (Handle) c\u1ee7a n\xf3.","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"annotation con gi\xfap ch\xfang ta thay \u0111\u1ed5i c\u01a1 ch\u1ebf persistant key (redis, database, memory, ...) tu\u1ef3 th\xedch."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["spring: constructor \u0111\u1ec3 t\u1ea1o c\xe1c bean c\u1ee7a spi","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"T\u1ea1o c\xe1c bean trong th\u01b0 vi\u1ec7n t\u1eeb project ch\xednh (\u1ee9ng v\u1edbi m\u1ed7i method s\u1ebd c\xf3 1 bean ri\xeang bi\u1ec7t \u0111\u01b0\u1ee3c t\u1ea1o ra \u0111\u1ec3 l\u1ea5y key, l\u01b0u key, handle exception (ch\xfang ta c\xf3 th\u1ec3 tu\u1ef3 bi\u1ebfn 3 vi\u1ec7c n\xe0y d\u1ef1a v\xe0o annotation)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"aop: logic aop \u0111\u1ec3 g\u1ecdi ch\xednh x\xe1c spi d\u1ef1a tr\xean annotation"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"hi\u1ec7n-th\u1ef1c",children:"Hi\u1ec7n th\u1ef1c"}),"\n",(0,i.jsx)(e.h3,{id:"t\u1ea1o-spi",children:"T\u1ea1o spi"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"package com.example.libselflearn.library;\n\npublic class SimpleIdempotentEngine implements IdempotentEngine {\n    private final IdempotentKeyResolver idempotentKeyResolver;\n    private final IdempotentStorage idempotentStorage;\n    private final IdempotentHandler idempotentHandler;\n\n    public SimpleIdempotentEngine(IdempotentKeyResolver idempotentKeyResolver, IdempotentStorage idempotentStorage, IdempotentHandler idempotentHandler) {\n        this.idempotentKeyResolver = idempotentKeyResolver;\n        this.idempotentStorage = idempotentStorage;\n        this.idempotentHandler = idempotentHandler;\n    }\n\n    public void execute(Object[] args) {\n        String key = this.idempotentKeyResolver.resolve(args);\n        this.idempotentStorage.store(key);\n        this.idempotentHandler.handle(args);\n    }\n}\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Gi\u1ea3i th\xedch:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["M\u1ee5c \u0111\xedch d\xf9ng interface \u0111\u1ec3 ch\xfang ta c\xf3 th\u1ec3 d\u1ec5 d\xe0ng thay \u0111\u1ed5i implement logic code b\xean trong.","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"IdempotentKeyResolver \u0111\u1ec3 l\u1ea5y key t\u1eeb c\xe1c field c\u1ee7a request."}),"\n",(0,i.jsx)(e.li,{children:"IdempotentStorage \u0111\u1ec3 l\u1ea5y l\u01b0u key v\xe0o redis, ho\u1eb7c database."}),"\n",(0,i.jsx)(e.li,{children:"IdempotentHandler \u0111\u1ec3 throw exception ho\u1eb7c ch\u1ec9 \u0111\u01a1n gi\u1ea3n l\xe0 log."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"t\u1ea1o-c\xe1c-interface-t\u01b0\u01a1ng-\u1ee9ng-b\xean-tr\xean",children:"T\u1ea1o c\xe1c interface t\u01b0\u01a1ng \u1ee9ng b\xean tr\xean"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public interface IdempotentEngine {\n  void execute(Object[] args);\n}\npublic interface IdempotentKeyResolver {\n  String resolve(Object[] args);\n}\npublic interface IdempotentHandler {\n  Object handle(Object[] args);\n}\npublic interface IdempotentStorage {\n  void store(String key);\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"t\u1ea1o-annotation",children:"T\u1ea1o annotation"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"T\u1eeb m\u1ed7i annotation tr\xean method Controller, ch\xfang ta s\u1ebd t\u1ea1o ra 1 IdempotentEngine t\u01b0\u01a1ng \u1ee9ng."}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"@Retention(RetentionPolicy.RUNTIME)\n@Target({ElementType.METHOD})\npublic @interface Idempotent {\n    String id();\n\n    int index();\n\n    Class clazz();\n\n    String s();\n\n    Handle handleIdempotent() default @Handle;\n}\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"id: s\u1ebd \u0111\u01b0\u1ee3c d\xf9ng l\xe0m key \u0111\u1ec3 l\u1ea5y ra IdempotentEngine t\u01b0\u01a1ng \u1ee9ng t\u1eeb IdempotentEngineRegistry"}),"\n",(0,i.jsx)(e.li,{children:"index, clazz, s: s\u1ebd \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 l\u1ea5y ra key t\u1eeb request"}),"\n",(0,i.jsx)(e.li,{children:"handleIdempotent: s\u1ebd \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 thay \u0111\u1ed5i logic handle exception, m\u1eb7c \u0111\u1ecbnh s\u1ebd l\xe0 IdempotentHandlerImpl (xem annotation b\xean d\u01b0\u1edbi)"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"@Retention(RetentionPolicy.RUNTIME)\n@Target({ElementType.ANNOTATION_TYPE})\npublic @interface Handle {\n    Class<? extends IdempotentHandler> handlerClass() default IdempotentHandlerImpl.class;\n}\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"IdempotentHandlerImpl l\xe0 1 class implement IdempotentHandler, xem m\u1ee5c 'c\xe1c implement default'"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"t\u1ea1o-bean-spring",children:"T\u1ea1o bean spring"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"class Constructor s\u1ebd \u0111\u01b0\u1ee3c t\u1ea1o Bean b\u1eb1ng c\xe1ch d\xf9ng @Import trong project ch\xednh."}),"\n",(0,i.jsxs)(e.li,{children:["\u0110\xe2y s\u1ebd l\xe0 2 bean \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o \u0111\u1ea7u ti\xean","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["idempotentEngineRegistry() s\u1ebd qu\xe9t c\xe1c bean trong project ch\xednh, t\u1ea1o ra 1 ",(0,i.jsx)(e.code,{children:"map<String, IdempotentEngine>"})," \u0111\u01b0\u1ee3c l\u01b0u trong IdempotentEngineRegistry."]}),"\n",(0,i.jsx)(e.li,{children:"initIdempotentApo() s\u1ebd \u0111\u01b0\u1ee3c truy\u1ec1n v\xe0o IdempotentEngineRegistry, xem m\u1ee5c t\u1ea1o AOP b\xean d\u01b0\u1edbi \u0111\u1ec3 hi\u1ec3u r\xf5 h\u01a1n"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class Constructor {\n    public Constructor() {\n    }\n\n    @Bean\n    public IdempotentEngineRegistry idempotentEngineRegistry(BeanFactory beanFactory) {\n        return new IdempotentEngineRegistry(beanFactory);\n    }\n\n    @Bean\n    public IdempotentAop initIdempotentApo(IdempotentEngineRegistry idempotentEngineRegistry) {\n        return new IdempotentAop(idempotentEngineRegistry);\n    }\n}\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["class IdempotentEngineRegistry s\u1ebd l\xe0 n\u01a1i t\u1ea1o engine t\u1eeb c\xe1c th\xf4ng tin tr\xean annotation, sau \u0111\xf3 b\u1ecf v\xe0o ",(0,i.jsx)(e.code,{children:"Map<String, IdempotentEngine>"}),", IdempotentEngine s\u1ebd \u0111\u01b0\u1ee3c l\u1ea5y ra b\u1eb1ng AOP, m\u1ed7i khi method c\u1ee7a Controller \u0111\u01b0\u1ee3c g\u1ecdi."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'package com.example.libselflearn.library.spring;\n\nimport com.example.libselflearn.library.IdempotentEngine;\nimport com.example.libselflearn.library.IdempotentHandler;\nimport com.example.libselflearn.library.IdempotentKeyResolver;\nimport com.example.libselflearn.library.IdempotentStorage;\nimport com.example.libselflearn.library.SimpleIdempotentEngine;\nimport com.example.libselflearn.library.annotations.Handle;\nimport com.example.libselflearn.library.annotations.Idempotent;\nimport com.example.libselflearn.library.impl.IdempotentKeyResolverImpl;\nimport com.example.libselflearn.library.impl.IdempotentStorageImpl;\nimport java.lang.annotation.Annotation;\nimport java.util.HashMap;\nimport java.util.Iterator;\nimport java.util.Map;\nimport java.util.Set;\nimport org.springframework.beans.factory.BeanFactory;\nimport org.springframework.beans.factory.annotation.AnnotatedBeanDefinition;\nimport org.springframework.beans.factory.config.AutowireCapableBeanFactory;\nimport org.springframework.beans.factory.config.BeanDefinition;\nimport org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;\nimport org.springframework.core.annotation.MergedAnnotation;\nimport org.springframework.core.type.AnnotationMetadata;\nimport org.springframework.core.type.MethodMetadata;\n\npublic class IdempotentEngineRegistry {\n  public final Map<String, IdempotentEngine> enginesMap = new HashMap();\n  private final AutowireCapableBeanFactory beanFactory;\n\n  public IdempotentEngineRegistry(BeanFactory beanFactory) {\n    this.beanFactory = (AutowireCapableBeanFactory)beanFactory;\n    ClassPathScanningCandidateComponentProvider scanner = new ClassPathScanningCandidateComponentProvider(true);\n    Set<BeanDefinition> beanDefinitionSet = scanner.findCandidateComponents("com.example.libselflearn");\n\n    BeanDefinition beanDefinition;\n    for(Iterator var4 = beanDefinitionSet.iterator(); var4.hasNext(); System.out.println(beanDefinition)) {\n      beanDefinition = (BeanDefinition)var4.next();\n      if (beanDefinition instanceof AnnotatedBeanDefinition) {\n        AnnotationMetadata annotationMetadata = ((AnnotatedBeanDefinition)beanDefinition).getMetadata();\n        Set<MethodMetadata> methodMetadata = annotationMetadata.getAnnotatedMethods(Idempotent.class.getCanonicalName());\n        Iterator var8 = methodMetadata.iterator();\n\n        while(var8.hasNext()) {\n          MethodMetadata metadata = (MethodMetadata)var8.next();\n          this.createEngine(metadata);\n        }\n      }\n    }\n\n  }\n\n  public void createEngine(MethodMetadata methodMetadata) {\n    MergedAnnotation mergedAnnotation = methodMetadata.getAnnotations().get(Idempotent.class);\n    String key = mergedAnnotation.getString("id");\n    int index = mergedAnnotation.getInt("index");\n    Class clzz = mergedAnnotation.getClass("clazz");\n    String field = mergedAnnotation.getString("s");\n    IdempotentKeyResolver idempotentKeyResolver = this.resolveKeyResolver(mergedAnnotation, index, clzz, field);\n    IdempotentHandler idempotentHandler = this.resolveIdempotentHandler(mergedAnnotation);\n    IdempotentStorage idempotentStorage = new IdempotentStorageImpl();\n    SimpleIdempotentEngine simpleIdempotentEngine = new SimpleIdempotentEngine(idempotentKeyResolver, idempotentStorage, idempotentHandler);\n    this.enginesMap.put(key, simpleIdempotentEngine);\n  }\n\n  private IdempotentKeyResolver resolveKeyResolver(MergedAnnotation mergedAnnotation, int index, Class clzz, String field) {\n    return new IdempotentKeyResolverImpl(index, clzz, field);\n  }\n\n  private IdempotentHandler resolveIdempotentHandler(MergedAnnotation<? extends Annotation> mergedAnnotation) {\n    MergedAnnotation handleAnnotation = mergedAnnotation.getAnnotation("handleIdempotent", Handle.class);\n    return (IdempotentHandler)this.createBean(handleAnnotation.getClass("handlerClass"));\n  }\n\n  private <T> T createBean(Class<T> clazz) {\n    try {\n      return this.beanFactory.getBean(clazz);\n    } catch (Exception var3) {\n      return this.beanFactory.createBean(clazz);\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(e.h4,{id:"c\xe1c-implement-default",children:"c\xe1c implement default"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class IdempotentKeyResolverImpl implements IdempotentKeyResolver {\n    private int index;\n    private Class clzz;\n    private String field;\n\n    public IdempotentKeyResolverImpl(int index, Class clzz, String field) {\n        this.index = index;\n        this.field = field;\n        this.clzz = clzz;\n    }\n\n    public String resolve(Object[] args) {\n        try {\n            Field nameField = this.clzz.getDeclaredField(this.field);\n            nameField.setAccessible(true);\n            return (String)nameField.get(args[this.index]);\n        } catch (IllegalAccessException | NoSuchFieldException var3) {\n            throw new RuntimeException(var3);\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'public class IdempotentHandlerImpl implements IdempotentHandler {\n    public IdempotentHandlerImpl() {\n    }\n\n    public Object handle(Object[] args) {\n        System.out.println("huy is here");\n        return null;\n    }\n}\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'public class IdempotentStorageImpl implements IdempotentStorage {\n    public IdempotentStorageImpl() {\n    }\n\n    public void store(String key) {\n        System.out.println("I will save key: " + key);\n    }\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"t\u1ea1o-aop",children:"T\u1ea1o AOP"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"M\u1ee5c \u0111\xedch: ch\xfang ta s\u1ebd ch\u1ea1y method beforeIdempotentAnnotation m\u1ed7i khi method c\u1ee7a Controller \u0111\u01b0\u1ee3c g\u1ecdi (ch\u1ea1y tr\u01b0\u1edbc)."}),"\n",(0,i.jsxs)(e.li,{children:["IdempotentAop s\u1ebd ch\u1ee9a IdempotentEngineRegistry (ch\u1ee9a ",(0,i.jsx)(e.code,{children:"Map<String,IdempotentEngine>"}),"), \u0111\u1ec3 l\u1ea5y \u0111\xfang engine c\u1ea7n thi\u1ebft t\u1eeb id (l\u1ea5y t\u1eeb JoinPoint)"]}),"\n",(0,i.jsx)(e.li,{children:"JoinPoint l\xe0 1 kh\xe1i ni\u1ec7m c\u1ee7a AOP, c\xf3 th\u1ec3 l\u1ea5y ra c\xe1c data c\u1ea7n thi\u1ebft t\u1eeb method c\u1ee7a Controller."}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'@Aspect\npublic class IdempotentAop {\n    private final IdempotentEngineRegistry idempotentEngineRegistry;\n\n    public IdempotentAop(IdempotentEngineRegistry idempotentEngineRegistry) {\n        this.idempotentEngineRegistry = idempotentEngineRegistry;\n    }\n\n    @Before("@annotation(com.example.libselflearn.library.annotations.Idempotent)")\n    public void beforeIdempotentAnnotation(JoinPoint joinPoint) {\n        Object[] args = joinPoint.getArgs();\n        MethodSignature signature = (MethodSignature)joinPoint.getSignature();\n        Idempotent annotation = (Idempotent)signature.getMethod().getDeclaredAnnotation(Idempotent.class);\n        String key = annotation.id();\n        ((IdempotentEngine)this.idempotentEngineRegistry.enginesMap.get(key)).execute(args);\n    }\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"how-to-run",children:"How to run"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"T\u1ea1o 1 bean class d\xf9ng @Import"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"@Configuration\n@Import({Constructor.class})\npublic class IdempotentConfig {\n    public IdempotentConfig() {\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"improve-th\u01b0-vi\u1ec7n-tr\xean",children:"Improve th\u01b0 vi\u1ec7n tr\xean"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["IdempotentKeyResolver d\xf9ng SpEL \u0111\u1ec3 c\xf3 th\u1ec3 l\u1ea5y field t\u1eeb request params d\u1ec5 d\xe0ng h\u01a1n d\xf9ng reflection.","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://docs.spring.io/spring-framework/docs/3.0.x/reference/expressions.html",children:"https://docs.spring.io/spring-framework/docs/3.0.x/reference/expressions.html"})}),"\n"]}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>r});var i=t(7294);const a={},o=i.createContext(a);function r(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);