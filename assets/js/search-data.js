// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "More about me:-",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-competitive-programming-blog-for-2022-batch",
      
        title: 'Competitive Programming Blog for 2022 Batch <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://arnavwinnerforyou.blogspot.com/2023/01/competitive-programming-blog-for-2022.html", "_blank");
        
      },
    },{id: "news-joined-as-freshman-at-iit-bhilai",
          title: 'Joined as freshman at IIT Bhilai!',
          description: "",
          section: "News",},{id: "news-started-as-a-core-member-at-ingenuity-competitive-programming-club",
          title: 'Started as a Core Member at Ingenuity (Competitive Programming Club)!',
          description: "",
          section: "News",},{id: "news-joined-as-core-member-at-ebsb-ek-bharat-shrestha-bharat",
          title: 'Joined as Core Member at EBSB (Ek Bharat Shrestha Bharat)!',
          description: "",
          section: "News",},{id: "news-joined-as-coordinator-at-ingenuity",
          title: 'Joined as Coordinator at Ingenuity!',
          description: "",
          section: "News",},{id: "news-started-my-summer-internship-at-visa",
          title: 'Started my Summer Internship at Visa!',
          description: "",
          section: "News",},{id: "news-completed-my-summer-internship-at-visa",
          title: 'Completed my Summer Internship at Visa!',
          description: "",
          section: "News",},{id: "news-joined-as-member-at-fintech-society",
          title: 'Joined as Member at FinTech Society!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%72%6E%61%76%67@%69%69%74%62%68%69%6C%61%69.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/arnavwinner", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/arnavwinner", "_blank");
        },
      },{
        id: 'social-leetcode',
        title: 'LeetCode',
        section: 'Socials',
        handler: () => {
          window.open("https://leetcode.com/u/arnavwinner/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/arnav-gautam-4b1711226", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ArnavGautam24", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
