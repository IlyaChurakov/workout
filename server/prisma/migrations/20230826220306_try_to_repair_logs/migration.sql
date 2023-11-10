/*
  Warnings:

  - You are about to drop the column `is_complited` on the `Exercise_time` table. All the data in the column will be lost.
  - You are about to drop the column `is_complited` on the `Workout_log` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Exercise_time" DROP COLUMN "is_complited",
ADD COLUMN     "is_completed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Workout_log" DROP COLUMN "is_complited",
ADD COLUMN     "is_completed" BOOLEAN NOT NULL DEFAULT false;
