db.createUser(
    {
        user: 'monguser',
        pwd: 'mongopass',
        roles: [
            {
                role: 'readWrite',
                db: 'pugongo'
            }
        ]
    }
)
db.getSiblingDB('pugongo')
db.testLogs.insertOne( { action: 'insertOne', result: 'OK' } )