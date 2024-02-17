const mongodb =require ('mongodb')
const mongoClient =mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = 'employees'
mongoClient.connect(connectionUrl,(error,res)=>{
    if(error){
       return console.log('error has occurred')
    }
    console.log('all perfect')
    const db=res.db(dbname)
    db.collection('user').insertOne({
        name:'mohamed',
        age:20
    },(error,data)=>{
        if(error){
           return console.log("unable to insert")
        }
        console.log("inserted successfully")
    })
    db.collection('user').insertOne({
        name:'ahmed',
        age:22
    },(error,data)=>{
        if(error){
           return console.log("unable to insert")
        }
        console.log("inserted successfully")
    })
    db.collection('user').insertMany([{
        name:'ali',
        age:27
    },
    {
        name:'safa',
        age:24
    },
    {
        name:'marwa',
        age:27
    },
    {
        name:'ola',
        age:21
    },
    {
        name:'samia',
        age:27
    },
    {
        name:'mostafa',
        age:27
    },
    {
        name:'mona',
        age:40
    },
    {
        name:'omar',
        age:31
    },
    {
        name:'amr',
        age:27
    },
    {
        name:'nour',
        age:22
    }],(error,data)=>{
        if(error){
            return console.log("unable to insert")
        }
        console.log("inserted successfully")
    })

    db.collection('user').find({age:27}).toArray((error,user)=>{
        if(error){
           return console.log("unable to print")
        }
        console.log(user)
    })
    db.collection('user').find({age:27}).limit(3).toArray((error,user)=>{
        if(error){
            return console.log("unable to print")
        }
        console.log("***********************limited count*********************************")
        console.log(user)
    })

    db.collection('user').updateOne({_id:mongodb.ObjectId("65cf16aefc10485a7189cd06")},{
        $set:{name:'mariam'}
        
    }).then((data1)=>{console.log("data updated successfully")})
    .catch((error)=>{console.log(error)})
    db.collection('user').updateOne({_id:mongodb.ObjectId("65cf16aefc10485a7189cd07")},{
        $set:{name:'randa'}
        
    }).then((data1)=>{console.log("data updated successfully")})
    .catch((error)=>{console.log(error)})
    db.collection('user').updateOne({_id:mongodb.ObjectId("65cf16aefc10485a7189cd08")},{
        $set:{name:'rana'}
        
    }).then((data1)=>{console.log("data updated successfully")})
    .catch((error)=>{console.log(error)})
    db.collection('user').updateOne({_id:mongodb.ObjectId("65cf16aefc10485a7189cd09")},{
        $set:{name:'hanan'}
        
    }).then((data1)=>{console.log("data updated successfully")})
    .catch((error)=>{console.log(error)})
    db.collection('user').updateOne({age:27},{
        $inc:{age:4}
        
    }).then((data1)=>{console.log("data updated successfully")})
    .catch((error)=>{console.log(error)})
    db.collection('user').updateOne({age:27},{
        $inc:{age:4}
        
    }) .then((data1)=>{console.log("data updated successfully")})
    .catch((error)=>{console.log(error)})
    db.collection('user').updateOne({age:27},{
        $inc:{age:4}
        
    }).then((data1)=>{console.log("data updated successfully")})
    .catch((error)=>{console.log(error)})
     db.collection('user').updateOne({age:27},{
        $inc:{age:4}
        
    }).then((data1)=>{console.log("data updated successfully")})
    .catch((error)=>{console.log(error)})
    db.collection('user').updateMany({},{
        $inc:{age:10}
    }).then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=>{console.log(error)})
    db.collection('user').deleteMany({age:41})
    .then((data1)=>{console.log(data1.deletedCount)})
    .catch((error=>{console.log(error)}))
})