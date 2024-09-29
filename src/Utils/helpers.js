import speakeasy from 'speakeasy';

const generateOTP = (secretBase32) => {
    let token = speakeasy.totp({
        secret: secretBase32, 
        digits: 4,
        step: 60, 
        window: 1
    });
    return token;
}

export {
    generateOTP,
}