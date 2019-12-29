* Usage of http core nodejs module
* Create a HTTP server, listen on custom port
* Terminate and respond to multiple resources (/, /animals, *)
* Usage of arrow function
* Refactor to use arrow function insteaf of function() {}

```nodejs
function(param1, param2) {
}

(param1, param2) => {
}
```

```shell
$ npm install
$ node index.js
$ curl http://localhost:3000/
$ curl http://localhost:3000/animals
$ curl http://localhost:3000/abc
$ ctrl + c
```