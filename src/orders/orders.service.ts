import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDTO } from './create-orders.dto';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

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
    return order;
  }
}
