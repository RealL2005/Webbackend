import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1721487745643_9095',
  koa: {
    port: 7001,
  },
  webSocket:{},
  cors:{
    origin: '*',
  },
  orm: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '20050810',
    database: 'midway',
    synchronize: true,
    logging: false,
  },
} as MidwayConfig;
