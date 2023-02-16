module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: 'info@logue.audio',
                defaultReplyTo: 'info@logue.audio',
            },
        },
    },
});
