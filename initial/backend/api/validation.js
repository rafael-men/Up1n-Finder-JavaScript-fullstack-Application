module.exports = app => {
    function existsOrError(value,msg) {
        if(!value) throw msg
        if (Array.isArray(value) && value.length === 0) throw msg
        if( typeof value === 'string' && !value.trim() ) throw msg
    }
    
    function notExistsOrErrror (value,msg) {
        try {
            existsOrError(value,msg)
        }
        catch (msg) {
            return 
        }
        throw msg
    }
    
    function equalsOrError (vA,vB,vC) {
        if (vA !== vB) throw msg
    }

    return {existsOrError,notExistsOrErrror,equalsOrError}
}