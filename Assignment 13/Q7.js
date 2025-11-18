
function validateUsername(u){ return /^.{5,}$/.test(u); }
function validatePassword(p){
    return /[A-Z]/.test(p)&&/[a-z]/.test(p)&&/\d/.test(p)&&/[^A-Za-z0-9]/.test(p)&&p.length>=8;
}
