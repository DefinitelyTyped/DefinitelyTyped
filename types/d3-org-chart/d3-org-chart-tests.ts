import { OrgChart } from 'd3-org-chart';

interface Person {
    firstName: string;
    lastName: string;
}

const myData: Person[] = [{
    firstName: 'Alice',
    lastName: 'Smith'
}, {
    firstName: 'Bob',
    lastName: 'Smith'
}];

const chart = new OrgChart<Person>()
    .container('#my-container')
    .svgHeight(1000)
    .data(myData)
    .nodeHeight(d => d.data.firstName === 'Alice' ? 200 : 100)
    .nodeWidth(d => {
        // $ExpectType HierarchyNode<Person>
        d;
        // $ExpectType Person
        d.data;
        // $ExpectType string
        d.data.firstName;
        // $ExpectError
        d.data.middleName;
        // $ExpectError
        d.firstName;
        if (d.depth === 0) return 500;
        return 330;
    })
    .nodeId(d => 'firstName' in d ? d.firstName : d.data.firstName)
    .childrenMargin(d => 90)
    .compactMarginBetween(d => 65)
    .compactMarginPair(d => 100)
    .neightbourMargin((a, b) => 50)
    .siblingsMargin(d => 100)
    .buttonContent(({ node, state }) => {
        return `<div>Show ${node.children && node.children[0] ? node.children[0].data.firstName : ''}</div>`;
    })
    .nodeContent((d, i, arr, state) => {
        return `<div>#${i}: ${d.data.firstName} ${d.data.lastName}</div>`;
    })
    .nodeUpdate((d, i, arr) => {
        if (d.data.firstName === 'Bob') {
            console.log(`Updated Bob when there are ${i} nodes`);
        }

        if (i === arr.length - 1) {
            console.log(`The last node (${d.data.firstName} ${d.data.lastName}) was updated`);
        }
    })
    .linkUpdate((d, i, arr) => {
        if (d.data.firstName === 'Bob') {
            console.log(`Updated Bob when there are ${i} nodes`);
        }

        if (i === arr.length - 1) {
            console.log(`The last node (${d.data.firstName} ${d.data.lastName}) was updated`);
        }
    })
    .render();

// $ExpectType OrgChart<Person>
chart;

// $ExpectType Person[] | null
chart.data();

// $ExpectType OrgChart<Person>
chart.nodeHeight((node) => node.data.firstName.length);

// $ExpectType string
chart.backgroundColor();

chart
    .backgroundColor()
    // $ExpectError
    .render();

// $ExpectType OrgChart<Person>
chart
    .backgroundColor('#eee')
    .render();

// $ExpectType OrgChart<Person>
chart.addNode({ firstName: 'Charlie', lastName: 'Brown' });
