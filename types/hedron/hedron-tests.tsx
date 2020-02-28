import * as React from 'react';
import * as Grid from 'hedron';

<Grid.Provider
    padding='20px'
    breakpoints={{ sm: '-500', md: '501-750', lg: '+750' }}>
    <Grid.Bounds direction='vertical'>
        <Grid.Box sm={{ hidden: true }}>
            This header hides on small screens
        </Grid.Box>
        <Grid.Box>Content</Grid.Box>
        <Grid.Box lg={{ padding: '50px' }}>
            This footer gains extra padding on large screens
        </Grid.Box>
    </Grid.Bounds>
</Grid.Provider>;
