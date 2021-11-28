export const post = (request) => {
    var fn = request.body.get('firstName');
    
    return {
        headers: {
            'content-type': 'text/html',
        },
        body: `<p>${fn}</p>`
    }
};