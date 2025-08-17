
import { AppStrings } from ".";

export type RootStackParamList = {
    [key in typeof AppStrings[keyof typeof AppStrings]]: undefined; 
};


export default {
    // AuthStack
    AuthStack: 'AuthStack',
    Login: 'Login',
    OTP: 'OTP',



    // ProfileStack
    ProfileStack: 'ProfileStack',
    Order:  'Order',
    Details: 'CoupenDetails',
    Profile: 'Profile',



    // Coupen
    McBrand: 'McBrand',
    Coupen: 'Coupen',
    numbertext: 'Your Phone Number',
    IND: '+91',
    LOGIN: 'LOGIN',



    // OTP
    InputOTP: 'INPUT OTP',
    OTPsent: 'OTP Code Sent to',
    NotCode: "Don't get the code?",
    Resend: 'Resend the OTP Code ',
    submit : 'SUBMIT',

    


}