import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config';

@Controller('products')
export class ProductsController {
  constructor(@Inject(PRODUCT_SERVICE) private readonly productsClient : ClientProxy) {}   

  @Post()
  createProduct() {
    return `Something`;
  }

  @Get()
  findAllProducts() {
    return this.productsClient.send({ cmd: 'find_all_products' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return 'Something';
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return `Something`;
  }

  @Patch(':id')
  patchProduct(
    @Param('id') id: number,
    @Body() body: any) {
    return `Something`;
  }
}
