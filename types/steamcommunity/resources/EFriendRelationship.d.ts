export interface EFriendRelationship {
    'None': 0;
    'Blocked': 1;
    'RequestRecipient': 2;
    'Friend': 3;
    'RequestInitiator': 4;
    'Ignored': 5;
    'IgnoredFriend': 6;
    'SuggestedFriend': 7; // removed "was used by the original implementation of the facebook linking feature; but now unused."

    // Value-to-name mapping for convenience
    '0': 'None';
    '1': 'Blocked';
    '2': 'RequestRecipient';
    '3': 'Friend';
    '4': 'RequestInitiator';
    '5': 'Ignored';
    '6': 'IgnoredFriend';
    '7': 'SuggestedFriend';
}
