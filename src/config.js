export default {
  // page1部分
  page1: {
    titleEn: "Hello,I`m QZWX", //英文标题
    title: "一个追梦的小白", //中文标题
  },
  // page2部分
  page2: {
    authorImg: "XXX", // 作者头像    在main.html中修改！！
    xinhui: "我叫七种文学，是一名在读的大二学生。", // 幸会
    qiuzhi: "腾讯公司CEO", // 求职意向
    guanyuwo: "能走路，会刷抖音，能玩游戏【真实情况这里写人生经历】", // 关于我
  },
  // page3部分
  page3: [
    {
      icon: "icon-tubiao-",
      title: "UI设计",
      msg: ["PS切图、界面排版"],
    },
    {
      icon: "icon-diannao", // 图标
      title: "视频剪辑", // 标题
      msg: ["动画特效", "视频剪辑"], //介绍
    },
    {
      icon: "icon-qianbi1",
      title: "前端功能",
      msg: ["JS完成常见的交互功能", "用AJAX读取后台数据且渲染"],
    },
    {
      icon: "icon-shouji",
      title: "框架",
      msg: ["vue框架", "UI框架、express框架、mysql"],
    },
  ],
  // page4部分
  page4: {
    // 我的历程
    course: [
      {
        date: "2022/9——至今", // 时间
        desc: {
          // 经历
          title: "太原工业学院",
          list: ["获得了XX奖", "获得XX荣誉", "XX公司实习经历"],
        },
      },
      {
        date: "2019/9——2020/9",
        desc: {
          title: "湖北武汉",
          list: [
            "学习前端语言",
            "构建页面 / 利用JS、CSS3等制作网站，vue有关项目",
            "获得XX证书",
          ],
        },
      },
      {
        date: "2018/9——2019/9",
        desc: {
          title: "XX地区",
          list: ["学习XX", "制作XXAPP", "参加XX大赛", "获得XX荣誉", "XX成就"],
        },
      },
    ],
    // 我的拓展技能掌握
    singlelist: [
      {
        title: "APP开发",
        text: "了解",
      },
      {
        title: "AE",
        text: "掌握",
      },
      {
        title: "剪映",
        text: "掌握",
      },
      {
        title: "XX专业",
        text: "掌握",
      },
    ],
    // 我的基本技能掌握
    proresslist: [
      {
        title: "HTML、CSS、SCSS",
        value: "90%",
      },
      {
        title: "JS、JQ",
        value: "90%",
      },
      {
        title: "Vue",
        value: "90%",
      },
      {
        title: "NodeJs",
        value: "80%",
      },
      {
        title: "sql",
        value: "80%",
      },
    ],
  },
  // page5部分     herf放你需要跳转的连接
  page5: [
    {
      title: "XX项目",
      content: "用了XX方式创造出XX作品合集",
      image: "box3.jpg",
      href: "",
    },
    {
      title: "音乐二创",
      content: "利用AU等软件创作改编出的音乐合集",
      image: "box5.jpg",
      href: "",
    },
    {
      title: "视频创作",
      content: "用AE，剪映等软件所创作的视频合集",
      image: "bizhi1.png",
      href: "",
    },
    {
      title: "个人简历",
      content: "html,css,jq,bootsrap搭建个人简历网站合集",
      image: "box4.png",
      href: "",
    },
    {
      title: "开发的APP",
      content: "自主钻研利用Androidstudio开发软合集",
      image: "box6.jpeg",
      href: "",
    },
  ],
  // page6部分
  page6: {
    github: "https://github.com/7qzwx",
    bili: "https://space.bilibili.com/397437067",
    email: "Mailto:3117965903@qq.com?Subject=邮箱标题&Body=邮箱内容！",
    douyin: "https://www.douyin.com/user/self",
    weixin:
      "<img style='width:120px' src='../src/img/QZWX-QQ.jpg' alt='wx二维码'>",
    qq: "<img style='width:120px' src='../src/img/QZWX-QQ.jpg' alt='QQ二维码'>",
  },
};
