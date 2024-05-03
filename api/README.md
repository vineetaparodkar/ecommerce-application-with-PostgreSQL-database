# Ecommerce API

This file contains instructions to build, configure and install Ecommerce API to demonstrate Ecommerce usecase.

## Pre-requisites

- [Java 17](https://www.oracle.com/java/technologies/downloads/)

- [SSL certificate](https://letsencrypt.org/)

- Keystore (Refer Appendix section)

## Initial Setup

1. Clone the repository and checkout to main branch

## API Setup

1. Update Application properties.

### **Local Deployment**

a. Update application properties from resources folder here, `api/src/main/resources`.

1. Create a ecommerce deployment folder.

2. Copy below files from `api/src/main/resources` to ecommerce deployment folder.

   - `api/src/main/resources/application.yaml`

c. Execute following command from project root directory to create ecommerce service jar.

`./gradlew build -x test`

d. New jar will be created here `ecommerce/build/libs/api-0.0.1-SNAPSHOT.jar`. Copy this same jar in ecommerce deployment folder.

e. Execute below command to start ecommerce API.

- Navigate to ecommerce deployment folder and execute below command.
  `java -jar api-0.0.1-SNAPSHOT.jar`

## Swagger UI for API Specification.

- Use below URL to access Swagger UI.

  `https://<servername>:<port>/ecommerce/api-docs/swagger-ui/index.html`

## Appendix

- Use below command to generate keystore.

  `openssl pkcs12 -export -in fullchain.pem -inkey privkey.pem -out keystore.p12 -name tomcat  -CAfile chain.pem  -caname root`

- Check if the SSL certificate chain from your origin server is complete.To check use this.

  `https://www.ssllabs.com/ssltest/`
