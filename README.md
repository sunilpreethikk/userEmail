# userEmail

Step1: Clone the repository.
Step2: npm install
Step3: npm start

A PostgreSQL database is hosted on AWS which has 1000 users with fake email ids. The Application will query these email ids. The call to the function which sends out real email is commented out and instead the application will just print the email id in the console. 

Note: The smtp service provider which is being used allows only 5 emails per second and maximum of 500 emails per account for the free version.
