import 'dotenv/config';
import * as joi from 'joi';

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.number().required()
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
};
