'use strict';

const Hapi = require('@hapi/hapi');
const Vision = require('vision');
const hbs = require('handlebars');
const Inert = require('@hapi/inert');

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    load: { sampleInterval: 1000 }
});

const init = async () => {
    await server.register([Vision, Inert]);

    server.views({
        engines: {
            html: hbs
        },
        relativeTo: __dirname,
        path: 'views'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return h.view('index', {
                title: 'Using handlebars in and here',
                message: 'Tutorial'
            });
        }
    });

    server.route({
        method: "GET",
        path: "/public/{path*}",
        handler: {
            directory: {
                path: "./public",
                listing: false,
                index: false
            }
        }
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();