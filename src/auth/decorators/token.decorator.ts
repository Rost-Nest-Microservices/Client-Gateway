import {
    ExecutionContext,
    InternalServerErrorException,
    createParamDecorator,
  } from '@nestjs/common';
  import * as request from 'supertest';
  
  export const Token = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
  
      if (!request.token) {
        throw new InternalServerErrorException(
          'Token not found in request (AuthGuard called)',
        );
      }
      return request.token;
    },
  );
  