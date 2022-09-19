-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "mittente" VARCHAR(250) NOT NULL,
    "message" VARCHAR(250) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);
