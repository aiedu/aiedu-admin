import axios from 'axios';

function normalize ( url ){
    if( url.charAt( 0 ) === '/' ) url = url.slice( 1 );
    return url;
}

function request ( url, method, options ){
    return new Promise(( resolve, reject ) => {
        axios[ method ]( process.env.REMOTE_ADDR + normalize( url ), method === 'post' ? options : {
            params: options
        }).then(({ config, data, headers, status }) => {
            resolve( data );
        }).catch( reject );
    });
}

export default {
    send ( url, options ){
        return request( url, 'post', options );
    },
    get ( url, options ){
        return request( url, 'get', options );
    }
};