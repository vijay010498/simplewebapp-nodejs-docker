# simplewebapp-nodejs-docker
A simple basic web app to run inside a docker container

Docker commands
docker ps

docker ps --all

docker build -t vijay010498/simpleweb .

docker run -p 8080:8090 vijay010498/simpleweb

docker exec -it <containerID> sh //shell access

docker kill

docker stop

docker system prune
