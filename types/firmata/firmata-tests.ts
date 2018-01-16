import * as Board from 'firmata';

function test_basic_board() {
	const board = new Board('');
}

function test_board_with_callback() {
	const board = new Board('', (error: any) => {
		board.pinMode(13, board.MODES.OUTPUT);
		board.pinMode(12, Board.PIN_MODE.OUTPUT);
	});
}

function test_board_with_listener() {
	const board = new Board('');

	board.on('ready', () => {
		board.pinMode(13, board.MODES.OUTPUT);
		board.pinMode(12, Board.PIN_MODE.OUTPUT);
	});
}

function test_class_extension() {
	class MyBoard extends Board {
		Disconnect() {
			this.transport.close((error: any) => {});
		}
	}

	const myBoard: MyBoard = new MyBoard('', () => {
		myBoard.Disconnect();
	});
}
