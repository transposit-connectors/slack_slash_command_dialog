({ http_event }) => {
  let body = http_event.parsed_body;
  //api.run('this.helpdesk', {trigger_id: body.trigger_id, text: 'test'});
  api.run('this.open_dialog', {trigger_id: body.trigger_id});//, message: body.message.text, name: api.run('this.id_to_name',{user: body.message.user})[0].name});
  return { status_code: 200 };
}
