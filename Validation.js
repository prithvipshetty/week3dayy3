let isValidBody=function (body){
    return Object.keys(body).length>0;

};
module.exports={isValidBody};

const isValid=function(value){
    if(typeof value==="undefined"|| value===null) return false;
    if(typeof value==="string"&& value.trim().length===0) return false;
    if(typeof value===Number && value.trim().length===0) return false;
    return true;
};

let isValidName=/^[a-zA-Z]*$/;
// let isValidEmail=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
// let isValidMobile=/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([-]?)\d{3}([-]?)\d{4})$/;

module.exports={isValidBody,isValid,isValidName};











// let name="prithvi is xyz    "
// name.trim()
// name="prithvi"