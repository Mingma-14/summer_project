
import myKey from "./khaltiKey";


let config = {
    // replace this key with yours
    "publicKey":myKey.publicTestKey,
    "productIdentity": "1234567890",
    "productName": "Registration",
    "productUrl":"http://localhost:3000/payment","eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
            alert("thank you for registration!!!")
           
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

export default config