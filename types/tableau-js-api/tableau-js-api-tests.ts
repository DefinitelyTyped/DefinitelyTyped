// basic usage
const url =
    "https://public.tableau.com/views/Superstore_15747782479110/Overview?:language=en-US&:display_count=n&:origin=viz_share_link";
const options: tableau.VizCreateOptions = {
    width: "100%",
    onFirstInteractive: _e => console.log("Tableau viz loaded!"),
};

const viz = new tableau.Viz(document.getElementById("tableauViz")!, url, options);
