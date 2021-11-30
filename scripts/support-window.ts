import { max, min } from "d3-array";
import { axisLeft, axisTop } from "d3-axis";
import { scaleBand, scaleTime } from "d3-scale";
import { select } from "d3-selection";
import { utcYear } from "d3-time";
import { utcFormat } from "d3-time-format";
import { JSDOM } from "jsdom";
import serialize from "w3c-xmlserializer";
import data from "../docs/support-window.json";

const width = 640;
const height = 250;
const margin = { top: 30, right: 0, bottom: 0, left: 0 };

const formatDate = utcFormat("%Y-%m");

const now = new Date();
const supported = Object.entries(data)
  .map(([version, value]) => {
    const releaseDate = new Date(value);
    const endDate = utcYear.offset(releaseDate, 2);
    return { version, releaseDate, endDate };
  })
  .filter((d) => d.endDate >= now);

const x = scaleTime()
  .domain([
    min(
      supported,
      (d) =>
        // Clip 1/4 of the earliest supported version. Cuts off the
        // release date (unimportant?) but gives the visual impression
        // of additional, unsupported versions?
        new Date(
          Number(d.releaseDate) +
            ((d.endDate as never) - (d.releaseDate as never)) / 4
        )
    )!,
    max(supported, (d) => d.endDate)!,
  ])
  .nice()
  .range([margin.left, width - margin.right]);
const y = scaleBand()
  .domain(supported.map((d) => d.version))
  .range([margin.top, height - margin.bottom])
  .padding(0.2);

const dom = new JSDOM();
const svg = select(dom.window.document.body)
  .append("svg")
  .attr("id", "gh-dark-mode-only")
  // @ts-expect-error
  .attr("viewBox", [0, 0, width, height])
  .attr("font-family", "sans-serif");
svg.append("style").text(`
  #gh-dark-mode-only:target {
    color: #ffffff;
  }
`);
const axes = svg
  .append("g")
  .attr("stroke-dasharray", 2)
  .attr("stroke-opacity", 0.5)
  .attr("stroke-width", 0.5);
const xAxis = axes.append("g").attr("transform", `translate(0,${margin.top})`);
axisTop(x)
  .ticks(5)
  .tickSize(margin.top - height - margin.bottom)(xAxis);
xAxis.selectAll(".domain").remove();
const yAxis = axes.append("g");
axisLeft(y).tickSize(margin.left - width - margin.right)(yAxis);
yAxis.selectAll(".domain").remove();
svg
  .append("g")
  .attr("shape-rendering", "crispEdges")
  .selectAll("rect")
  .data(supported)
  .join("rect")
  .attr("x", (d) => x(d.releaseDate))
  .attr("y", (d) => y(d.version)!)
  .attr("width", (d) => x(d.endDate) - x(d.releaseDate))
  .attr("height", y.bandwidth())
  .attr("fill", (d, i) => (i % 2 === 0 ? "#3178c6" : "#235a97"));
const texts = svg
  .append("g")
  .attr("fill", "#ffffff")
  .attr("text-anchor", "middle")
  .attr("transform", `translate(0,${y.bandwidth() / 2})`);
texts
  .append("g")
  .attr("font-weight", "bold")
  .selectAll("a")
  .data(supported)
  .join("a")
  .attr(
    "href",
    (d) =>
      `https://www.typescriptlang.org/docs/handbook/release-notes/typescript-${d.version.replace(
        /[^0-9]+/,
        "-"
      )}.html`
  )
  .attr("fill", "#ffffff")
  .append("text")
  .attr("x", (d) => x(d.releaseDate) + (x(d.endDate) - x(d.releaseDate)) / 2)
  .attr("y", (d) => y(d.version)!)
  .attr("dy", "0.35em")
  .text((d) => d.version);
texts
  .append("g")
  .attr("font-size", "0.8em")
  .selectAll("text")
  .data(supported)
  .join("text")
  .attr("x", (d) => x(d.releaseDate) + (x(d.endDate) - x(d.releaseDate)) / 4)
  .attr("y", (d) => y(d.version)!)
  .attr("dy", "0.35em")
  .text((d) => formatDate(d.releaseDate));
texts
  .append("g")
  .attr("font-size", "0.8em")
  .selectAll("text")
  .data(supported)
  .join("text")
  .attr(
    "x",
    (d) => x(d.releaseDate) + ((x(d.endDate) - x(d.releaseDate)) * 3) / 4
  )
  .attr("y", (d) => y(d.version)!)
  .attr("dy", "0.35em")
  .text((d) => formatDate(d.endDate));
process.stdout.write(serialize(svg.node()!));
