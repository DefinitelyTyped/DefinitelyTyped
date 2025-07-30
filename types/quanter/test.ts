function setFilters_0() {
    Quanter.selectors.setFilters["first"] = (elements, argument, not) => {
        // No argument for first
        return not ? elements.slice(1) : [elements[0]];
    };
}
