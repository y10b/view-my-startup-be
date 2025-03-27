/*
  Warnings:

  - You are about to drop the column `myInvestmentAmount` on the `Company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "myInvestmentAmount";

-- AlterTable
ALTER TABLE "Investment" ADD COLUMN     "companyId" INTEGER;

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
