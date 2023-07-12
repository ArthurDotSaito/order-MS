import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './create-orders.dto';

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
}
