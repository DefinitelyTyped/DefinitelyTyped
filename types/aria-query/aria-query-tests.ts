import { elementRoles, roleElements, roles, ARIARoleDefintionKey } from 'aria-query';

function prettRole(roleName: ARIARoleDefintionKey) {
    let role = roles.get(roleName)!;
    console.log(`required props: ${role.requiredProps.join(', ')}`);
    console.log(`props: ${role.props.join(', ')}`);
    console.log(`Is ${role.abstract === false ? 'not abstract' : 'abstract'}`);
    console.log(`Is ${role.interactive === false ? 'not interactive' : 'interactive'}`);
    console.log(
        `${
            role.childrenPresentational === true
                ? 'Has Child Presentational characteristics'
                : 'No special cahracteristics'
        }`,
    );
    console.log('baseConcepts:');
    console.log(role.baseConcepts.forEach(prettyRoleRelation));
    console.log('relatedConcepts:');
    console.log(role.relatedConcepts.forEach(prettyRoleRelation));
}

function prettyRoleRelation(relation: ARIARoleRelation) {
    console.log(`module: ${relation.module}`);
    console.log(`concept: ${relation.concept.name}`);
    console.log(`attributes: ${relation.concept.attributes.map(({ name, value }) => `name=${value}`).join(', ')}`);
}
