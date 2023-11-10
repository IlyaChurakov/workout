/*
  Warnings:

  - You are about to drop the column `is_complited` on the `Exercise_log` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Exercise_log" DROP COLUMN "is_complited",
ADD COLUMN     "is_completed" BOOLEAN NOT NULL DEFAULT false;
