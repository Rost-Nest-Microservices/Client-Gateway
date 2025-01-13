import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
    @Min(1)
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    page?: number = 1;

    @Min(1)
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit?: number = 10
}