Object.assign(window.search, {"doc_urls":["introduction.html#introduction","git/git.html#git","git/git.html#参考链接","web/web.html#web","web/react.html#react--antd-入门教程","web/react.html#说明","web/react.html#相关依赖","OS/OS.html#operating-system","OS/OS.html#进程与线程","OS/OS.html#进程","OS/OS.html#线程","OS/OS.html#处理器","OS/OS.html#linux--windows--posix-中的进程与线程","OS/OS.html#进程同步与互斥","OS/OS.html#进程间通信","OS/OS.html#linux进程间通信","OS/OS.html#windows进程间通信","OS/OS.html#经典ipc问题"],"index":{"documentStore":{"docInfo":{"0":{"body":12,"breadcrumbs":1,"title":1},"1":{"body":3,"breadcrumbs":1,"title":1},"10":{"body":2,"breadcrumbs":0,"title":0},"11":{"body":10,"breadcrumbs":0,"title":0},"12":{"body":3,"breadcrumbs":3,"title":3},"13":{"body":4,"breadcrumbs":0,"title":0},"14":{"body":0,"breadcrumbs":0,"title":0},"15":{"body":0,"breadcrumbs":1,"title":1},"16":{"body":0,"breadcrumbs":1,"title":1},"17":{"body":0,"breadcrumbs":1,"title":1},"2":{"body":4,"breadcrumbs":0,"title":0},"3":{"body":39,"breadcrumbs":1,"title":1},"4":{"body":2,"breadcrumbs":3,"title":2},"5":{"body":12,"breadcrumbs":1,"title":0},"6":{"body":6,"breadcrumbs":1,"title":0},"7":{"body":1,"breadcrumbs":2,"title":2},"8":{"body":0,"breadcrumbs":0,"title":0},"9":{"body":1,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"本文档为清华电子系学生科协 2020 年暑期培训 仓库 中各部分内容介绍及相关依赖的简要安装说明。 培训所用的文档、教学用 PPT 及相关仓库与依赖链接基本上可以在仓库中找到。 EESAST Training 2020 由 EESAST 采用 知识共享 署名-相同方式共享 4.0 国际 许可协议进行许可。 多数内容将以 CC-BY-SA 4.0 进行许可，部分培训内容的作者可能会有特殊许可，若有需要还请注意。 培训内容主要分为三个大部分： 基础工具 Git, Docker 队式开发技术栈 网站开发技术栈 具体内容还请参阅各章说明","breadcrumbs":"Introduction","id":"0","title":"Introduction"},"1":{"body":"Git 是一个分布式版本管理系统，虽然设计上可能存在一些问题，但不妨碍其成为如今使用最广的地位。软件部的开发采取 Git 进行版本管理，也推荐大家将 Git 应用到各种需要版本管理的地方。 课件","breadcrumbs":"Git","id":"1","title":"Git"},"10":{"body":"线程（Thread）进一步减小了程序并发执行的时空开销，是轻量级进程。进程是资源分配的单位，线程是处理器调度的单位，同一个进程的多个线程共享资源。 用户级线程 vs 内核级线程","breadcrumbs":"线程","id":"10","title":"线程"},"11":{"body":"处理器状态：核心态（Kernel mode）与用户态（User mode），通过陷入（Trap）与修改程序状态字（PSW）互相切换。 CPU的一个核心上，同一时间片只能执行一个线程。操作系统在单核上实现并行的方式是通过处理器调度，使得各线程轮流执行，实现宏观并行。操作系统的调度需要陷入核心态，保存寄存器、堆栈，同时cache需要更新，因此有一定时间开销。 调度的时刻（抢先vs非抢先）： 创建一个新进程后 一个进程运行完毕后 中断 一个进程被阻塞 时间片轮转 对于计算密集型任务，频繁调度不划算；而对于IO密集型任务，调度是有较大收益的。 原语（primitive）：由若干条指令构成的 “原子操作（atomic operation）” 过程 ，作为一个整体而不可分割——要么全都完成 ，要么全都不做 要么全都不做 要么全都不做 。许多系统调用都是原语。原语可以避免因调度而被打断。 需要注意的是，C或其它编程语言的一条指令可能由多个汇编语句构成，而处理器执行汇编指令中都可能发生调度，因此同一条指令可能被打断，发生各种情况。","breadcrumbs":"处理器","id":"11","title":"处理器"},"12":{"body":"Linux无线程概念，但可共享资源的进程可看作线程，相当于内核级线程。 Windows进程是惰性的，无实际作用，线程是调度单位，内核级线程。 POSIX未限定用户级/内核级线程。多线程编程接口标准pthread。","breadcrumbs":"Linux / Windows / POSIX 中的进程与线程","id":"12","title":"Linux / Windows / POSIX 中的进程与线程"},"13":{"body":"禁止中断 进入临界区前执行关闭中断指令，离开临界区后执行开中断。 简单但可靠性差，不适合多处理器。 严格轮转法 进程严格轮流进入临界区。 忙等待，效率较低，且可能在临界区外阻塞别的进程。 Petersen算法 可以正常工作的解决互斥问题的算法，仍使用锁。 忙等待，效率较低。 硬件指令方法 使用硬件提供不被打断的单条指令读写共享变量。 适用于任意数目进程，且较简单，但仍有忙等待。 信号量 使用原语访问信号量管理资源。 不必忙等，效率较高，但信号量的控制分布在整个程序中，正确性难以保证。 管程 信号量及其操作的高级语言封装。 效率同信号量一样，易于管理开发。 消息传递 用以实现分布式系统的同步、互斥。 支持分布式系统，但消息传递本身效率较低且不完全可靠。 忙等待不但浪费CPU时间，还会出现优先级反转问题（priority inversion problem）。","breadcrumbs":"进程同步与互斥","id":"13","title":"进程同步与互斥"},"14":{"body":"","breadcrumbs":"进程间通信","id":"14","title":"进程间通信"},"15":{"body":"信号 管道 消息队列 共享内存 套接字","breadcrumbs":"Linux进程间通信","id":"15","title":"Linux进程间通信"},"16":{"body":"管道 共享内存 邮件槽 套接字","breadcrumbs":"Windows进程间通信","id":"16","title":"Windows进程间通信"},"17":{"body":"生产者-消费者问题 读者-写者问题 睡眠理发师问题 哲学家进餐问题","breadcrumbs":"经典IPC问题","id":"17","title":"经典IPC问题"},"2":{"body":"pcottle/learnGitBranching k88hudson/git-flight-rules","breadcrumbs":"参考链接","id":"2","title":"参考链接"},"3":{"body":"这一章将基于 EESAST 目前网站方面使用的技术进行培训，内容主要为以下几个部分： Html, CSS, JavaScript/TypeScript 基础 Node.js 与包管理 React + antd Restful API 与 Express GraphQL + Hasura + Apollo 数据库 MongoDB 和 PostgreSQL Web测试 Mocha + Chai CI/CD 具体内容安排请参照各小节说明 需要用到的工具及相关链接如下： Visual Studio Code Node.js 官方网站 清华 tuna 镜像 tuna 镜像帮助页面 北京外国语大学镜像 北外镜像帮助页面 Yarn React Ant Design Express GraphQL Hasura Apollo MongoDB PostgreSQL Mocha Chai GitHub Actions","breadcrumbs":"web","id":"3","title":"web"},"4":{"body":"本节内容相关代码请访问 react-tutorial ， 文档","breadcrumbs":"Web » React + antd 入门教程","id":"4","title":"React + antd 入门教程"},"5":{"body":"本节将使用 Yarn 作为包管理，用 Node.js 运行一个 React App，结合 antd 组件从头开始搭建一个小游戏作为入门。会介绍以下内容： 什么是 Node.js？如何使用 Yarn 进行包管理？ 如何 初始化 一个使用 TypeScript 的 React 应用？ React 和 antd 分别是干什么的？ 前端需要做些什么？ 小游戏借鉴了 Rust 文档 。对优质文档和启发灵感表示感谢。","breadcrumbs":"Web » 说明","id":"5","title":"说明"},"6":{"body":"本节内容的详细文档提供了使用 CodeSandbox 的在线环境与各阶段代码，如果读者自行配置环境遇到困难，可以尝试使用。出于一些原因，CodeSandbox 中的代码会与文档有些微的区别，但不涉及到本节说要讲解内容的重点。 Node.js 和 Yarn：请参阅 文档 进行安装 React antd","breadcrumbs":"Web » 相关依赖","id":"6","title":"相关依赖"},"7":{"body":"本讲主要介绍操作系统的相关知识，帮助大家快速建立操作系统的宏观认识。需要注意的是，操作系统涉及处理机管理、存储管理、文件系统、IO设备等多个方面，而本讲主要涉及处理机管理中的进程间通信、进程的同步与互斥、死锁等内容，较少涉及其它部分。以下为本讲大纲，详细课件参见仓库。","breadcrumbs":"Operating System","id":"7","title":"Operating System"},"8":{"body":"","breadcrumbs":"进程与线程","id":"8","title":"进程与线程"},"9":{"body":"进程（Process）是具有独立功能的程序在某个数据集合上的一次运行活动，可以理解为操作系统执行的一个程序的实例。 三状态模型：运行、就绪、阻塞。","breadcrumbs":"进程","id":"9","title":"进程"}},"length":18,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"2":{"0":{"2":{"0":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{".":{"0":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"d":{"df":4,"docs":{"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"df":1,"docs":{"3":{"tf":1.0}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"p":{"df":1,"docs":{"5":{"tf":1.0}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"c":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":1,"docs":{"11":{"tf":1.0}},"h":{"a":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"i":{"/":{"c":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}},"s":{"a":{"df":0,"docs":{},"n":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"时":{"df":0,"docs":{},"间":{"df":0,"docs":{},"，":{"df":0,"docs":{},"还":{"df":0,"docs":{},"会":{"df":0,"docs":{},"出":{"df":0,"docs":{},"现":{"df":0,"docs":{},"优":{"df":0,"docs":{},"先":{"df":0,"docs":{},"级":{"df":0,"docs":{},"反":{"df":0,"docs":{},"转":{"df":0,"docs":{},"问":{"df":0,"docs":{},"题":{"df":0,"docs":{},"（":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.0}}}}}}}}}}}}}}}}}}}}}},"的":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"核":{"df":0,"docs":{},"心":{"df":0,"docs":{},"上":{"df":0,"docs":{},"，":{"df":0,"docs":{},"同":{"df":0,"docs":{},"一":{"df":0,"docs":{},"时":{"df":0,"docs":{},"间":{"df":0,"docs":{},"片":{"df":0,"docs":{},"只":{"df":0,"docs":{},"能":{"df":0,"docs":{},"执":{"df":0,"docs":{},"行":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"线":{"df":0,"docs":{},"程":{"df":0,"docs":{},"。":{"df":0,"docs":{},"操":{"df":0,"docs":{},"作":{"df":0,"docs":{},"系":{"df":0,"docs":{},"统":{"df":0,"docs":{},"在":{"df":0,"docs":{},"单":{"df":0,"docs":{},"核":{"df":0,"docs":{},"上":{"df":0,"docs":{},"实":{"df":0,"docs":{},"现":{"df":0,"docs":{},"并":{"df":0,"docs":{},"行":{"df":0,"docs":{},"的":{"df":0,"docs":{},"方":{"df":0,"docs":{},"式":{"df":0,"docs":{},"是":{"df":0,"docs":{},"通":{"df":0,"docs":{},"过":{"df":0,"docs":{},"处":{"df":0,"docs":{},"理":{"df":0,"docs":{},"器":{"df":0,"docs":{},"调":{"df":0,"docs":{},"度":{"df":0,"docs":{},"，":{"df":0,"docs":{},"使":{"df":0,"docs":{},"得":{"df":0,"docs":{},"各":{"df":0,"docs":{},"线":{"df":0,"docs":{},"程":{"df":0,"docs":{},"轮":{"df":0,"docs":{},"流":{"df":0,"docs":{},"执":{"df":0,"docs":{},"行":{"df":0,"docs":{},"，":{"df":0,"docs":{},"实":{"df":0,"docs":{},"现":{"df":0,"docs":{},"宏":{"df":0,"docs":{},"观":{"df":0,"docs":{},"并":{"df":0,"docs":{},"行":{"df":0,"docs":{},"。":{"df":0,"docs":{},"操":{"df":0,"docs":{},"作":{"df":0,"docs":{},"系":{"df":0,"docs":{},"统":{"df":0,"docs":{},"的":{"df":0,"docs":{},"调":{"df":0,"docs":{},"度":{"df":0,"docs":{},"需":{"df":0,"docs":{},"要":{"df":0,"docs":{},"陷":{"df":0,"docs":{},"入":{"df":0,"docs":{},"核":{"df":0,"docs":{},"心":{"df":0,"docs":{},"态":{"df":0,"docs":{},"，":{"df":0,"docs":{},"保":{"df":0,"docs":{},"存":{"df":0,"docs":{},"寄":{"df":0,"docs":{},"存":{"df":0,"docs":{},"器":{"df":0,"docs":{},"、":{"df":0,"docs":{},"堆":{"df":0,"docs":{},"栈":{"df":0,"docs":{},"，":{"df":0,"docs":{},"同":{"df":0,"docs":{},"时":{"c":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}}},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":2.0}},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"a":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"13":{"tf":1.0}}}}}}},"o":{"df":2,"docs":{"11":{"tf":1.0},"7":{"tf":1.0}}},"p":{"c":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"k":{"8":{"8":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":2,"docs":{"12":{"tf":1.4142135623730951},"15":{"tf":1.0}}}}}}},"m":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"h":{"a":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"）":{"df":0,"docs":{},"与":{"df":0,"docs":{},"用":{"df":0,"docs":{},"户":{"df":0,"docs":{},"态":{"df":0,"docs":{},"（":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}},"，":{"df":0,"docs":{},"通":{"df":0,"docs":{},"过":{"df":0,"docs":{},"陷":{"df":0,"docs":{},"入":{"df":0,"docs":{},"（":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"）":{"df":0,"docs":{},"与":{"df":0,"docs":{},"修":{"df":0,"docs":{},"改":{"df":0,"docs":{},"程":{"df":0,"docs":{},"序":{"df":0,"docs":{},"状":{"df":0,"docs":{},"态":{"df":0,"docs":{},"字":{"df":0,"docs":{},"（":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"d":{"b":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"n":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"j":{"df":3,"docs":{"3":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"11":{"tf":1.0},"7":{"tf":1.0}}}}}},"p":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"13":{"tf":1.0}}}}}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"12":{"tf":1.0}},"未":{"df":0,"docs":{},"限":{"df":0,"docs":{},"定":{"df":0,"docs":{},"用":{"df":0,"docs":{},"户":{"df":0,"docs":{},"级":{"/":{"df":0,"docs":{},"内":{"df":0,"docs":{},"核":{"df":0,"docs":{},"级":{"df":0,"docs":{},"线":{"df":0,"docs":{},"程":{"df":0,"docs":{},"。":{"df":0,"docs":{},"多":{"df":0,"docs":{},"线":{"df":0,"docs":{},"程":{"df":0,"docs":{},"编":{"df":0,"docs":{},"程":{"df":0,"docs":{},"接":{"df":0,"docs":{},"口":{"df":0,"docs":{},"标":{"df":0,"docs":{},"准":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}},"t":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}}}}},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"o":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"13":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"t":{"df":4,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951},"5":{"tf":1.7320508075688772},"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"s":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"n":{"a":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":2,"docs":{"10":{"tf":1.0},"11":{"tf":1.0}}}},"w":{"df":0,"docs":{},"e":{"b":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"12":{"tf":1.4142135623730951},"16":{"tf":1.0}}}}},"df":0,"docs":{}}}},"y":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":3,"docs":{"3":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"breadcrumbs":{"root":{"2":{"0":{"2":{"0":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{".":{"0":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"d":{"df":4,"docs":{"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"df":1,"docs":{"3":{"tf":1.0}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"p":{"df":1,"docs":{"5":{"tf":1.0}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"c":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":1,"docs":{"11":{"tf":1.0}},"h":{"a":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"i":{"/":{"c":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}},"s":{"a":{"df":0,"docs":{},"n":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"时":{"df":0,"docs":{},"间":{"df":0,"docs":{},"，":{"df":0,"docs":{},"还":{"df":0,"docs":{},"会":{"df":0,"docs":{},"出":{"df":0,"docs":{},"现":{"df":0,"docs":{},"优":{"df":0,"docs":{},"先":{"df":0,"docs":{},"级":{"df":0,"docs":{},"反":{"df":0,"docs":{},"转":{"df":0,"docs":{},"问":{"df":0,"docs":{},"题":{"df":0,"docs":{},"（":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.0}}}}}}}}}}}}}}}}}}}}}},"的":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"核":{"df":0,"docs":{},"心":{"df":0,"docs":{},"上":{"df":0,"docs":{},"，":{"df":0,"docs":{},"同":{"df":0,"docs":{},"一":{"df":0,"docs":{},"时":{"df":0,"docs":{},"间":{"df":0,"docs":{},"片":{"df":0,"docs":{},"只":{"df":0,"docs":{},"能":{"df":0,"docs":{},"执":{"df":0,"docs":{},"行":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"线":{"df":0,"docs":{},"程":{"df":0,"docs":{},"。":{"df":0,"docs":{},"操":{"df":0,"docs":{},"作":{"df":0,"docs":{},"系":{"df":0,"docs":{},"统":{"df":0,"docs":{},"在":{"df":0,"docs":{},"单":{"df":0,"docs":{},"核":{"df":0,"docs":{},"上":{"df":0,"docs":{},"实":{"df":0,"docs":{},"现":{"df":0,"docs":{},"并":{"df":0,"docs":{},"行":{"df":0,"docs":{},"的":{"df":0,"docs":{},"方":{"df":0,"docs":{},"式":{"df":0,"docs":{},"是":{"df":0,"docs":{},"通":{"df":0,"docs":{},"过":{"df":0,"docs":{},"处":{"df":0,"docs":{},"理":{"df":0,"docs":{},"器":{"df":0,"docs":{},"调":{"df":0,"docs":{},"度":{"df":0,"docs":{},"，":{"df":0,"docs":{},"使":{"df":0,"docs":{},"得":{"df":0,"docs":{},"各":{"df":0,"docs":{},"线":{"df":0,"docs":{},"程":{"df":0,"docs":{},"轮":{"df":0,"docs":{},"流":{"df":0,"docs":{},"执":{"df":0,"docs":{},"行":{"df":0,"docs":{},"，":{"df":0,"docs":{},"实":{"df":0,"docs":{},"现":{"df":0,"docs":{},"宏":{"df":0,"docs":{},"观":{"df":0,"docs":{},"并":{"df":0,"docs":{},"行":{"df":0,"docs":{},"。":{"df":0,"docs":{},"操":{"df":0,"docs":{},"作":{"df":0,"docs":{},"系":{"df":0,"docs":{},"统":{"df":0,"docs":{},"的":{"df":0,"docs":{},"调":{"df":0,"docs":{},"度":{"df":0,"docs":{},"需":{"df":0,"docs":{},"要":{"df":0,"docs":{},"陷":{"df":0,"docs":{},"入":{"df":0,"docs":{},"核":{"df":0,"docs":{},"心":{"df":0,"docs":{},"态":{"df":0,"docs":{},"，":{"df":0,"docs":{},"保":{"df":0,"docs":{},"存":{"df":0,"docs":{},"寄":{"df":0,"docs":{},"存":{"df":0,"docs":{},"器":{"df":0,"docs":{},"、":{"df":0,"docs":{},"堆":{"df":0,"docs":{},"栈":{"df":0,"docs":{},"，":{"df":0,"docs":{},"同":{"df":0,"docs":{},"时":{"c":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}}},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":2.23606797749979}},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"a":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"13":{"tf":1.0}}}}}}},"o":{"df":2,"docs":{"11":{"tf":1.0},"7":{"tf":1.0}}},"p":{"c":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"k":{"8":{"8":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":2,"docs":{"12":{"tf":1.7320508075688772},"15":{"tf":1.4142135623730951}}}}}}},"m":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"h":{"a":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"）":{"df":0,"docs":{},"与":{"df":0,"docs":{},"用":{"df":0,"docs":{},"户":{"df":0,"docs":{},"态":{"df":0,"docs":{},"（":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}},"，":{"df":0,"docs":{},"通":{"df":0,"docs":{},"过":{"df":0,"docs":{},"陷":{"df":0,"docs":{},"入":{"df":0,"docs":{},"（":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"）":{"df":0,"docs":{},"与":{"df":0,"docs":{},"修":{"df":0,"docs":{},"改":{"df":0,"docs":{},"程":{"df":0,"docs":{},"序":{"df":0,"docs":{},"状":{"df":0,"docs":{},"态":{"df":0,"docs":{},"字":{"df":0,"docs":{},"（":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"d":{"b":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"n":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"j":{"df":3,"docs":{"3":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"11":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}}},"p":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"13":{"tf":1.0}}}}}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"12":{"tf":1.4142135623730951}},"未":{"df":0,"docs":{},"限":{"df":0,"docs":{},"定":{"df":0,"docs":{},"用":{"df":0,"docs":{},"户":{"df":0,"docs":{},"级":{"/":{"df":0,"docs":{},"内":{"df":0,"docs":{},"核":{"df":0,"docs":{},"级":{"df":0,"docs":{},"线":{"df":0,"docs":{},"程":{"df":0,"docs":{},"。":{"df":0,"docs":{},"多":{"df":0,"docs":{},"线":{"df":0,"docs":{},"程":{"df":0,"docs":{},"编":{"df":0,"docs":{},"程":{"df":0,"docs":{},"接":{"df":0,"docs":{},"口":{"df":0,"docs":{},"标":{"df":0,"docs":{},"准":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}},"t":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}}}}},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"o":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"13":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"t":{"df":4,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.7320508075688772},"5":{"tf":1.7320508075688772},"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"s":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"n":{"a":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":2,"docs":{"10":{"tf":1.0},"11":{"tf":1.0}}}},"w":{"df":0,"docs":{},"e":{"b":{"df":4,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"12":{"tf":1.7320508075688772},"16":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"y":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":3,"docs":{"3":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"title":{"root":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"p":{"c":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":2,"docs":{"12":{"tf":1.0},"15":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"12":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"w":{"df":0,"docs":{},"e":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"12":{"tf":1.0},"16":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});