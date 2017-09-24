import * as React from "react";
import {
    VictoryAnimation,
    VictoryLabel,
    AnimationStyle,
    VictoryArea,
    VictoryAxis,
    VictoryStack,
    VictoryBar,
    VictoryLine,
    VictoryChart,
    VictoryScatter,
    VictoryPie,
    VictoryTheme,
    VictoryLegend
} from "victory";

// VictoryAnimation test
let test = <VictoryAnimation
    data={[
      { color: "red" },
      { color: "green" },
      { color: "blue" },
      { color: "yellow" },
      { color: "purple" }
    ]}
    delay={3000}
    easing="back"
    duration={500}
    onEnd={() => {}}
>
    {(style: AnimationStyle) =>
        <span style={{color: style["color"]}}>Hello!</span>
    }
</VictoryAnimation>

// VictoryLabel test
test = <VictoryLabel x={50} y={10}
                     angle={90}
                     capHeight={() => 50}
                     textAnchor="middle"
                     verticalAnchor="start"
                     events={{
                         onClick: () => {}
                     }}
                     text="test"
                     transform="scale(1.2)"
                     dx={10}
                     dy={10}
                     lineHeight={1.5}>
    {"data viz \n is \n fun!"}
</VictoryLabel>

// VictoryArea test
test = (
    <VictoryArea
        data={[
            {amount: 1, yield: 1, error: 0.5},
            {amount: 2, yield: 2, error: 1.1},
            {amount: 3, yield: 3, error: 0},
            {amount: 4, yield: 2, error: 0.1},
            {amount: 5, yield: 1, error: 1.5}
        ]}
        x={"amount"}
        y={(data) => (data.yield + data.error)}
    />
);

test = (
    <VictoryArea
        height={400}
        style={{
            data: {fill: "gold"}
        }}
        data={[
            {x: 1, y: 1},
            {x: 2, y: 2},
            {x: 3, y: 1},
            {x: 4, y: 3},
            {x: 5, y: 2},
            {x: 6, y: 5}
        ]}
        scale="sqrt"
        events={[
            {
                target: "data",
                eventKey: "all",
                eventHandlers: {
                    onClick: () => {
                        return {
                            mutation: (props) => {
                                return { style: { fill: "orange" } }
                            }
                        }
                    },
                    onMouseEnter: () => {
                        return [
                            {
                                target: "labels",
                                mutation: (props) => {
                                    return { text: "hey" }
                                }
                            }
                        ]
                    }
                }
            }
        ]}
    />
);

test = (
    <VictoryStack
        height={800}
        style={{ data: {
            strokeDasharray: "5,5",
            strokeWidth: 2,
            fillOpacity: 0.4
        }}}
    >
        <VictoryArea
            style={{ data: {
              fill: "tomato", stroke: "tomato"
            }}}
            data={[
              {x: 1, y: 1},
              {x: 2, y: 2},
              {x: 3, y: 3}
            ]}
        />
        <VictoryArea
            style={{ data: {
              fill: "orange", stroke: "orange"
            }}}
            data={[
              {x: 1, y: 2},
              {x: 2, y: 1},
              {x: 3, y: 1}
            ]}
        />
        <VictoryArea
            style={{ data: {
              fill: "gold", stroke: "gold"
            }}}
            data={[
              {x: 1, y: 3},
              {x: 2, y: 4},
              {x: 3, y: 2}
            ]}
        />
    </VictoryStack>
);

test = (
    <VictoryAxis
        style={{
          axis: {stroke: "black"},
          grid: {strokeWidth: 2},
          ticks: {stroke: "red"},
          tickLabels: {fontSize: 12},
          axisLabel: {fontsize: 16}
        }}
        label="Planets"
        tickValues={[
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Jupiter"
        ]}/>
);

test = (
    <VictoryAxis
        scale="time"
        tickValues={[
            new Date(1980, 1, 1),
            new Date(1990, 1, 1),
            new Date(2000, 1, 1),
            new Date(2010, 1, 1),
            new Date(2020, 1, 1)]}
        tickFormat={(x) => x.getFullYear()}/>
);

test = (
    <VictoryAxis
        dependentAxis
        padding={{left: 50, top: 20, bottom: 20}}
        scale="log"
        domain={{ x: [new Date(Date.UTC(2016, 0, 1)), new Date()], y: [1,5] }}
    />
);

// VictoryBar test
test = (
    <VictoryBar
        data={[
            {x: 1, y: 1},
            {x: 2, y: 2},
            {x: 3, y: 3},
            {x: 4, y: 2},
            {x: 5, y: 1}
        ]}
    />
);

test = (
    <VictoryBar
        data={[
            {amount: 1, yield: 1, error: 0.5},
            {amount: 2, yield: 2, error: 1.1},
            {amount: 3, yield: 3, error: 0},
            {amount: 4, yield: 2, error: 0.1},
            {amount: 5, yield: 1, error: 1.5}
        ]}
        x={"amount"}
        y={(data) => (data.yield + data.error)}
    />
);

