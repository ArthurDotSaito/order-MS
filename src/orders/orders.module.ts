import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
<<<<<<< HEAD
import { ClientsModule } from '@nestjs/microservices';
=======
>>>>>>> 260115f69937f6a877e4543c522ba7ad6bd8dc77

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
