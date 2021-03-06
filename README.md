# Hackernews React Apollo and GraphQL

## Install and deploy server
```
cd server
yarn install
yarn prisma deploy
```
- Choose a server to deploy
- Copy the HTTP endpoint and paste into `server/src/index.js`
  - To recall the HTTP endpoint again, type `yarn prisma info`
- Then start the server
```
yarn dev
```

## Start react
```
cd ..
yarn start
```

## Issues encountered
- Even if you set the graphql server to start at port 4000, the playground forces itself to start at port 3000. This leaves you no choice but to start the react server at a different port (e.g. 3001).

## Reference
- https://www.howtographql.com/react-apollo/1-getting-started/