const AssistantV2 = require('ibm-watson/assistant/v2')
const ngrok = require('ngrok')

const service = new AssistantV2({
    version: '2019-02-28',
    iam_apikey: 'hasUBUNTpYML2ADhfy_7SpHQhMhcm1qC-elFaoLHKSPU',
    url: 'https://gateway.watsonplatform.net/assistant/api'
})

//console.log(service)

service.createSession({
        assistant_id: '68ad986c-cc34-4cfe-b5b6-3d93d25d2c4f'
    })
    .then(res => {
        console.log(JSON.stringify(res, null, 2));
        service.message({
                assistant_id: '68ad986c-cc34-4cfe-b5b6-3d93d25d2c4f',
                session_id: `${res.session_id}`,
                input: {
                    'message_type': 'text',
                    'text': 'hola'
                }
            })
            .then(res => {
                console.log(JSON.stringify(res, null, 2));
            })
            .catch(err => {
                console.log(err);
            });

    })
    .catch(err => {
        console.log(err);
    });

/*
service.message({
    assistant_id: '68ad986c-cc34-4cfe-b5b6-3d93d25d2c4f',
    session_id: '123456',
    input: {
      'message_type': 'text',
      'text': 'Hello'
      }
    })
    .then(res => {
      console.log(JSON.stringify(res, null, 2));
    })
    .catch(err => {
      console.log(err);
    });*/



(async function () {
    const url = await ngrok.connect({
        proto: 'http', // http|tcp|tls, defaults to http
        addr: 8080, // port or network address, defaults to 80
        auth: 'user:pwd', // http basic authentication for tunnel
        subdomain: 'harold', // reserved tunnel name https://alex.ngrok.io
        authtoken: '12345', // your authtoken from ngrok.com
        region: 'us', // one of ngrok regions (us, eu, au, ap), defaults to us
        configPath: '~/git/project/ngrok.yml' // custom path for ngrok config file
    });
    console.log(url)
})();

