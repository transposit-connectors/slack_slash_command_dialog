({ http_event }) => {
  let body = http_event.parsed_body;
  api.run('this.helpdesk', {trigger_id: body.trigger_id, text: 'test'});
  return { status_code: 200 };
}
