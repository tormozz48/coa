require('../lib/coa').Cmd()
    .name('arg')
    .title('Args test')
    .helpful()
    .opt()
        .name('opt').title('Option')
        .long('opt').short('o')
        .end()
    .arg()
        .name('arg1').title('First arg')
        .end()
    .arg()
        .name('arg2').title('Second array arg')
        .arr()
        .end()
    .act(function(opts, args) {
        console.log(opts);
        console.log(args);
    })
    .invoke(
        { opt: 'value' },
        {
            arg1: 'value',
            arg2:  ['value 1', 'value 2']
        })
    .end();