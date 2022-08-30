import {
    elementRoles,
    roleElements,
    roles,
    ARIARoleDefinition,
    ARIARoleDefintionKey,
    ARIARoleRelation,
} from 'aria-query';

function prettyRole(roleName: ARIARoleDefintionKey) {
    const role = roles.get(roleName)!;
    console.log(`prohibited props: ${Object.keys(role.prohibitedProps).join(', ')}`);
    console.log(`required props: ${Object.keys(role.requiredProps).join(', ')}`);
    console.log(`props: ${Object.keys(role.props).join(', ')}`);
    console.log(`Is ${!role.abstract ? 'not abstract' : 'abstract'}`);
    console.log(
        `${role.childrenPresentational ? 'Has Child Presentational characteristics' : 'No special characteristics'}`,
    );
    console.log('baseConcepts:');
    role.baseConcepts.forEach(prettyRoleRelation);
    console.log('relatedConcepts:');
    role.relatedConcepts.forEach(prettyRoleRelation);
}

function prettyRoleRelation(relation: ARIARoleRelation): void {
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

const roleNames: string[] = roles.keys();
const roleDefinitions: ARIARoleDefinition[] = roles.values();
