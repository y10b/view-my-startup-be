-- AlterTable
ALTER TABLE "Company" 
  ADD COLUMN "compareCompany" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN "selectCompany" INTEGER NOT NULL DEFAULT 0;

-- DropTable (존재할 때만 삭제)
DROP TABLE IF EXISTS "User";

-- CreateTable
CREATE TABLE "Investment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "comment" TEXT NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Investment_pkey" PRIMARY KEY ("id")
);
