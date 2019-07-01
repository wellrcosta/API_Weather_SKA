const restify = require('restify');
const porta = 8080;
const servidor = restify.createServer();
const request = require("request");
const cron = require("node-cron");


let tempSaoLeopoldo, tempAmericana, tempSaoPaulo, tempCaxiasDoSul, tempJoinville, tempCuritiba, tempFlorianopolis,
    tempBeloHorizonte;

cron.schedule("*/5 * * * *", () => {
    const SaoLeopoldo = "461140";
    const Americana = "455837";
    const SaoPaulo = "455827";
    const CaxiasDoSul = "12581299";
    const Joinville = "455873";
    const Curitiba = "455822";
    const Florianopolis = "455861";
    const BeloHorizonte = "455821";

    var sl = 'https://api.hgbrasil.com/weather?woeid=' + SaoLeopoldo + '&array_limit=4&fields=only_results&key=YOUKEYHERE';
    request(sl, {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        tempSaoLeopoldo = body;
    });

    var am = 'https://api.hgbrasil.com/weather?woeid=' + Americana + '&array_limit=4&fields=only_results&key=87743011';
    request(am, {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        tempAmericana = body;
    });

    var sp = 'https://api.hgbrasil.com/weather?woeid=' + SaoPaulo + '&array_limit=4&fields=only_results&key=87743011';
    request(sp, {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        tempSaoPaulo = body;
    });

    var cs = 'https://api.hgbrasil.com/weather?woeid=' + CaxiasDoSul + '&array_limit=4&fields=only_results&key=87743011';
    request(cs, {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        tempCaxiasDoSul = body;
    });

    var jn = 'https://api.hgbrasil.com/weather?woeid=' + Joinville + '&array_limit=4&fields=only_results&key=87743011';
    request(jn, {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        tempJoinville = body;
    });

    var cb = 'https://api.hgbrasil.com/weather?woeid=' + Curitiba + '&array_limit=4&fields=only_results&key=87743011';
    request(cb, {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        tempCuritiba = body;
    });

    var fl = 'https://api.hgbrasil.com/weather?woeid=' + Florianopolis + '&array_limit=4&fields=only_results&key=87743011';
    request(fl, {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        tempFlorianopolis = body;
    });

    var bh = 'https://api.hgbrasil.com/weather?woeid=' + BeloHorizonte + '&array_limit=4&fields=only_results&key=87743011';
    request(bh, {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        tempBeloHorizonte = body;
    });
});

servidor.get('/:cidade', (req, res) => {
    switch (req.params.cidade) {
        case "SaoLeopoldo":
            res.send(tempSaoLeopoldo);
            break;

        case "Americana":
            res.send(tempAmericana);
            break;

        case "BeloHorizonte":
            res.send(tempBeloHorizonte);
            break;

        case "Florianopolis":
            res.send(tempFlorianopolis);
            break;

        case "Curitiba":
            res.send(tempCuritiba);
            break;

        case "Joinville":
            res.send(tempJoinville);
            break;

        case "CaxiasDoSul":
            res.send(tempCaxiasDoSul);
            break;

        case "SaoPaulo":
            res.send(tempSaoPaulo);
            break;
    }
});
servidor.listen(porta, () => {
    console.log('Servidor de pé em http://localhost:' + porta);
    console.log('Pra derrubar o servidor: ctrl + c');
});
