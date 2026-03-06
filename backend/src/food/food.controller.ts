import { Controller, Post, Get, Delete } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodDto } from './DTO/Food.dto';

@Controller('food')
export class FoodController {
    constructor(private readonly foodService: FoodService){}

    public async getAll(){
        return await this.foodService.getAll();
    }

    public async createFood(food: FoodDto){
        return await this.foodService.createFood(food);
    }
}
