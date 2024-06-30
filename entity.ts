import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number; // Identificador único del producto

  @Column()
  name: string; // Nombre del producto

  @Column('decimal')
  price: number; // Precio del producto

  @Column()
  description: string; // Descripción del producto

  @Column()
  imageUrl: string; // URL de la imagen del producto
}
