import * as Board from 'firmata'

function test_basic_board()
{
	let board = new Board('');
}

function test_board_with_callback()
{
	let board = new Board('', (error:any) =>
	{
		board.pinMode(13, board.MODES.OUTPUT);
		board.pinMode(12, Board.PIN_MODES.OUTPUT);
	});
}

function test_board_with_listener()
{
	let board = new Board('');

	board.on('ready', () =>
	{
		board.pinMode(13, board.MODES.OUTPUT);
		board.pinMode(12, Board.PIN_MODES.OUTPUT);
	});
}

function test_class_extension()
{
	class MyBoard extends Board
	{
		Disconnect()
		{
			this.transport.close((error:any) => {});
		}
	}

	let myBoard:MyBoard = new MyBoard('', () =>
	{
		myBoard.Disconnect();
	});
}