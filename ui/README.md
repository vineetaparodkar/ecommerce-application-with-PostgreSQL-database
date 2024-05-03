# Ecommerce UI


This file contains instructions to configure and start ecommerce UI to demonstrate ecommerce usecase. 

## Pre-requisites

- node server as API service (Refer Appendix section)

Additional Pre-requisites for developement mode deployment:

- [Node 12](https://nodejs.org/es/blog/release/v12.22.7/)

- [SSL certificate](https://letsencrypt.org/) 

## Setup

1. Clone the repository and checkout to main branch 

## Webapp Setup

### Config Update  

- Update/Add config in config.js file located at `ecommerce/ui/src/app/config/config.js`

- Update server port in package.json file. 

### **Local deployment**

Follow below steps to run the app in production mode simulation.

- After initial setup navigate to root directory of ecommerce webapp and install node modules dependencies by executing below command.

    `npm install`

- Refer above config update section and update configs if needed.

- To start the ecommerce webapp execute below command.Webapp will start on default port 3000 which can be accessed with `https://xxxx:3000/`

    `npm start`


## Appendix

- Generate SSL certificates

    `https://letsencrypt.org/`

- Check if the SSL certificate chain from your origin server is complete.To check use this.   
  
    `https://www.ssllabs.com/ssltest/` 

