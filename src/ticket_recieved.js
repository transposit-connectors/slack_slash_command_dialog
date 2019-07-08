({ http_event }) => {
  let body = http_event.parsed_body;
  //api.run('this.confirm_ticket', {channel: body.trigger_id, text: 'test'});
  return { status_code: 200 };
}
