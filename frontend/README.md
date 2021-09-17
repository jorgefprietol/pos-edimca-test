# POS - EDIMCA - TEST - JORGE PRIETO

This is my first attempt to use Spring Boot for demonstrating backend skills.

A tester can view front-end as a User or as an Admin.

As a User a tester can book a predefined products.

As an user, a tester can view all the products and add to invoice. Can create new product. Can modify or delete the existing product.

### How to build a project

#### Back End
1.	Clone/ download this github repository. `https://github.com/jorgefprietol/pos-edimca-test.git`
2. Extract it on your local machine.
3. Import backend/ folder in IntelliJ IDEA as a maven project.
4. Write your PostgreSQL username and password in src -> main -> resources -> application.properties. (check de db name postgres)
5. Run application.

#### Front End
1. Clone/ download this github repository. `https://github.com/jorgefprietol/pos-edimca-test.git`
2. Extract it on your local machine.
3. Open frontend/ folder in vscode.
4. Run `npm install` to download all the dependencies.
5. Run `npm start` to run the project.

#### API Documentation
**NOTE** This link will only work when the backend project is up and running on your local machine.
<http://localhost:8081/swagger-ui.html>

#### Limitations
* Shortcomings in front end.<br/>
  * Front end is only desinged for a success path since this project is a demonstration of backend skills.<br/>
  
* Shortcomings in back end.<br/>
  * Not all data validations added. Just a few to demonstrate skills e.g;<br/>
    * Product can have duplicate name etc.<br/>

* login and register only front.
    
* No testing added due to lack of time.
