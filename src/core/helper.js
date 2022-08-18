
let helper = {

 /**
 * Function to be used to store type of call in database logs
 * @param {*} url 
 * @returns 
 */
getType: (url) =>{
 if(url){
  const allUrlParams = url.split("/");
  if(allUrlParams && allUrlParams.length > 2){
   let type = null;
   const callType = allUrlParams[1];
   const methodType = allUrlParams[2];

   switch (callType) {

    case "vehicle-registration":
    if(methodType == "search") type = "vehicleRegistration";
    else if(methodType == "basic") type = "vehicleRegistrationBasic";
    else if(methodType == "basicForInternal") type = "vehicleRegistrationbasicForInternal";
    else if(methodType == "basicFromDb") type = "vehicleRegistrationBasicFromDb";
    else if(methodType == "mmvSearch") type = "vehicleRegistrationMMV";
    break;

    case "aadhaar":
    if(methodType == "search") type = "aadhaarSearch";
    else if(methodType == "extraction") type = "aadhaarOCR";
    else if(methodType == "basic-verification") type = "aadhaarBasic";
    else if(methodType == "offline-verification") type = "AadhaarOffline";
    else if(methodType == "aadhaarOfflineOtp") type = "aadhaarOfflineOtp_getOtp";
    break;
    
    case "panCard":
    if(methodType == "search") type = "pan";
    else if(methodType == "detail") type = "pan";
    else if(methodType == "extraction") type = "panCardOCR";
    else if(methodType == "panStatusCheck") type = "panStatusCheck";
    break;
    
    case "voterId":
    if(methodType == "search") type = "voterId";
    else if(methodType == "extraction") type = "voterIdOCR";
    else if(methodType == "newSearch") type = "voterId";
    break;
    
    case "dl":
    if(methodType == "shortDetail") type = "drivingLicenseBasic";
    else if(methodType == "search") type = "drivingLicense";
    else if(methodType == "intermediate") type = "drivingLicenseIntermediate";
    else if(methodType == "extraction") type = "dlOCR";
    break;
    
    case "passport":
    if(methodType == "search") type = "passport";
    else if(methodType == "extraction") type = "passportOCR";
    break;
    
    case "bank":
    if(methodType == "verify") type = "bankAccount";
    else if(methodType == "account-transfer") type = "bankAccountTransfer";
    else if(methodType == "upi") type = "upiVerification";
    break;
    
    case "match":
    if(methodType == "name") type = "match";
    else if(methodType == "face") type = "faceMatch";
    else if(methodType == "exactNameMatch") type = "exactNameMatch";
    else if(methodType == "geocodeMatch") type = "geocodeMatch";
    else if(methodType == "reversegeocodeMatch") type = "reverseGeocodeMatch";
    else if(methodType == "addressMatch") type = "addressMatch";
    break;

    case "digilocker":
    if(methodType == "create-url") type = "digilockerCreateUrl";
    else if(methodType == "getEaadhaar") type = "digilockerAadhaarDetails";
    else if(methodType == "issuedFileList") type = "digilockergetIssuedFileList";
    else if(methodType == "getFiles") type = "digilockergetFiles";
    else if(methodType == "getAllIssuedFiles") type = "digilockerGetAllIssuedFiles";
    break;
    
    case "identityCard":
    if(methodType == "classification") type = "IdClassification";
    break;
    
    case "gst":
    if(methodType == "basic") type = "gstinSearch";
    else if(methodType == "detailed") type = "detailedGstinSearch";
    else if(methodType == "pantogstlist") type = "panToGstList";
    else if(methodType == "pantogstlistadvance") type = "panToGstListAdvance";
    else if(methodType == "viewreturns") type = "viewReturns";
    else if(methodType == "gst-cert-extraction") type = "gstCertificateOcr";
    break;
    
    case "snec":
    if(methodType == "search") type = "snecSearch";
    break;
    
    case "udyam-registration":
    if(methodType == "search") type = "udyamSearch";
    break;
    
    case "roc":
    if(methodType == "cin-basic") type = "rocCinSearch";
    else if(methodType == "cin-intermediate") type = "rocCinIntermediateSearch";
    else if(methodType == "cin-advanced") type = "rocCinAdvancedSearch";
    else if(methodType == "search-name") type = "rocNameSearch";
    break;
    
    case "cancelled-cheque":
    if(methodType == "extraction") type = "chequeOcr";
    break;
    
    case "vehicle-challan-advanced":
    if(methodType == "search") type = "vehicleRegistration";
    break;
    
    case "electricityBill":
    if(methodType == "search") type = "electricityBill";
    break;
    
    case "pngBill":
    if(methodType == "search") type = "pngBill";
    break;
    
    case "lpgBill":
    if(methodType == "search") type = "lpgBill";
    break;
    
    case "professional":
    if(methodType == "ca-auth") type = "caMemberAuth";
    else if(methodType == "mci-auth") type = "mciAuth";
    break;

    case "iec":
    if(methodType == "search") type = "iecDetail";
    break;
    
    case "fssai":
    if(methodType == "search") type = "fssaiLicense";
    break;
    
    case "mobileVerification":
    if(methodType == "search") type = "mobileVerification_getOtp";
    break;
    
    case "epfo":
    if(methodType == "basicSearch") type = "basicSearchEPFO";
    else if(methodType == "detailedSearch") type = "detailedSearchEPFO";
    else if(methodType == "employeeSearch") type = "employeeSearchEPFO";
    break;
    
    case "din":
    if(methodType == "din-intermediate") type = "simpleDinSearch";
    else if(methodType == "din-basic") type = "dinBasicSearch";
    else if(methodType == "din-advanced") type = "dinAdvancedSearch";
    break;
     
    default:
     type = null;
   }
   
   return type;
  }
  else return null;
 }
 else return null;
}

};

module.exports = helper;