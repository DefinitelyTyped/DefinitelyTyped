var contact: Contact = navigator.contacts.create({
    nickname: 'John Smith',
    displayName: 'John Smith',
    phoneNumbers: [{ pref: true, type: "work", value: "+185642556856" }]
});

navigator.contacts.find(["phoneNumbers"],
    (contacts: Contact[])=> { alert('Find ' + contacts.length + ' contacts'); },
    (error: ContactError) => { alert('Error: ' + error.message); },
    new ContactFindOptions("+1", true)
);

navigator.contacts.pickContact(
    (contact: Contact)=> { console.log(contact); },
    (err: ContactError)=> { console.log(err.message); }
);
