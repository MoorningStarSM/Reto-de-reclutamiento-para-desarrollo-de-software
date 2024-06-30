import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carga variables de entorno desde un archivo .env
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo de base de datos
      host: process.env.DB_HOST, // Host de la base de datos
      port: parseInt(process.env.DB_PORT), // Puerto de la base de datos
      username: process.env.DB_USERNAME, // Usuario de la base de datos
      password: process.env.DB_PASSWORD, // Contraseña de la base de datos
      database: process.env.DB_NAME, // Nombre de la base de datos
      autoLoadEntities: true, // Carga automática de entidades
      synchronize: true, // Sincroniza la base de datos con las entidades
    }),
    ProductsModule, // Módulo de productos
    AuthModule, // Módulo de autenticación
  ],
})
export class AppModule {}
