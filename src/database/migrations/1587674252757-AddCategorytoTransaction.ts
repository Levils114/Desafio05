import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddCategorytoTransaction1587674252757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.addColumn('transactions', new TableColumn({
         name: "category_id",
         type: "uuid",
         isNullable: true
       })
      );

       await queryRunner.createForeignKey('transactions', new TableForeignKey({
         columnNames: ['category_id'],
         referencedColumnNames: ['id'],
         referencedTableName: "categories",
         name: 'TranscationCategory',
         onUpdate: 'CASCADE',
         onDelete: 'SET NULL'
       }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('transactions', 'TranscationCategory');
      await queryRunner.dropColumn('transactions', 'category_id');
    }

}
