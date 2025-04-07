##
This is a sample project for implementing a REST server.

## setup database
1. start the postgres by this command
```sh
docker-compose -f docker-compose.yaml up -d
```
2. Use a database ide or psql to create database
3. update .env with your database configuration


## Install dependencies
```sh
npm install
```

## start server
```sh
npm run start
```

## run linter
```sh
npmp run lint
```
