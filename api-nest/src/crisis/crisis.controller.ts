import { Controller, Get, Response, HttpStatus, Post, Body, Logger } from '@nestjs/common';
import { CrisisService } from './crisis.service';
import { CreateCrisisDto } from './dto/createCrisisDto';
import { debug } from 'util';

@Controller('crisis')
export class CrisisController {
    // tslint:disable-next-line:variable-name
    constructor(private crisis_service: CrisisService) {}

    @Get('')
    async getAll(@Response() res) {
        // tslint:disable-next-line:variable-name
        const crisis_list = await this.crisis_service.findAll();
        return res.status(HttpStatus.OK).json(crisis_list);
    }

    @Post('')
    async createCrisis(@Response() res, @Body() body: CreateCrisisDto) {
        console.log(body);
        const todo = await this.crisis_service.create(body);
        return res.status(HttpStatus.OK).json(todo);
    }

}