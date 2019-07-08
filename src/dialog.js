(params) => {
  return JSON.stringify([
    {
      title: 'Ticket created for ${ticket.userEmail}',
      // Get this from the 3rd party helpdesk system
      title_link: 'http://example.com',
      text: 'cat',
      fields: [
        {
          title: 'Title',
          value: 'hello',
        },
        {
          title: 'Description',
          value: 'None provided',
        },
        {
          title: 'Status',
          value: 'Open',
          short: true,
        },
        {
          title: 'Urgency',
          value: 'High',
          short: true,
        },
      ],
    },
  ]);
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */