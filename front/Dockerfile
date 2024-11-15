# Étape 1 : Utilisation de l'image officielle Node.js
FROM node:22-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json (en les séparant)
# Cela permet de profiter du cache Docker pour les dépendances si les fichiers n'ont pas changé
COPY package*.json ./

# Installer les dépendances, y compris celles définies dans package-lock.json
RUN npm install

# Si tu veux aussi installer Vite globalement (optionnel, en fonction de ta configuration)
RUN npm install -g vite

# Copier le reste des fichiers du projet dans le conteneur
COPY . .

# Exposer le port que Vite utilise par défaut
EXPOSE 5173

# Commande pour démarrer l'application en mode développement
CMD ["npm", "run", "dev"]
