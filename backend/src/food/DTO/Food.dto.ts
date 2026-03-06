import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class FoodDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsBoolean()
    @IsNotEmpty()
    is_active: boolean;
}