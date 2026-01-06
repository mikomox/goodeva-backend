import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
    constructor(private readonly supabaseService: SupabaseService) { }

    private get supabase() {
        return this.supabaseService.getClient();
    }

    async findAll(search?: string) {
        let query = this.supabase.from('todos').select('*');

        if (search) {
            query = query.ilike('title', `%${search}%`);
        }

        const { data, error } = await query;

        if (error) throw error;
        return data;
    }

    async create(createTodoDto: CreateTodoDto) {
        const { data, error } = await this.supabase
            .from('todos')
            .insert({ title: createTodoDto.title })
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    async toggleCompleted(id: string) {
        // First get current status
        const { data: todo, error: fetchError } = await this.supabase
            .from('todos')
            .select('completed')
            .eq('id', id)
            .single();

        if (fetchError) throw fetchError;

        const { data, error } = await this.supabase
            .from('todos')
            .update({ completed: !todo.completed })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data;
    }
}
