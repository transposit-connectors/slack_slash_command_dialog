# Slash Command and Dialogs blueprint

> _Updated July 2019: This are specific instructions for use in Transposit. For other methods, check the Slack API website._

## Creating a helpdesk ticket using a Slash Command and a Dialog

Use a slash command and a dialog to create a helpdesk ticket in a 3rd-party system. Once it has been created, send a message to the user with information about their ticket.

![helpdesk-dialog](https://user-images.githubusercontent.com/700173/30929774-5fe9f0e2-a374-11e7-958e-0d8c362f89a3.gif)

## Setup

### Create a Slack app

1. Create an app at [https://api.slack.com/apps](https://api.slack.com/apps)
2. Add a Slash command (See _Add a Slash Command_ section below)
3. Navigate to **Bot Users** and click "Add a Bot User" to create one.
4. Enable Interactive components (See _Enable Interactive Components_ below)
5. Navigate to the **OAuth & Permissions** page and make sure the following scopes are pre-selected:
   - `commands`
   - `bot`
6. Add https://accounts.transposit.com/oauth/v2/handle-redirect as a Redirect URI.
7. Click 'Save Changes' and install the app (You should get an OAuth access token after the installation)

#### Add a Slash Command

1. Go back to the app settings and click on Slash Commands.
1. Click the 'Create New Command' button and fill in the following:
   - Command: `/helpdesk`
   - Request URL: the generated webhook url for `open_helpdesk` in Transposit under Deploy
   - Short description: `Create a helpdesk ticket`
   - Usage hint: `[the problem you're having]`

#### Enable Interactive Components

1. Go back to the app settings and click on Interactive Components.
2. Set the Request URL to the generated webhook url for `ticket_received` in Transposit under Deploy
3. Save the change.

#### Fork in Transposit

1. [Fork this app on Transposit](https://console.transposit.com/t/transposit-sample/slack_slash_command_dialog?readme=true)
2. Authenticate your API token with Slack
3. Set up your Airtable workspace for use as a database.

### Transposit Functions

`confirm_ticket`: The Slack API call to post the ticket confirmation message.

`create_record`: Creates an airtable record of the helpdesk ticket.

`get_email`: Returns the email address of a slack user.

`get_records`: Returns a list of airtable records to get the id.

`open_dialog`: The Slack API call to open the helpdesk dialog.

`open_helpdesk`: The operation that is called when `/helpdesk` is entered into the workspace.

`ticket_received`: The operation that is called when the ticket is submitted.
