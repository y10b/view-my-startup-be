/*
  Warnings:

  - You are about to drop the column `compareCompany` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `selectCompany` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `teamInvestment` on the `Company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "compareCompany",
DROP COLUMN "selectCompany",
DROP COLUMN "teamInvestment",
ADD COLUMN     "comparedCompany" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "myInvestmentAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "selectedCompany" INTEGER NOT NULL DEFAULT 0;
