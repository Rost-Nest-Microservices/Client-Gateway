import 'dotenv/config';
import * as joi from 'joi';

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
    ORDERS_MICROSERVICE_HOST: joi.string().required(),
    ORDERS_MICROSERVICE_PORT: joi.number().required()
  })
  .unknown(true);

const { error, value: envVars } = envsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error ${error.message}`);
}

export const envs = {
  port: envVars.PORT as number,
  databaseUrl: envVars.DATABASE_URL as string,
  productsMicroserviceHost: envVars.PRODUCTS_MICROSERVICE_HOST as string,
  productsMicroservicePort: envVars.PRODUCTS_MICROSERVICE_PORT as number,
  ordersMicroserviceHost: envVars.ORDERS_MICROSERVICE_HOST as string,
  ordersMicroservicePort: envVars.ORDERS_MICROSERVICE_PORT as number,
};
