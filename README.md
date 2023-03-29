# Post Web Applications
### The blog app was created to demonstrate back-end functionality by using framework Node.js. The blog can create post by naming title and giving description of post. Also, user can see what exactly he wrote or typed by clicking on each item. It will show exactly this item. Same conditions for other posts which were created. Also if applicant not fill forms with ttile and description form, it will show hime message that forms should be complete. 

Steps for running web application locally
1.	Clone repository
```bash
git clone https://github.com/00013810/WT_CW2 
```
2.	Install dependencies 
```bash
    cd WT.CW2.00013810
    npm install 
```
3.	Run app
```bash
    better to do it through zip project
    npm init -y
    npm i express pug (for getting node moules)
    node blog.js
    localhost:3400
```
### List of dependencies
- express.js
- pug.js

### Structure of the project in zip
/WT.CW2.00013810 - name of folder

   /data        - folder od data
    /posts.json  - project configuration file with loaded data
    
   /public       - folder for user-interface
    /style.cc    - file with style for project
    
   /views        - folder for templates pages 
    /create_page.pug
    /detail.pug
    /home.pug
    /layout.pug
    /posts.pug
    
   /.gitignore   - file that do not download node-modules on github 
   
   /blog.js      - file that contain whole logic for project
   
   /package-lock.json
   
   /package.json
 
### Web Application repository on github link

https://github.com/00013810/WT.CW2
