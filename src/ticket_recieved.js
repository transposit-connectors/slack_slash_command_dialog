({ http_event }) => {
  let body = JSON.parse(http_event.parsed_body.payload);
  if (body.submission.description){
    let text = body.submission.description;
    api.run('this.confirm_ticket', {channel: body.user.id, email: `Ticket created for ${body.user.name}`, title: body.submission.title, text: text, urgency: body.submission.urgency});
  }
  else {
    let text = 'None provided';
    api.run('this.confirm_ticket', {channel: body.user.id, email: `Ticket created for ${body.user.name}`, title: body.submission.title, text: text, urgency: body.submission.urgency});
  }
  return { status_code: 200 };
}
