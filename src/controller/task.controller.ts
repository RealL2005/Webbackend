import {Body, Controller, Get, Param, Post, Query} from "@midwayjs/core";



@Controller('/task')
export class TaskController {

  @Get("/:taskid/summary")
  public async tasksummary(@Param("taskid") taskid: string) {
    console.log(taskid);
    return taskid;
  }
  @Get('/summary')
  public async summary(@Query("state") state: string) {
    console.log(state);
  }

  @Post('/create')
  public async create(@Body() form:{
    name: string;
    description: string;
  }) {
    console.log(form);
    return form;
  }
}
