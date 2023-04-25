let appData = {
    name: 'Gmail',
    mailboxes: 
    [
        "Inbox",
        "Starred",
        "Sent",
        "Spam",
        "Trash",
        "Attachments",
        "Archive",
    ],
    inbox: [
        {from:"hello@gmail.com", 
        status: "read",
        message: "How are you?"},

        {from:"howdy@gmail.com", 
        status: "unread",
        message: "where are you?"},
    ],
    outbox: [
        {to:"hello@gmail.com", 
        status: "sent",
        message: "What have you been up to?"},

        {to:"howdy@gmail.com", 
        status: "sent",
        message: "Still meeting?"},
    ],
    draft: [
        {to:"hello@gmail.com", 
        status: "draft",
        message: "Lets meet!"},
    ]
}



//Get a list of mailbox names
console.log(appData.mailboxes);

//Get a list of emails
console.log(appData.inbox);

//Get the text of the second email in the visible list
console.log(appData.inbox[1].message);

//Mark an email as sent

let sentemail = appData.draft.pop()
console.log(sentemail)

appData.outbox.push(sentemail)
console.log(appData.outbox)

// Add a draft email to the drafts mailbox
appData.drafts={
    to: "hello@gmail.com",
    status: "draft", 
    message:"i hate this"
}
console.log(appData.draft)