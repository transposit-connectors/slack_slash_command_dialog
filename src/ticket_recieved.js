({ http_event }) => {
  let body = JSON.parse(http_event.parsed_body.payload);
  api.run('this.create_record', {id: body.user.id, email: api.run('this.get_email', {user: body.user.id})[0].email, title: body.submission.title, description: body.submission.description, urgency: body.submission.urgency});
  if (body.submission.description){
    api.run('this.confirm_ticket', {channel: body.user.id, email: `Ticket created for ${body.user.name}`, title: body.submission.title, description: body.submission.description, urgency: body.submission.urgency});
  }
  else {
    api.run('this.confirm_ticket', {channel: body.user.id, email: `Ticket created for ${body.user.name}`, title: body.submission.title, description: 'None provided', urgency: body.submission.urgency});
  }
  return body;{ status_code: 200 };
}
