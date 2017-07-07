import * as block from "bem-cn";

// expected 'block'
block("block")();

// expected 'block__elem'
block("block")("elem")();

// expected 'block__elem block__elem_disabled block__elem_size_small'
block("block")("elem", { disabled: true, size: 'small' })();

// expected 'block block_disabled'
block("block")({ disabled: true})();

// expected 'block mix'
block("block").mix("mix");

// expected 'block mix mix2'
block("block").mix(["mix", "mix2"]);

// expected 'block is-hidden'
block("block").state({ hidden: true });

// expected 'block'
block("block").state({ hidden: false });

// expected 'block is-hidden is-error'
block("block").state({ hidden: true, error: true });

// expected 'block is-loading'
block("block").is({ loading: true });

// expected 'block has-content'
block("block").has({ content: true });

block.setup({
    el: '~~',
    mod: '--',
    modValue: '-'
});

// expected 'block~~elem'
block("block")("elem");

// expected 'block block--mod-value'
block("block")({ mod: "value"});
