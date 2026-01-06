import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { ApiKeyGuard } from '../auth/api-key.guard';

@UseGuards(ApiKeyGuard)
@Controller('api/todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) { }

    @Get()
    findAll(@Query('search') search?: string) {
        return this.todosService.findAll(search);
    }

    @Post()
    create(@Body() createTodoDto: CreateTodoDto) {
        return this.todosService.create(createTodoDto);
    }

    @Patch(':id')
    toggleCompleted(@Param('id') id: string) {
        return this.todosService.toggleCompleted(id);
    }
}
