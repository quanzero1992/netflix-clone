-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "genre" DROP NOT NULL,
ALTER COLUMN "duration" DROP NOT NULL;