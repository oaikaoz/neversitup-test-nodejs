# Structure Project

```
api-project
.
|── routes
│   ├── Payment.js
│   ├── Authen.js
|── src
│   ├── config
│   |  |--development.js
│   |  |--uat.js
│   |  └─-production.js
│   ├── svc
│   |  ├──bbl
│   |     ├──Deposit.js
│   |     └──Withdraw.js
│   ├── Index.js
│   ├── Transaction.js
│   ├── Utils.js
│   └── Order.js
|── ddl
│   ├── CreateTablePayment.cql
│   └── AlterTablePayment.cql
├── rundeck
│   ├── ReconcilePayment.js
│   └── UpdateDataPayment.js
├── middleware
│   ├── HandleError.js
│   └── Authentication.js
├── test
│   ├── config
│   |   |--namedev1.js
│   |   |--namedev2.js
│   |   └──gitlab.js
│   ├── filetest
│   |   |--datatest.xlsx
│   |   └──datatest.txt
│   ├── test-api.spec.js
│   └── test-sdk.spec.js
├── engine
│   └── EarnPointEngine.js
└── README.md
└── package.json
└── package-lock.json
└── gitlab-ci.yaml
└── authen-sequence.md
└── Dockerfile
└── .dockerignore
└── api.yaml

  
```
## Explanation

### routes/
  stored API routes, which are automatically generated from the `api.yaml` file using the OpenAPI Swagger library.

### src/
  stores code of the project, including business logic and other components.

### ddl/
  stores scripts related to the database schema, including updates and `ALTER TABLE` operations.
  
### rundeck/
  stores script for automation jobs(Rundeck tool)

### middleware/
  stores middleware components for handling various aspects of the application

### test/
  stores test scripts for API and SDK function

### engine/
  stores Kafka consumer engine used to handle various data processing tasks, such as earning points and other processes