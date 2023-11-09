-- CreateTable
CREATE TABLE `Entreprise` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `siret` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NULL,
    `formeJuridique` VARCHAR(191) NOT NULL,
    `nomDirigeant` VARCHAR(191) NOT NULL,
    `statutLegal` VARCHAR(191) NOT NULL,
    `numeroEnregistrement` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
