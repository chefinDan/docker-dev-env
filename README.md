to run: docker-compose up -d

ssh into a container:
docker-compose exec (cont-name) sh

remove everything:
docker container rm -f $(docker container ls -qa)
docker image rm -f $(docker image ls -q)