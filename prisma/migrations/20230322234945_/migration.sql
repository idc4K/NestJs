/*
  Warnings:

  - Added the required column `userId` to the `Bookmaker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookmaker" ADD COLUMN     "userId" TEXT NOT NULL;
