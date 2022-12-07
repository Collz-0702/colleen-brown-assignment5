# colleen-brown-assignment5
This is the completion of the Cypress Framework assignment to compliment the knowledge and practice gain in the Automation Bootcamp


Dependencies
NodeJS v12, v14 or above
NPM v6 or above
Chrome browser

Download the folder to local computer and open in Visual Studio Code
Ensure the dependencies are installed


Folder Structure
cypress/page-objects: Page object files can be found here which include selectors and functions that are used in test files.
cypress/test-file: Test files can be found here 
cypress/data-file: Data file for vaious tests can be found here

How to Execute tests

Excecute in GitBash Terminal:
npm test

Execute the Cypress GUI
npx cypress open
Select E2E testing
Select Chrome Browser
On the top right hand corner, select the 3 dots
Navigate to History
Clear Browser History "for all timee"
Run various test files

To create a Mochawesome report, use the following command in the GitBash Terminal:
npm test

Execute tests in a different browser
npx cypress run --browser firefox

N.B. The browser must be installed on the device.
