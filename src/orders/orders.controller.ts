import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CreateOrderDTO } from './create-orders.dto';
import { OrdersService } from './orders.service';
import { OrderStatus } from '@prisma/client';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  all() {
    return this.ordersService.all();
  }

  @Post()
  create(@Body() data: CreateOrderDTO) {
    return this.ordersService.create(data);
  }

  @MessagePattern('payments')
  async payment(@Payload() message) {
    await this.ordersService.complete({
      message.order_id, 
      message.status === "APPROVED" ? OrderStatus.PAYED : OrderStatus.CANCELLED,
    });
  }
}