test = (
    <VictoryBar
        height={500}
        padding={75}
        style={{
            labels: {fontSize: 20}
        }}
        data={[
            {x: 1, y: 1, fill: "gold", label: "SO"},
            {x: 2, y: 3, fill: "orange"},
            {x: 3, y: 2, fill: "tomato", label: "WOW"},
            {x: 4, y: 4, fill: "pink"},
            {x: 5, y: 3, fill: "magenta", label: "SUCH"},
            {x: 6, y: 5, fill: "purple"},
            {x: 7, y: 6, fill: "blue", label: "LABEL"}
        ]}
    />
);

test = (
    <VictoryBar
        height={500}
        padding={75}
        style={{
            data: {
              fill: (data: any) => data.y > 2 ?
                "red" : "blue"
            }
        }}
        data={[
            {x: 1, y: 1},
            {x: 2, y: 2},
            {x: 3, y: 3},
            {x: 4, y: 2},
            {x: 5, y: 1}
        ]}
    />
);

test = (
    <VictoryBar
        height={500}
        style={{
            data: {fill: "blue", width: 20},
            labels: {fontSize: 20}
        }}
        labels={[
            "a", "b", "c", "d", "e"
        ]}
        data={[
            {x: 1, y: 1},
            {x: 2, y: 2},
            {x: 3, y: 3, label: "click me"},
            {x: 4, y: 2},
            {x: 5, y: 1}
        ]}
        events={[
            {
              target: "data",
              eventKey: 2,
              eventHandlers: {
                onClick: (evt) => {
                  evt.stopPropagation();
                  return [
                    {
                      mutation: () => {
                        return {style: {fill: "orange", width: 20}};
                      }
                    },
                    {
                      target: "labels",
                      eventKey: 3,
                      mutation: () => {
                        return {text: "now click me"};
                      }
                    }
                  ];
                }
              }
            }, {
              target: "parent",
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => {
                        return {style: {fill: "tomato", width: 10}};
                      }
                    }
                  ];
                }
              }
            }
        ]}
    />
);


// VictoryChart test
test = (
    <VictoryChart>
        <VictoryLine
            y={(data) => 0.5 * data.x * data.x}/>
    </VictoryChart>
);

test = (
    <VictoryChart>
        <VictoryLine
            style={{data:
              {stroke: "red", strokeWidth: 4}
            }}
            y={(data) =>
              Math.sin(2 * Math.PI * data.x)
            }
        />
        <VictoryLine
            style={{data:
              {stroke: "blue", strokeWidth: 4}
            }}
            y={(data) =>
              Math.cos(2 * Math.PI * data.x)
            }
        />
    </VictoryChart>
);

test = (
    <VictoryChart
        height={500}
        padding={{
            top: 75,
            bottom: 40,
            left: 40,
            right: 40
        }}
        domainPadding={{x: 20}}
    >
        <VictoryAxis
            label="X AXIS"
            orientation="top"/>
        <VictoryAxis dependentAxis
                     tickValues={[0, 1.5, 3, 4.5]}
                     style={{
                          grid: {
                            stroke: "grey",
                            strokeWidth: 1
                          },
                          axis: {stroke: "transparent"},
                          ticks: {stroke: "transparent"}
                     }}/>
        <VictoryBar
            style={{
              data: {
                width: 15,
                fill: (data: any) => data.y > 3 ?
                  "gold" : "orange"
              }
            }}
            data={[
              {x: 1, y: 1},
              {x: 2, y: 2.5},
              {x: 3, y: 4},
              {x: 4, y: 2.5},
              {x: 5, y: 1},
            ]}/>
    </VictoryChart>
);

test = (
    <VictoryChart
        height={450}
        scale={{
            x: "time"
        }}
    >
        <VictoryAxis
            label="Decades"
            tickValues={[
              new Date(1980, 1, 1),
              new Date(2000, 1, 1),
              new Date(2020, 1, 1),
            ]}
            tickFormat={(x) => x.getFullYear()}/>
        <VictoryLine
            data={[
              {x: new Date(1982, 1, 1), y: 125},
              {x: new Date(1987, 1, 1), y: 257},
              {x: new Date(1993, 1, 1), y: 345},
              {x: new Date(1997, 1, 1), y: 515},
              {x: new Date(2001, 1, 1), y: 132},
              {x: new Date(2005, 1, 1), y: 305},
              {x: new Date(2011, 1, 1), y: 270},
              {x: new Date(2015, 1, 1), y: 470}
            ]}/>
    </VictoryChart>
);

// VictoryLine test
test = (
    <VictoryLine
        data={[
          {x: 0, y: 1},
          {x: 1, y: 3},
          {x: 2, y: 2},
          {x: 3, y: 4},
          {x: 4, y: 3},
          {x: 5, y: 5}
        ]}
    />
);

