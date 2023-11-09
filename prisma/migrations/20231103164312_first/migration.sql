-- CreateTable
CREATE TABLE `Utilisateur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prenom` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `permission` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `code_client` INTEGER NOT NULL AUTO_INCREMENT,
    `prenom` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telephone1` VARCHAR(191) NOT NULL,
    `telephone2` VARCHAR(191) NOT NULL,
    `fax` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `pays` VARCHAR(191) NOT NULL,
    `code_postal` INTEGER NOT NULL,
    `date_debut_collaboration` DATETIME(3) NOT NULL,

    PRIMARY KEY (`code_client`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
