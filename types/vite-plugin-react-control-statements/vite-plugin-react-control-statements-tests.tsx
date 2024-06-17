function Tests() {
    return (
        <div>
            {/* @ts-expect-error - No condition */}
            <If>
                <div>true</div>
            </If>

            {/* @ts-expect-error - No children*/}
            <If condition={true}></If>

            {/* @ts-expect-error - No children */}
            <Choose></Choose>

            <Choose>
                {/* @ts-expect-error - No condition */}
                <When>
                    <div>true</div>
                </When>
            </Choose>

            {/* Should not throw error */}
            <If condition={true}>
                <div>true</div>
            </If>

            {/* Should not throw error */}
            <Choose>
                <When condition={true}>
                    <div>true</div>
                </When>
                <When condition={false}>
                    <div>false</div>
                </When>
                <Otherwise>
                    <div>else</div>
                </Otherwise>
            </Choose>
        </div>
    );
}

export default Tests;
