import pgnParser = require('pgn-parser');

// @ts-expect-error
pgnParser.parse(999);

const pgnString = `
{This is the Opera Game}

[Event "Paris"]
[Site "Paris FRA"]
[Date "1858.??.??"]
[EventDate "?"]
[Round "?"]
[Result "1-0"]
[White "Paul Morphy"]
[Black "Duke Karl / Count Isouard"]
[ECO "C41"]
[WhiteElo "?"]
[BlackElo "?"]
[PlyCount "33"]

{This is a comment}
;Another comment

1.e4 e5 2.Nf3 d6 3.d4 Bg4 {This is a weak move
already.--Fischer} 4.dxe5 Bxf3 5.Qxf3 dxe5 6.Bc4 Nf6 7.Qb3 Qe7
8.Nc3 c6 9.Bg5 {Black is in what's like a zugzwang position
here. He can't develop the [Queen's] knight because the pawn
is hanging, the bishop is blocked because of the
Queen.--Fischer} b5 10.Nxb5 cxb5 11.Bxb5+ Nbd7 12.O-O-O Rd8
13.Rxd7 Rxd7 14.Rd1 Qe6 15.Bxd7+ Nxd7 16.Qb8+ Nxb8 17.Rd8# 1-0
`;

// $ExpectType ParsedPGN[]
const [parsed] = pgnParser.parse(pgnString);

// $ExpectType Comment[] | null
parsed.comments_above_header;

// $ExpectType string
parsed.comments_above_header![0].text;

// $ExpectType Header[] | null
parsed.headers;

// $ExpectType string
parsed.headers![0].name;

// $ExpectType Comment[] | null
parsed.comments;

// $ExpectType Result
parsed.result;

// $ExpectType Move[]
const moves = parsed.moves;

// $ExpectType string
moves[0].move;

// $ExpectType string[]
moves[0].comments;

// $ExpectType number | undefined
moves[0].move_number;

// $ExpectType Rav[] | undefined
moves[0].ravs;

// $ExpectType Rav[] | undefined
moves[0].ravs;

// $ExpectType Move[]
moves[0].ravs![0].moves;
