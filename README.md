# MERN-stack-course

## 6 Create an express server and router
Use the command "npm init", this will create a package.json file, after setting some configurations with the CLI.
Another way to start a Node.js project, with no previous configurations but only the standards, use the command: "npm init -y".

npmjs.com
Is the official website of the node package manager, where you can look for librarys or dependencys as expressjs.

Use the command: "npm i express", to install the dependency, add it to the package.json, create the node_modules folder so we can import it and use it for node.js web projects.

When installing packages with the "npm i package-name" command in a project where git repostory has been initialized, be aware that a .gitignore file is needed with the name of the node_modules folder's name, so the "git add..." command won't take it up to github.com's repository.
Because the node_modules packages can be installed with the .package.json file, using the command: "npm install" and because the folder is to heavy so it's redoundant to uploaded.

## 7 Continously monitor server with nodemon
The command "npm install package-name" will install the package as a production (default) dependency.
The nodemon package is meant to be used only locally, in a development environment, so the command for development packages only is "npm install nodemon -D", this will create a new node on the package.json file under the devDependencys key.
This way the development packages are only available locally while programming the project.

A common issue on Windows's O.S. comes out when trying to run the command "nodemon express-server".
To solve this, at least on my case, you can install nodemon package as a global dependency, so it will ve CLI accepted as the package will be available over the whole Windows O.S.
Commando tu install globally is "npm i nodemon -g".

The command to start a project with nodemon watching for changes is "nodemon express-server.js".
You can set a "script" on the package.json file, under the "scripts" node, with the key "dev" and the value "nodemon express-server.js", so the project can be started with nodemon watching using the "npm run dev" command.