# Traefik Important

## Generate username and password for basic auth run below command

`echo $(htpasswd -nB user) | sed -e s/\\$/\\$\\$/g`

## Environments

- make a copy of .env.example via below command
  `cp .env.example .env`
- add generated username and password in the `TRAEFIKADMIN` variable in env file
- for using cloudflare as dns challenge add `CFAPI` variable in env containing an api token from cloudflare. This token should have `Zone:Read` and `DNS:Edit` permission in order to work.

