# Criando API com NodeJS

Criando uma API REST com NodeJS, utilizando o padrão Model-View-Controller (MVC). 

## Tecnologias utilizadas:
* Javascript
* NodeJS (nodemon)
* Docker
* MongoDB (com 3Tstudio)

### Início e instalação dos pacotes
```
npm init
```
```
npm install 
```

### Rodar o MondoDB localmente com Docker
Extrair a imagem do Docker do MongoDB: 
``` 
docker pull mongo
```

Executar a imagem como um contêiner
``` 
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin mongo
```

### Utilizando o MondoDB: 
Acessar o MongoDB shell:
```
docker exec -it mongodb mongosh
```

Autenticar com as credenciais: 
```
use admin 
```
```
db.auth("admin", "admin")
```

Conectando o Studio 3T no banco admin:  
```
mongodb://admin:admin@localhost:27017/node-store?authSource=admin
```
