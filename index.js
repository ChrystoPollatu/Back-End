const http = require('http');
const moment = require('moment/moment');
const member = require('./member');
const user = require('./users')

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    const url = req.url
    if(url === '/about'){
        res.write(JSON.stringify({
            'Status': 'success',
            'Message': 'response success',
            'Descriptions' : 'Exercise #3',
            'Date' : res.write(moment().dateTime()),
            'Data' : res.write(member.chrysto(), member.abraham(), member.girard(), member.lim())
        }))
    }
    if(url === '/users'){
        res.write(JSON.stringify(
            res.write (user.a(), user.b(), user.c(), user.d(), user.e(), user.f(), user.g(), user.h(), user.i(), user.j())
        ))
    }
    else{
        res.write('This is the home page');
        res.end();
    }
})