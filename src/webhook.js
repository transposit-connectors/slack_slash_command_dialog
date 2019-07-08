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
    api.run('this.helpdesk', {trigger_id: body.trigger_id, dialog: api.run('this.dialog')});
  }
  return { status_code: 200 };
}
