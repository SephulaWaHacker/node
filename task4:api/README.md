# Task4 : A registration restful API ( API end-point,routing, MongoDB, database schema)
> > > Is a rest api server which can capture a new prospect, return all captured prospects to a client, return one prospect by id to a client, update one prospect by it's id, delete all prospects and delete one prospects by it's id.

### Instructions

    npm install

    npm start

    Use [Postmam](https://www.getpostman.com/) or [Insomnia](https://insomnia.rest/) rest api clients to test end-points

    listens to port:9001

    The back-end service provides the following end points:
        - /api/v1.1/addNewProspect (add a new prospect)
        - /api/v1.1/deleteAllProspects (delete all prospects)
        - /api/v1.1/deleteProspect/:id (delete a single prospect)
        - /api/v1.1/allProspects (view all prospects)
        - /api/v1.1/viewProspect/:id (view a single prospect)
        - /api/v1.1/updateProspect/:id (Update a single prospect)