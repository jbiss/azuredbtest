FROM ubuntu:20.10

RUN apt update && \
    apt install nodejs -y && \
    apt install net-tools -y && \
    apt install npm -y && \
    apt install lsb-release -y && \
    apt install wget -y && \
    apt install mysql-client -y && \
    apt install curl -y
  
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3009
CMD ["node", "server.js"]