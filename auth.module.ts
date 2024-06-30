import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule, // Módulo de usuarios
    PassportModule, // Módulo de Passport para estrategias de autenticación
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Clave secreta para firmar JWT
      signOptions: { expiresIn: '60m' }, // Opciones de firma de JWT
    }),
  ],
  providers: [AuthService, JwtStrategy], // Servicios y estrategias de autenticación
  exports: [AuthService], // Exporta el servicio de autenticación
})
export class AuthModule {}
