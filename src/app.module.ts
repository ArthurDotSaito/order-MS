import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [OrdersModule, PrismaModule],
})
export class AppModule {}
