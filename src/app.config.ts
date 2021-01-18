import { AppConfig } from "remax/ali";

const config: AppConfig = {
  pages: ['pages/index/index'],
  subPackages:[
    {
      root:'package',
      pages:[
          'pages/a/index'
      ]
    }
  ],
  window: {
    navigationBarTitleText: 'Remax Ali Template With TypeScript',
    navigationBarBackgroundColor: '#282c34'
  }
};

export default config;
