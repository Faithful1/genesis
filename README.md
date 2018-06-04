# reddoor
A docker stack for dev and AWS EC2/ECS prod.


## dependencies
Ensure these are installed before going further:

- docker@^17.09.0-ce
- docker-compose@^1.16.1
- nvm@latest & node@^8.7.0


## development

### 1. setup

    npm run setup

### 2. run

    npm start

You can begin editing code on your host machine, changes will be detected and all relevant processes restarted or live-reloaded inside their containers.

### 3. inspect

    npm start (restarts and rebuilds all services if necessary)

    npm run stack -- ps (lists all running services)
    npm run stack -- restart db/front/phpmyadmin (restarts one or more services)

    npm run logs nginx front (attaches to logs of one or more services)


## production

### 1. setup

    npm run setup

### 2. secrets

    nano .env
    // set appropriate variables for production environment
    // salt generator: https://api.wordpress.org/secret-key/1.1/salt/

### 3. inspect

    npm run start:prod (restarts and rebuilds all services if necessary)

    npm run stack:prod -- ps (lists all running services)
    npm run stack:prod -- restart api (restarts one or more services)

    npm run logs:prod db (attaches to logs of one or more services)
