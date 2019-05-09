---
title: Build a GraphQL Server
date: "2019-05-09"
description: Build a GraphQL Server with graphqljs
---

Hi and welcome. Today we are going to build a graphql server using graphqljs.
Before we get started, we need to make sure we have node installed. In a command prompt, run the following command:

```console
node -v
```

If you get a number such as `v10.15.1`, you are all set to go, but if not, you will need to download and install node from <https://nodejs.org>. Once node is installed, create a directory for your project. I am going to use `c:\dev\graphql\`, but you can choose whatever you want. Let's initialize our project by running `npm init -y`. Now it is time to install graphql. Run the following command in your project's directory:

```
npm install graphql --save
```

Time to write some code. I am using visual studio code, but you can use whatever editor you want. Open up your project directory in your favorite editor. Let's add a new file and name it `server.js`

At the top of `server.js`, let's require graphql and buildSchema from graphql

```
const {graphql, buildSchema} = require('graphql');
```

Let's define our schema, a schema basically defines our data. For this project, I am going to define a schema for movies.

```
const schema = buildSchema(`
  type Query {
    movies: [String]
  }
`);
```

The above says, when we query for `movies`, we should get back an array of strings. The `[string]` tells us that the return type will be an array of strings. When a user wants to query for movies, we have to tell graphql how to get the list of movies and this is where resolvers come in. Resolvers are responsible for telling graphql where to get data from.

```
const root = {
    movies: () => {
        return ['The Dark Knight', 'Inception', 'Interstellar',
        'Batman Begins', 'E.T. the Extra-Terrestrial', 'Jurassic Park',
        'Hook', 'Indiana Jones and the Last Crusade', 'Catch Me If You Can',
        'Stand by Me', 'A Few Good Men']
    }
}`

```

In the above case, we have defined a root resolver. This means that you can query for movies at the top level. So sending `{movies}` to graphql should return an array of movies.

Now that we have setup our schema and resolver, lets pass this to graphql so it can execute our request. For this, we will use the `graphql` function. The `graphql` function will take our schema, a query, and resolver.

```
graphql(schema, '{movies}', root).then((response) => {
    console.log(response)
})
```

Run the following command in your project directory `node server.js`.

If everything went right, you should see the following:

```
{ data:
   [Object: null prototype] {
     movies:
      [ 'The Dark Knight',
        'Inception',
        'Interstellar',
        'Batman Begins',
        'E.T. the Extra-Terrestrial',
        'Jurassic Park',
        'Hook',
        'Indiana Jones and the Last Crusade',
        'Catch Me If You Can',
        'Stand by Me',
        'A Few Good Men' ] } }`
```

Congrats on setting up your own graphql server.
