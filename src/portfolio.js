// 自定义主页配置，只显示名字、书籍封面和下载链接

const splashScreen = {
  enabled: false // 不需要启动动画
};

const greeting = {
  username: "汪雄伟",
  title: "我是汪雄伟",
  subTitle: "", // 不需要副标题
  resumeLink: "", // 不显示简历
  displayGreeting: true
};

const bigProjects = {
  title: "我的书籍",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/myBookCover.jpg"), // 替换为你的书封图片路径
      projectName: "书籍标题（可选）",
      projectDesc: "这本书是我的作品，欢迎下载阅读。",
      footerLink: [
        {
          name: "点击下载",
          url: "https://example.com/mybook.pdf" // 替换为你的下载链接
        }
      ]
    }
  ],
  display: true
};

// 其他部分全部隐藏

const socialMediaLinks = { display: false };
const skillsSection = { display: false };
const educationInfo = { display: false };
const techStack = { viewSkillBars: false };
const workExperiences = { display: false };
const openSource = { display: false };
const achievementSection = { display: false };
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };
const contactInfo = { title: "", subtitle: "", number: "", email_address: "" };
const twitterDetails = { display: false };
const resumeSection = { display: false };
const isHireable = false;

export {
  greeting,
  splashScreen,
  bigProjects,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
