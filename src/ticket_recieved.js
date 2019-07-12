({ http_event }) => {
  let body = JSON.parse(http_event.parsed_body.payload);
  
  //Create the ticket entry in our databse
  api.run('this.create_record', {id: body.user.id, email: api.run('this.get_email', {user: body.user.id})[0].email, title: body.submission.title, description: body.submission.description, urgency: body.submission.urgency});
  //Find the entry to set the url
  let entry = api.run('this.get_records', {id: body.user.id}).pop().id;
  //Change this url to your Airtable location
  let url = `https://airtable.com/tblk7ryCHBa1uJVy0/viwoi2AplBGupO48j/${entry}?blocks=hide`;
  //Choose the description and return to user
  if (body.submission.description) {
    api.run('this.confirm_ticket', {channel: body.user.id, email: `Ticket created for ${body.user.name}`, title: body.submission.title, description: body.submission.description, urgency: body.submission.urgency, url: url});
  }
  else {
    api.run('this.confirm_ticket', {channel: body.user.id, email: `Ticket created for ${body.user.name}`, title: body.submission.title, description: 'None provided', urgency: body.submission.urgency, url: url});
  }
    
  return { status_code: 200 };
}
