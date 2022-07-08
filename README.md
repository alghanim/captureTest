```
   _____ _          __  __      _     _           
  / ____| |        / _|/ _|    | |   | |          
 | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __ 
  \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
  ____) |   < (_| | | | || (_) | | (_| |  __/ |   
 |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_| 


   _____       
  / ____|      
 | |  __  ___  
 | | |_ |/ _ \ 
 | |__| | (_) |
  \_____|\___/ 
```
                                       

This project was generated by Skaffolder

For more documentation visit https://skaffolder.com/#/documentation


--------------
### START APPLICATION
--------------

!important
To use the application move it in the folder `$GOPATH/src/skaffolder/`
The default value of `$GOPATH` is `$HOME/go`


* To launch the application, start your MongoDB database and open a terminal in this folder and type:
  ``` bash
  $ go get
  $ go run main.go
  ```
* Go to http://localhost:3000

Login using:

username:   admin
password:   password

* To start in autoreload mode run:
  ``` bash
  export GOPATH=$HOME/go
  watcher -c config -run skaffolder/captureTest
  ```

--------------
### CONFIGURE
--------------

Set properties of your database in: captureTest.config.toml

--------------
### USING SKAFFOLDER-CLI
--------------

With Skaffolder-CLI you can easily manage your Skaffolder project from command line and customize your generator template from your IDE.

Install Skaffolder-CLI with
``` bash
$ yarn install -g skaffolder-cli
```

Login running the command
``` bash
$ sk login
```

Generate your project with the command
``` bash
$ sk generate
```

You can customize your generator template working with files in .skaffolder folder in your project root.

Please refer to https://skaffolder.com/#/documentation/skaffolder-cli for more information.

