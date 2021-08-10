import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (group) => group.query
);
export const groupMappedData = createSelector(
  [groupStateSelector],
  (group) => group.mappedData
);
export const groupIdSelector = createSelector(
  [groupStateSelector],
  (group) => group.byId
);

export const groupLoadingStatusSelector = createSelector(
  [groupStateSelector],
  (group) => group.loadingQuery
);

/* const groupMappedData = (state: AppState) => {
  const groupState = groupSelector(state);
  return groupState.mappedData;
};

const groupIdSelector = (state: AppState) => {
  const groupState = groupSelector(state);
  return groupState.byId;
};

export const groupDataSelector = (state:AppState) => {
    const groupById = groupIdSelector(state);
    const groupsIds = groupById[groupQuerySelector(state)];
    const groupMappedKeys = groupMappedData(state);
    const groups = groupsIds.map((ids => groupMappedKeys[ids]));
    return groups;
} */

export const groupDataSelector = createSelector(
  [groupQuerySelector, groupIdSelector, groupMappedData],
  (query, groupMapped, ids) => {
    const groupIds = ids[query] || [];
    const mappedData = groupIds.map((id) => groupMapped[id]);
    return mappedData;
  }
);

// 10: {id:, }

export const groupSelectedIdSelector = createSelector(
  [groupStateSelector],
  (groups) => {
    return groups.selectedId;
  }
);

export const groupSelectedSelector = createSelector(
  [groupSelectedIdSelector, groupIdSelector],
  (selectedId, idMappedGroups) => {
    const groupSelected = idMappedGroups[selectedId] || [];
    return groupSelected;
  }
);
