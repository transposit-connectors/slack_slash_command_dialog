({ http_event }) => {
  setImmediate(() => {
    let body = JSON.parse(http_event.parsed_body.payload);

    // Create the ticket entry in our databse
    api.run('this.create_record', {
                                    baseId: env.get("baseId"),
                                    id: body.user.id,
                                    email: api.query('SELECT user.profile.email FROM slackbot.get_users_info WHERE user=@user', 
                                      {user: body.user.id})[0].email,
                                    title: body.submission.title,
                                    description: body.submission.description,
                                    urgency: body.submission.urgency
                                  });
    // Choose the description and return to user
    if (body.submission.description) {
      api.run('this.confirm_ticket', {
                                      channel: body.user.id,
                                      email: `Ticket created for ${body.user.name}`,
                                      title: body.submission.title,
                                      description: body.submission.description,
                                      urgency: body.submission.urgency,
                                      url: env.get("url")
                                     });
    } else {
      api.run('this.confirm_ticket', {
                                      channel: body.user.id,
                                      email: `Ticket created for ${body.user.name}`,
                                      title: body.submission.title,
                                      description: 'None provided',
                                      urgency: body.submission.urgency,
                                      url: env.get("url")
                                     });
    }
  });
  return { status_code: 200 };
}
