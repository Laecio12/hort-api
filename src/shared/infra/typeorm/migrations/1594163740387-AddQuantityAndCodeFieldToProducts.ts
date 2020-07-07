import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AddQuantityAndCodeFieldToProducts1594163740387 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'products',
        new TableColumn({
          name: 'quantity',
          type: 'decimal',
          precision: 10,
          scale: 2,
        })
      ),

      await queryRunner.addColumn(
        'products',
        new TableColumn({
          name: 'code',
          type: 'decimal',
          precision: 10,
          scale: 2,
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('products', 'code');
      await queryRunner.dropColumn('products', 'quantity');
    }

}
