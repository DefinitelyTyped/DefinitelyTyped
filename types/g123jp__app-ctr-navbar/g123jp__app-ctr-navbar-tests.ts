/// <reference types="./index" />

// 创建一个 G123NavigationSideBarProps 对象
const props: G123NavigationSideBar.G123NavigationSideBarProps = {
    supportLanguages: ['en', 'ja'],
    initialSelectedLanguage: 'en',
    showLogout: true,
    currentAppId: 'my-app',
    theme: 'light',
    onLogout: () => console.log('Logged out'),
    onSelectLanguage: (language) => console.log(`Selected language: ${language}`),
  };
  
  // 调用 renderComponent 函数
  G123NavigationSideBar.renderComponent(props);
  
  // 访问 context 对象
  