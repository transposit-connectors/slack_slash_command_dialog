({ http_event }) => {
  let body = JSON.parse(http_event.parsed_body.payload);
  setImmediate(() => {
    api.run('this.create_record', {id: body.user.id, email: api.run('this.get_email', {user: body.user.id})[0].email, title: body.submission.title, description: body.submission.description, urgency: body.submission.urgency});

    let entry = api.run('this.get_records', {id: body.user.id}).slice(-1)[0].id;
    let url = `https://airtable.com/tblk7ryCHBa1uJVy0/viwoi2AplBGupO48j/${entry}?blocks=hide`;

    if (body.submission.description){
      api.run('this.confirm_ticket', {channel: body.user.id, email: `Ticket created for ${body.user.name}`, title: body.submission.title, description: body.submission.description, urgency: body.submission.urgency, url: url});
    }
    else {
      api.run('this.confirm_ticket', {channel: body.user.id, email: `Ticket created for ${body.user.name}`, title: body.submission.title, description: 'None provided', urgency: body.submission.urgency, url: url});
    }
  };
  return { status_code: 200 };
}
