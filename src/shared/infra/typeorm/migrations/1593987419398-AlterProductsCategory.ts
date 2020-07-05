import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export default class AlterProductsCategory1593987419398 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
      await queryRunner.createForeignKey(
          'products',
          new TableForeignKey({
              name: 'ProductsCategoryFK',
              columnNames: ['category_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'categories',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
          }),
      );
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('products', 'productsCategoryFK');
  }
}