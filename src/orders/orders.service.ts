import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDTO } from './create-orders.dto';
import { OrderStatus } from '@prisma/client';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {
  constructor(
    private prismaService: PrismaService,
    @Inject('ORDERS_SERVICE')
    private readonly kafkaClient: ClientKafka,
  ) {}

  all() {
    return this.prismaService.order.findMany();
  }

  async create(data: CreateOrderDTO) {
    const order = await this.prismaService.order.create({
      data: {
        ...data,
        status: OrderStatus.PENDING, // Enum gerado pelo prisma
      },
    });

    await lastValueFrom(this.kafkaClient.emit('orders', order));
    return order;
  }
}
