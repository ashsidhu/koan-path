
Postgress needs to be installed before npm install can be run
`brew install postgres` for Mac OSX.

create 3 databases

$ CREATE DATABASE koans_development;

$ CREATE DATABASE koans_production;

$ CREATE DATABASE koans_testing;


migration
1 => `npm install -g db-migrate`

add this to alias in ~/.bash_profile `db-migrate --config config/database.json -e <DEVELOPMENT/PRODUCTION/TESTING> -m server/migrations`
creating Migration
db-migrate create <name of migration> --config config/database.json -e <DEVELOPMENT/PRODUCTION/TESTING> -m server/migrations

Running Migration
* for migration up
	`db-migrate --config config/database.json -e <DEVELOPMENT/PRODUCTION/TESTING> -m server/migrations up`
* for migration down
	`db-migrate --config config/database.json -e <DEVELOPMENT/PRODUCTION/TESTING> -m server/migrations down`

