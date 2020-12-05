This project was built to help debug connectivity issues to mysql instances in Kubernetes
It is an ubuntu build with all the required networking tools and mysql client installed

to use this project
1) clone this project
2) npm install
3) curl 'http://localhost:3000?db={dbname}&user={dbUser}&host={hostname}&password={pasword}'

you can build an image with docker build -t {yourImageName}

you can then edit the pod.yaml file for ypur image and namespace the kubectl apply -t pod.yaml to deploy
connect to the pod, then you can test as you did locally