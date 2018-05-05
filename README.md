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

## Reference
- https://www.howtographql.com/react-apollo/1-getting-started/