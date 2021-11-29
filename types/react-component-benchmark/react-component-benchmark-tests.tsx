/*
 * This test code is simplified from https://github.com/paularmstrong/react-component-benchmark-example
 */

import * as React from 'react';
import Benchmark, { BenchmarkRef, BenchmarkType, BenchResultsType } from 'react-component-benchmark';

// https://github.com/paularmstrong/react-component-benchmark-example/blob/main/src/Result.js

interface ResultInfo {
    component: string;
    result: BenchResultsType;
    type: typeof BenchmarkType[keyof typeof BenchmarkType];
}

function Result({ component, index, result, type }: ResultInfo & { index: number }) {
    return (
        <tbody>
            <tr>
                <th colSpan={3}>
                    Run {index}: {type} - {component}
                </th>
                <th colSpan={1}>{result.sampleCount} samples</th>
            </tr>
            <tr>
                <td>{result.startTime}</td>
                <td>{result.endTime}</td>
                <td>{result.runTime}</td>
                <td>
                    {result.mean.toFixed(3)}ms (±{result.stdDev.toFixed(3)}ms)
                </td>
                <td>{result.layout!.mean.toFixed(3)}ms</td>
                <td>{result.p95.toFixed(3)}ms</td>
                <td>{result.p99.toFixed(3)}ms</td>
            </tr>
        </tbody>
    );
}

interface ResultsProps {
    results: ResultInfo[];
}

function Results({ results }: ResultsProps) {
    return (
        <table>
            <thead>
                <tr>
                    <th>start time</th>
                    <th>end time</th>
                    <th>run time</th>
                    <th>mean</th>
                    <th>layout</th>
                    <th>p95</th>
                    <th>p99</th>
                </tr>
            </thead>
            {[...results].reverse().map((result, i) => (
                <Result key={i} index={results.length - i} {...result} />
            ))}
        </table>
    );
}

// https://github.com/paularmstrong/react-component-benchmark-example/blob/main/src/TestCases.js

export function Tree({ breadth = 2, depth = 7 }) {
    return breadth > 0 && depth > 0 ? (
        <div>
            {Array.from({ length: breadth }).map((_, index) => (
                <Tree key={`${breadth}-${depth}-${index}`} breadth={breadth} depth={depth - 1} />
            ))}
        </div>
    ) : null;
}

// https://github.com/paularmstrong/react-component-benchmark-example/blob/main/src/App.js

function resultsReducer(state: ResultInfo[] = [], results: ResultInfo | 'CLEAR') {
    if (results === 'CLEAR') {
        return [];
    }
    state.push(results);
    return state;
}

function App() {
    const benchmarkRef = React.useRef<BenchmarkRef>(null);
    const [results, dispatch] = React.useReducer(resultsReducer, []);

    const type = BenchmarkType.MOUNT;

    const handleComplete = (result: BenchResultsType) => dispatch({ result, type, component: Tree.name });
    const handleStart = () => benchmarkRef.current!.start();

    return (
        <div>
            <button onClick={handleStart}>Start</button>

            <Results results={results} />

            <Benchmark
                component={Tree}
                componentProps={{}}
                includeLayout
                onComplete={handleComplete}
                ref={benchmarkRef}
                samples={50}
                timeout={10000}
                type={type}
            />
        </div>
    );
}
