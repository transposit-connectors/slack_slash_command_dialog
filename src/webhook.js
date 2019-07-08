({ http_event }) => {
  let body = http_event.parsed_body;
  if (body.challenge) {
    // https://api.slack.com/events/url_verification
    return {
      status_code: 200,
      headers: { "Content-Type": "text/plain" },
      body: body.challenge
    };
  }
  else {
    let email = 'test@email.com';
    api.run('this.helpdesk', {trigger_id: body.trigger_id, text: 'test'});
  }
  return { status_code: 200 };
}
