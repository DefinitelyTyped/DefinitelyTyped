

var is_true = TsMonad.Writer.writer(['Started with 0'], 0)
    .bind(x => TsMonad.Writer.writer(['+ 8'], x + 8))
    .bind(x => TsMonad.Writer.writer(['- 6', '* 8'], 8 * (x - 6)))
    .caseOf({
        writer: (s, v) => v === 16 && s.join(', ') === 'Started with 0, + 8, - 6, * 8'
    });