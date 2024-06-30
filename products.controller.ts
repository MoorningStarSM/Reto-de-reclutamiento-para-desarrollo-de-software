import { Controller, Get, Post, Put, Delete, Param, Body, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(JwtAuthGuard) // Protección con guardia JWT
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto); // Crea un nuevo producto
  }

  @Get()
  findAll(@Query('name') name: string, @Query('price') price: string) {
    return this.productsService.findAll({ name, price }); // Obtiene todos los productos con filtros opcionales
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id); // Obtiene un producto por ID
  }

  @UseGuards(JwtAuthGuard) // Protección con guardia JWT
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto); // Actualiza un producto por ID
  }

  @UseGuards(JwtAuthGuard) // Protección con guardia JWT
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id); // Elimina un producto por ID
  }
}
