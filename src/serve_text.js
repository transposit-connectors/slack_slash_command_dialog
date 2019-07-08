({slackBody}) => {
  
  const dialogObj = {
    callback_id: "type_race",
    notify_on_cancel: false,
    title: "SlackRacer Speed Test",
  };
  const trigger_id = slackBody.trigger_id;
  return api.run("slack_bot.open_dialog", { $body: { trigger_id: trigger_id, dialog: JSON.stringify(dialogObj) }});
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */