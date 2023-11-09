/*
  Warnings:

  - Added the required column `id_entreprise` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` ADD COLUMN `id_entreprise` INTEGER NOT NULL;
