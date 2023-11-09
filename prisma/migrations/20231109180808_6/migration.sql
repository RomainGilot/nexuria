/*
  Warnings:

  - The primary key for the `client` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `client` DROP PRIMARY KEY,
    MODIFY `code_client` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`code_client`);
