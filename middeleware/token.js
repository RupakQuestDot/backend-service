const axios = require('axios');

function tokenPayload(req,res, next) {
    console.log(req.get('auth-token'));   
     const headers = {
         'token': req.get('auth-token')
      } 

    axios.post('http://localhost:8082/api/verifytoken',headers)
      .then( ( response ) => {
        console.log( response);    
        next();
      } )

     .catch( (error)=>{
         console.log(error);
         
     });
     
  }

  module.exports = { tokenPayload }