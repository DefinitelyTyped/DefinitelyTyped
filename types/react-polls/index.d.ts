import * as React from 'react';

interface AnswerStruct {
    option: string;
    votes: number;
}

interface CustomStylesStruct {
    questionSeparator?: boolean;
    questionSeparatorWidth?: string;
    questionBold?: boolean;
    questionColor?: string;
    align?: string;
    theme?: string;
}

export interface PollProps {
    question: string;
    answers: AnswerStruct[];
    onVote: (voteAnswer: string) => void;
    customStyles?: CustomStylesStruct;
    noStorage?: boolean;
    vote?: string;
}

declare class Poll extends React.Component<PollProps> {}
export default Poll;
