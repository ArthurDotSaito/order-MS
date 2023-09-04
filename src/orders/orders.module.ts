import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ClientsModule } from '@nestjs/microservices';

@Module({
  imports:[ClientsModule.register]
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
