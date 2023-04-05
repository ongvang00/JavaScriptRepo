let email = {
    mail: [
        'inbox', 
        'junk',
    ],
    sent: 'sent emails',
    draft: 'draft emails',
        
    
    calender: 'my calender',
    contacts: [
        {name: 'Nick', lastMessage: "Can you send me the files again?"},
        {name: 'Carl', lastMessage: "Are we still meeting today at 3pm?"}
    ]

}

// // //Get a list of mailbox names
// console.log("This is a list of mailbox names:" email.mail);

// // //Get a list of emails
// console.log("This is a list of emails:" email.contacts);

// // //Get the text of the second email in the visible list
// console.log(" This is the second email: " +email.contacts[1].lastMessage);

//Mark an email as sent

console.log('This is the amount of emails in contact folder:' +email.contacts.length)
console.log('This is the email being remove:', email.contacts.pop())

while(email.contacts.length>0) {
    let sentcontacts=email.contacts.pop()
sent.push(sentcontacts)
}
console.log('This is the sent folder:' + email.mail[2])
console.log('This is the amount of emails in contact folder:' + email.contacts.length)

//Add a draft email to the drafts mailbox
// let newDraft= 'draft:{name: arden, lastMessage: "How are you?"}';
// email.mail[4]=newDraft 
// console.log("This is the draft mailbox: " +email.mail[4])