test = (
    <VictoryLine
        data={[
            {amount: 1, yield: 1, error: 0.5},
            {amount: 2, yield: 2, error: 1.1},
            {amount: 3, yield: 3, error: 0},
            {amount: 4, yield: 2, error: 0.1},
            {amount: 5, yield: 1, error: 1.5}
        ]}
        x={"amount"}
        y={(data) => (data.yield + data.error)}
    />
);

test = (
    <VictoryLine
        domain={[0, 5]}
        padding={75}
        height={500}
        data={[
          {x: 0, y: 1},
          {x: 1, y: 3},
          {x: 2, y: 2},
          {x: 3, y: 4},
          {x: 4, y: 3},
          {x: 5, y: 5}
        ]}
        interpolation="cardinal"
        label="LINE"
        style={{
          data: {
            stroke: "#822722",
            strokeWidth: 3
          },
          labels: {fontSize: 18}
        }}
    />
);

// VictoryScatter test
test = (
    <VictoryScatter
        data={[
            {amount: 1, yield: 1, error: 0.5},
            {amount: 2, yield: 2, error: 1.1},
            {amount: 3, yield: 3, error: 0},
            {amount: 4, yield: 2, error: 0.1},
            {amount: 5, yield: 1, error: 1.5}
        ]}
        x={"amount"}
        y={(data) => (data.yield + data.error)}
    />
);

test = (
    <VictoryScatter
        data={[
          {x: 1, y: 3},
          {x: 2, y: 5},
          {x: 3, y: 4},
          {x: 4, y: 2},
          {x: 5, y: 5}
        ]}
        size={8}
        symbol="star"
        style={{
            data: {
                fill: "gold",
                stroke: "orange",
                strokeWidth: 3
            }
        }}
    />
);

// VictoryPie test
test = (
    <VictoryPie
        data={[
            {animal: "Cat", pet: 45, wild: 17},
            {animal: "Dog", pet: 85, wild: 6},
            {animal: "Fish", pet: 55, wild: 0},
            {animal: "Bird", pet: 15, wild: 40},
        ]}
        x={"animal"}
        y={(data) => data.pet + data.wild}
    />
);

test = (
    <VictoryPie
        style={{
            labels: {
              fill: "white",
              fontSize: 12,
              fontWeight: "bold"
            }
        }}
        data={[
            {x: "<5", y: 6279},
            {x: "5-13", y: 9182},
            {x: "14-17", y: 5511},
            {x: "18-24", y: 7164},
            {x: "25-44", y: 6716},
            {x: "45-64", y: 4263},
            {x: "≥65", y: 7502}
        ]}
        innerRadius={110}
        colorScale={[
            "#D85F49",
            "#F66D3B",
            "#D92E1D",
            "#D73C4C",
            "#FFAF59",
            "#E28300",
            "#F6A57F"
        ]}
    />
);

test = (
    <VictoryPie
        data={[
          {x: "Cat", y: 62},
          {x: "Dog", y: 91},
          {x: "Fish", y: 55},
          {x: "Bird", y: 55},
        ]}
        events={[{
          target: "data",
          eventHandlers: {
            onClick: () => {
              return [
                {
                  mutation: (props) => {
                    return {
                      style: {fill: "orange"}
                    };
                  }
                }, {
                  target: "labels",
                  eventKey: [1, 2, 3],
                  mutation: () => {
                    return {text: "KITTEN"};
                  }
                }
              ];
            }
          }
        }]}
    />
);

test = (
    <VictoryPie
        data={[
          {x: "Cat", y: 62},
          {x: "Dog", y: 91},
          {x: "Fish", y: 55},
          {x: "Bird", y: 55},
        ]}
        animate={{
          duration: 1000,
          onEnter: {
            duration: 500,
            before: () =>
              ({y: 0, label: " "}),
            after: (datum) =>
              ({y: datum.y, label: "NEW"})
           }
        }}
        labelRadius={20}
    />
);

test = (
    <VictoryChart animate={{ duration: 2000, easing: 'bounce' }} />
);

// VictoryLegend test

test = (
    <VictoryLegend
        data={[
            {name: "A", symbol: { type: "circle"}},
            {name: "B", symbol: { type: "square"}},
            {name: "C", symbol: { type: "star"}}
        ]}
        gutter={10}
        orientation="horizontal"
        symbolSpacer={8}
        width={100}
        height={50}
        x={5}
        y={5}
        theme={VictoryTheme.material}
        style={{
            data: { fill: "tomato", opacity: 0.7 },
            labels: { fontSize: 12 },
            parent: { border: "1px solid #ccc" }
        }}
        standalone
        padding={{ top: 20, right: 40, bottom: 60, left: 20 }}
        colorScale="heatmap"
    />
);
