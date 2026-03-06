import { Injectable } from '@nestjs/common';
import { FoodEntity } from './Entity/Food.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';
import { HttpStatus } from '@nestjs/common';
import { FoodDto } from './DTO/Food.dto';

@Injectable()
export class FoodService {
    constructor(@InjectRepository(FoodEntity) private readonly foodRepository: Repository<FoodEntity>){}

    public async getAll(){
        try{
            return await this.foodRepository.find();
        } catch (error){
            throw new ErrorHandler("Internal Server Error",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public async createFood(data: FoodDto){
        try{
            return await this.foodRepository.save(data);
        } catch (error){
            throw new ErrorHandler("Internal Server Error",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
