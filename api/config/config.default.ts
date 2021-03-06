import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1654605558910_5833';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.cors = {
    origin: () => '*',
    allowMethods: 'GET,POST,PUT,DELETE,HEAD,PATCH',
    credentials: true
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  const userConfig = {
    APP_KEY: 'bf6ec08bc517c0ffece6cd4d9b3bb85f',
    API: {
      GET_NEWS_LIST: 'http://v.juhe.cn/toutiao/index'
    }
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    ...userConfig
  };
};
