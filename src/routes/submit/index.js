export const post = (request) => {
    var fn = request.body.get('firstName');
    var age = request.body.get('age');
    
    return {
        headers: {
            'content-type': 'text/html',
        },
        body: `<p>${fn}</p><br><p>${age}</p>`
    }
};