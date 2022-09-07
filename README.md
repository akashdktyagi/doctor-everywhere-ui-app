# full-stack-reference-project
Full Stack Microservices Architecture with React for front end and Spring boot for Back end + Dev Ops

----
## UI  - Front end Instructions

[For React UI App Instructions Click Here](ui/README.md)

* UI Docker Image kept here: 
  * To view this: https://gallery.ecr.aws/z3i9f6u3/doctor-everywhere-ui
  * use this to downlaod using docker: public.ecr.aws/z3i9f6u3/doctor-everywhere-ui
---

### Back end Instructions
* All the apis are kept in their seperate github repos:
    * Patient API: https://github.com/akashdktyagi/patient-springboot-reference-api
    * Doctor API: 
    * Appointment API:



#### How to Dockerize the UI App and Push to AWS Repo
* Pre-requsite Create the AWS Account etc and ECR repo
* Run this command. This should say login successful. ```aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws```
* Run command to build and tag correcty as mentioned in this command: ```docker build -f Dockerfile.prod -t public.ecr.aws/z3i9f6u3/doctor-everywhere-ui:latest . ```
* Push the image: ```docker push public.ecr.aws/z3i9f6u3/doctor-everywhere-ui:latest```