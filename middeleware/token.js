const axios = require('axios');

function tokenPayload(req,res, next) {
    console.log(req.get('auth-token'));
     const config = {
     //url: 'http://localhost:8082/api/verifytoken',
      data :{ name : req.body, password:req.password},     
       headers: {
 
         'auth-token': req.get('auth-token')
     }
    }

    axios.post('http://localhost:8082/api/verifytoken',config)
      .then( ( response ) => {
        console.log( response.data );
        
        next();
      } )

     .catch( (error)=>{
         console.log(error);
         
     });
     
  }

  module.exports = { tokenPayload }