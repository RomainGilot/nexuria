/*
  Warnings:

  - The primary key for the `client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `code_client` on the `client` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `client` DROP PRIMARY KEY,
    MODIFY `code_client` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`code_client`);
