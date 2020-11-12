# webdevsserver-issue

to reproduce error:

```
npm install
npm run bootstrap  ## or npm run bootstrap:hoist
npm run start
```

comment out the `Keycloak()` initialization to make the problem go away 
