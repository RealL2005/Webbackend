import { Configuration, App } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import * as ws from '@midwayjs/ws';
import * as orm from '@midwayjs/orm';
import * as swagger from '@midwayjs/swagger';
import { join } from 'path';
import * as crossDomain from '@midwayjs/cross-domain';
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';

@Configuration({
  imports: [
    koa,
    ws,
    validate,
    crossDomain,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
    orm,
    swagger
  ],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration {
  @App('koa')
  app: koa.Application;

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }
}
