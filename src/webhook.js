({ http_event }) => {
//   let body = http_event.parsed_body;
//   setImmediate(() => {
//     api.run("this.serve_text", {slackBody: body});
//   });
//   return { status_code: 200 };
// }
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
		api.run('this.helpdesk', {trigger_id: body.trigger_id, text: body.text});
	}
	return { status_code: 200 };
}
