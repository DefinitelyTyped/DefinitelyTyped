import { elementRoles, roleElements, roles, ARIARoleDefintionKey, ARIARoleRelation } from 'aria-query';

function prettRole(roleName: ARIARoleDefintionKey) {
    const role = roles.get(roleName)!;
    console.log(`required props: ${Object.keys(role.requiredProps).join(', ')}`);
    console.log(`props: ${Object.keys(role.props).join(', ')}`);
    console.log(`Is ${role.abstract === false ? 'not abstract' : 'abstract'}`);
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
    console.log(`concept: ${relation.concept !== undefined ? relation.concept.name : 'none'}`);
    if (relation.concept !== undefined) {
        console.log(
            `attributes: ${(relation.concept.attributes || []).map(({ name, value }) => `name=${value}`).join(', ')}`,
        );
    }
}

const [selectElement] = Array.from(roleElements.get('combobox')!);
const selectRoles: string[] = Array.from(elementRoles.get(selectElement)!);
