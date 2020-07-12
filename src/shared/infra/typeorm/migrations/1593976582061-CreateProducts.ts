import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateProducts1593976582061 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'),

        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name:'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'price',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,

                    },
                    {
                      name: 'code',
                      type: 'int',
                     isUnique: true,

                    },
                    {
                      name: 'quantity',
                      type: 'decimal',
                      precision: 10,
                      scale: 2,

                    },
                    {
                        name: 'description',
                        type: 'varchar',

                    },
                    {
                        name: 'avatar',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'category_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },

                ],
            }),
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }
}
