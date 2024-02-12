const { SMTPServer } = require('smtp-server');

const server = new SMTPServer({
    authOptional: true,
  onAuth(auth, session, callback) {
    if (auth.username === 'test-username' && auth.password === 'test-password') {
      return callback(null, { user: 'user' });
    }
    return callback(new Error('Invalid username or password'));
  },
  onData(stream, session, callback) {
    // You can process the email data here
    console.log('Received email:', stream);
    stream.pipe(process.stdout);
    callback(null, 'Message accepted');
  },
});

server.listen(2525, () => {
  console.log('Fake SMTP server listening on port 2525');
});