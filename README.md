# webdevsserver-issue

to reproduce error:

```
npm install
npm run bootstrap  ## or npm run bootstrap:hoist
npm run start
```


Comment out the `Keycloak()` initialization in `wc.tz` to make the problem go away. 
