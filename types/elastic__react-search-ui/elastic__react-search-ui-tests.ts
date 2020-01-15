import {
  Filter,
  FilterValueRange,
  FilterValueValue,
  Context,
  SortDirection
} from "@elastic/react-search-ui";

function buildFrom(current?: number, resultsPerPage?: number) {
  return !current || !resultsPerPage
    ? undefined
    : (current - 1) * resultsPerPage;
}

function buildSort(sortDirection?: SortDirection, sortField?: string) {
  return !sortDirection || !sortField
    ? undefined
    : [{ [sortField]: sortDirection }];
}

function buildMatch(searchTerm?: string) {
  return searchTerm
    ? {
        multi_match: {
          query: searchTerm,
          fields: ['test']
        }
      }
    : { match_all: {} };
}

function getTermFilterValue(field: string, fieldValue: FilterValueValue) {
  // SearchUI stores the string representation
  // of the boolean value, so we need to convert it to a boolean.
  if (fieldValue === "false" || fieldValue === "true") {
    return { [field]: fieldValue === "true" };
  }

  return { [field]: fieldValue };
}

function getTermFilter(filter: Filter) {
  const filterValues = filter.values as FilterValueValue[];
  if (filter.type === "any") {
    return {
      bool: {
        should: filterValues.map(filterValue => ({
          term: getTermFilterValue(filter.field, filterValue)
        })),
        minimum_should_match: 1
      }
    };
  } else if (filter.type === "all") {
    return {
      bool: {
        filter: filterValues.map(filterValue => ({
          term: getTermFilterValue(filter.field, filterValue)
        }))
      }
    };
  } else {
    return undefined;
  }
}

function getRangeFilter(filter: Filter) {
  const filterValues = filter.values as FilterValueRange[];
  if (filter.type === "any") {
    return {
      bool: {
        should: filterValues.map(filterValue => ({
          range: {
            [filter.field]: {
              ...(filterValue.to && { lt: filterValue.to }),
              ...(filterValue.to && { gt: filterValue.from })
            }
          }
        })),
        minimum_should_match: 1
      }
    };
  } else if (filter.type === "all") {
    return {
      bool: {
        filter: filterValues.map(filterValue => ({
          range: {
            [filter.field]: {
              ...(filterValue.to && { lt: filterValue.to }),
              ...(filterValue.to && { gt: filterValue.from })
            }
          }
        }))
      }
    };
  } else {
    return undefined;
  }
}

export const buildRequestFilter = (filters?: Filter[]) => {
  if (!filters) {
    return undefined;
  }

  const builtFilters = filters.reduce((acc: any[], filter: Filter) => {
    if (['test'].indexOf(filter.field) !== -1) {
      return [...acc, getRangeFilter(filter)];
    }
    if (['test2'].indexOf(filter.field) !== -1) {
      return [...acc, getTermFilter(filter)];
    }
    return acc;
  }, []);

  return builtFilters.length < 1
    ? undefined
    : builtFilters;
};

interface ExpectedShape {
  query: {
    bool: {
      must: Array<{ multi_match: object} | { match_all: object }>,
      filter?: Array<{
        bool: {
          filter: Array<{ term: {[key: string]: string} }>
        }
      }>
    }
  };
  sort?: Array<{ [sortField: string]: "asc" | "desc" }>;
  size?: number;
  from?: number;
}

export function buildRequest(state: Partial<Context>, fields: string[] = []): ExpectedShape {
  const {
    current,
    filters,
    resultsPerPage,
    searchTerm,
    sortDirection,
    sortField
  } = state;

  const sort = buildSort(sortDirection, sortField);
  const match = buildMatch(searchTerm);
  const size = resultsPerPage;
  const from = buildFrom(current, resultsPerPage);
  const filter = buildRequestFilter(filters);

  return {
    query: {
      bool: {
        must: [match],
        ...(filter && { filter })
      }
    },
    // https://www.elastic.co/guide/en/elasticsearch/reference/7.x/search-request-sort.html
    ...(sort && { sort }),
    // https://www.elastic.co/guide/en/elasticsearch/reference/7.x/search-request-from-size.html
    ...(size && { size }),
    ...(from && { from }),
  };
}
