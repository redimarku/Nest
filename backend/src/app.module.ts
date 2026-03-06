import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodModule } from './food/food.module';
import { FoodEntity } from './food/Entity/Food.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'food_delivery',
      entities: [FoodEntity],
      synchronize: true,
    }), FoodModule, ],
  controllers: [],
  providers: [],
})
export class AppModule {}
